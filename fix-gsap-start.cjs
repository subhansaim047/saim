const fs = require('fs');
const path = require('path');

const jsFile = 'public/fitbitepizza/js/gsap-animation.min.js';
let js = fs.readFileSync(jsFile, 'utf8');

// We need to override toppos on mobile to "top 50%" so the animation stays assembled
// until the element actually reaches the middle of the screen!

js = js.replace(/let toppos=box.getAttribute\('data-start-position'\);([\s\S]*?)let tl=gsap.timeline/, `
    let toppos=box.getAttribute('data-start-position');
    
    // OVERRIDE START POSITION ON MOBILE SO ELEMENTS STAY ASSEMBLED UNTIL CENTERED
    if (window.innerWidth < 768) {
        toppos = "60%"; // Wait until the top of the element hits 60% of the viewport height before flying apart
    }
    
    let tl=gsap.timeline`);

fs.writeFileSync(jsFile, js);
console.log('Fixed GSAP start position for mobile screens!');
