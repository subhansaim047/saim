const fs = require('fs');
const path = require('path');

const jsDir = 'public/thejacketmaker/js';
const files = fs.readdirSync(jsDir);

files.forEach(f => {
  if (f.endsWith('.js')) {
    const code = fs.readFileSync(path.join(jsDir, f), 'utf8');
    if (code.includes('quotes-carousel')) {
      console.log(`Found quotes-carousel in ${f}`);
      // Find matches
      let idx = 0;
      while ((idx = code.indexOf('quotes-carousel', idx)) !== -1) {
        console.log(`- Snippet in ${f}:`);
        console.log(code.slice(Math.max(0, idx - 100), Math.min(code.length, idx + 400)));
        idx += 15;
      }
    }
  }
});
