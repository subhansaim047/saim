const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const PHONE_NUM = '0301-1337766';
const PHONE_URI = 'tel:03011337766';

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // 1. Fix Contact Us Navigation Links
    // It currently is <li class="menu-item"><a href="tel:03011337766">Contact Us</a></li>
    // Replace it back to contact-us.html!
    // But what if it's currently <a href="tel:[PHONE]">Contact Us</a> ? We'll match that too.
    html = html.replace(/<li class="menu-item">\s*<a href="tel:[^"]*">\s*Contact Us\s*<\/a>\s*<\/li>/gi, '<li class="menu-item"><a href="/demos/dilicious-pizza/contact-us.html">Contact Us</a></li>');
    html = html.replace(/<li class="menu-item"><a href="tel:03011337766">Contact Us<\/a><\/li>/gi, '<li class="menu-item"><a href="/demos/dilicious-pizza/contact-us.html">Contact Us</a></li>');

    // Also fix the other nav menus to ensure they have .html extension if they don't!
    html = html.replace(/href="\/demos\/dilicious-pizza\/about-us\/"/g, 'href="/demos/dilicious-pizza/about-us.html"');
    html = html.replace(/href="\/demos\/dilicious-pizza\/menu\/"/g, 'href="/demos/dilicious-pizza/menu.html"');
    html = html.replace(/href="\/demos\/dilicious-pizza\/our-services\/"/g, 'href="/demos/dilicious-pizza/our-services.html"');

    // 2. Fix Header Phone Number
    // <span class="pbmit-header-button-text-2">1-800-700-600</span>
    html = html.replace(/1-800-700-600/g, PHONE_NUM);
    
    // Replace href="#" on that button with href="tel:03011337766"
    // We'll use Cheerio for this specific button to be safe
    let $ = cheerio.load(html, { decodeEntities: false });
    
    const headerBtn = $('.pbmit-header-button a');
    if (headerBtn.length) {
        headerBtn.attr('href', PHONE_URI);
    }

    fs.writeFileSync(path.join(dir, file), $.html());
    console.log(`Fixed nav and header in ${file}`);
});
