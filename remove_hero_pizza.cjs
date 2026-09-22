const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const $ = cheerio.load(html);

// Find the column that contains the pizza images
const pizzaColumn = $('.elementor-element-8a3f06d');
if (pizzaColumn.length > 0) {
    // The pizza column is inside a custom section we created.
    // Let's just remove that entire section!
    const customSection = pizzaColumn.closest('section.elementor-section-boxed');
    if (customSection.length > 0) {
        customSection.remove();
        console.log("Removed the custom pizza section!");
    }
} else {
    console.log("Could not find the pizza column.");
}

fs.writeFileSync('public/fitbitepizza/index.html', $.html(), 'utf8');
