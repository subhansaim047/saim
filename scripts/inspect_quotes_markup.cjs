const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const qIdx = html.indexOf('quotes-carousel');
console.log('Quotes carousel block:');
console.log(html.slice(qIdx - 50, qIdx + 1200));
