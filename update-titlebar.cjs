const fs = require('fs');
const path = require('path');

const dir = 'public/demos/dilicious-pizza/';
const files = ['about-us.html', 'menu.html', 'our-services.html', 'contact-us.html'];

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // We can replace the class string or just add a style attribute
    html = html.replace(
        '<div class="pbmit-title-bar-wrapper', 
        '<div style="background-color: #000000 !important; background-image: none !important;" class="pbmit-title-bar-wrapper'
    );
    
    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated ${file}`);
});
