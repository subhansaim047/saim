const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.html')) {
      results.push(full);
    }
  });
  return results;
}

const allHtmls = walk('public/thejacketmaker');
console.log(`Found ${allHtmls.length} HTML files.`);

let filesWithCollections = [];
let filesWithOldRefund = [];
let filesWithOldShipping = [];

allHtmls.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('href="/collections"')) {
    filesWithCollections.push(file);
  }
  if (content.includes('/thejacketmaker/pages/refund-policy/index.html')) {
    filesWithOldRefund.push(file);
  }
  if (content.includes('/thejacketmaker/pages/shipping-policy/index.html')) {
    filesWithOldShipping.push(file);
  }
});

console.log('Files with href="/collections":', filesWithCollections.length);
console.log('Files with old refund:', filesWithOldRefund.length);
console.log('Files with old shipping:', filesWithOldShipping.length);
