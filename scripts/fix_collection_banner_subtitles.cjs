const fs = require('fs');
const path = require('path');

const COLS_DIR = path.join(__dirname, '../public/hq-leathercon/collections');
const slugs = fs.readdirSync(COLS_DIR, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

let fixed = 0;
for (const slug of slugs) {
  const fp = path.join(COLS_DIR, slug, 'index.html');
  if (!fs.existsSync(fp)) continue;
  let html = fs.readFileSync(fp, 'utf8');
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'Collection';
  const next = html.replace(/Explore authentic Men's Leather Bomber Jackets at HQ Leathercon/g, `Explore authentic ${h1} at HQ Leathercon`);
  if (next !== html) {
    fs.writeFileSync(fp, next, 'utf8');
    fixed++;
  }
}
console.log(`Updated banner subtitle on ${fixed} collection pages!`);
