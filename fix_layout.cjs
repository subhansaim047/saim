const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

// Fix burger-exploding-wrapper - needs proper overflow visible & centered content
css = css.replace(
`.burger-exploding-wrapper {
    position: relative;
    width: 100%;
    min-height: 620px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 60px;
    overflow: visible;
}`,
`.burger-exploding-wrapper {
    position: relative;
    width: 100%;
    min-height: 620px;
    overflow: visible;
}`
);

// Fix yellow circle - center it exactly on the assembled burger
// Assembled burger: top=80px, bottom ~= 380px, center ~= 230px from wrapper top
// Circle is 430px tall => top to center the circle at 230px: top = 230 - 215 = 15px
// Horizontally: wrapper is 100%, circle 430px wide, so left = 50%, margin-left = -215px
css = css.replace(
`.burger-yellow-circle {
    position: absolute;
    width: 430px;
    height: 430px;
    background-color: #ffb200;
    border-radius: 50%;
    z-index: 1;
    top: 11px;
    left: 50%;
    transform: translateX(-50%);
}`,
`.burger-yellow-circle {
    position: absolute;
    width: 430px;
    height: 430px;
    background-color: #ffb200;
    border-radius: 50%;
    z-index: 1;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
}`
);

// Fix red ring - properly sized around yellow circle
css = css.replace(
`.burger-red-accents {
    position: absolute;
    width: 500px;
    height: 500px;
    z-index: 2;
    background: transparent;
    border-radius: 50%;
    border: 2px dashed #d42b2b;
    animation: rotateSlowly 25s linear infinite;
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
}`,
`.burger-red-accents {
    position: absolute;
    width: 500px;
    height: 500px;
    z-index: 2;
    background: transparent;
    border-radius: 50%;
    border: 2px dashed #d42b2b;
    animation: rotateSlowly 25s linear infinite;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
}`
);

// Fix burger-part z-index so they appear ABOVE the yellow circle
// The yellow circle is z-index: 1, parts need to be higher
css = css.replace(
`.burger-part-1 { top: 80px; z-index: 8; }
.burger-part-2 { top: 180px; z-index: 7; }
.burger-part-3 { top: 146px; z-index: 6; }
.burger-part-4 { top: 210px; z-index: 5; }
.burger-part-5 { top: 215px; z-index: 4; }
.burger-part-6 { top: 230px; z-index: 3; }
.burger-part-7 { top: 250px; z-index: 2; }
.burger-part-8 { top: 230px; z-index: 1; }`,
`.burger-part-1 { top: 80px; z-index: 18; }
.burger-part-2 { top: 180px; z-index: 17; }
.burger-part-3 { top: 146px; z-index: 16; }
.burger-part-4 { top: 210px; z-index: 15; }
.burger-part-5 { top: 215px; z-index: 14; }
.burger-part-6 { top: 230px; z-index: 13; }
.burger-part-7 { top: 250px; z-index: 12; }
.burger-part-8 { top: 230px; z-index: 11; }`
);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('CSS fixes applied!');
