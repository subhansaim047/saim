const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.match(/\.(html|css|js)$/)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('/fitbitepizza/')) {
                content = content.replace(/\/fitbitepizza\//g, '/anzaar/');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Replaced in ${fullPath}`);
            }
        }
    }
}

replaceInDir('public/anzaar');
console.log('Path replacement complete!');
