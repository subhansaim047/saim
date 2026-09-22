const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/<span style="font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 400; color: #fcc332; display: block; margin-top: 10px; letter-spacing: 1px;">Taste the Best Pizza in Daska!<\/span>/g, '');
    
    content = content.replace(/<meta property="og:description" content="Taste the Best Pizza in Daska!">/g, '<meta property="og:description" content="ANZAAR Rooftop Luxury Dining Experience">');

    fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Footer text and og tags removed!");
