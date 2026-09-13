const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // Find the footer h2
    $('.pbmit-footer-left h2').each((i, el) => {
        // Find the second span which has the phone number
        const spans = $(el).find('span');
        if (spans.length >= 2) {
            // The first span is FitBite Pizza. The second span is the phone number.
            $(spans[1]).text('Taste the Best Pizza in Daska!');
        } else if (spans.length === 1) {
            // Just in case it got mixed up, check if the span contains the phone number
            if ($(spans[0]).text().includes('0301')) {
                $(spans[0]).text('Taste the Best Pizza in Daska!');
            }
        }
    });

    fs.writeFileSync(path.join(dir, file), $.html());
    console.log(`Updated caption in ${file}`);
});
