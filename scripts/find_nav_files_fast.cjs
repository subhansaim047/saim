const fs = require('fs');
const path = require('path');
const base = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';

const filesToUpdate = [];

function checkFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!['css', 'fonts', 'images', 'assets', 'js', 'videos'].includes(item)) {
        checkFiles(full);
      }
    } else if (item.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('CORPORATE GIFTS') || content.includes('GIFTING') || content.includes('our-story')) {
        filesToUpdate.push(full.replace(base, ''));
      }
    }
  }
}

checkFiles(base);
console.log('Files with nav menus count:', filesToUpdate.length);
console.log('Sample files:', filesToUpdate.slice(0, 15));
