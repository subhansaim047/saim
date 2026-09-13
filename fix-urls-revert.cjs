const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // First, revert all fitbitepizza.com back to dilicious-demo.pbminfotech.com
    html = html.replace(/fitbitepizza\.com/g, 'dilicious-demo.pbminfotech.com');
    
    // Now explicitly fix the OG tags and canonical tags
    html = html.replace(/<link rel="canonical" href="https:\/\/dilicious-demo\.pbminfotech\.com\/">/g, '<link rel="canonical" href="https://fitbitepizza.com/">');
    html = html.replace(/<link rel="shortlink" href="https:\/\/dilicious-demo\.pbminfotech\.com\/">/g, '<link rel="shortlink" href="https://fitbitepizza.com/">');
    html = html.replace(/<meta property="og:url" content="https:\/\/dilicious-demo\.pbminfotech\.com\/">/g, '<meta property="og:url" content="https://fitbitepizza.com/">');
    html = html.replace(/<meta property="og:image" content="https:\/\/dilicious-demo\.pbminfotech\.com\/fitbitepizza\/images\/fitbite-logo\.png">/g, '<meta property="og:image" content="https://fitbitepizza.com/fitbitepizza/images/fitbite-logo.png">');
    html = html.replace(/<meta name="msapplication-TileImage" content="https:\/\/dilicious-demo\.pbminfotech\.com\/fitbitepizza\/images\/fitbite-logo\.png">/g, '<meta name="msapplication-TileImage" content="https://fitbitepizza.com/fitbitepizza/images/fitbite-logo.png">');

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Fixed URLs in ${file}`);
});
