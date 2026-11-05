const fs = require('fs');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');

const pos = 698837;
const containerStart = html.lastIndexOf('<script', pos);
const containerEnd = html.indexOf('</script>', pos);
console.log('Is inside script tag?', containerStart !== -1 && containerEnd > pos);
if (containerStart !== -1 && containerEnd > pos) {
  console.log('Script tag opening:', html.slice(containerStart, containerStart + 150));
}
