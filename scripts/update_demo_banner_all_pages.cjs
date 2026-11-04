const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../public/hq-leathercon/products');
const dirs = fs.readdirSync(ROOT);

let updatedCount = 0;
let alreadyDone = 0;

for (const d of dirs) {
  const file = path.join(ROOT, d, 'index.html');
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes('1:1 Interactive E-Commerce Clone') && !html.includes('border-bottom: 2px solid #00e5ff')) {
    alreadyDone++;
    continue;
  }

  html = html
    .replace(/HQ Leathercon \(1:1 Interactive E-Commerce Clone\)/g, 'HQ Leathercon')
    .replace(/border-bottom:\s*2px solid #00e5ff;/g, 'border-bottom: 1px solid rgba(0, 229, 255, 0.3);')
    .replace(/padding:\s*10px 24px;/g, 'padding: 4px 14px;')
    .replace(/flex-wrap:\s*wrap;\s*gap:\s*14px;/g, 'flex-wrap: nowrap; gap: 10px;')
    .replace(/padding:\s*7px 16px;\s*background:\s*rgba\(0, 229, 255, 0\.12\);\s*border:\s*1px solid rgba\(0, 229, 255, 0\.4\);\s*border-radius:\s*6px;\s*color:\s*#00e5ff;\s*font-size:\s*13px;\s*font-weight:\s*700;/g, 'padding: 3px 10px; background: rgba(0, 229, 255, 0.08); border: 1px solid rgba(0, 229, 255, 0.28); border-radius: 4px; color: #00e5ff; font-size: 11.5px; font-weight: 600; white-space: nowrap;')
    .replace(/font-size:\s*13px;\s*font-weight:\s*600;\s*letter-spacing:\s*0\.02em;\s*color:\s*#ffffff;/g, 'font-size: 12px; font-weight: 600; letter-spacing: 0.02em; color: #ffffff; white-space: nowrap;');

  fs.writeFileSync(file, html, 'utf8');
  updatedCount++;
  if (updatedCount >= 350) break;
}

console.log(`Updated: ${updatedCount}, AlreadyDone: ${alreadyDone}, TotalDirs: ${dirs.length}`);
