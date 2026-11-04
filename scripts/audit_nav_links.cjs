const fs = require('fs');
const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const regex = /href="(\/thejacketmaker\/(?:pages|collections)\/[^"]+)"/g;
const links = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  links.add(match[1]);
}

console.log('Total unique pages/collections links in index.html:', links.size);
const customLinks = Array.from(links).filter(l => l.includes('custom'));
console.log('Custom links (' + customLinks.length + '):', customLinks);

const giftLinks = Array.from(links).filter(l => l.includes('gift'));
console.log('Gift links (' + giftLinks.length + '):', giftLinks);
