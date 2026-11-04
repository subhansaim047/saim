const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const qIdx = html.indexOf('quotes-carousel');
const qEnd = html.indexOf('</div>\n</div>\n</div>', qIdx);
console.log('Quotes block full:\n', html.slice(qIdx, qIdx + 4500));
