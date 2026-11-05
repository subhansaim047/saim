const fs = require('fs');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');

[569666, 615180, 698837].forEach((pos, idx) => {
  console.log(`\n=================== NAV CONTAINER ${idx} (pos: ${pos}) ===================`);
  // Look 300 chars backwards to find container tag
  console.log('BEFORE:\n', html.slice(pos - 350, pos).replace(/\n/g, ' '));
});
