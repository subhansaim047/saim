const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Header Logo
// The original styling had max-height. Since the image is a vertical screenshot, 
// we force a square aspect ratio and use object-fit: cover to crop out the white space.
const headerLogoStyle = 'width: 100px; height: 100px; object-fit: cover; border-radius: 50%; mix-blend-mode: multiply; transform: scale(1.2); transform-origin: center;';
$('.pbmit-main-logo').attr('style', headerLogoStyle);
$('.pbmit-sticky-logo').attr('style', headerLogoStyle);

// 2. Footer Logo
const footerLogoStyle = 'width: 180px; height: 180px; object-fit: cover; border-radius: 50%; mix-blend-mode: multiply; margin-bottom: 20px;';
$('img.pbmit-footer-logo').attr('style', footerLogoStyle);

// 3. Middle Box in Section 3
// The user wants it to match the size of the side boxes. The side boxes have a specific height (usually around 250px-300px).
// We'll create a container that matches the height and perfectly crops the logo to a circle.
const middleBoxContainer = $('.elementor-element-49061bb .elementor-widget-container');
if (middleBoxContainer.length) {
    middleBoxContainer.html(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; min-height: 280px;">
            <img src="/demos/dilicious-pizza/images/fitbite-logo.png" alt="FitBite Pizza Logo" style="width: 250px; height: 250px; object-fit: cover; border-radius: 50%; mix-blend-mode: multiply; box-shadow: 0px 10px 30px rgba(0,0,0,0.15);">
        </div>
    `);
}

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log("Logos updated with perfect circle cropping and larger sizes!");
