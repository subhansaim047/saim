const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

console.log($('.elementor-element-49061bb').html());
