const fs = require('fs');

const files = fs.readdirSync('public/fitbitepizza').filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(`public/fitbitepizza/${file}`, 'utf8');
    
    // Replace emails
    html = html.replace(/fitbitepizza@gmail\.com/gi, 'anzaarrooftop@gmail.com');
    html = html.replace(/info@fitbitepizza\.com/gi, 'info@anzaarrooftop.com');
    
    // Replace domains in meta tags
    html = html.replace(/https:\/\/fitbitepizza\.com/gi, 'https://anzaarrooftop.com');
    html = html.replace(/fitbitepizza\.com/gi, 'anzaarrooftop.com');

    // Replace the visible URL in the footer or contact page (if any)
    html = html.replace(/>www\.fitbitepizza\.com</gi, '>www.anzaarrooftop.com<');

    fs.writeFileSync(`public/fitbitepizza/${file}`, html, 'utf8');
});
console.log('Domain and emails replaced!');
