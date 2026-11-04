const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

let idx = 0;
while ((idx = html.indexOf('href="/collections"', idx)) !== -1) {
  console.log('--- Found at index:', idx);
  console.log(html.slice(Math.max(0, idx - 200), Math.min(html.length, idx + 300)));
  idx += 20;
}
