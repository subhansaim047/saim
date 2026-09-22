const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const fbRegex = /<ul class="pbmit-social-links">\s*<li class="pbmit-social-li pbmit-social-facebook.*?<\/li>\s*<\/ul>/g;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.match(fbRegex)) {
        content = content.replace(fbRegex, '');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
console.log('Done removing Facebook links.');
