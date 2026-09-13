const fs = require('fs');
const cheerio = require('cheerio');

const indexHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $idx = cheerio.load(indexHtml, { decodeEntities: false });

let menuSectionHtml = null;
$idx('.elementor-top-section').each((i, el) => {
    const txt = $idx(el).text().toLowerCase();
    if (txt.includes('pizzas') && txt.includes('fitbite special')) {
        // Outer HTML equivalent in cheerio
        menuSectionHtml = $idx.html($idx(el)); 
    }
});

if (menuSectionHtml) {
    const menuHtml = fs.readFileSync('public/demos/dilicious-pizza/menu.html', 'utf8');
    let $m = cheerio.load(menuHtml, { decodeEntities: false });
    
    const contentDiv = $m('div.entry-content');
    if (contentDiv.length) {
        contentDiv.empty();
        contentDiv.append(menuSectionHtml);
        fs.writeFileSync('public/demos/dilicious-pizza/menu.html', $m.html());
        console.log("Successfully fixed the menu in menu.html!");
    }
}
