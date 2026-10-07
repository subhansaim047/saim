const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // Fix the text below it
    const textBox = $('.pbmit-hero-text-pizzabox').find('h2');
    if (textBox.length > 0) {
        textBox.css('font-size', '140px'); // Increase size significantly
    }
    
    fs.writeFileSync(file, $.html());
    console.log(`Updated ${file}`);
};

updateFile('public/pizzabox/index.html');
