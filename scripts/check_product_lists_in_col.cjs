const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

// Check <main> top-3 products in sample collections
const sampleCols = ['leather-bags', 'leather-wallets', 'mens-leather-shoes', 'mens-leather-belts', 'mens-leather-boots', 'womens-leather-bags', 'eviternity', 'trucarry', 'mens-cafe-racer-jackets', 'mens-leather-coats'];
console.log('=== SAMPLE COLLECTIONS <MAIN> TOP-3 PRODUCTS ===');
for (const slug of sampleCols) {
  const html = fs.readFileSync(path.join(BASE_DIR, 'collections', slug, 'index.html'), 'utf8');
  const mainHtml = html.slice(html.indexOf('<main'));
  const re = /class="product-link"\s+href="\/hq-leathercon\/products\/([^/"]+)\/index\.html"/g;
  const prods = [];
  let m;
  while ((m = re.exec(mainHtml)) !== null) {
    if (!prods.includes(m[1])) prods.push(m[1]);
  }
  console.log(`  ${slug} (${prods.length} unique products):`, prods.slice(0, 3));
}

// Check if any non-ionic product mentions ionic-black-leather-jacket inside <main>
const sampleProds = [
  'aaron-black-leather-bomber-jacket',
  'adkins-black-leather-keychain',
  'the-poet-brown-leather-tote-bag',
  'professor-oxford-black-leather-shoes',
  'dean-brown-leather-biker-jacket',
  'alyson-black-leather-blazer'
];
console.log('\n=== SAMPLE PRODUCTS <MAIN> IONIC MENTIONS ===');
for (const slug of sampleProds) {
  const html = fs.readFileSync(path.join(BASE_DIR, 'products', slug, 'index.html'), 'utf8');
  const mainHtml = html.slice(html.indexOf('<main'), html.indexOf('</main>'));
  const matches = mainHtml.match(/ionic-black-leather-jacket/g);
  console.log(`  ${slug}: ${matches ? matches.length : 0} mentions of ionic-black-leather-jacket in <main>`);
}
