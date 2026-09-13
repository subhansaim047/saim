const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html, { decodeEntities: false });

$('sr7-layer').each((i, el) => {
    console.log($(el).text().trim());
});
