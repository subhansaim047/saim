const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/pizzabox/**/*.{html,js,css}');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace "Frenchy's" with "Pizza Box"
    content = content.replace(/Frenchy's/g, 'Pizza Box');
    
    // Replace lower case "frenchy's" with "pizza box"
    content = content.replace(/frenchy's/g, 'pizza box');
    
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Renamed Frenchy's to Pizza Box in " + files.length + " files.");
