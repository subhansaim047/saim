const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // Empty the right column in the hero section
    const rightCol = $('[data-id="8a3f06d"] > .elementor-widget-wrap');
    if (rightCol.length > 0) {
        rightCol.empty();
        
        // Insert the new image
        rightCol.append(`
        <div class="elementor-element elementor-widget elementor-widget-image" style="display: flex; justify-content: center; align-items: center; height: 100%;">
            <div class="elementor-widget-container" style="text-align: center; width: 100%;">
                <img src="/pizzabox/images/hero-chicken.png" alt="Pizza Box Hero" style="max-width: 100%; height: auto; max-height: 600px; transform: scale(1.1); filter: drop-shadow(0px 20px 30px rgba(0,0,0,0.15)); animation: pulse 3s infinite;" />
            </div>
        </div>
        `);
        
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    } else {
        console.log('Right column not found');
    }
};

updateFile('public/pizzabox/index.html');
