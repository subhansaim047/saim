const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);

    // We inserted the logo div just before [data-id="0476c93"].
    // Let's find the logo div and insert the text after it.
    
    const textHtml = `
    <div class="elementor-element elementor-widget elementor-widget-pbmit_custom_heading pbmit-hero-text-pizzabox" style="margin-bottom: 20px;">
        <div class="elementor-widget-container">
            <div class="pbmit-custom-heading -align animation-style1">
                <h2 class="pbmit-element-title" style="font-family: 'Luckiest Guy', cursive; font-weight: normal; font-style: normal; text-transform: uppercase; font-size: 110px; line-height: 1; white-space: nowrap; color: #fff;">Pizza Box</h2>
            </div>
        </div>
    </div>
    `;

    // Wait, the previous text was probably white since it was over a background image/color. The template CSS usually handled the color. I've explicitly added color: #fff just in case, or I can omit it and rely on the inherited color. Let's omit it or check what was there. I'll just use the exact previous inline style: font-family: 'Luckiest Guy', cursive; font-weight: normal; font-style: normal; text-transform: uppercase; font-size: 110px; line-height: 1; white-space: nowrap;

    // Actually, I can insert it right before the button section `[data-id="0476c93"]`.
    
    // Check if we already inserted it
    if ($('.pbmit-hero-text-pizzabox').length === 0) {
        if ($('[data-id="0476c93"]').length > 0) {
            $('[data-id="0476c93"]').before(textHtml);
            fs.writeFileSync(file, $.html());
            console.log(`Updated ${file}`);
        }
    } else {
        console.log('Text already exists.');
    }
};

updateFile('public/pizzabox/index.html');
