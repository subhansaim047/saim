const fs = require('fs');
const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const regex = /<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["'][^>]*>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log(m[1]);
}
