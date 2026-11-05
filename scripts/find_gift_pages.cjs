const fs = require('fs');
const path = require('path');
const base = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';

function scan(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(f => {
    const full = path.join(dir, f);
    const rel = full.replace(base, '').replace(/\\/g, '/');
    const isDir = fs.statSync(full).isDirectory();
    if (/gift|corporate/i.test(f)) {
      console.log(`${isDir ? '[DIR]' : '[FILE]'}: ${rel}`);
    }
    if (isDir && !['images', 'assets', 'fonts', 'css', 'js'].includes(f)) {
      scan(full);
    }
  });
}
scan(base);
