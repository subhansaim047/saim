const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the HTML
    content = content.replace(/<a href="tel:03011337766" class="floating-call-btn">[\s\S]*?<\/a>/g, '');
    
    // Remove the CSS block for the floating button
    content = content.replace(/<style>\s*\.floating-call-btn \{[\s\S]*?<\/style>/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Floating button removed!");
