const fs = require('fs');

const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const regex = /<div class="([^"]+)" data-framer-name="Menu Column"/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('Match class:', match[1], 'at index:', match.index);
}
