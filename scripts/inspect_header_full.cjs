const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const headerStart = html.indexOf('<header');
const headerEnd = html.indexOf('</header>');
if (headerStart !== -1 && headerEnd !== -1) {
  console.log('HEADER HTML (first 2500 chars):\n');
  console.log(html.slice(headerStart, headerStart + 2500));
} else {
  console.log('No <header> tag found, searching for site-header');
  const sh = html.indexOf('site-header');
  console.log(html.slice(sh - 100, sh + 2000));
}
