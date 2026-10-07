const fs = require('fs');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const idx = html.indexOf('Our Testimonials');
console.log(html.substring(idx + 1500, idx + 3500));
