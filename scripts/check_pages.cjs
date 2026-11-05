const fs = require('fs');
const path = require('path');
const base = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker';

console.log('Help exists:', fs.existsSync(path.join(base, 'pages/help')));
if (fs.existsSync(path.join(base, 'pages/help'))) {
  console.log('Contents of pages/help:', fs.readdirSync(path.join(base, 'pages/help')));
}

// Check other pages in pages/
console.log('All folders in pages/:', fs.readdirSync(path.join(base, 'pages')));
