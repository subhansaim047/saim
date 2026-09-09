const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('burger.html'));
const el = $('.elementor-element-efc033b');
console.log('Class:', el.attr('class'));
console.log('HTML:', el.html());
