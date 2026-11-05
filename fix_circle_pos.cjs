const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

// The burger assembled center is at ~226px from wrapper top.
// Circle is 430px tall, so center should be at 226px => top = 226 - 215 = 11px
// But we want circle slightly below center (like Frenchyse) so top ~ 50px
// Ring is 500px tall, same center logic => top = 226 - 250 = -24px -> about 20px

css = css.replace(
`.burger-yellow-circle {
    position: absolute;
    width: 430px;
    height: 430px;
    background-color: #ffb200;
    border-radius: 50%;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -38%);
}`,
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
}`
);

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -38%);
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
    top: -24px;
    left: 50%;
    transform: translateX(-50%);
}`
);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('Circle positioning fixed!');
