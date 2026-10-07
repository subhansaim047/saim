const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove the floating pizza / chicken image
    const chickenBlockRegex = /<div class="elementor-element elementor-widget elementor-widget-image"[^>]*>[\s\S]*?<img src="\/pizzabox\/images\/hero-chicken\.png"[^>]*>[\s\S]*?<\/div>\s*<\/div>/g;
    
    if (content.match(chickenBlockRegex)) {
        content = content.replace(chickenBlockRegex, '');
        console.log('Removed the hero floating image.');
    } else {
        console.log('Could not find the hero floating image.');
    }

    // 2. Add the background image to the hero section
    // The hero section is data-id="e8a2a75"
    const heroSectionRegex = /(data-id="e8a2a75"[^>]*style=")(width:[^"]*)(")/;
    if (content.match(heroSectionRegex)) {
        content = content.replace(heroSectionRegex, "$1$2; background-image: url('/pizzabox/images/hero-bg-custom.jpg') !important; background-size: cover !important; background-position: center !important;$3");
        console.log('Added background image to hero section.');
    } else {
        console.log('Could not find the hero section style attribute to update.');
    }

    fs.writeFileSync(file, content);
};

updateFile('public/pizzabox/index.html');
