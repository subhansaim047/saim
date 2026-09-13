const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8'));

// Check for columns/boxes in typical sections
const sections = $('section.elementor-top-section').toArray();
sections.forEach((sec, i) => {
    const $sec = $(sec);
    const cols = $sec.find('.elementor-container > .elementor-column');
    console.log(`Section ${i+1}: ID=${$sec.attr('data-id')} - Columns: ${cols.length}`);
    if (cols.length === 3) {
        console.log("   --> Found 3 columns! Text:");
        console.log($sec.text().replace(/\s+/g, ' ').trim().substring(0, 100));
    }
});
