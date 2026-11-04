const fs = require('fs');

const css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

let idx = 0;
while ((idx = css.indexOf('.logo-area', idx)) !== -1) {
  console.log(`--- Match at ${idx} ---`);
  console.log(css.slice(Math.max(0, idx - 50), Math.min(css.length, idx + 300)));
  idx += 10;
}
