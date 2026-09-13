const fs = require('fs');
const path = require('path');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace anything that looks like the demo URL
    html = html.replace(/https:\/\/dilicious-demo\.pbminfotech\.com\/pizza\/cart\//g, '#');
    html = html.replace(/https:\\\/\\\/dilicious-demo\.pbminfotech\.com\\\/pizza\\\/wp-admin\\\/admin-ajax\.php/g, '#');
    html = html.replace(/https:\/\/dilicious-demo\.pbminfotech\.com\/pizza\/wp-admin\/admin-ajax\.php/g, '#');
    html = html.replace(/https:\/\/dilicious-demo\.pbminfotech\.com\/pizza\/wp-json\//g, '#');
    html = html.replace(/https:\/\/dilicious-demo\.pbminfotech\.com\/pizza\/wp-content\/[^'"]+/g, '#');
    html = html.replace(/https:\\\/\\\/dilicious-demo\.pbminfotech\.com\\\/pizza\\\/[^'"]+/g, '#');
    html = html.replace(/https:\/\/dilicious-demo\.pbminfotech\.com\/pizza\/[^'"]+/g, '#');
    
    // Also catch bare domain
    html = html.replace(/https:\/\/dilicious-demo\.pbminfotech\.com\/pizza/g, '#');

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Deep cleaned ${file}`);
});
