const fs = require('fs');

const p = 'public/thejacketmaker/products/adkins-black-leather-keychain/index.html';
const html = fs.readFileSync(p, 'utf8');

let pos = 0;
while ((pos = html.indexOf('Ionic_Black_Leather_Jacket', pos)) !== -1) {
  console.log(`Found Ionic_Black_Leather_Jacket at ${pos}:`);
  console.log(html.slice(pos - 150, pos + 250));
  pos += 30;
}
