const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');

    // Safe textual replacements
    html = html.replace(/Dilicious Pizza/g, 'FitBite Pizza');
    html = html.replace(/>Dilicious</g, '>FitBite<'); // Only replace in inner text, not class names
    html = html.replace(/title="Go to Dilicious\."/g, 'title="Go to FitBite."');

    // Add loading="lazy" to all images
    const $ = cheerio.load(html, { decodeEntities: false });
    
    let modified = false;
    $('img').each((i, el) => {
        if (!$(el).attr('loading')) {
            $(el).attr('loading', 'lazy');
            modified = true;
        }
    });

    // Update <title> format if it ends with FitBite Pizza
    $('title').each((i, el) => {
        let text = $(el).text();
        if (text.includes('Dilicious')) {
            $(el).text(text.replace('Dilicious', 'FitBite'));
            modified = true;
        }
    });

    if (modified) {
        html = $.html();
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Processed ${file}`);
});
