const fs = require('fs');
const file = 'public/fitbitepizza/index.html';
let content = fs.readFileSync(file, 'utf8');

const targetStyle = ' style="position: absolute !important; right: -10px !important; bottom: -20px !important; margin: 0 !important; display: block !important;"';

// Find all pbmit-ihbox-style-2 and remove the inline style on its child pbmit-ihbox-icon
const regex = /(<div class="pbmit-ihbox pbmit-ihbox-style-2">[\s\S]*?<div class="pbmit-ihbox-icon")\s+style="[^"]*"/g;
content = content.replace(regex, '$1');

// Let's also increase the margin-bottom of the heading to create the gap they requested.
// Current: style="font-size: 38px; line-height: 1.2; font-weight: 800; color: #282932; margin-bottom: 20px;"
// New: style="font-size: 38px; line-height: 1.2; font-weight: 800; color: #282932; margin-bottom: 40px;"
content = content.replace(
    /(<h2 class="pbmit-title" style="[^"]*margin-bottom: )20px(;".*?>\s*Afaq Ali)/,
    '$140px$2'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed overlapping icons and margin.');
