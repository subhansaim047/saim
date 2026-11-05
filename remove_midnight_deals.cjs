const fs = require('fs');
const file = 'public/burger-garage/index.html';
const content = fs.readFileSync(file, 'utf8');

const startMarker = '<!-- Special Deals Section Start -->';
const endMarker = '<!-- Special Deals Section End -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const newContent = content.substring(0, startIndex) + content.substring(endIndex + endMarker.length);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Removed Midnight Deals section.");
} else {
    console.log("Could not find section markers.");
}
