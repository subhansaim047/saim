const fs = require('fs');

const file = 'public/fitbitepizza/index.html';
let content = fs.readFileSync(file, 'utf8');

// Update Box 2 (Burger)
content = content.replace(/Italian <br> Food/g, 'Juicy <br> Burger');
content = content.replace(/img-08-3\.png/g, 'burger-promo.png');

// Update Box 3 (Pasta)
content = content.replace(/Hottest  <br> Pizza/g, 'Creamy <br> Pasta');
content = content.replace(/img-09-3\.png/g, 'pasta-promo.png');

fs.writeFileSync(file, content, 'utf8');
console.log('Promotional boxes updated!');
