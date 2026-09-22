const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza';
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    const htmlPath = path.join(dir, file);
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Find all stylesheet links
    const linkRegex = /<link\s+rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
    let match;
    let combinedCss = '';
    const linksToRemove = [];
    
    while ((match = linkRegex.exec(html)) !== null) {
        const fullTag = match[0];
        let href = match[1];
        
        // Only combine local CSS
        if (href.startsWith('/fitbitepizza/css/')) {
            const cssFilePath = path.join('public', href);
            if (fs.existsSync(cssFilePath)) {
                let cssContent = fs.readFileSync(cssFilePath, 'utf8');
                
                // check for media attribute
                const mediaMatch = fullTag.match(/media=["']([^"']+)["']/i);
                if (mediaMatch && mediaMatch[1] && mediaMatch[1].toLowerCase() !== 'all') {
                    cssContent = `@media ${mediaMatch[1]} {\n${cssContent}\n}\n`;
                }
                
                combinedCss += `/* --- ${href} --- */\n${cssContent}\n\n`;
                linksToRemove.push(fullTag);
            }
        }
    }
    
    if (linksToRemove.length > 0) {
        const combinedFileName = `combined_${file.replace('.html', '.css')}`;
        fs.writeFileSync(path.join(dir, 'css', combinedFileName), combinedCss, 'utf8');
        
        // Remove all old links
        linksToRemove.forEach(link => {
            html = html.replace(link, '');
        });
        
        // Insert new combined link in the head
        html = html.replace('</head>', `\n<link rel="stylesheet" href="/fitbitepizza/css/${combinedFileName}">\n</head>`);
        
        fs.writeFileSync(htmlPath, html, 'utf8');
        console.log(`Combined ${linksToRemove.length} CSS files for ${file}`);
    }
});
