const fs = require('fs');
const path = require('path');

const jsFile = 'public/fitbitepizza/js/gsap-animation.min.js';
let js = fs.readFileSync(jsFile, 'utf8');

// 1. Allow pbmit_tween_effect to run on mobile
js = js.replace('"(min-width: 1201px)":function(){pbmit_tween.forEach', '"(min-width: 1px)":function(){pbmit_tween.forEach');

// 2. Prevent ScrollTrigger from killing all animations on screens < 1200px
js = js.replace('ScrollTrigger.matchMedia({"(max-width: 1200px)":function(){ScrollTrigger.getAll().forEach(t=>t.kill())}});', '');

fs.writeFileSync(jsFile, js);
console.log('Fixed GSAP JS to enable animations on mobile!');
