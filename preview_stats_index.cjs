const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const $ = cheerio.load(html);

const statsSection = $('.elementor-element-8cfa297');
console.log(statsSection.attr('class'));
