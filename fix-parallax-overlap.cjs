const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');

    // Fix the 3 Promo Boxes so the absolute pizza fits on screen
    // We need to change flex: 0 0 100% to flex: 0 0 85%, and center it
    html = html.replace('flex: 0 0 100% !important; \n        max-width: 100% !important;\n        width: 100% !important;', 'flex: 0 0 85% !important; \n        max-width: 85% !important;\n        width: 85% !important;\n        margin: 0 auto 30px auto !important;');

    // Fix the massive overlapping animations by scaling the tween images/shapes heavily on mobile
    const extraCss = `
    /* Scale down the tween elements significantly so they don't block mobile content */
    .pbmit_tween_effect_element img, 
    .pbmit_tween_effect_element svg,
    .pbmit_tween_effect_element .pbmit-ihbox-icon {
        max-width: 40% !important;
        height: auto !important;
        opacity: 0.8 !important;
    }
    .pbmit_tween_effect_element {
        z-index: 0 !important; /* Keep animations behind text */
        pointer-events: none !important;
    }
    /* Specifically reduce the huge yellow background circles that break the layout */
    .elementor-widget-pbmit_tween_effect_element:has(img[src*="yellow"]),
    .elementor-widget-pbmit_tween_effect_element:has(.pbmit-tween-efect) {
        transform-origin: top center !important;
    }
    /* Ensure all text and important content stays above the wild parallax elements */
    .pbmit-element-title, .pbmit-element-subtitle, .pbmit-heading-desc, p {
        position: relative;
        z-index: 10 !important;
    }
    `;

    if (html.indexOf('Keep animations behind text') === -1) {
        html = html.replace('</style>', extraCss + '\n</style>');
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated mobile parallax and boxes fix in ${file}`);
});
