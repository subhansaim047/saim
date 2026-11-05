const fs = require('fs');
const html = fs.readFileSync('public/hotbite/index.html', 'utf8');

const re = /class="framer-28kurd"[^>]*>/g;
let m;
while ((m = re.exec(html)) !== null) {
  console.log(`Match at ${m.index}:\n${m[0]}\n`);
}
