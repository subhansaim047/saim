const fs = require('fs');

const collHtml = fs.readFileSync('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'utf8');

const fIdx = collHtml.indexOf('id="shopify-section-footer"');
if (fIdx !== -1) {
  console.log('Footer snippet:');
  console.log(collHtml.slice(fIdx, fIdx + 1500));
}
