const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const cssParityPatch = `
<style>
@media (max-width: 767px) {
    /* 1. 3 PROMO BOXES SWIPEABLE ROW (Desktop Parity) */
    .elementor-element-85d9e25 .elementor-container {
        display: flex !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
        overflow-y: visible !important;
        scroll-snap-type: x mandatory;
        padding-bottom: 20px !important;
        -webkit-overflow-scrolling: touch;
        gap: 15px; /* Spacing between cards */
        /* hide scrollbar for sleek look */
        scrollbar-width: none;
    }
    .elementor-element-85d9e25 .elementor-container::-webkit-scrollbar {
        display: none;
    }
    
    .elementor-element-859032c, 
    .elementor-element-2b5f382, 
    .elementor-element-6a03461 {
        flex: 0 0 85% !important; /* Take up 85% of screen width so the next one peeks in */
        scroll-snap-align: center;
        max-width: 85% !important;
        width: 85% !important;
    }

    /* Restore absolute positioning for pizzas inside the promo boxes to match laptop view */
    .pbmit-ihbox-style-3 {
        padding: 30px !important;
        text-align: left !important;
        align-items: flex-start !important;
    }
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon {
        position: absolute !important;
        right: -30px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        margin: 0 !important;
        z-index: 5 !important;
    }
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon img {
        max-width: 130px !important; /* Scale it down a bit so it doesn't overflow the 85% container entirely */
        height: auto !important;
    }
    .pbmit-ihbox-style-3 .pbmit-ihbox-contents {
        align-items: flex-start !important;
    }

    /* 2. FOOTER LOGO VISIBILITY */
    .pbmit-footer-logo {
        display: block !important;
        visibility: visible !important;
        margin: 0 auto 20px auto !important;
        max-height: 120px !important;
        text-align: center;
    }
    .pbmit-footer-right {
        text-align: center;
    }

    /* 3. SCROLLING ANIMATIONS RESTORATION */
    /* Remove elementor-hidden-mobile restrictions via CSS and scale down the tween effects to fit mobile screen */
    .pbmit-tween-effect-style-1,
    .pbmit_tween_effect_element,
    .pbmit_tween_effect_element .elementor-hidden-mobile,
    .elementor-hidden-mobile:has(img[src*="pizza-part"]) {
        display: block !important;
    }

    /* Target the big flying pizza parts and scale them down so they don't break the narrow mobile screen */
    .pbmit_tween_effect_element {
        transform: scale(0.4) !important;
        transform-origin: center center !important;
    }
}
</style>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Correct my previous mistake with a228308 -> 859032c
    html = html.replace('.elementor-element-a228308 .pbmit-ihbox-style-3 { background-color: #830051', '.elementor-element-859032c .pbmit-ihbox-style-3 { background-color: #830051');

    // For safety, let's actually remove elementor-hidden-mobile from the HTML for the tween effect items 
    // so they are truly enabled.
    const $ = cheerio.load(html, { decodeEntities: false });
    $('.pbmit_tween_effect_element.elementor-hidden-mobile').removeClass('elementor-hidden-mobile');
    $('.pbmit_tween_effect_element .elementor-hidden-mobile').removeClass('elementor-hidden-mobile');
    
    html = $.html();
    
    if (html.indexOf('PROMO BOXES SWIPEABLE ROW') === -1) {
        html = html.replace('</head>', cssParityPatch + '\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated mobile parity in ${file}`);
});
