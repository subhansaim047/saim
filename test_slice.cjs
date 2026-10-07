const fs = require('fs');
let content = fs.readFileSync('public/cottage/index.html', 'utf8');
const startToken = '<section class="elementor-section elementor-top-section elementor-element elementor-element-695454c';
let startIndex = content.indexOf(startToken);

let depth = 1;
let currentIndex = startIndex + 8;
while (currentIndex < content.length) {
    let nextOpen = content.indexOf('<section', currentIndex);
    let nextClose = content.indexOf('</section>', currentIndex);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        currentIndex = nextOpen + 8;
    } else {
        depth--;
        currentIndex = nextClose + 10;
        if (depth === 0) {
            break;
        }
    }
}
let endIndex = currentIndex;
console.log("Start:", startIndex, "End:", endIndex);
console.log("Old Content Length:", endIndex - startIndex);
