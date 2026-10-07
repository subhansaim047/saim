const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace padding manually in the CSS string
    html = html.replace('.elementor-element-e8a2a75 { /* Hero */\r\n      padding-top: 120px !important;\r\n      padding-bottom: 120px !important;\r\n    }', '.elementor-element-e8a2a75 { padding-top: 50px !important; padding-bottom: 30px !important; }');
    html = html.replace('.elementor-element-e8a2a75 { /* Hero */\n      padding-top: 120px !important;\n      padding-bottom: 120px !important;\n    }', '.elementor-element-e8a2a75 { padding-top: 50px !important; padding-bottom: 30px !important; }');

    const $ = cheerio.load(html);
    
    // Fix the logo image
    const logoImg = $('.elementor-element-e8a2a75').find('img[src="/pizzabox/images/hero-chicken.png"]');
    if (logoImg.length > 0) {
        logoImg.css('max-height', '320px');
    }

    // Fix the text below it
    const textBox = $('.pbmit-hero-text-pizzabox').find('h2');
    if (textBox.length > 0) {
        textBox.css('font-size', '60px'); 
    }
    
    fs.writeFileSync(file, $.html());
    console.log(`Updated ${file}`);
};

updateFile('public/pizzabox/index.html');
