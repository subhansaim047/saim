const fs = require('fs');

const css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

const matches = css.match(/[^{}]*navigation__item[^{}]*\{[^}]*\}/gi);
console.log('Rules matching navigation__item:');
if (matches) {
  matches.forEach(m => {
    if (m.includes('hover') || m.includes('tier-2') || m.includes('display')) {
      console.log(m.trim());
    }
  });
}
