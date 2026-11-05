const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

// 1. Check all collections
const colDir = path.join(BASE_DIR, 'collections');
const colSlugs = fs.readdirSync(colDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
let colZeroProds = 0;
let colIonicFallbacks = 0;
const colSampleProducts = {};

for (const slug of colSlugs) {
  const fp = path.join(colDir, slug, 'index.html');
  const html = fs.readFileSync(fp, 'utf8');
  const prodLinks = [];
  const re = /class="product-link"\s+href="\/hq-leathercon\/products\/([^/"]+)\/index\.html"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (!prodLinks.includes(m[1])) prodLinks.push(m[1]);
  }
  if (prodLinks.length === 0) colZeroProds++;
  if (prodLinks.length === 1 && prodLinks[0] === 'ionic-black-leather-jacket') colIonicFallbacks++;
  if (['leather-bags', 'leather-wallets', 'mens-leather-shoes', 'mens-leather-belts', 'mens-leather-boots', 'womens-leather-bags', 'eviternity', 'trucarry', 'mens-cafe-racer-jackets', 'mens-leather-coats'].includes(slug)) {
    colSampleProducts[slug] = prodLinks.slice(0, 3);
  }
}

console.log(`=== 1. COLLECTIONS VERIFICATION (${colSlugs.length} collections) ===`);
console.log(`  Collections with 0 products: ${colZeroProds}`);
console.log(`  Collections with only ionic-black fallback: ${colIonicFallbacks}`);
console.log(`  Sample collection top-3 products:`, JSON.stringify(colSampleProducts, null, 2));

// 2. Check all pages
const pagesDir = path.join(BASE_DIR, 'pages');
const pageSlugs = fs.readdirSync(pagesDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
const pageTitles = {};
let pagesWithIonic = 0;

for (const slug of pageSlugs) {
  const fp = path.join(pagesDir, slug, 'index.html');
  const html = fs.readFileSync(fp, 'utf8');
  const tMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = tMatch ? tMatch[1].trim() : '';
  if (['custom-backpacks', 'custom-bag', 'custom-boots', 'custom-made-shoes', 'size-guide', 'returns', 'happy-customers', 'corporate-gifts', 'eviternity', 'trucarry'].includes(slug)) {
    pageTitles[slug] = title;
  }
  // Check if any non-ionic product link inside <main> points to ionic-black-leather-jacket when it shouldn't
  const mainStart = html.indexOf('<main');
  const mainEnd = html.indexOf('</main>');
  if (mainStart !== -1 && mainEnd !== -1) {
    const mainHtml = html.slice(mainStart, mainEnd);
    const matches = mainHtml.match(/ionic-black-leather-jacket/g);
    if (matches && matches.length > 2) {
      pagesWithIonic++;
    }
  }
}

console.log(`\n=== 2. PAGES VERIFICATION (${pageSlugs.length} pages) ===`);
console.log(`  Pages with >2 ionic-black links in <main>: ${pagesWithIonic}`);
console.log(`  Sample page titles:`, JSON.stringify(pageTitles, null, 2));

// 3. Check all 1357 products
const prodDir = path.join(BASE_DIR, 'products');
const prodSlugs = fs.readdirSync(prodDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
let prodsWithIonicMention = 0;

for (const slug of prodSlugs) {
  if (slug === 'ionic-black-leather-jacket') continue;
  const fp = path.join(prodDir, slug, 'index.html');
  const html = fs.readFileSync(fp, 'utf8');
  if (html.includes('ionic-black-leather-jacket')) {
    prodsWithIonicMention++;
  }
}

console.log(`\n=== 3. PRODUCTS VERIFICATION (${prodSlugs.length} products) ===`);
console.log(`  Non-ionic products mentioning 'ionic-black-leather-jacket': ${prodsWithIonicMention}`);

// Check sample product swatches
const sampleAaron = fs.readFileSync(path.join(prodDir, 'aaron-black-leather-bomber-jacket/index.html'), 'utf8');
const swatchStart = sampleAaron.indexOf('<div class="custom-swatches">');
const swatchEnd = sampleAaron.indexOf('</fieldset>', swatchStart);
console.log(`  Sample swatches for aaron-black-leather-bomber-jacket:\n`, sampleAaron.slice(swatchStart, swatchEnd));
