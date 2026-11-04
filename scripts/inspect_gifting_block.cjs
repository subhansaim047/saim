const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const giftIdx = html.indexOf('>GIFTING<');
console.log('GIFTING block in index.html:');
console.log(html.slice(giftIdx - 50, giftIdx + 1500));
