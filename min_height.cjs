const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    const elfsightDiv = $('.elfsight-app-4d09a611-784d-450d-b59c-7627aaa679fd');
    if (elfsightDiv.length > 0) {
        elfsightDiv.css('min-height', '400px'); // Give it some minimum height to prevent large jumps
        
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    }
};

updateFile('public/pizzabox/index.html');
