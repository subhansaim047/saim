const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    let modified = false;

    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href) {
            if (href === 'https://dilicious-demo.pbminfotech.com/pizza/' || href === 'https://dilicious-demo.pbminfotech.com/pizza') {
                $(el).attr('href', '/demos/dilicious-pizza/index.html');
                modified = true;
            } else if (href === 'https://dilicious-demo.pbminfotech.com/pizza/menu/' || href === 'https://dilicious-demo.pbminfotech.com/burger/menu/') {
                $(el).attr('href', '/demos/dilicious-pizza/menu.html');
                modified = true;
            } else if (href.includes('pbminfotech.com')) {
                // Any other random demo link goes to home
                $(el).attr('href', '/demos/dilicious-pizza/index.html');
                modified = true;
            }
        }
    });

    if (modified) {
        fs.writeFileSync(path.join(dir, file), $.html());
        console.log(`Replaced bad links in ${file}`);
    }
});
