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


    /* 2. RESTORE SCROLLING PIZZA AND BURGER ANIMATIONS WITH FLAWLESS POSITIONING */
    
    /* The Burger Container */
    .elementor-element-f2a4969 {
        display: block !important; 
        position: relative !important;
        width: 600px !important; 
        height: 500px !important;
        /* Perfect centering for 600px element */
        left: 50% !important;
        margin-left: -300px !important;
        margin-top: -250px !important; /* Pull up to sit exactly on the yellow circle */
        margin-bottom: -150px !important;
        transform: scale(0.65) !important;
        transform-origin: top center !important;
        z-index: 99 !important;
    }
    
    /* The Why Choose Us (Yellow Circle & Pizza) */
    .elementor-element-6152e5e {
        display: block !important;
        position: relative !important;
        width: 600px !important; 
        height: 500px !important;
        left: 50% !important;
        margin-left: -300px !important;
        margin-top: -50px !important;
        margin-bottom: -200px !important;
        transform: scale(0.65) !important;
        transform-origin: top center !important;
        z-index: 99 !important;
    }

    /* The Hero Section (Giant Pizza Parts) */
    .elementor-element-bff8b9f, .elementor-element-8a3f06d {
        display: block !important;
        position: relative !important;
        width: 600px !important; 
        height: 600px !important;
        left: 50% !important;
        margin-left: -300px !important;
        margin-top: 0 !important;
        margin-bottom: -250px !important;
        transform: scale(0.65) !important;
        transform-origin: top center !important;
        z-index: 99 !important;
    }

    /* Remove previous CSS that was hiding overflowing pizza */
    .elementor-section {
        overflow: visible !important;
    }
    
    /* Ensure text is always on top */
    .pbmit-element-title, .pbmit-element-subtitle, .pbmit-heading-desc, .pbmit-ihbox-contents {
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
    console.log(`Applied ultimate fix in ${file}`);
});
