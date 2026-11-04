const fs = require('fs');
const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const regex = /<link[^>]+stylesheet[^>]*>/gi;
const matches = html.match(regex);
console.log('Matches:', matches);
