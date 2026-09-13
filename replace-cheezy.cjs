const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html, { decodeEntities: false });

const headings = $('.elementor-element-e8a2a75 .pbmit-custom-heading .pbmit-element-title');

headings.each((i, el) => {
    const text = $(el).text().replace(/\s+/g, '');
    console.log(`Heading ${i}: ${text}`);
});
