const fs = require('fs');
const path = require('path');

const dir = 'public/demos/dilicious-pizza/';
const files = ['about-us.html', 'menu.html', 'our-services.html', 'contact-us.html'];

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Reverse previous change first to be safe
    html = html.replace('<div style="background-color: #000000 !important; background-image: none !important;" class="pbmit-title-bar-wrapper', '<div class="pbmit-title-bar-wrapper');
    
    // Now remove the background classes and add clean background-color style
    html = html.replace(
        '<div class="pbmit-title-bar-wrapper  pbmit-bg-color-globalcolor pbmit-bg-image-yes',
        '<div class="pbmit-title-bar-wrapper" style="background-color: #000000; background-image: none;"'
    );
    // Handle single space just in case
    html = html.replace(
        '<div class="pbmit-title-bar-wrapper pbmit-bg-color-globalcolor pbmit-bg-image-yes',
        '<div class="pbmit-title-bar-wrapper" style="background-color: #000000; background-image: none;"'
    );
    
    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated ${file}`);
});
