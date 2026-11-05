const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.join(__dirname, '../audit');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

const colData = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'collections_data.json'), 'utf8'));
const existingProds = new Set(fs.readdirSync(path.join(BASE_DIR, 'products')));

const missingProdsMap = {};
for (const [colSlug, data] of Object.entries(colData)) {
  const prods = data.products || [];
  for (const p of prods) {
    if (!existingProds.has(p.handle)) {
      missingProdsMap[p.handle] = p;
    }
  }
}

console.log(`Unique products in collections_data.json not yet in public/hq-leathercon/products/: ${Object.keys(missingProdsMap).length}`);
if (Object.keys(missingProdsMap).length > 0) {
  console.log('Sample missing product handles:', Object.keys(missingProdsMap).slice(0, 20));
}
