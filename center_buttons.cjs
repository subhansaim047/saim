const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // Center the buttons section
    const buttonsSection = $('[data-id="becee15"]');
    if (buttonsSection.length > 0) {
        buttonsSection.find('.elementor-widget-wrap').css('justify-content', 'center');
    }
    
    fs.writeFileSync(file, $.html());
    console.log(`Updated ${file}`);
};

updateFile('public/pizzabox/index.html');
