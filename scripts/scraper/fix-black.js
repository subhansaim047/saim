const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    $('#colophon').attr('style', 'background-color: #000000 !important; background-image: none !important;');
    $('.pbmit-footer-section').attr('style', 'background-color: #000000 !important; background-image: none !important;');
    $('.pbmit-footer-big-area-wrapper').attr('style', 'background-color: #000000 !important; background-image: none !important;');
    
    fs.writeFileSync(p, $.html());
    console.log('Fixed background for', f);
});
