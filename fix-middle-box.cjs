const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const middleBoxContainer = $('.elementor-element-49061bb .elementor-widget-container');
if (middleBoxContainer.length) {
    middleBoxContainer.html(`
        <div class="pbmit-ihbox pbmit-ihbox-style-3" style="display: flex; justify-content: center; align-items: center; height: 100%; min-height: 280px; padding: 10px; background-color: #0b0b0b; border-radius: 20px;">
            <img src="/demos/dilicious-pizza/images/fitbite-logo.png" alt="FitBite Pizza Logo" style="max-height: 200px; max-width: 100%; width: auto; object-fit: contain;">
        </div>
    `);
}

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log("Restored the background box for the middle logo!");
