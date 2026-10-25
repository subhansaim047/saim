const fs = require('fs');
const path = require('path');

const targetDirs = [
  'src/components',
  'src/data',
  'app/food-safety-templates',
  'app/tools',
  'app/api/download',
  'public/templates/svg'
];

const root = path.resolve(__dirname, '..');
const occurrences = [];

for (const tDir of targetDirs) {
  const fullDir = path.join(root, tDir);
  if (!fs.existsSync(fullDir)) continue;

  function scan(dir) {
    const list = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of list) {
      const p = path.join(dir, item.name);
      if (item.isDirectory()) {
        scan(p);
      } else if (/\.(ts|tsx|js|json|html|svg)$/i.test(item.name)) {
        const text = fs.readFileSync(p, 'utf8');
        const matches = text.match(/fooddocs/gi);
        if (matches) {
          occurrences.push({
            file: path.relative(root, p),
            count: matches.length,
            // also find context if any
            sample: text.slice(Math.max(0, text.search(/fooddocs/i) - 40), text.search(/fooddocs/i) + 60).replace(/\n/g, ' ')
          });
        }
      }
    }
  }
  scan(fullDir);
}

console.log('Occurrences found:', occurrences.length);
console.log(JSON.stringify(occurrences, null, 2));
