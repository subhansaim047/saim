const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

// 1. Check all collections: how many product cards does each collection have, what are the first 3 product links/titles in each collection, and do any collections share identical product lists?
const colDir = path.join(BASE_DIR, 'collections');
const colEntries = fs.readdirSync(colDir, { withFileTypes: true }).filter(d => d.isDirectory());

const colSignatures = {};
const colDetails = [];

for (const entry of colEntries) {
  const slug = entry.name;
  const fp = path.join(colDir, slug, 'index.html');
  if (!fs.existsSync(fp)) continue;
  const html = fs.readFileSync(fp, 'utf8');
  const $ = cheerio.load(html);

  const h1 = $('h1').first().text().replace(/\s+/g, ' ').trim();
  const productLinks = [];
  $('a[href*="/products/"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href && !productLinks.includes(href)) {
      productLinks.push(href);
    }
  });

  const sig = productLinks.slice(0, 10).join('|');
  if (!colSignatures[sig]) colSignatures[sig] = [];
  colSignatures[sig].push({ slug, h1, count: productLinks.length, sample: productLinks.slice(0, 3) });
  colDetails.push({ slug, h1, count: productLinks.length, sample: productLinks.slice(0, 3) });
}

console.log('=== COLLECTION PRODUCT GRID AUDIT ===');
console.log(`Total collections: ${colDetails.length}`);
const zeroProductCols = colDetails.filter(c => c.count === 0);
console.log(`Collections with 0 product links: ${zeroProductCols.length}`, zeroProductCols.map(c => c.slug));

console.log('\nCollections sharing identical top-10 product grids:');
for (const [sig, list] of Object.entries(colSignatures)) {
  if (list.length > 1 && sig !== '') {
    console.log(`  Shared by ${list.length} collections (${list.map(x => x.slug).join(', ')}):`);
    console.log(`    Sample products: ${list[0].sample.join(', ')}`);
  }
}

// 2. Check all pages in pages/: what is the main content structure, size, headings, and are any pages stub/template clones?
const pagesDir = path.join(BASE_DIR, 'pages');
const pageEntries = fs.readdirSync(pagesDir, { withFileTypes: true }).filter(d => d.isDirectory());
const pageDetails = [];
const pageBodySigs = {};

for (const entry of pageEntries) {
  const slug = entry.name;
  const fp = path.join(pagesDir, slug, 'index.html');
  if (!fs.existsSync(fp)) continue;
  const html = fs.readFileSync(fp, 'utf8');
  const $ = cheerio.load(html);

  const h1 = $('h1').first().text().replace(/\s+/g, ' ').trim();
  const h2s = [];
  $('main h2, .main-content h2, section h2').each((_, el) => {
    const t = $(el).text().replace(/\s+/g, ' ').trim();
    if (t) h2s.push(t);
  });
  const prodLinks = [];
  $('a[href*="/products/"]').each((_, el) => {
    const href = $(el).attr('href');
    if (href && !prodLinks.includes(href)) prodLinks.push(href);
  });

  const sig = h2s.slice(0, 5).join(' || ');
  if (!pageBodySigs[sig]) pageBodySigs[sig] = [];
  pageBodySigs[sig].push({ slug, h1, h2Count: h2s.length, prodCount: prodLinks.length });
  pageDetails.push({ slug, h1, h2s: h2s.slice(0, 4), prodCount: prodLinks.length, size: html.length });
}

console.log('\n=== PAGES CONTENT AUDIT ===');
console.log(`Total pages: ${pageDetails.length}`);
for (const [sig, list] of Object.entries(pageBodySigs)) {
  if (list.length > 1) {
    console.log(`  Pages sharing H2 structure "${sig.slice(0, 100)}" (${list.length} pages):`);
    console.log(`    Slugs: ${list.map(x => `${x.slug} (h1="${x.h1}", prods=${x.prodCount})`).join(', ')}`);
  }
}
