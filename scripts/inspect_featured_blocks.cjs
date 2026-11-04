const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

[633787, 719250, 878778].forEach((idx, i) => {
  console.log(`=== Block ${i + 1} at ${idx} ===`);
  console.log(html.slice(Math.max(0, idx - 400), Math.min(html.length, idx + 800)));
});
