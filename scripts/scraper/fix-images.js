const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    
    // Fix srcset attributes
    html = html.replace(/srcset="images\//g, 'srcset="/demos/dilicious-pizza/images/');
    html = html.replace(/, images\//g, ', /demos/dilicious-pizza/images/');
    
    // Fix elementor settings JSON encoded paths if any
    html = html.replace(/&quot;images\\\//g, '&quot;/demos/dilicious-pizza/images\\/');
    
    // Fix any other url('images/...') in style attributes
    html = html.replace(/url\(['"]?images\//g, 'url(\'/demos/dilicious-pizza/images/');
    
    fs.writeFileSync(p, html);
    console.log('Fixed additional relative images in', f);
});
