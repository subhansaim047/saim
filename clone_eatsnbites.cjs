const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content.replace(/\/cottage\//g, '/eats-n-bites/');
            newContent = newContent.replace(/Cottage/g, 'Eats n Bites');
            newContent = newContent.replace(/cottage/g, 'eats-n-bites');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log('Updated', fullPath);
            }
        }
    }
}
replaceInDir('public/eats-n-bites');
