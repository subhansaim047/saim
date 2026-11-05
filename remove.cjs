const fs = require('fs');
let content = fs.readFileSync('public/burger-garage/index.html', 'utf8');

const startTag = '<!-- Special Deals Section Start -->';
const endTag = '<!-- Special Deals Section End -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex);
    // Find the end of the endTag line
    const after = content.substring(endIndex + endTag.length);
    fs.writeFileSync('public/burger-garage/index.html', before + after);
    console.log('Removed successfully.');
} else {
    console.log('Not found.');
}
