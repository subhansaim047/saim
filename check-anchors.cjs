const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);
$('a').each((i, el) => {
    console.log($(el).attr('href'));
});
