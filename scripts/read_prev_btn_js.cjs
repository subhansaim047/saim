const fs = require('fs');

const code = fs.readFileSync('public/thejacketmaker/js/gallery-controller.js', 'utf8');
const qIdx = code.indexOf('if (prevBtn)');
console.log(code.slice(qIdx, qIdx + 1200));
