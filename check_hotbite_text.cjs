const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const textMatches = [];
const re = />([^<]*?hotbite[^<]*?)</gi;
let m;
while ((m = re.exec(html)) !== null) {
  textMatches.push(m[1].trim());
}
console.log('Visible Hotbite text occurrences:', textMatches);

const altMatches = [];
const altRe = /alt="([^"]*?hotbite[^"]*?)"/gi;
while ((m = altRe.exec(html)) !== null) {
  altMatches.push(m[1].trim());
}
console.log('Alt Hotbite occurrences:', altMatches);

const titleMatches = [];
const titleRe = /title="([^"]*?hotbite[^"]*?)"/gi;
while ((m = titleRe.exec(html)) !== null) {
  titleMatches.push(m[1].trim());
}
console.log('Title Hotbite occurrences:', titleMatches);
