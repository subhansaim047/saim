const fs = require('fs');
let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

html = html.replace('const factor = (index - 3.5) * 50;', 'const factor = (3.5 - index) * 50;');
fs.writeFileSync('public/burger-garage/index.html', html);
console.log('Script factor reversed.');
