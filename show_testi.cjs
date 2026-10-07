const fs = require('fs');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const idx = html.indexOf('Our Testimonials');
console.log(html.substring(idx - 100, idx + 1500));
