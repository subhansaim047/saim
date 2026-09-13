const fs = require('fs');
const path = require('path');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const ogTags = `
<meta property="og:title" content="FitBite Pizza">
<meta property="og:description" content="Taste the Best Pizza in Daska!">
<meta property="og:url" content="https://fitbitepizza.com/">
<meta property="og:image" content="https://fitbitepizza.com/demos/dilicious-pizza/images/fitbite-logo.png">
<meta property="og:type" content="website">
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // 1. Replace canonical and shortlink
    html = html.replace(/<link rel="canonical"[^>]*>/g, '<link rel="canonical" href="https://fitbitepizza.com/">');
    html = html.replace(/<link rel="shortlink"[^>]*>/g, '<link rel="shortlink" href="https://fitbitepizza.com/">');
    
    // 2. Remove msapplication-TileImage
    html = html.replace(/<meta name="msapplication-TileImage"[^>]*>/g, '<meta name="msapplication-TileImage" content="https://fitbitepizza.com/demos/dilicious-pizza/images/fitbite-logo.png">');

    // 3. Insert OG tags before </head>
    // Remove existing og tags just in case
    html = html.replace(/<meta property="og:[^>]*>\n?/g, '');
    html = html.replace('</head>', ogTags + '\n</head>');
    
    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated ${file}`);
});
