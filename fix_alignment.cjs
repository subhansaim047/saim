const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

css = css.replace(/left: 0;\s*right: 0;\s*margin: 0 auto;/g, `
    left: 50%;
    margin-left: -180px; /* Aligns their left edges at a common point near center */
`);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('CSS updated to left-align the images.');
