const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

css = css.replace(/\.burger-part-8 \{ top: 0%; z-index: 8; \}[\s\S]*?\.burger-part-1 \{ top: 88%; z-index: 1; \}/g, `
.burger-part-8 { top: 0px; z-index: 8; }
.burger-part-7 { top: 40px; z-index: 7; }
.burger-part-6 { top: 70px; z-index: 6; }
.burger-part-5 { top: 100px; z-index: 5; }
.burger-part-4 { top: 130px; z-index: 4; }
.burger-part-3 { top: 170px; z-index: 3; }
.burger-part-2 { top: 210px; z-index: 2; }
.burger-part-1 { top: 240px; z-index: 1; }
`);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('CSS updated to assemble burger naturally with pixels.');
