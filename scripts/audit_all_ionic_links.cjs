const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allHtmls = walk('public/thejacketmaker');
console.log(`Auditing ${allHtmls.length} HTML files for hardcoded ionic links...`);

const filesWithIonic = [];

for (const file of allHtmls) {
  // don't count the actual ionic-black-leather-jacket product page itself
  if (file.includes('ionic-black-leather-jacket')) continue;
  
  const content = fs.readFileSync(file, 'utf8');
  const count = (content.match(/ionic-black-leather-jacket/g) || []).length;
  if (count > 0) {
    filesWithIonic.push({ file, count });
  }
}

console.log(`Found ${filesWithIonic.length} files with hardcoded ionic links:`);
filesWithIonic.forEach(f => console.log(`  ${f.file} (${f.count} occurrences)`));
