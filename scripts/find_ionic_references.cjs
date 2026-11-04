const fs = require('fs');
const path = require('path');

// Check index.html
const indexHtml = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const countInIndex = (indexHtml.match(/ionic-black-leather-jacket/g) || []).length;
console.log('Occurrences in index.html:', countInIndex);

// Let's inspect where it appears in index.html
let idx = 0;
while ((idx = indexHtml.indexOf('ionic-black-leather-jacket', idx)) !== -1) {
  console.log('--- in index.html around', idx);
  console.log(indexHtml.slice(Math.max(0, idx - 150), Math.min(indexHtml.length, idx + 250)));
  idx += 30;
}

// Check JS files
const jsDir = 'public/thejacketmaker/js';
fs.readdirSync(jsDir).forEach(f => {
  if (f.endsWith('.js')) {
    const code = fs.readFileSync(path.join(jsDir, f), 'utf8');
    if (code.includes('ionic-black-leather-jacket') || code.includes('ionic')) {
      console.log(`Found ionic reference in JS: ${f}`);
      let jIdx = 0;
      while ((jIdx = code.indexOf('ionic', jIdx)) !== -1) {
        console.log(`  ${f}:`, code.slice(Math.max(0, jIdx - 60), Math.min(code.length, jIdx + 150)));
        jIdx += 10;
      }
    }
  }
});
