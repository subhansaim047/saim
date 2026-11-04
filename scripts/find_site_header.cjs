const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const sh = html.indexOf('site-header');
console.log('site-header index:', sh);
if (sh !== -1) {
  console.log(html.slice(sh - 100, sh + 1500));
}
