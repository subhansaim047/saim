const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // 1. Image alignment
    const imgWrapper = $('.elementor-widget-image[style*="margin-bottom: 0px; text-align: left; margin-top: -40px;"]');
    if (imgWrapper.length > 0) {
        // We'll wrap the image and text in a flex container so they center relative to each other, 
        // but remain left aligned in the column.
        imgWrapper.css('text-align', 'center');
    } else {
        // Try fallback
        $('.elementor-element-e8a2a75').find('img[src="/pizzabox/images/hero-chicken.png"]').closest('.elementor-widget-image').css('text-align', 'center');
    }

    // 2. Text alignment and move up
    const textWrapper = $('.pbmit-hero-text-pizzabox');
    if (textWrapper.length > 0) {
        textWrapper.css('text-align', 'center');
        textWrapper.css('margin-top', '-20px'); // move text up slightly
    }
    
    fs.writeFileSync(file, $.html());
    console.log(`Updated ${file}`);
};

updateFile('public/pizzabox/index.html');
