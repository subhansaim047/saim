const fs = require('fs');

const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const regex = /data-framer-name="Menu Block"/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Menu Block at index:', match.index);
  // print surrounding parent tags
  console.log(html.substring(match.index - 120, match.index + 80));
}
