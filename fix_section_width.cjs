const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);
    
    const section = $('.elementor-element-2e9539b');
    if (section.length > 0) {
        // Just remove the inline style that might constrain it
        section.removeAttr('style');
        
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    } else {
        console.log('Section not found');
    }
};

updateFile('public/pizzabox/index.html');
