const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const htmlPath = path.join(__dirname, 'fooddocs_page.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html);

const firstImgLink = $('.template-grid__image').first();
const parent = firstImgLink.parent();
console.log('Parent HTML:');
console.log(parent.html());
console.log('Parent outer HTML tag:', parent.get(0).tagName, parent.attr('class'));
