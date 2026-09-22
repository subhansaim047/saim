const fs = require('fs');

let html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');

// 1. Remove the custom colors I injected
const styleTag = "<style>:root { --pbmit-dilicious-global-color: #D8B27A !important; --pbmit-dilicious-secondary-color: #171411 !important; --pbmit-dilicious-blackish-color: #2B1C16 !important; --pbmit-dilicious-light-bg-color: #F8F2E8 !important; }</style>";
html = html.replace(styleTag, "");

// Write it back
fs.writeFileSync('public/fitbitepizza/index.html', html, 'utf8');

// Also do it for other files
const files = fs.readdirSync('public/fitbitepizza').filter(f => f.endsWith('.html'));
for (const file of files) {
   let content = fs.readFileSync('public/fitbitepizza/' + file, 'utf8');
   content = content.replace(styleTag, "");
   fs.writeFileSync('public/fitbitepizza/' + file, content, 'utf8');
}
console.log("Colors reverted.");

// 2. Move pizza section
html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');

const heroStart = html.indexOf('<section class="elementor-section elementor-top-section elementor-element elementor-element-e8a2a75');
let heroEnd = html.indexOf('</section>', heroStart);
while (true) {
    // we need to find the matching closing tag for the hero section
    // but elementor sections might have nested sections.
    // Let's just find the next top-section
    break;
}

const nextTopSection = html.indexOf('<section class="elementor-section elementor-top-section', heroStart + 100);
console.log('Next top section is at:', nextTopSection);

const pizzaStart = html.indexOf('<section class="elementor-section elementor-top-section elementor-element elementor-element-8c248e2');
const afterPizzaTopSection = html.indexOf('<section class="elementor-section elementor-top-section', pizzaStart + 100);

if (pizzaStart !== -1 && afterPizzaTopSection !== -1) {
    const pizzaSectionHTML = html.substring(pizzaStart, afterPizzaTopSection);
    const newHtml = html.substring(0, pizzaStart) + html.substring(afterPizzaTopSection);
    
    // Now insert pizzaSectionHTML right before nextTopSection
    // But wait, the original string changed.
    const newNextTop = newHtml.indexOf('<section class="elementor-section elementor-top-section', heroStart + 100);
    const finalHtml = newHtml.substring(0, newNextTop) + pizzaSectionHTML + newHtml.substring(newNextTop);
    
    fs.writeFileSync('public/fitbitepizza/index.html', finalHtml, 'utf8');
    console.log("Moved pizza section!");
} else {
    console.log("Could not find pizza section.");
}

