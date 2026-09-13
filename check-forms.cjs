const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

$('form').each((i, el) => {
    console.log(`Form action: ${$(el).attr('action')}`);
});
