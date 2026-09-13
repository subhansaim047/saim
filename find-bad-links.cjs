const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    let externalLinks = new Set();
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href) {
            // Find anything that goes outside our safe zones
            // Safe zones: tel:, #, /demos/dilicious-pizza/ (with specific pages), facebook, maps, google
            if (href.includes('dilicious-demo.pbminfotech.com')) {
                externalLinks.add(href);
            } else if (href.startsWith('http') && !href.includes('facebook') && !href.includes('maps')) {
                externalLinks.add(href);
            } else if (href.includes('/pizza/') || href.includes('reservation') || href.includes('our-team') || href.includes('blog')) {
                externalLinks.add(href);
            } else if (!href.startsWith('tel:') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                // Check if it's pointing to a valid page
                if (href !== '/demos/dilicious-pizza/' && 
                    href !== '/demos/dilicious-pizza/index.html' &&
                    href !== '/demos/dilicious-pizza/about-us.html' &&
                    href !== '/demos/dilicious-pizza/menu.html' &&
                    href !== '/demos/dilicious-pizza/contact-us.html' &&
                    href !== '/demos/dilicious-pizza/our-services.html') {
                    externalLinks.add(href);
                }
            }
        }
    });

    if (externalLinks.size > 0) {
        console.log(`\n--- ${file} ---`);
        externalLinks.forEach(link => console.log(link));
    }
});
