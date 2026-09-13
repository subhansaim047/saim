const fs = require('fs');
const path = require('path');

const file = 'public/fitbitepizza/about-us.html';
let html = fs.readFileSync(file, 'utf8');

// Replace numinate classes to stop the broken JS counter animation on mobile
html = html.replace(/pbmit-number-rotate numinate/g, 'pbmit-number-rotate');

// Replace inner text with the target numbers so they are statically visible
html = html.replace(/>0<\/span><span class="pbmit-number-counter-suffix">k\+<\/span>/g, '>12</span><span class="pbmit-number-counter-suffix">k+</span>');
html = html.replace(/>0<\/span><span class="pbmit-number-counter-suffix">\+<\/span>/g, '>40</span><span class="pbmit-number-counter-suffix">+</span>');
html = html.replace(/>0<\/span><span class="pbmit-number-counter-suffix">%<\/span>/g, '>99</span><span class="pbmit-number-counter-suffix">%</span>');
html = html.replace(/data-appear-animation="animateDigits" data-from="0" data-to="[^"]*"/g, '');

fs.writeFileSync(file, html);
console.log('Fixed About Us stats counters');
