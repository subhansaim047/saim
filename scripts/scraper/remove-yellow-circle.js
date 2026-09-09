const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Remove the huge-yellow-circle div that was wrongly injected
// It looks like: <div id="huge-yellow-circle" style="..."></div>
const before = html.length;
html = html.replace(/<div id="huge-yellow-circle"[^>]*>[\s\S]*?<\/div>/g, '');
const after = html.length;

if (before !== after) {
    console.log('Removed #huge-yellow-circle div. Chars removed:', before - after);
} else {
    console.log('#huge-yellow-circle not found or already removed');
}

fs.writeFileSync(indexPath, html);
console.log('Done!');
