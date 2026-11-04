const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const navMatches = [...html.matchAll(/<nav[^>]*>([\s\S]*?)<\/nav>/gi)];
console.log('Total nav elements:', navMatches.length);
navMatches.forEach((n, i) => {
  console.log(`Nav ${i}: tag =`, n[0].slice(0, 150));
});
