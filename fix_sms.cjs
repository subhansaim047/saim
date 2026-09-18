const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let files = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            files = files.concat(walkDir(fullPath));
        } else if (fullPath.endsWith('.tsx')) {
            files.push(fullPath);
        }
    });
    return files;
}

const files = walkDir('src/components');

files.forEach(file => {
    if (file.includes('BlogPost1Page') || file.includes('FooterSection') || file.includes('SocialIcons')) return;
    
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    content = content.replace(/https:\/\/wa.me\/447473962953/g, 'sms:+447473962953');
    content = content.replace(/WhatsApp/g, 'SMS');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated: ' + path.basename(file));
    }
});
