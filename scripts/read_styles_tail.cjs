const fs = require('fs');

const css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');
console.log('Last 2000 chars of styles.css:\n', css.slice(css.length - 2000));
