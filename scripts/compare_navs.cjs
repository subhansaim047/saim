const fs = require('fs');
const h1 = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');

console.log(JSON.stringify(h1.slice(536150, 536250)));
