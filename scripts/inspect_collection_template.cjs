const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');
const sampleCol = fs.readFileSync(path.join(BASE_DIR, 'collections/mens-leather-jackets/index.html'), 'utf8');
const $ = cheerio.load(sampleCol);

console.log('=== LINKS IN MAIN CONTENT OF COLLECTION PAGE (EXCLUDING PRODUCT-LIST) ===');
$('main a[href], #MainContent a[href], .collection-listing a[href]').each((_, el) => {
  if ($(el).closest('.product-list').length > 0) return;
  console.log(`  "${$(el).text().replace(/\s+/g, ' ').trim()}" -> ${$(el).attr('href')}`);
});
