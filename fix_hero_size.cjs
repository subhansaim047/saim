const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);
    
    // Fix the logo image
    const logoImg = $('.elementor-element-e8a2a75').find('img[src="/pizzabox/images/hero-chicken.png"]');
    if (logoImg.length > 0) {
        logoImg.css('max-height', '450px');
        logoImg.css('transform', ''); // Remove scale
        logoImg.css('margin-top', ''); // Remove margin
        logoImg.css('margin-bottom', ''); // Remove margin
    }

    // Fix the text below it
    const textBox = $('.pbmit-hero-text-pizzabox').find('h2');
    if (textBox.length > 0) {
        textBox.css('font-size', '80px'); // Reduce from 110px to 80px
    }
    
    // Optionally reduce bottom margin of the logo wrapper
    const logoWrapper = logoImg.closest('.elementor-widget-image');
    if (logoWrapper.length > 0) {
        logoWrapper.css('margin-bottom', '10px'); // Reduce from 30px
    }

    // Ensure the container is aligned nicely
    const textWrapper = $('.pbmit-hero-text-pizzabox');
    if (textWrapper.length > 0) {
        textWrapper.css('margin-bottom', '10px'); // Reduce from 20px
    }

    fs.writeFileSync(file, $.html());
    console.log(`Updated ${file}`);
};

updateFile('public/pizzabox/index.html');
