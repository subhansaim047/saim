const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/pizzabox/**/*.html');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/Frenchys/g, 'Pizza Box');
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Renamed Frenchys references.");
