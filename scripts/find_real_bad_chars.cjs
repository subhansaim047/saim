const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', 'src');

function scanForCharCodes(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanForCharCodes(full);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((l, idx) => {
        if (l.includes('\uFFFD') || l.includes('Â') || l.includes('??') || l.includes('510 business')) {
          console.log(`Corrupted/Questionable char in ${path.relative(path.join(__dirname, '..'), full)}:${idx + 1}`);
          console.log(`   ${l.trim()}`);
        }
      });
    }
  }
}

scanForCharCodes(rootDir);
console.log('Scan completed.');
