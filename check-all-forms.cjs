const fs = require('fs');
const cheerio = require('cheerio');
const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const html = fs.readFileSync(dir + file, 'utf8');
    const $ = cheerio.load(html);
    $('form').each((i, el) => {
        let action = $(el).attr('action');
        console.log(`[${file}] Form action: ${action}`);
    });
});
