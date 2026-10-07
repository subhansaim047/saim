const fs = require('fs');
const file = 'public/pizzabox/about-us.html';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\/pizzabox\/videos\/about-pizzabox\.mp4/g, '/frenchyse/videos/about-frenchyse.mp4');
fs.writeFileSync(file, content, 'utf8');
console.log("Updated video link");
