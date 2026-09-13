const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    let $ = cheerio.load(html, { decodeEntities: false });
    
    let modified = false;

    // Remove Team Member sections
    const teamElements = $('.pbmit-ele-team');
    if (teamElements.length > 0) {
        teamElements.closest('.elementor-top-section').remove();
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(path.join(dir, file), $.html());
        console.log(`Removed team section from ${file}`);
    }
});
