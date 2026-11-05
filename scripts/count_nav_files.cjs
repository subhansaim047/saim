const fs = require('fs');
const path = require('path');
const base = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';

let countWithCorp = 0;
let countWithGifting = 0;
let totalHtml = 0;

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!['css', 'fonts', 'images', 'assets', 'js', 'videos'].includes(f)) {
        walk(full);
      }
    } else if (f.endsWith('.html')) {
      totalHtml++;
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('CORPORATE GIFTS')) countWithCorp++;
      if (content.includes('GIFTING')) countWithGifting++;
    }
  }
}

walk(base);
console.log({ totalHtml, countWithCorp, countWithGifting });
