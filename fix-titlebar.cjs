const fs = require('fs');
const path = require('path');

const dir = 'public/demos/dilicious-pizza/';
const files = ['about-us.html', 'menu.html', 'our-services.html', 'contact-us.html'];

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Fix the malformed HTML
    html = html.replace(
        '<div class="pbmit-title-bar-wrapper" style="background-color: #000000; background-image: none;" pbmit-titlebar-style-center">',
        '<div class="pbmit-title-bar-wrapper pbmit-titlebar-style-center" style="background-color: #000000; background-image: none;">'
    );
    // There might be a space before pbmit-titlebar-style-center
    html = html.replace(
        '<div class="pbmit-title-bar-wrapper" style="background-color: #000000; background-image: none;"  pbmit-titlebar-style-center">',
        '<div class="pbmit-title-bar-wrapper pbmit-titlebar-style-center" style="background-color: #000000; background-image: none;">'
    );
    
    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Fixed ${file}`);
});
