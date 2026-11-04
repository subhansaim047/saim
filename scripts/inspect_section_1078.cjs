const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

console.log('Section around 1078669:');
console.log(html.slice(1078000, 1082000));
