const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const cssFinalRestoration = `
<style id="restore-laptop-animations">
@media (max-width: 767px) {
    /* 1. RESTORE EXACT LAPTOP DESIGN FOR 3 PROMO BOXES */
    .elementor-element-859032c .pbmit-ihbox-style-3,
    .elementor-element-2b5f382 .pbmit-ihbox-style-3,
    .elementor-element-6a03461 .pbmit-ihbox-style-3 {
        background-color: transparent !important;
        background: transparent !important;
        min-height: 250px;
        position: relative;
        overflow: visible !important;
        padding: 40px 30px !important;
    }
    
    .pbmit-ihbox-style-3 .pbmit-ihbox-overlay-image,
    .pbmit-ihbox-style-3 .pbmit-ihbox-pattern-image {
        display: block !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        z-index: 1 !important;
    }
    .pbmit-ihbox-style-3 .pbmit-ihbox-contents {
        position: relative !important;
        z-index: 10 !important;
    }
    
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon {
        position: absolute !important;
        right: -30px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 20 !important;
    }
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon img {
        max-width: 150px !important;
    }
    
    .elementor-element-859032c, 
    .elementor-element-2b5f382, 
    .elementor-element-6a03461 {
        flex: 0 0 85% !important; 
        max-width: 85% !important;
        width: 85% !important;
        margin: 0 auto 30px auto !important;
    }


    /* 2. RESTORE SCROLLING PIZZA AND BURGER ANIMATIONS WITHOUT OVERLAPPING */
    
    /* The Burger Container (Height: 500px) */
    .elementor-element-f2a4969 {
        display: block !important; 
        position: relative !important;
        width: 600px !important; 
        height: 500px !important;
        /* Perfect centering for 600px element */
        left: 50% !important;
        margin-left: -300px !important;
        /* Ghost space correction for scale(0.5): (500 - 250) / 2 = 125 */
        margin-top: -125px !important; 
        margin-bottom: -125px !important;
        transform: scale(0.5) !important;
        transform-origin: center center !important;
        z-index: 20 !important;
    }
    
    /* The Why Choose Us (Yellow Circle & Pizza) (Height: 500px) */
    .elementor-element-6152e5e {
        display: block !important;
        position: relative !important;
        width: 600px !important; 
        height: 500px !important;
        left: 50% !important;
        margin-left: -300px !important;
        margin-top: -125px !important;
        margin-bottom: -125px !important;
        transform: scale(0.5) !important;
        transform-origin: center center !important;
        z-index: 20 !important;
    }

    /* The Hero Section (Giant Pizza Parts) (Height: 600px) */
    .elementor-element-bff8b9f, .elementor-element-8a3f06d {
        display: block !important;
        position: relative !important;
        width: 600px !important; 
        height: 600px !important;
        left: 50% !important;
        margin-left: -300px !important;
        margin-top: -150px !important;
        margin-bottom: -150px !important;
        transform: scale(0.5) !important;
        transform-origin: center center !important;
        z-index: 20 !important;
    }

    /* Ensure text elements always stay visibly on top of animations if they touch */
    .elementor-element-347ad06, /* Burger Text Wrapper */
    .elementor-element-93118cf, /* Why Choose Us Text Wrapper */
    .pbmit-element-title, 
    .pbmit-element-subtitle, 
    .pbmit-heading-desc, 
    .pbmit-ihbox-contents {
        position: relative !important;
        z-index: 100 !important;
    }
    
    .pbmit_tween_effect_element img, 
    .pbmit_tween_effect_element svg,
    .pbmit_tween_effect_element .pbmit-ihbox-icon {
        max-width: 100% !important;
        opacity: 1 !important;
    }
}
</style>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');

    html = html.replace(/<style id="restore-laptop-animations">[\s\S]*?<\/style>/, '');

    html = html.replace('</head>', cssFinalRestoration + '\n</head>');

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Applied correct spacing and overlap fix in ${file}`);
});
