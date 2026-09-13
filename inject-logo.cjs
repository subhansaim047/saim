const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Header Logos
$('.pbmit-main-logo').attr('src', '/demos/dilicious-pizza/images/fitbite-logo.png');
$('.pbmit-sticky-logo').attr('src', '/demos/dilicious-pizza/images/fitbite-logo.png');

// Make sure the header logo isn't way too massive
$('.pbmit-main-logo, .pbmit-sticky-logo').attr('style', 'max-height: 80px; width: auto; border-radius: 50%;');

// 2. Footer Logo
$('img.pbmit-footer-logo').attr('src', '/demos/dilicious-pizza/images/fitbite-logo.png');
$('img.pbmit-footer-logo').attr('style', 'max-height: 120px; width: auto; border-radius: 50%;');

// 3. Middle Box in Section 3
const middleBoxContainer = $('.elementor-element-49061bb .elementor-widget-container');
if (middleBoxContainer.length) {
    middleBoxContainer.html(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; padding: 20px;">
            <img src="/demos/dilicious-pizza/images/fitbite-logo.png" alt="FitBite Pizza Logo" style="max-width: 80%; border-radius: 50%; box-shadow: 0px 10px 30px rgba(0,0,0,0.5);">
        </div>
    `);
} else {
    console.log("Could not find middle box!");
}

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log("Replaced logos in header, footer, and middle box!");
