const fs = require('fs');
const glob = require('glob');
const cheerio = require('cheerio');

const files = glob.sync('public/frenchyse/*.html');
let imagesAdded = 0;

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html, { recognizeSelfClosing: true, decodeEntities: false });
    
    let modified = false;
    $('img').each((i, el) => {
        if (!$(el).attr('loading')) {
            $(el).attr('loading', 'lazy');
            modified = true;
            imagesAdded++;
        }
    });
    
    $('iframe').each((i, el) => {
        if (!$(el).attr('loading')) {
            $(el).attr('loading', 'lazy');
            modified = true;
        }
    });

    if (modified) {
        fs.writeFileSync(file, $.html(), 'utf8');
    }
});
console.log("Added lazy to " + imagesAdded + " images.");
