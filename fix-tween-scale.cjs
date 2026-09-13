const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Change transform: scale(0.4) !important; to apply to img so JS can still animate the wrapper
    html = html.replace('.pbmit_tween_effect_element {\n        transform: scale(0.4) !important;', '.pbmit_tween_effect_element img {\n        transform: scale(0.5) !important;');
    
    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated tween scale fix in ${file}`);
});
