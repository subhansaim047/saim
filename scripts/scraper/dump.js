const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('burger.html'));
const html = $('.elementor-element-f3401e1').html();
fs.writeFileSync('burger-section.html', html);
