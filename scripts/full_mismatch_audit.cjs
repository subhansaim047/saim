const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');
const AUDIT_DIR = path.join(__dirname, '../audit');

function slugToWords(slug) {
  return slug.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean);
}

function checkDirectoryContentIntegrity(dirName) {
  const fullDir = path.join(BASE_DIR, dirName);
  if (!fs.existsSync(fullDir)) return { total: 0, issues: [] };
  const entries = fs.readdirSync(fullDir, { withFileTypes: true }).filter(d => d.isDirectory());
  const issues = [];
  const titleCounts = {};

  for (const entry of entries) {
    const slug = entry.name;
    const htmlPath = path.join(fullDir, slug, 'index.html');
    if (!fs.existsSync(htmlPath)) {
      issues.push({ slug, issue: 'MISSING_INDEX_HTML' });
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
    const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';

    const cleanTitle = title.split('|')[0].split('–')[0].split('- HQ')[0].trim();
    const key = `${cleanTitle} || ${h1}`;
    titleCounts[key] = (titleCounts[key] || []);
    titleCounts[key].push(slug);

    // Check if ionic-black-leather-jacket is inside a non-ionic page as the main product
    if (slug !== 'ionic-black-leather-jacket' && (h1.toLowerCase().includes('ionic black leather jacket') || cleanTitle.toLowerCase().includes('ionic black leather jacket'))) {
      issues.push({ slug, issue: 'FALLBACK_TO_IONIC_BLACK', title: cleanTitle, h1 });
    }
  }

  // Find duplicate titles/H1s across different slugs
  const duplicates = [];
  for (const [key, slugs] of Object.entries(titleCounts)) {
    if (slugs.length > 1) {
      duplicates.push({ key, count: slugs.length, slugs: slugs.slice(0, 15) });
    }
  }

  return { total: entries.length, issues, duplicates };
}

console.log('=== 1. CHECKING PAGE CONTENT INTEGRITY ===');
for (const dir of ['collections', 'pages', 'policies', 'products']) {
  const res = checkDirectoryContentIntegrity(dir);
  console.log(`\n[${dir.toUpperCase()}] Total folders: ${res.total}`);
  console.log(`  Direct Issues: ${res.issues.length}`);
  if (res.issues.length > 0) {
    console.log('  Sample issues:', JSON.stringify(res.issues.slice(0, 10), null, 2));
  }
  console.log(`  Duplicate Title/H1 groups: ${res.duplicates.length}`);
  if (res.duplicates.length > 0) {
    console.log('  Duplicate groups:', JSON.stringify(res.duplicates.slice(0, 15), null, 2));
  }
}

console.log('\n=== 2. CHECKING LINKS TO IONIC-BLACK-LEATHER-JACKET OR FALLBACKS ===');
function scanLinksInFile(filePath, relLabel) {
  const html = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(html);
  const suspicious = [];

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href') || '';
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    const titleAttr = $(el).attr('title') || '';
    const imgAlt = $(el).find('img').attr('alt') || '';
    const cardTitle = $(el).closest('.product-card, .collection-item, .grid__item, .custom-card, li, .slick-slide').find('h2, h3, h4, .product-card__title, .title, p').first().text().replace(/\s+/g, ' ').trim();
    const label = text || titleAttr || imgAlt || cardTitle;

    if (href.includes('ionic-black-leather-jacket')) {
      const combined = `${text} ${titleAttr} ${imgAlt} ${cardTitle}`.toLowerCase();
      if (!combined.includes('ionic')) {
        suspicious.push({ relLabel, href, label: label.slice(0, 80) });
      }
    }
  });
  return suspicious;
}

const allSuspiciousIonic = [];
allSuspiciousIonic.push(...scanLinksInFile(path.join(BASE_DIR, 'index.html'), 'index.html'));

for (const dir of ['collections', 'pages', 'policies']) {
  const fullDir = path.join(BASE_DIR, dir);
  if (!fs.existsSync(fullDir)) continue;
  for (const d of fs.readdirSync(fullDir, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const fp = path.join(fullDir, d.name, 'index.html');
    if (fs.existsSync(fp)) {
      allSuspiciousIonic.push(...scanLinksInFile(fp, `${dir}/${d.name}`));
    }
  }
}

console.log(`Suspicious links to ionic-black-leather-jacket across index/collections/pages/policies: ${allSuspiciousIonic.length}`);
if (allSuspiciousIonic.length > 0) {
  console.log(JSON.stringify(allSuspiciousIonic.slice(0, 30), null, 2));
}

// Also check sample of products or all products for suspicious ionic links
let prodSuspiciousCount = 0;
const prodSamples = [];
const prodDir = path.join(BASE_DIR, 'products');
if (fs.existsSync(prodDir)) {
  const prodSlugs = fs.readdirSync(prodDir);
  for (const slug of prodSlugs) {
    const fp = path.join(prodDir, slug, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const html = fs.readFileSync(fp, 'utf8');
    // Fast check if ionic-black-leather-jacket appears in non-ionic product
    if (slug !== 'ionic-black-leather-jacket' && html.includes('ionic-black-leather-jacket')) {
      prodSuspiciousCount++;
      if (prodSamples.length < 15) {
        prodSamples.push(slug);
      }
    }
  }
}
console.log(`Products (other than ionic) mentioning 'ionic-black-leather-jacket': ${prodSuspiciousCount}`, prodSamples);
