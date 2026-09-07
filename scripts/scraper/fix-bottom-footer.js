const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // The bottom right footer menu
    $('.pbmit-footer-menu').html(`
        <li class="menu-item"><a href="/demos/dilicious-pizza/our-services/">Services</a></li>
    `);
    
    // Also remove the "Ac 2026" and fix the copyright text
    let copyrightText = $('.pbmit-footer-copyright-text-area');
    if (copyrightText.length) {
        copyrightText.html('© 2026 Dilicious Pizza, All Rights Reserved.');
    }
    
    fs.writeFileSync(p, $.html());
    console.log('Fixed bottom footer in', f);
});
