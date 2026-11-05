const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

// 1. Fix burger-exploding-wrapper - needs proper height like Frenchyse (600px+ for full burger)
css = css.replace(
`.burger-exploding-wrapper {
    position: relative;
    width: 100%;
    min-height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}`,
`.burger-exploding-wrapper {
    position: relative;
    width: 100%;
    min-height: 620px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 60px;
    overflow: visible;
}`
);

// 2. Fix yellow circle - Frenchyse uses 511px at left:30px top:30px
css = css.replace(
`.burger-yellow-circle {
    position: absolute;
    width: 350px;
    height: 350px;
    background-color: #ffb800;
    border-radius: 50%;
    z-index: 1;
}`,
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
}`
);

// 3. Fix red dashed ring - Frenchyse uses 577px
css = css.replace(
`.burger-red-accents {
    position: absolute;
    width: 450px;
    height: 450px;
    z-index: 2;
    background: transparent;
    border-radius: 50%;
    border: 3px dashed #e62b2b;
    animation: rotateSlowly 30s linear infinite;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -38%);
}`
);

// 4. Remove the old duplicate .burger-part block (max-width:300px one) 
// and keep only the cleaner one
css = css.replace(
`.burger-part {
    position: absolute;
    z-index: 3;
    max-width: 300px;
    transition: transform 0.5s ease;
}`,
``
);

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('CSS updated: yellow circle + red ring + burger parts fixed!');
