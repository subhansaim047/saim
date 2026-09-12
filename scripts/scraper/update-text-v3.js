const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Right Side - Update Text
const headingWidget = $('.elementor-element-14c8f3f');
if (headingWidget.length) {
    console.log("Heading HTML Before:", headingWidget.html());
    
    // Replace the entire inner HTML of the heading widget to be safe, retaining the structure
    headingWidget.html(`
        <div class="elementor-widget-container">
            <div class="pbmit-heading-subheading animation-style1">
                <h2 class="pbmit-title" style="font-size: 38px; line-height: 1.2; font-weight: 800; color: #282932; margin-bottom: 20px;">
                    Hamza Illyas &mdash; Vision Behind FitBite Pizza
                </h2>
            </div>
        </div>
    `);
}

const descWidget = $('.elementor-element-be99f75');
if (descWidget.length) {
    console.log("Desc HTML Before:", descWidget.html());
    
    descWidget.html(`
        <div class="elementor-widget-container">
            <div class="elementor-text-editor elementor-clearfix" style="font-size: 16px; line-height: 1.8; color: #666; margin-bottom: 30px;">
                <p>“Driven by passion and a commitment to quality, Hamza Illyas founded FitBite Pizza to bring great flavors, fresh ingredients, and outstanding customer experiences to every table.”</p>
            </div>
        </div>
    `);
}

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log('Updated about section text properly!');
