const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Header Logo - Just let the PNG behave naturally!
const headerLogoStyle = 'max-height: 90px; width: auto;';
$('.pbmit-main-logo').attr('style', headerLogoStyle);

const stickyLogoStyle = 'max-height: 70px; width: auto;'; // Sticky header is usually smaller
$('.pbmit-sticky-logo').attr('style', stickyLogoStyle);

// 2. Footer Logo
const footerLogoStyle = 'max-height: 160px; width: auto; margin-bottom: 15px;';
$('img.pbmit-footer-logo').attr('style', footerLogoStyle);

// 3. Middle Box in Section 3
const middleBoxContainer = $('.elementor-element-49061bb .elementor-widget-container');
if (middleBoxContainer.length) {
    middleBoxContainer.html(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; min-height: 280px; padding: 10px;">
            <img src="/demos/dilicious-pizza/images/fitbite-logo.png" alt="FitBite Pizza Logo" style="max-height: 250px; max-width: 100%; width: auto; object-fit: contain;">
        </div>
    `);
}

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log("Logos restored to natural PNG rendering without forced cropping!");
