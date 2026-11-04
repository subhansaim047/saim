const fs = require('fs');

const p = 'public/thejacketmaker/products/aaron-black-leather-bomber-jacket/index.html';
const html = fs.readFileSync(p, 'utf8');
const fIdx = html.indexOf('id="shopify-section-footer"');
if (fIdx !== -1) {
  console.log(html.slice(fIdx, fIdx + 1000));
}
