const fs = require('fs');

let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

// Replace standard footer-main background
const oldCSS = `.footer-main {
  position: relative;
  margin-top: -4.271vw;
  background: url(../media/bg/footer-bg.png) no-repeat;
  background-position: bottom center;
  background-size: cover;
  padding: 11.042vw 0 2.5vw;
}`;

const newCSS = `.footer-main {
  position: relative;
  margin-top: -4.271vw;
  padding: 11.042vw 0 2.5vw;
  z-index: 1;
}

.footer-main::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url(../media/bg/footer-bg.png) no-repeat;
  background-position: bottom center;
  background-size: cover;
  filter: brightness(0);
  z-index: -1;
}`;

if (css.includes(oldCSS)) {
    css = css.replace(oldCSS, newCSS);
    fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
    console.log('Footer background made black via brightness filter.');
} else {
    console.log('Could not find exact .footer-main block. Let us do a regex replace.');
    
    // Fallback regex replacement
    const regex = /\.footer-main\s*\{\s*position:\s*relative;\s*margin-top:\s*-4\.271vw;\s*background:\s*url\(\.\.\/media\/bg\/footer-bg\.png\)\s*no-repeat;\s*background-position:\s*bottom\s*center;\s*background-size:\s*cover;\s*padding:\s*11\.042vw\s*0\s*2\.5vw;\s*\}/g;
    
    if (regex.test(css)) {
        css = css.replace(regex, newCSS);
        fs.writeFileSync('public/burger-garage/assets/css/app.css', css);
        console.log('Regex matched! Footer background made black.');
    } else {
        console.log('Still not found. Here is the actual block:');
        const match = css.match(/\.footer-main\s*\{[^}]*\}/);
        if (match) console.log(match[0]);
    }
}
