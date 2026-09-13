const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const headerLogoStyle = 'width: 110px; height: 110px; object-fit: cover; border-radius: 50%; transform: scale(1.2); transform-origin: center; box-shadow: 0px 4px 10px rgba(0,0,0,0.3);';
$('.pbmit-main-logo').attr('style', headerLogoStyle);
$('.pbmit-sticky-logo').attr('style', headerLogoStyle);

const footerLogoStyle = 'width: 200px; height: 200px; object-fit: cover; border-radius: 50%; margin-bottom: 20px; box-shadow: 0px 4px 15px rgba(0,0,0,0.3);';
$('img.pbmit-footer-logo').attr('style', footerLogoStyle);

const middleBoxContainer = $('.elementor-element-49061bb .elementor-widget-container');
if (middleBoxContainer.length) {
    middleBoxContainer.html(`
        <div style="display: flex; justify-content: center; align-items: center; height: 100%; min-height: 280px;">
            <img src="/demos/dilicious-pizza/images/fitbite-logo.png" alt="FitBite Pizza Logo" style="width: 260px; height: 260px; object-fit: cover; border-radius: 50%; box-shadow: 0px 10px 30px rgba(0,0,0,0.5);">
        </div>
    `);
}

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log("Logos updated with perfect circle cropping, larger sizes, and without multiply blend.");
