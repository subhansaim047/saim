const fs = require('fs');
const files = fs.readdirSync('public/fitbitepizza').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(`public/fitbitepizza/${file}`, 'utf8');
    
    html = html.replace(/anzaarrooftop@gmail\.com/gi, 'anzaar@gmail.com');
    html = html.replace(/info@anzaarrooftop\.com/gi, 'info@anzaar.com');
    html = html.replace(/anzaarrooftop\.com/gi, 'anzaar.com');

    fs.writeFileSync(`public/fitbitepizza/${file}`, html, 'utf8');
});
console.log('Fixed to just anzaar');
