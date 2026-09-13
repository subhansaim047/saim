const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    $('form').each((i, el) => {
        const action = $(el).attr('action');
        if (action && action.includes('pbminfotech.com')) {
            console.log(`${file} has external form action: ${action}`);
            // Let's just replace it with #
            $(el).attr('action', '#');
            fs.writeFileSync(path.join(dir, file), $.html());
            console.log(`Replaced form action in ${file}`);
        }
    });
});
