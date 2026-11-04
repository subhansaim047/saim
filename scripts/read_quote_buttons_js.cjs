const fs = require('fs');

const code = fs.readFileSync('public/thejacketmaker/js/gallery-controller.js', 'utf8');
const qIdx = code.indexOf('function initQuoteSlider');
console.log(code.slice(qIdx + 1500, qIdx + 3000));
