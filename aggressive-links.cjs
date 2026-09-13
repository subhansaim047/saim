const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const allowedLinks = [
    '/demos/dilicious-pizza/',
    '/demos/dilicious-pizza/index.html',
    '/demos/dilicious-pizza/about-us.html',
    '/demos/dilicious-pizza/menu.html',
    '/demos/dilicious-pizza/contact-us.html',
    '/demos/dilicious-pizza/our-services.html',
    'https://maps.app.goo.gl/kFmcAnKRcsX2MogU9',
    'https://www.facebook.com/p/FIT-BITE-PIZZA-100063928218830/'
];

files.forEach(file => {
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    let modified = false;

    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href) {
            href = href.trim();
            if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#')) {
                // Allowed
                return;
            }
            if (!allowedLinks.includes(href)) {
                // Not in allowed links, replace with #
                console.log(`Replacing bad link in ${file}: ${href}`);
                $(el).attr('href', '#');
                modified = true;
            }
        }
    });

    if (modified) {
        fs.writeFileSync(path.join(dir, file), $.html());
        console.log(`Saved fixes in ${file}`);
    }
});
