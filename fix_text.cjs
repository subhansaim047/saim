const fs = require('fs');
const path = require('path');

const replacements = [
    [/Start Your Project on Instagram/g, 'Start Your Project on WhatsApp'],
    [/Start Project on Instagram/g, 'Start Project on WhatsApp'],
    [/Message Saim Dev on Instagram/g, 'Message Saim Dev on WhatsApp'],
    [/Open & Send Message on Instagram/g, 'Open & Send Message on WhatsApp'],
    [/Send Project Inquiry on Instagram/g, 'Send Project Inquiry on WhatsApp'],
    [/Chat on Instagram \(Instagram DM\)/g, 'Chat on WhatsApp'],
    [/Chat on Instagram/g, 'Chat on WhatsApp'],
    [/Direct Instagram Inquiry/g, 'Direct WhatsApp Inquiry'],
    [/Direct Instagram Access/g, 'Direct WhatsApp Access'],
    [/Instagram DM/g, 'WhatsApp'],
    [/Instagram Direct/g, 'WhatsApp'],
    [/Instagram & Live Chat/g, 'WhatsApp & Live Chat'],
    [/transmitted via Instagram/g, 'transmitted via WhatsApp'],
    [/Instagram App \/ Web/g, 'WhatsApp']
];

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
    
    replacements.forEach(([regex, replacement]) => {
        content = content.replace(regex, replacement);
    });
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated: ' + path.basename(file));
    }
});
