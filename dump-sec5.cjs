const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html);
fs.writeFileSync('section5.html', $('.elementor-element-e71b354').html() || '');
