const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const results = [];

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['.git', 'node_modules', '.next', 'scripts', '.system_generated'].includes(entry.name)) {
        scanDir(fullPath);
      }
    } else if (/\.(ts|tsx|js|jsx|json|html|css|md|svg)$/i.test(entry.name)) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const matches = content.match(/fooddocs/gi);
        if (matches) {
          results.push({ file: path.relative(root, fullPath), count: matches.length });
        }
      } catch (e) {
        // skip unreadable
      }
    }
  }
}

scanDir(root);
console.log('Results:');
console.table(results);
