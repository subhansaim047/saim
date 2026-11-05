const fs = require('fs');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');

const idx = html.indexOf('CORPORATE GIFTS');
console.log('Index of CORPORATE GIFTS:', idx);
if (idx !== -1) {
  console.log(html.slice(idx - 200, idx + 400));
}
