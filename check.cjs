const fs = require('fs');
const cheerio = require('cheerio');
const indexHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(indexHtml, { decodeEntities: false });

console.log("Top level sections:");
$('div.elementor-top-section, section.elementor-top-section').each((i, el) => {
    console.log(el.tagName + " " + $(el).attr('class'));
});
