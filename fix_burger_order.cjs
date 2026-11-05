const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

// Replace the previous block
css = css.replace(/\.burger-part-1 \{ top: 0%; z-index: 8; \}[\s\S]*?\.burger-part-8 \{ top: 88%; z-index: 1; \}/g, `
.burger-part-8 { top: 0%; z-index: 8; }
.burger-part-7 { top: 12%; z-index: 7; }
.burger-part-6 { top: 25%; z-index: 6; }
.burger-part-5 { top: 38%; z-index: 5; }
.burger-part-4 { top: 50%; z-index: 4; }
.burger-part-3 { top: 62%; z-index: 3; }
.burger-part-2 { top: 75%; z-index: 2; }
.burger-part-1 { top: 88%; z-index: 1; }
`);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('CSS updated to put part-08 at the top and part-01 at the bottom.');
