const fs = require('fs');

let js = fs.readFileSync('public/thejacketmaker/js/custom.js', 'utf8');

// Update nextArrow and prevArrow in custom.js for quotes-carousel
const oldNext = 'nextArrow:\'<button type="button" data-role="none" class="slick-next-custom slick-arrow" aria-label="Next" role="button"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-right"></use></svg></button>\'';
const newNext = 'nextArrow:\'<button type="button" data-role="none" class="slick-next-custom slick-arrow" aria-label="Next" role="button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>\'';

const oldPrev = 'prevArrow:\'<button type="button" data-role="none" class="slick-prev-custom slick-arrow" aria-label="Next" role="button"><svg class="svg-icon" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#reuse-arrow-thin-left"></use></svg></button>\'';
const newPrev = 'prevArrow:\'<button type="button" data-role="none" class="slick-prev-custom slick-arrow" aria-label="Previous" role="button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>\'';

if (js.includes(oldNext)) {
  js = js.replace(oldNext, newNext);
  console.log('Replaced nextArrow in custom.js');
}
if (js.includes(oldPrev)) {
  js = js.replace(oldPrev, newPrev);
  console.log('Replaced prevArrow in custom.js');
}

fs.writeFileSync('public/thejacketmaker/js/custom.js', js, 'utf8');
