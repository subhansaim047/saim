const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const mainNavIdx = html.indexOf('id="main-nav"');
console.log('main-nav index:', mainNavIdx);
console.log(html.slice(mainNavIdx - 50, mainNavIdx + 500));
