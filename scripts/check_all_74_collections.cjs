const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.join(__dirname, '../audit');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

const storeCols = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'all_store_collections.json'), 'utf8'));
const colData = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'collections_data.json'), 'utf8'));
const allProds = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'all_store_products_complete.json'), 'utf8'));

const storeColMap = {};
for (const c of storeCols) {
  storeColMap[c.handle] = c;
}

const localCols = fs.readdirSync(path.join(BASE_DIR, 'collections'), { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log(`Local collections: ${localCols.length}`);
const inColData = [];
const inStoreColsOnly = [];
const notInStoreCols = [];

for (const slug of localCols) {
  if (colData[slug] && colData[slug].length > 0) {
    inColData.push(slug);
  } else if (storeColMap[slug]) {
    inStoreColsOnly.push(slug);
  } else {
    notInStoreCols.push(slug);
  }
}

console.log(`Already in collections_data.json (${inColData.length}):`, inColData);
console.log(`In store_collections.json (${inStoreColsOnly.length}):`, inStoreColsOnly);
console.log(`Custom alias slugs not in store_collections.json (${notInStoreCols.length}):`, notInStoreCols);

// Also check what store_collections handles exist for bags, shoes, belts, wallets, coats, etc.
console.log('\nSample store collection handles for bags/shoes/belts/wallets/coats/women:');
const relevant = storeCols.filter(c => /bag|shoe|boot|loafer|sneaker|belt|wallet|coat|duster|shearling|puffer|vest|denim|canvas|windbreaker|shell|down|summer|lightweight|hobo|tote|crossbody|laptop|travel|business|eviternity|trucarry|sale|prime|order/i.test(c.handle));
console.log(relevant.map(c => `${c.handle} ("${c.title}")`).join('\n'));
