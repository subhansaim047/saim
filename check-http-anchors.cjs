const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

$('a').each((i, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('http') && !href.includes('facebook') && !href.includes('maps')) {
        console.log(`Found a tag with HTTP: ${href}`);
        console.log(`Class: ${$(el).attr('class')}`);
        console.log(`Text: ${$(el).text()}`);
        console.log(`---`);
    }
});
