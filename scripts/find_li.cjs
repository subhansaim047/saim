const fs = require('fs');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');

const idx = html.indexOf('CORPORATE GIFTS');
let liStart = html.lastIndexOf('<li', idx);
console.log('LI START:', html.slice(liStart, idx + 100));

// Find the corresponding closing </li>
let openTags = 0;
let pos = liStart;
let liEnd = -1;
while (pos < html.length) {
  if (html.startsWith('<li', pos)) {
    openTags++;
    pos += 3;
  } else if (html.startsWith('</li>', pos)) {
    openTags--;
    if (openTags === 0) {
      liEnd = pos + 5;
      break;
    }
    pos += 5;
  } else {
    pos++;
  }
}

console.log('LI END:', liEnd);
console.log('Full LI length:', liEnd - liStart);
console.log('Preview:', html.slice(liStart, liStart + 300));
