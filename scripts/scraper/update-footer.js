const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const footerMenuHtml = `
<li class="menu-item"><a href="/demos/dilicious-pizza/">Home</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/about-us.html">About Us</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/menu.html">Menu</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/reservation.html">Reservation</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/our-services.html">Our Services</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/our-team.html">Our Team</a></li>
<li class="menu-item"><a href="/demos/dilicious-pizza/contact-us.html">Contact Us</a></li>
`;

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // Make footer pure black
    if ($('#pure-black-footer').length === 0) {
        $('head').append('<style id="pure-black-footer">#colophon, .pbmit-footer-section, .pbmit-footer-big-area-wrapper, .pbmit-footer-widget-area { background-color: #000000 !important; background-image: none !important; }</style>');
    }

    // Update footer links
    $('#menu-company').html(footerMenuHtml);

    fs.writeFileSync(p, $.html());
    console.log('Updated footer for', f);
});
