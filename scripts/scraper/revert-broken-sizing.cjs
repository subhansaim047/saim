const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

$('#global-section-sizing-fix').remove();

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log('Successfully removed #global-section-sizing-fix');
