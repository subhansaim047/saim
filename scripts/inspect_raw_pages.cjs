const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const RAW_PAGES_DIR = path.join(__dirname, '../audit/raw_tjm/pages');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

const existingProds = new Set(fs.readdirSync(path.join(BASE_DIR, 'products')));
const existingCols = new Set(fs.readdirSync(path.join(BASE_DIR, 'collections')));

const rawFiles = fs.readdirSync(RAW_PAGES_DIR).filter(f => f.endsWith('.html'));
console.log(`Total raw page HTML files: ${rawFiles.length}`);

const missingProdsInPages = new Set();
const missingColsInPages = new Set();

for (const file of rawFiles) {
  const html = fs.readFileSync(path.join(RAW_PAGES_DIR, file), 'utf8');
  const $ = cheerio.load(html);
  const mainEl = $('main#MainContent, main, .main-content').first();
  if (mainEl.length === 0) {
    console.log(`  [WARN] No <main> found in ${file}`);
    continue;
  }
  mainEl.find('a[href]').each((_, el) => {
    const href = $(el).attr('href') || '';
    const clean = href.replace(/^https?:\/\/[^/]+/, '').split('?')[0].split('#')[0].replace(/\/$/, '');
    if (clean.startsWith('/products/')) {
      const slug = clean.split('/products/')[1].split('/')[0];
      if (slug && !existingProds.has(slug)) missingProdsInPages.add(slug);
    } else if (clean.startsWith('/collections/')) {
      const slug = clean.split('/collections/')[1].split('/')[0];
      if (slug && !existingCols.has(slug)) missingColsInPages.add(slug);
    }
  });
}

console.log(`Missing products referenced inside raw pages (${missingProdsInPages.size}):`, Array.from(missingProdsInPages).slice(0, 30));
console.log(`Missing collections referenced inside raw pages (${missingColsInPages.size}):`, Array.from(missingColsInPages).slice(0, 30));
