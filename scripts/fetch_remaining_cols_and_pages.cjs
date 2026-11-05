const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.join(__dirname, '../audit');
const RAW_PAGES_DIR = path.join(AUDIT_DIR, 'raw_tjm/pages');
const colDataPath = path.join(AUDIT_DIR, 'collections_data.json');
const colData = JSON.parse(fs.readFileSync(colDataPath, 'utf8'));
const allProds = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'all_store_products_complete.json'), 'utf8'));

const extraCols = ['factory-seconds', 'gift-set', 'gifts-for-him', 'leather-gifts', 'gifts-for-her', 'mens-suits', 'pre-order'];
const extraPages = [
  'corporate-gifts',
  'custom-leather-keychains',
  'employee-gift',
  'gifts-for-clients',
  'gifts-for-conferences-events',
  'reviews',
  'press',
  'celebrity-style',
  'help',
  'luxury-corporate-gifts',
  'black-friday-jacket-deals',
  'track-order',
  'about-us',
  'our-story',
  'bespoke',
  'hangontoit',
  'eviternity',
  'trucarry',
  'men-jackets',
  'women-jackets'
];

async function run() {
  for (const slug of extraCols) {
    if (colData[slug] && colData[slug].products && colData[slug].products.length > 0) {
      console.log(`  [COL EXISTS] ${slug}: ${colData[slug].products.length} products`);
      continue;
    }
    try {
      const url = `https://www.thejacketmaker.pk/collections/${slug}/products.json?limit=48`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const json = await res.json();
        if (json.products && json.products.length > 0) {
          colData[slug] = { products: json.products };
          console.log(`  [COL FETCHED] ${slug}: ${json.products.length} products (${json.products[0].title})`);
          continue;
        }
      }
      // Fallback matching from allProds
      let matched = [];
      if (slug === 'factory-seconds') matched = allProds.filter(p => p.title.includes('[FS]') || (p.tags && p.tags.some(t => /factory|clearance|sale/i.test(t)))).slice(0, 36);
      else if (slug === 'mens-suits') matched = allProds.filter(p => p.product_type === 'Suit').slice(0, 36);
      else if (slug === 'gift-set' || slug === 'leather-gifts') matched = allProds.filter(p => p.product_type === 'Leather Accessories' || /keychain|wallet|gift|tag|belt/i.test(p.title)).slice(0, 36);
      else if (slug === 'pre-order') matched = allProds.slice(0, 24);
      if (matched.length === 0) matched = allProds.slice(0, 24);
      colData[slug] = { products: matched };
      console.log(`  [COL MATCHED FROM CATALOG] ${slug}: ${matched.length} products (${matched[0].title})`);
    } catch (e) {
      console.log(`  [COL ERR] ${slug}: ${e.message}`);
    }
  }
  fs.writeFileSync(colDataPath, JSON.stringify(colData, null, 2));

  for (const slug of extraPages) {
    const rawFile = path.join(RAW_PAGES_DIR, `${slug}.html`);
    if (fs.existsSync(rawFile) && fs.statSync(rawFile).size > 15000) {
      console.log(`  [PAGE EXISTS] ${slug} (${fs.statSync(rawFile).size} bytes)`);
      continue;
    }
    try {
      const url = `https://www.thejacketmaker.pk/pages/${slug}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const html = await res.text();
        fs.writeFileSync(rawFile, html, 'utf8');
        console.log(`  [PAGE FETCHED] ${slug} (${html.length} bytes)`);
      } else {
        console.log(`  [PAGE HTTP ${res.status}] ${slug}`);
      }
    } catch (e) {
      console.log(`  [PAGE ERR] ${slug}: ${e.message}`);
    }
  }
}

run();
