const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(getHtmlFiles(full));
    } else if (item.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const collFiles = getHtmlFiles('public/thejacketmaker/collections');
const pageFiles = getHtmlFiles('public/thejacketmaker/pages');
const policyFiles = getHtmlFiles('public/thejacketmaker/policies');

console.log('Collection html files:', collFiles.length);
console.log('Page html files:', pageFiles.length);
console.log('Policy html files:', policyFiles.length);
