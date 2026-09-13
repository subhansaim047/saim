const fs = require('fs');
const path = require('path');

const file = 'public/fitbitepizza/index.html';
let html = fs.readFileSync(file, 'utf8');

// Inject a CSS rule to forcefully display all mobile hidden elements to see what was missing
const cssPatch = `
<style>
@media (max-width: 767px) {
    .elementor-hidden-mobile {
        display: block !important;
    }
    /* Disable absolute positioning and parallax on mobile so elements stack properly instead of flying around */
    .pbmit-tween-effect, .elementor-absolute {
        position: relative !important;
        transform: none !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        margin: 0 auto !important;
    }
    /* Fix Hero section huge gap by making sure its columns stack properly */
    .elementor-element-8a3f06d {
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
    }
}
</style>
`;

if (html.indexOf('Disable absolute positioning and parallax on mobile') === -1) {
    html = html.replace('</head>', cssPatch + '\n</head>');
    fs.writeFileSync(file, html);
    console.log('Injected mobile unhide CSS');
}
