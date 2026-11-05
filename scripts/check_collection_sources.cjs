const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.join(__dirname, '../audit');
const allProds = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'all_store_products_complete.json'), 'utf8'));
const colData = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'collections_data.json'), 'utf8'));

console.log('Total products in all_store_products_complete.json:', allProds.length);
console.log('Keys in collections_data.json:', Object.keys(colData));

// Check product_type and tags distribution in all_store_products_complete.json
const types = {};
for (const p of allProds) {
  types[p.product_type] = (types[p.product_type] || 0) + 1;
}
console.log('Product types in catalog:', types);
