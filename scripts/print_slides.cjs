const fs = require('fs');
const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const s2Start = html.indexOf('class="slide slide-2');
console.log(html.slice(s2Start + 2500, s2Start + 5000));
