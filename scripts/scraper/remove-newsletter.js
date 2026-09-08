const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const p = path.join(dir, 'index.html');
let html = fs.readFileSync(p, 'utf8');

const $ = cheerio.load(html, { decodeEntities: false });

$('.pbmit-element-subtitle').each(function() {
    if ($(this).text().includes('Our Newsletter')) {
        let section = $(this).closest('.elementor-top-section');
        if (section.length) {
            section.remove();
            console.log('Removed newsletter');
        }
    }
});

fs.writeFileSync(p, $.html());
