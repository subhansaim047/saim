const fs = require('fs');

const css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

function findCss(selector) {
  let idx = 0;
  while ((idx = css.indexOf(selector, idx)) !== -1) {
    console.log(`--- Match for ${selector} at ${idx} ---`);
    console.log(css.slice(Math.max(0, idx - 50), Math.min(css.length, idx + 400)));
    idx += selector.length;
  }
}

console.log('=== QUOTES CAROUSEL CSS ===');
findCss('quotes-carousel');
findCss('slick-prev-custom');
findCss('logo-list-content-wrap');
