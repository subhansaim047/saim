const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/pizzabox/**/*.{html,js,css}');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/frenchys-logo/g, 'pizzabox-logo');
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Renamed frenchys-logo to pizzabox-logo in " + files.length + " files.");
