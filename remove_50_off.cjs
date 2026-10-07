const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // Remove the 50% text widget
    $('[data-id="31624e7"]').remove();
    // Remove the background bubble image widget behind 50%
    $('[data-id="f89b155"]').remove();

    fs.writeFileSync(file, $.html());
    console.log(`Updated ${file}`);
};

updateFile('public/pizzabox/index.html');
