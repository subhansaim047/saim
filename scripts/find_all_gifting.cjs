const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const regex = /GIFTING/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('--- Occurrence at', m.index);
  console.log(html.slice(Math.max(0, m.index - 100), Math.min(html.length, m.index + 800)));
}
