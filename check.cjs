const fs = require('fs');
const cheerio = require('cheerio');
const indexHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $idx = cheerio.load(indexHtml, { decodeEntities: false });

let menuSectionHtml = null;
$idx('.elementor-top-section').each((i, el) => {
    const txt = $idx(el).text().toLowerCase();
    if (txt.includes('pizzas') && txt.includes('fitbite special')) {
        menuSectionHtml = $idx.html(el);
    }
});

console.log(menuSectionHtml ? menuSectionHtml.substring(0, 500) : "Not found!");
