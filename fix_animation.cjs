const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/frenchyse/*.html');

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // The script is exactly:
    // <script>
    //   window.addEventListener('load', function() {
    //     let ticks = 0;
    //     let stInterval = setInterval(function() {
    //       if (typeof ScrollTrigger !== 'undefined') {
    //         ScrollTrigger.refresh();
    //       }
    //       ticks++;
    //       if (ticks > 10) clearInterval(stInterval); // stop after 5 seconds
    //     }, 500);
    //   });
    // </script>
    
    // We will use a regex to match this script tag and remove it
    const regex = /<script>\s*window\.addEventListener\('load',\s*function\(\)\s*\{\s*let\s+ticks\s*=\s*0;\s*let\s+stInterval\s*=\s*setInterval\(function\(\)\s*\{\s*if\s*\(typeof\s+ScrollTrigger\s*!==\s*'undefined'\)\s*\{\s*ScrollTrigger\.refresh\(\);\s*\}\s*ticks\+\+;\s*if\s*\(ticks\s*>\s*10\)\s*clearInterval\(stInterval\);\s*(?:\/\/\s*stop\s+after\s+5\s+seconds)?\s*\},\s*500\);\s*\}\);\s*<\/script>/g;
    
    if (regex.test(html)) {
        html = html.replace(regex, '');
        fs.writeFileSync(file, html, 'utf8');
        console.log("Removed interval script from", file);
    }
});
