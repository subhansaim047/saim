const fs = require('fs');
const html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html, { decodeEntities: false });

const headings = $('.elementor-element-e8a2a75 .pbmit-custom-heading .pbmit-element-title');

headings.each((i, el) => {
    const text = $(el).text().trim();
    if (text === 'FitBite' || text === 'Pizza') {
        console.log(`Found ${text} at index ${i}`);
        // Let's adjust the style to ensure it fits and doesn't break poorly.
        $(el).attr('style', "font-family: 'Luckiest Guy', cursive; font-weight: normal; font-style: normal; text-transform: uppercase; font-size: 110px; line-height: 1; white-space: nowrap;");
    }
});

fs.writeFileSync('public/fitbitepizza/index.html', $.html());
console.log("Updated heading styles in index.html");
