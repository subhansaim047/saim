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
      const lines = code.split('\n');
      lines.forEach((line, idx) => {
        if (/Â|â€|ï¿½|\uFFFD|\?\?|510\s*business|No middleman chat/.test(line)) {
          results.push({
            file: full,
            lineNum: idx + 1,
            text: line.trim()
          });
        }
      });
    }
  });
  return results;
}

const found = [...scanDir('src'), ...scanDir('app')];
console.log(`Found ${found.length} corrupted character lines:`);
found.forEach(item => {
  console.log(`${item.file}:${item.lineNum} -> ${item.text}`);
});
