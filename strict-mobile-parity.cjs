const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const cssFinalParityPatch = `
<style>
@media (max-width: 767px) {
    /* 1. BRING BACK THE HERO PIZZA & BURGER ANIMATIONS */
    /* Remove my old display:none patches */
    .elementor-element-8a3f06d,
    .elementor-element-1bced7d,
    .pbmit-tween-effect-style-1 {
        display: block !important;
    }
    
    /* Make the columns stack so the big pizza parts appear below the text */
    .elementor-element-8a3f06d, .elementor-element-1bced7d {
        position: relative !important;
        width: 100% !important;
        min-height: 400px !important;
        overflow: hidden !important; /* Prevent horizontal scroll from absolute pizza parts */
    }

    /* Override Elementor's native mobile hide */
    .elementor-hidden-mobile {
        display: block !important;
    }

    /* Scale the animations down so they fit in the 390px mobile screen without clipping text */
    .pbmit_tween_effect_element {
        transform: scale(0.6) !important;
        transform-origin: top center !important;
    }

    /* 2. REVERT PROMO BOXES TO STACKED BUT EXACTLY LIKE DESKTOP */
    /* Reset the swipeable row */
    .elementor-element-85d9e25 .elementor-container {
        display: flex !important;
        flex-direction: column !important; /* Stack vertically */
        flex-wrap: nowrap !important;
        overflow-x: hidden !important;
        padding-bottom: 0 !important;
        gap: 0 !important;
    }
    
    .elementor-element-859032c, 
    .elementor-element-2b5f382, 
    .elementor-element-6a03461 {
        flex: 0 0 100% !important; 
        max-width: 100% !important;
        width: 100% !important;
        margin-bottom: 20px !important;
    }

    /* Replicate the desktop layout for the inside of the box */
    .pbmit-ihbox-style-3 {
        padding: 40px 30px !important;
        text-align: left !important;
        align-items: flex-start !important;
        position: relative !important;
        overflow: visible !important;
    }
    
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon {
        position: absolute !important;
        right: -30px !important; /* Bleed off the right edge, just like laptop */
        top: 50% !important;
        transform: translateY(-50%) !important;
        margin: 0 !important;
        z-index: 5 !important;
    }
    
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon img {
        max-width: 150px !important; 
        height: auto !important;
    }
    
    /* Ensure the body doesn't horizontal scroll because of the bleeding pizza images */
    body {
        overflow-x: hidden !important;
    }
}
</style>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');

    // Remove old parity patch
    html = html.replace(/<style>\s*@media \(max-width: 767px\) \{\s*\/\* 1\. 3 PROMO BOXES SWIPEABLE ROW[\s\S]*?<\/style>/, '');
    
    // Remove old final visuals patch that hid the parallax elements
    html = html.replace(/\.elementor-element-8a3f06d,\s*\.elementor-element-1bced7d,\s*\.pbmit-tween-effect-style-1\s*\{\s*display: none !important;\s*\}/, '');

    if (html.indexOf('BRING BACK THE HERO PIZZA & BURGER ANIMATIONS') === -1) {
        html = html.replace('</head>', cssFinalParityPatch + '\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated strict desktop parity in ${file}`);
});
