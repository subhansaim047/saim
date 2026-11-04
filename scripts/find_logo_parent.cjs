const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const logoIdx = html.indexOf('logo__link');
console.log('logo__link index:', logoIdx);
if (logoIdx !== -1) {
  console.log(html.slice(logoIdx - 500, logoIdx + 1500));
}
