const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // 1. Add Google Font if not exists
    if (!html.includes('family=Luckiest+Guy')) {
        html = html.replace('</head>', '\n<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">\n</head>');
    }
    
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // 2. Find the footer h2
    $('.pbmit-footer-left h2').each((i, el) => {
        // The HTML inside is something like: "A Moments Of Delivered <br> On Right Time &amp; Place <span>0301-1337766</span>"
        // Let's replace the text node parts.
        // Easiest is to rebuild the HTML of this element
        const phoneSpan = $(el).find('span').prop('outerHTML'); // Keep the phone span intact
        if (phoneSpan) {
            $(el).html(`<span style="font-family: 'Luckiest Guy', cursive; font-weight: normal; font-style: normal; text-transform: uppercase;">FitBite Pizza</span> ${phoneSpan}`);
        } else {
            $(el).html(`<span style="font-family: 'Luckiest Guy', cursive; font-weight: normal; font-style: normal; text-transform: uppercase;">FitBite Pizza</span>`);
        }
    });

    fs.writeFileSync(path.join(dir, file), $.html());
    console.log(`Updated ${file}`);
});
