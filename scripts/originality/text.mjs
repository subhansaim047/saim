import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const APP_DIR = path.join(process.cwd(), '.next', 'server', 'app');
const REVIEW_DIR = path.join(process.cwd(), 'review');

if (!fs.existsSync(REVIEW_DIR)) {
  fs.mkdirSync(REVIEW_DIR, { recursive: true });
}

function getAllHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (item.endsWith('.html') && !item.startsWith('_') && item !== '404.html' && item !== '500.html') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

function fileToRoute(filePath) {
  let relative = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) {
    return '/' + relative.slice(0, -'/index.html'.length);
  }
  if (relative.endsWith('.html')) {
    return '/' + relative.slice(0, -'.html'.length);
  }
  return '/' + relative;
}

function extractTextAndSentences(html) {
  const $ = cheerio.load(html);
  
  // Strip out boilerplate and non-content elements
  $('script, style, svg, noscript, nav, header, footer').remove();
  
  // Prefer <main> if present
  let mainText = $('main').length > 0 ? $('main').text() : $('body').text();
  
  // Clean whitespace
  mainText = mainText.replace(/[\t\r\n]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
  
  // Split into sentences using punctuation boundaries
  const rawSentences = mainText.split(/(?<=[.!?])\s+/);
  
  const sentences = [];
  const longSentences = []; // >= 14 words
  
  for (const s of rawSentences) {
    const trimmed = s.trim();
    if (!trimmed) continue;
    const words = trimmed.split(/\s+/).filter(w => w.length > 0);
    sentences.push(trimmed);
    if (words.length >= 14) {
      longSentences.push(trimmed);
    }
  }
  
  // Generate 3-shingles
  const cleanWords = mainText
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);
    
  const shingles = new Set();
  for (let i = 0; i <= cleanWords.length - 3; i++) {
    shingles.add(`${cleanWords[i]} ${cleanWords[i + 1]} ${cleanWords[i + 2]}`);
  }
  
  return {
    sentenceCount: sentences.length,
    longSentences,
    shingles
  };
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function escapeCsv(str) {
  if (!str) return '""';
  return `"${str.replace(/"/g, '""')}"`;
}

console.log('Analyzing routes for text originality...');

const htmlFiles = getAllHtmlFiles(APP_DIR);
console.log(`Found ${htmlFiles.length} rendered HTML pages in ${APP_DIR}`);

const pages = [];

for (const file of htmlFiles) {
  const route = fileToRoute(file);
  const html = fs.readFileSync(file, 'utf8');
  const analysis = extractTextAndSentences(html);
  pages.push({
    route,
    ...analysis
  });
}

// Compute cross-page similarity
const nearDuplicates = [];

for (let i = 0; i < pages.length; i++) {
  let maxSim = 0;
  let mostSimilarRoute = '';
  
  for (let j = 0; j < pages.length; j++) {
    if (i === j) continue;
    const sim = jaccardSimilarity(pages[i].shingles, pages[j].shingles);
    if (sim > maxSim) {
      maxSim = sim;
      mostSimilarRoute = pages[j].route;
    }
    
    // Save to nearDuplicates once per unordered pair
    if (i < j && sim > 0.70) {
      let sharedCount = 0;
      for (const sh of pages[i].shingles) {
        if (pages[j].shingles.has(sh)) sharedCount++;
      }
      nearDuplicates.push({
        routeA: pages[i].route,
        routeB: pages[j].route,
        similarity: sim,
        sharedShingles: sharedCount
      });
    }
  }
  
  pages[i].maxSimilarity = maxSim;
  pages[i].mostSimilarRoute = mostSimilarRoute;
}

// Write originality-text.csv
const textCsvHeader = 'route,sentence_count,sample_sentence_1,sample_sentence_2,sample_sentence_3,max_cross_page_similarity,most_similar_route\n';
const textCsvRows = pages.map(p => {
  const s1 = p.longSentences[0] || '';
  const s2 = p.longSentences[1] || '';
  const s3 = p.longSentences[2] || '';
  return `${escapeCsv(p.route)},${p.sentenceCount},${escapeCsv(s1)},${escapeCsv(s2)},${escapeCsv(s3)},${p.maxSimilarity.toFixed(4)},${escapeCsv(p.mostSimilarRoute)}`;
}).join('\n');

const textCsvPath = path.join(REVIEW_DIR, 'originality-text.csv');
fs.writeFileSync(textCsvPath, textCsvHeader + textCsvRows + '\n', 'utf8');
console.log(`Wrote text originality report to ${textCsvPath}`);

// Write near-duplicates.csv
nearDuplicates.sort((a, b) => b.similarity - a.similarity);
const dupCsvHeader = 'route_a,route_b,similarity,shared_3_shingle_count\n';
const dupCsvRows = nearDuplicates.map(d => {
  return `${escapeCsv(d.routeA)},${escapeCsv(d.routeB)},${d.similarity.toFixed(4)},${d.sharedShingles}`;
}).join('\n');

const dupCsvPath = path.join(REVIEW_DIR, 'near-duplicates.csv');
fs.writeFileSync(dupCsvPath, dupCsvHeader + dupCsvRows + '\n', 'utf8');
console.log(`Wrote ${nearDuplicates.length} near-duplicate pairs (>0.70) to ${dupCsvPath}`);
