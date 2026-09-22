const fs = require('fs');
const html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes('loader') || lines[i].toLowerCase().includes('loading')) {
        if (!lines[i].includes('loading="lazy"')) {
            console.log(`Line ${i+1}: ${lines[i].substring(0, 150)}`);
        }
    }
}
