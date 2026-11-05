const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

// The main orange color is #FF5C00 (case insensitive)
// Replace #FF5C00 with #000000
css = css.replace(/#FF5C00/ig, '#000000');

// Replace the rgba version of the orange: rgba(255, 92, 0, ...
css = css.replace(/rgba\(\s*255\s*,\s*92\s*,\s*0\s*,/ig, 'rgba(0, 0, 0,');

// Replace the secondary orange colors in gradients
css = css.replace(/#FF8946/ig, '#222222');
css = css.replace(/#F57A35/ig, '#111111');
css = css.replace(/#913908/ig, '#000000');
css = css.replace(/#FDAF84/ig, '#333333');

fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
console.log('Replaced all orange theme colors with black variants.');
