const fs = require('fs');
const path = require('path');

const templates = JSON.parse(fs.readFileSync(path.join(__dirname, 'unique_templates.json'), 'utf8'));

const uniqueImages = new Set();
const uniquePdfs = new Set();

templates.forEach(t => {
  if (t.img) uniqueImages.add(t.img);
  if (t.pdf) uniquePdfs.add(t.pdf);
});

console.log('Total unique images:', uniqueImages.size);
console.log('Total unique PDFs:', uniquePdfs.size);

Array.from(uniqueImages).slice(0, 30).forEach(i => console.log('IMG:', i));
