const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // Remove the Best Choice text section
    $('[data-id="430d15f"]').remove();
    // Remove Pizza Box text
    $('[data-id="c07c752"]').remove();
    // Remove Cafe text
    $('[data-id="326973e"]').remove();

    // The container of these elements was .elementor-element-0dfb870 > .elementor-widget-wrap
    // Or we can just insert before 0476c93
    
    const logoHtml = `
    <div class="elementor-element elementor-widget elementor-widget-image" style="margin-bottom: 30px; text-align: left;">
        <div class="elementor-widget-container">
            <img src="/pizzabox/images/pizzabox-logo.png" alt="Pizza Box Logo" style="max-width: 100%; height: auto; max-height: 400px; object-fit: contain; filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1)); animation: fadeIn 1s;" />
        </div>
    </div>
    `;

    // Wait, the alignment in the original template might be centered or left. Let's match the original. The original text was left aligned or centered?
    // In Frenchyse demo it's left aligned.

    if ($('[data-id="0476c93"]').length > 0) {
        $('[data-id="0476c93"]').before(logoHtml);
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    } else {
        console.log(`Target element not found in ${file}`);
    }
};

updateFile('public/pizzabox/index.html');
