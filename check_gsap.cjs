const fs = require('fs');
const html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const matches = html.match(/data-x-start=".*?" data-x-end=".*?"/g);
console.log(matches.slice(0, 5));
