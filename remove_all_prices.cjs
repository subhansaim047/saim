const fs = require('fs');
const path = require('path');

const directory = 'public/burger-garage';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            // Remove $240.00
            content = content.replace(/>\$240\.00</g, '><');
            // Remove $240
            content = content.replace(/>\$240</g, '><');
            fs.writeFileSync(fullPath, content);
        }
    }
}

processDirectory(directory);
console.log('Removed $240.00 and $240 from all HTML files.');
