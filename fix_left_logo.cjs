const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace the specific logo path in the left column with the new one
    // The previous one was `<img src="/pizzabox/images/pizzabox-logo.png" alt="Pizza Box Logo" style="max-width: 100%; height: auto; max-height: 400px; object-fit: contain; filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1)); animation: fadeIn 1s;" />`
    // Let's replace `/pizzabox/images/pizzabox-logo.png` with `/pizzabox/images/hero-chicken.png` ONLY in the hero section (which is the first occurrence after body tag probably).
    // Let's use cheerio to be safe.
    
    const $ = cheerio.load(html);
    
    // We added the logo div with style="margin-bottom: 30px; text-align: left;"
    // We can just find the image whose src is "/pizzabox/images/pizzabox-logo.png" inside the hero section.
    // The hero section is `.elementor-element-e8a2a75`
    
    const logoImg = $('.elementor-element-e8a2a75').find('img[src="/pizzabox/images/pizzabox-logo.png"]');
    if (logoImg.length > 0) {
        logoImg.attr('src', '/pizzabox/images/hero-chicken.png');
        logoImg.css('max-height', '600px'); // Size bara krna hai
        logoImg.css('transform', 'scale(1.2)'); 
        logoImg.css('margin-top', '30px'); 
        logoImg.css('margin-bottom', '30px'); 
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    } else {
        console.log('Logo image not found in hero section');
    }
};

updateFile('public/pizzabox/index.html');
