const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove the pizza parallax and all floating ingredients in the hero section
    const $ = cheerio.load(content, { decodeEntities: false });

    // The hero section is data-id="e8a2a75"
    const heroSection = $('section[data-id="e8a2a75"]');
    
    if (heroSection.length) {
        // Remove all tween effect widgets inside the hero section (this is the pizza + ingredients)
        heroSection.find('.elementor-widget-pbmit_tween_effect_element').remove();
        console.log('Removed floating pizza and ingredients.');

        // Remove the overlay if it's hiding the background image too much
        heroSection.find('.elementor-background-overlay').remove();
    }

    fs.writeFileSync(file, $.html());
    console.log('Updated HTML via Cheerio.');
};

updateFile('public/pizzabox/index.html');
