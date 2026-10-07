const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/pizzabox/**/*.{html,js,css}');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace "/frenchyse/" paths with "/pizzabox/"
    content = content.replace(/\/frenchyse\//g, '/pizzabox/');
    
    // Replace "frenchyse.com" with "pizzabox.com"
    content = content.replace(/frenchyse\.com/g, 'pizzabox.com');
    
    // Replace text "Frenchyse" with "Pizza Box"
    content = content.replace(/Frenchyse/g, 'Pizza Box');
    
    // Replace lower case "frenchyse" with "pizza box" (except paths which are already handled)
    content = content.replace(/\bfrenchyse\b/g, 'pizza box');
    
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Renamed frenchyse to pizza box in " + files.length + " files.");
