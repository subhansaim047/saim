const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace the image URLs in the deals section
    content = content.replace(/background: url\('\/pizzabox\/images\/pizza-04.webp'\)/g, "background: url('/pizzabox/images/deal-1.jpg')");
    content = content.replace(/background: url\('\/pizzabox\/images\/pizza_05.webp'\)/g, "background: url('/pizzabox/images/deal-2.jpg')");
    content = content.replace(/background: url\('\/pizzabox\/images\/pizza_06.webp'\)/g, "background: url('/pizzabox/images/deal-3.jpg')");
    
    fs.writeFileSync(file, content);
    console.log(`Updated images in ${file}`);
};

updateFile('public/pizzabox/index.html');
