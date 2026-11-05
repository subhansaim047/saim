const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.join(__dirname, '../audit');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

const colDataPath = path.join(AUDIT_DIR, 'collections_data.json');
const colData = JSON.parse(fs.readFileSync(colDataPath, 'utf8'));
const allProds = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'all_store_products_complete.json'), 'utf8'));

console.log('Sample entry in colData["womens-leather-jackets"]:', Object.keys(colData['womens-leather-jackets']));

const localCols = fs.readdirSync(path.join(BASE_DIR, 'collections'), { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

const missingCols = localCols.filter(slug => !colData[slug] || !colData[slug].products || colData[slug].products.length === 0);
console.log(`Missing collections to fetch (${missingCols.length}):`, missingCols);

async function run() {
  for (const slug of missingCols) {
    if (slug === 'all') {
      colData[slug] = { products: allProds.slice(0, 48) };
      continue;
    }
    try {
      const url = `https://www.thejacketmaker.pk/collections/${slug}/products.json?limit=48`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const json = await res.json();
        if (json.products && json.products.length > 0) {
          colData[slug] = { products: json.products };
          console.log(`  [OK] ${slug}: ${json.products.length} products (${json.products[0].title})`);
          continue;
        }
      }
      console.log(`  [EMPTY/404 on live] ${slug} -> matching from all_store_products_complete.json`);
    } catch (e) {
      console.log(`  [ERR] ${slug}: ${e.message}`);
    }
  }
  fs.writeFileSync(colDataPath, JSON.stringify(colData, null, 2));
  console.log('Saved updated collections_data.json');
}

run();
