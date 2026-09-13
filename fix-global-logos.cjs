const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html'); // Index is already done, wait, better apply to all to be safe?
// Actually index is already manually edited. Let's just apply to all HTML files.

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    let $ = cheerio.load(html, { decodeEntities: false });

    let modified = false;

    // Header logos
    const mainLogo = $('.pbmit-main-logo');
    if (mainLogo.length) {
        mainLogo.attr('src', '/demos/dilicious-pizza/images/fitbite-logo.png');
        mainLogo.attr('style', 'max-height: 90px; width: auto;');
        modified = true;
    }

    const stickyLogo = $('.pbmit-sticky-logo');
    if (stickyLogo.length) {
        stickyLogo.attr('src', '/demos/dilicious-pizza/images/fitbite-logo.png');
        stickyLogo.attr('style', 'max-height: 70px; width: auto;');
        modified = true;
    }

    // Footer logo
    const footerLogo = $('img.pbmit-footer-logo');
    if (footerLogo.length) {
        footerLogo.attr('src', '/demos/dilicious-pizza/images/fitbite-logo.png');
        footerLogo.attr('style', 'max-height: 160px; width: auto; margin-bottom: 15px;');
        // Remove width/height attrs that might distort it
        footerLogo.removeAttr('width');
        footerLogo.removeAttr('height');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(path.join(dir, file), $.html());
        console.log(`Updated logos in ${file}`);
    }
});
