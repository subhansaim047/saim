const fs = require('fs');

const filePath = 'public/demos/dilicious-pizza/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// Replace the text
html = html.replace('Our Pizza Do The Talking', 'Our Burger Do The Talking');
html = html.replace('0-800-433-5788', '0301-1337766');

fs.writeFileSync(filePath, html);
console.log("Updated index.html");
