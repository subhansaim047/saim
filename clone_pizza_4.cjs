const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/pizzabox/**/*.html');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/about-frenchyse/g, 'about-pizzabox');
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Renamed about-frenchyse references.");
