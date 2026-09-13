const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);
const hero = $('.elementor-element-e8a2a75');
hero.find('*').each((i, el) => {
    if ($(el).text().includes('Cheesy') || $(el).text().includes('Pizza')) {
        // Just print the tag name and direct text if it's not a wrapper container with too much text
        if ($(el).children().length === 0 || $(el).text().trim().length < 50) {
            console.log(`Found in <${el.tagName}>: ${$(el).html()}`);
        }
    }
});
