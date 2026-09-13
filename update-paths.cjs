const fs = require('fs');
const path = require('path');

function replaceInDir(dir, searchRegex, replaceStr) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            replaceInDir(fullPath, searchRegex, replaceStr);
        } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.match(searchRegex)) {
                content = content.replace(searchRegex, replaceStr);
                fs.writeFileSync(fullPath, content);
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

// Replace in the current directory before moving
replaceInDir('public/demos/dilicious-pizza', /demos\/dilicious-pizza/g, 'fitbitepizza');
replaceInDir('public/demos/dilicious-pizza', /demos\\dilicious-pizza/g, 'fitbitepizza'); // Windows path case just in case
