const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/about-us.html', 'utf8');
const $ = cheerio.load(html);

const statsSection = $('.elementor-element-8cfa297');
fs.writeFileSync('stats_section.html', $.html(statsSection), 'utf8');
console.log("Extracted stats section");
