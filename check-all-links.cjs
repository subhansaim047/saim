const fs = require('fs');
const cheerio = require('cheerio');
const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const html = fs.readFileSync(dir + file, 'utf8');
    const $ = cheerio.load(html);
    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href && !href.startsWith('#') && !href.startsWith('tel') && !href.startsWith('/demos/') && !href.includes('facebook') && !href.includes('maps')) {
            console.log(`[${file}] Suspicious link: ${href}`);
        }
    });
});
