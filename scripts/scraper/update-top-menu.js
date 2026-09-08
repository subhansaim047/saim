const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const topMenuHtml = `
<li class="menu-item"><a href="/demos/dilicious-pizza/">Home</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/about-us/">About Us</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/menu/">Menu</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/reservation/">Reservation</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/our-services/">Our Services</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/our-team/">Our Team</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/contact-us/">Contact Us</a></li>
`;

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // Update top menu links
    $('#pbmit-top-menu').html(topMenuHtml);
    
    // PBM Dock remove
    $('#pbmdock-main').remove();

    fs.writeFileSync(p, $.html());
    console.log('Updated top menu for', f);
});
