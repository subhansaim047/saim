const fs = require('fs');

const p = 'public/thejacketmaker/products/adkins-black-leather-keychain/index.html';
const html = fs.readFileSync(p, 'utf8');

const gStart = html.indexOf('product-gallery');
console.log('Gallery start:', gStart);
if (gStart !== -1) {
  console.log(html.slice(gStart, gStart + 2500));
} else {
  // search for main-image
  const mStart = html.indexOf('main-image');
  console.log('Main image start:', mStart);
  console.log(html.slice(mStart - 100, mStart + 2500));
}
