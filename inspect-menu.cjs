const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html);

const menuSection = $('.elementor-element-e71b354');
console.log("Section Classes:", menuSection.attr('class'));
// Let's find widgets inside this section
menuSection.find('.elementor-widget').each((i, el) => {
    console.log(`Widget ${i}: ${$(el).attr('data-widget_type')} - text preview: ${$(el).text().replace(/\\s+/g, ' ').substring(0, 100)}`);
});
