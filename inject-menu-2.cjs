const fs = require('fs');
const cheerio = require('cheerio');
const indexHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $idx = cheerio.load(indexHtml, { decodeEntities: false });

let menuSectionHtml = null;
$idx('section.elementor-top-section, div.elementor-top-section').each((i, el) => {
    const txt = $idx(el).text().toLowerCase();
    if (txt.includes('pizzas') && txt.includes('fitbite special')) {
        menuSectionHtml = $idx.html(el);
        // We actually want the outerHTML of the elementor-top-section, but since it could be div or section, let's wrap it back in the same tag.
        const tag = el.tagName.toLowerCase();
        const attrs = Object.keys(el.attribs).map(k => `${k}="${el.attribs[k]}"`).join(' ');
        menuSectionHtml = `<${tag} ${attrs}>${$idx.html(el)}</${tag}>`;
    }
});

if (menuSectionHtml) {
    const menuHtml = fs.readFileSync('public/demos/dilicious-pizza/menu.html', 'utf8');
    let $m = cheerio.load(menuHtml, { decodeEntities: false });
    
    $m('div.page-content').empty();
    $m('div.page-content').append(menuSectionHtml);

    fs.writeFileSync('public/demos/dilicious-pizza/menu.html', $m.html());
    console.log("Injected successfully by replacing div.page-content!");
} else {
    console.log("Still not found.");
}
