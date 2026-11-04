const fs = require('fs');
const path = require('path');

// Check sample pages
const pages = [
  'public/thejacketmaker/collections/mens-leather-jackets/index.html',
  'public/thejacketmaker/products/ionic-black-leather-jacket/index.html',
  'public/thejacketmaker/pages/custom-leather-jackets/index.html'
];

for (const p of pages) {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const hasDenim = html.includes('custom-denim-jackets');
    const hasGiftSet = html.includes('gift-set');
    console.log(`${p}: hasDenim=${hasDenim}, hasGiftSet=${hasGiftSet}`);
  }
}
