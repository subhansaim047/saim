const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'fooddocs_page.html'), 'utf8');
const idx = html.indexOf('<div class="filtering-box">');
if (idx !== -1) {
  console.log(html.substring(idx, idx + 3500));
} else {
  console.log('Not found');
}
