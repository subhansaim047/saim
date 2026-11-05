const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

css = css.replace(/\.burger-part-1 \{ top: 0px; z-index: 8; \}[\s\S]*?\.burger-part \{[\s\S]*?\}/g, `
.burger-part-1 { top: 80px; z-index: 8; }
.burger-part-2 { top: 180px; z-index: 7; }
.burger-part-3 { top: 146px; z-index: 6; }
.burger-part-4 { top: 210px; z-index: 5; }
.burger-part-5 { top: 215px; z-index: 4; }
.burger-part-6 { top: 230px; z-index: 3; }
.burger-part-7 { top: 250px; z-index: 2; }
.burger-part-8 { top: 230px; z-index: 1; }

.burger-part {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: transform 0.1s linear;
}
`);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('CSS updated with exact Frenchyse pixel offsets.');
