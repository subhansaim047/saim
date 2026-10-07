const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);
    
    // Fix the logo image
    const logoImg = $('.elementor-element-e8a2a75').find('img[src="/pizzabox/images/hero-chicken.png"]');
    if (logoImg.length > 0) {
        logoImg.css('max-height', '380px'); // Slightly bigger
    }

    // Fix the text below it
    const textBox = $('.pbmit-hero-text-pizzabox').find('h2');
    if (textBox.length > 0) {
        textBox.css('font-size', '100px'); // Much bigger, requested by user
    }
    
    // Adjust spacing between image and text
    const logoWrapper = logoImg.closest('.elementor-widget-image');
    if (logoWrapper.length > 0) {
        // We'll give it a negative bottom margin or zero so it sits closely, and maybe negative top margin to pull it up
        logoWrapper.css('margin-top', '-40px'); 
        logoWrapper.css('margin-bottom', '0px'); 
    }

    fs.writeFileSync(file, $.html());
    console.log(`Updated ${file}`);
};

updateFile('public/pizzabox/index.html');
