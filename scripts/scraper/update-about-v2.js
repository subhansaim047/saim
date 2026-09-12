const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Right Side - Update Text
const headingWidget = $('.elementor-element-14c8f3f');
if (headingWidget.length) {
    // Keep the "pbmit-heading-subheading" wrapper, update the title
    const titleText = headingWidget.find('.pbmit-title-text');
    if (titleText.length) {
        titleText.html('<strong>Hamza Illyas — Vision Behind FitBite Pizza</strong>');
    }
    // Remove the subtitle "Know About Us"
    headingWidget.find('.pbmit-subtitle').remove();
}

const descWidget = $('.elementor-element-be99f75');
if (descWidget.length) {
    const textEditor = descWidget.find('.elementor-text-editor');
    if (textEditor.length) {
        textEditor.html('<p>“Driven by passion and a commitment to quality, Hamza Illyas founded FitBite Pizza to bring great flavors, fresh ingredients, and outstanding customer experiences to every table.”</p>');
    }
}

// Remove the old quote block we added earlier
$('.hamza-quote-block').remove();

// 2. Left Side - Single Image
const leftColWrap = $('.elementor-element-ea959b7 > .elementor-widget-wrap');
if (leftColWrap.length) {
    // The left column has inner sections and multiple images. Let's clear it and put a single image widget.
    leftColWrap.empty();
    
    const singleImageHTML = `
    <div class="elementor-element elementor-widget elementor-widget-image" data-widget_type="image.default">
        <div class="elementor-widget-container" style="text-align: center;">
            <img src="images/hamza-ilyas.jpg" alt="Hamza Illyas" style="border-radius: 20px; max-width: 100%; height: auto; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        </div>
    </div>
    `;
    leftColWrap.append(singleImageHTML);
}

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log('Updated about section!');
