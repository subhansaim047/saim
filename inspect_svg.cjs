const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');
console.log(html.slice(1098313, 1098313 + 800));
