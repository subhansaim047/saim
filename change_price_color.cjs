const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Change price color to black
    content = content.replace(/color: #D8B27A;/g, 'color: #000000;');

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Price color changed to black!");
