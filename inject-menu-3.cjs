const fs = require('fs');
const cheerio = require('cheerio');
const indexHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $idx = cheerio.load(indexHtml, { decodeEntities: false });

let menuSectionHtml = null;
$idx('section.elementor-top-section').each((i, el) => {
    const txt = $idx(el).text().toLowerCase();
    if (txt.includes('pizzas') && txt.includes('fitbite special')) {
        menuSectionHtml = $idx.html(el);
        const tag = el.tagName.toLowerCase();
        const attrs = Object.keys(el.attribs).map(k => `${k}="${el.attribs[k]}"`).join(' ');
        menuSectionHtml = `<${tag} ${attrs}>${$idx.html(el)}</${tag}>`;
    }
});

if (menuSectionHtml) {
    // We will completely replace the contents of the main elementor wrapper in menu.html
    const menuHtml = fs.readFileSync('public/demos/dilicious-pizza/menu.html', 'utf8');
    let $m = cheerio.load(menuHtml, { decodeEntities: false });
    
    // Find the primary entry-content div where elementor lives
    const contentDiv = $m('div.entry-content');
    if (contentDiv.length) {
        contentDiv.empty();
        contentDiv.append(menuSectionHtml);
        fs.writeFileSync('public/demos/dilicious-pizza/menu.html', $m.html());
        console.log("Successfully injected the menu to menu.html inside div.entry-content!");
    } else {
        console.log("div.entry-content not found in menu.html");
    }
} else {
    console.log("Could not find the menu section in index.html");
}
