const fs = require('fs');
const cheerio = require('cheerio');
const indexHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $idx = cheerio.load(indexHtml, { decodeEntities: false });

const menuSectionHTML = $idx('.elementor-element-e71b354').prop('outerHTML') || $idx('.elementor-element-e71b354').closest('section').prop('outerHTML');

if (menuSectionHTML) {
    const menuHtml = fs.readFileSync('public/demos/dilicious-pizza/menu.html', 'utf8');
    let $m = cheerio.load(menuHtml, { decodeEntities: false });
    
    // menu.html has multiple sections. Let's just remove everything inside div.elementor-1144 and replace it.
    // Wait, the title bar is outside it. 
    // Let's remove all elementor-top-sections inside .elementor-1144 and put just the menu section!
    $m('.elementor-1144').empty();
    $m('.elementor-1144').append(menuSectionHTML);
    
    fs.writeFileSync('public/demos/dilicious-pizza/menu.html', $m.html());
    console.log("Injected menu to menu.html safely.");
} else {
    console.log("Could not find menu section in index.html");
}
