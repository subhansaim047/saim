const fs = require('fs');

const file = 'public/burger-garage/index.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('"The taste here is always phenomenal. Whether it\'s lunch or a late-night craving, the quality never drops."', '"The flavors are incredible! Best burgers in town, hands down. Highly recommended for weekend hangouts."');

content = content.replace('"The taste here is always phenomenal. Whether it\'s lunch or a late-night craving, the quality never drops."', '"Consistency is key, and Burger Garage nails it every time. I always order their Midnight Deals!"');

fs.writeFileSync(file, content, 'utf8');
console.log("Updated index.html reviews text");
