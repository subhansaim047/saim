const fs = require('fs');
let html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');

// Replace >FitBite< with >ANZAAR<
html = html.replace('>FitBite<', '>ANZAAR<');
// Replace >Pizza< with >Rooftop< (only the first one which is in hero)
html = html.replace('>Pizza<', '>Rooftop<');

fs.writeFileSync('public/fitbitepizza/index.html', html, 'utf8');
console.log('Fixed!');
