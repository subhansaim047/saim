const fs = require('fs');
const cheerio = require('cheerio');

// Load index.html
let html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');

// 1. Revert colors
const styleTag = '<style>:root { --pbmit-dilicious-global-color: #D8B27A !important; --pbmit-dilicious-secondary-color: #171411 !important; --pbmit-dilicious-blackish-color: #2B1C16 !important; --pbmit-dilicious-light-bg-color: #F8F2E8 !important; }</style>';
html = html.replace(styleTag, '');

// Process other HTML files for color revert
const files = fs.readdirSync('public/fitbitepizza').filter(f => f.endsWith('.html'));
for (const file of files) {
   let content = fs.readFileSync('public/fitbitepizza/' + file, 'utf8');
   content = content.replace(styleTag, '');
   fs.writeFileSync('public/fitbitepizza/' + file, content, 'utf8');
}

const $ = cheerio.load(html);

// 2. Fix text in hero section
const heroSection = $('.elementor-element-e8a2a75');
heroSection.find('h2.pbmit-element-title').each((i, el) => {
    const text = $(el).text().trim();
    if (text === 'FitBite') {
        $(el).text('ANZAAR');
    } else if (text === 'Pizza') {
        $(el).text('Rooftop');
    }
});

// Fix video opacity
const video = heroSection.find('video');
if (video.length > 0) {
    let style = video.attr('style') || '';
    style = style.replace('opacity: 0.8;', 'opacity: 1; filter: brightness(0.8);');
    video.attr('style', style);
}

// 3. Move the pizza IN the hero section
// The column containing the pizza is elementor-element-8a3f06d
const pizzaColumn = heroSection.find('.elementor-element-8a3f06d');
if (pizzaColumn.length > 0) {
    // Remove the column from the hero section
    const pizzaHtml = $.html(pizzaColumn);
    pizzaColumn.remove();
    
    // Also, change the first column to take 100% width so text is centered or takes full width
    const textColumn = heroSection.find('.elementor-element-0dfb870');
    textColumn.removeClass('elementor-col-50').addClass('elementor-col-100');
    
    // Create a new section
    const newSection = `
    <section class="elementor-section elementor-top-section pbmit-bg-color-yes pbmit-elementor-bg-color-globalcolor elementor-section-boxed pbmit-bgcolor-yes" style="padding-top: 50px; padding-bottom: 50px;">
        <div class="elementor-container elementor-column-gap-no">
            ${pizzaHtml}
        </div>
    </section>
    `;
    
    // Insert new section immediately after the hero section
    heroSection.after(newSection);
}

// Ensure the other GSAP section is NOT moved (since we reverted the git history)
// so we don't need to do anything about the second GSAP section

fs.writeFileSync('public/fitbitepizza/index.html', $.html(), 'utf8');
console.log('Fixed everything with cheerio!');
