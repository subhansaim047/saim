const fs = require('fs');
const path = require('path');

const jsFile = 'public/fitbitepizza/js/gsap-animation.min.js';
let js = fs.readFileSync(jsFile, 'utf8');

// The original line was:
// let xpos_val=box.getAttribute('data-x-start'); ...
// We will replace it with logic that reduces the offsets on mobile screens

js = js.replace(/let xpos_val=box\.getAttribute\('data-x-start'\);([\s\S]*?)gsap\.set\(box/g, `
    let xpos_val=box.getAttribute('data-x-start');
    let xpose_val=box.getAttribute('data-x-end');
    let ypos_val=box.getAttribute('data-y-start');
    let ypose_val=box.getAttribute('data-y-end');
    let scale_x_val=box.getAttribute('data-scale-x-start');
    let scale_xe_val=box.getAttribute('data-scale-x-end');
    let skew_x_val=box.getAttribute('data-skew-x-start');
    let skew_xe_val=box.getAttribute('data-skew-x-end');
    let skew_y_val=box.getAttribute('data-skew-y-start');
    let skew_ey_val=box.getAttribute('data-skew-y-end');
    let rotation_x_val=box.getAttribute('data-rotate-x-start');
    let rotation_xe_val=box.getAttribute('data-rotate-x-end');
    
    // REDUCE OFFSETS ON MOBILE TO PREVENT EXPLOSION
    if (window.innerWidth < 768) {
        if (xpos_val) xpos_val = (parseFloat(xpos_val) * 0.35).toString();
        if (xpose_val) xpose_val = (parseFloat(xpose_val) * 0.35).toString();
        if (ypos_val) ypos_val = (parseFloat(ypos_val) * 0.35).toString();
        if (ypose_val) ypose_val = (parseFloat(ypose_val) * 0.35).toString();
    }
    gsap.set(box
`);

fs.writeFileSync(jsFile, js);
console.log('Fixed GSAP distance values for mobile screens!');
