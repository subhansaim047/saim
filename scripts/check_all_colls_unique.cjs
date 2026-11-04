const fs = require('fs');
const path = require('path');

const collDir = 'public/thejacketmaker/collections';
const list = fs.readdirSync(collDir);

console.log('Checking product URLs across collections:');
for (const c of list) {
  const p = path.join(collDir, c, 'index.html');
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const prodLinks = [...html.matchAll(/href="(\/thejacketmaker\/products\/[^"]+)"/g)].map(m => m[1]);
    const unique = new Set(prodLinks);
    if (unique.size <= 2 && prodLinks.length > 5) {
      console.log(`WARNING: Collection ${c} has only ${unique.size} unique product URL(s)! URLs:`, [...unique]);
    }
  }
}
console.log('Check finished.');
