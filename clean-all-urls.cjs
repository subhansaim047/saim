const fs = require('fs');
const path = require('path');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace all remaining dilicious-demo.pbminfotech.com with fitbitepizza.com
    html = html.replace(/dilicious-demo\.pbminfotech\.com\/pizza/g, 'fitbitepizza.com');
    html = html.replace(/dilicious-demo\.pbminfotech\.com/g, 'fitbitepizza.com');
    
    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Deep cleaned URLs in ${file}`);
});
