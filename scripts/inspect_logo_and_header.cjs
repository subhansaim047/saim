const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Find all occurrences of logo or hq-crest-logo or brand
const logoRegex = /<a[^>]*href=["']\/thejacketmaker\/index\.html["'][^>]*>([\s\S]*?)<\/a>/gi;
let match;
console.log('--- Matches for index.html links ---');
while ((match = logoRegex.exec(html)) !== null) {
  console.log('Found logo link match:\n', match[0]);
}

// Find footer logo
console.log('\n--- Searching footer logo ---');
const footerIdx = html.indexOf('<footer');
if (footerIdx !== -1) {
  const footerHtml = html.slice(footerIdx, footerIdx + 3000);
  console.log('Footer snippet:\n', footerHtml.slice(0, 1000));
}
