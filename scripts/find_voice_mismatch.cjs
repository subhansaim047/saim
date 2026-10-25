const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(srcDir);
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  const relPath = path.relative(path.join(__dirname, '..'), f);
  const matches = [];
  lines.forEach((l, idx) => {
    if (/\b(I am|I have|my process|I guide|I will|I design|I build|I craft|I help|freelance web developer)\b/i.test(l)) {
      matches.push(`${idx + 1}: ${l.trim()}`);
    }
  });
  if (matches.length > 0) {
    console.log(`=== ${relPath} ===`);
    matches.forEach(m => console.log('  ' + m));
  }
});
