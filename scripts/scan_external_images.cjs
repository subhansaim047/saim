const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  const results = [];
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      results.push(...scanDir(full));
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const code = fs.readFileSync(full, 'utf8');
      const matches = code.match(/src=["']https?:\/\/[^"']+["']/g) || [];
      if (matches.length > 0) {
        results.push({ file: full, matches });
      }
    }
  });
  return results;
}

const found = [...scanDir('src'), ...scanDir('app')];
console.log('External image URLs found:', JSON.stringify(found, null, 2));
