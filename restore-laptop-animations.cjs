const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const cssFinalRestoration = `
<style id="restore-laptop-animations">
@media (max-width: 767px) {
    /* 1. RESTORE EXACT LAPTOP DESIGN FOR 3 PROMO BOXES */
    /* Remove the solid colors I forced earlier, let the laptop background images show! */
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
    
    /* Show the beautiful smoke/texture background images that were hidden on mobile */
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
    
    /* Make the pizza bleed out the right side EXACTLY like laptop */
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
    
    /* Keep width 85% so the bleeding pizza doesn't cause horizontal scroll bar */
    .elementor-element-859032c, 
    .elementor-element-2b5f382, 
    .elementor-element-6a03461 {
        flex: 0 0 85% !important; 
        max-width: 85% !important;
        width: 85% !important;
        margin: 0 auto 30px auto !important;
    }


    /* 2. RESTORE SCROLLING PIZZA AND BURGER ANIMATIONS */
    /* To make desktop GSAP animations work on mobile without overlapping/breaking, we scale the containers and absorb the dead space */
    
    /* The Burger Container */
    .elementor-element-f2a4969 {
        display: block !important; /* Was hidden by theme */
        position: relative !important;
        width: 600px !important; /* Force laptop width so JS coordinates match! */
        height: 500px !important;
        transform: scale(0.5) !important;
        transform-origin: top center !important;
        margin: 0 auto -250px auto !important; /* Eat the dead space left by scaling */
        z-index: 1;
        left: -100px !important; /* Center it */
    }
    
    /* The Why Choose Us (Yellow Circle & Pizza) */
    .elementor-element-6152e5e {
        position: relative !important;
        width: 600px !important; 
        height: 500px !important;
        transform: scale(0.5) !important;
        transform-origin: top center !important;
        margin: -100px auto -250px auto !important;
        z-index: 1;
        left: -100px !important;
    }

    /* The Hero Section (Giant Pizza Parts) */
    .elementor-element-bff8b9f, .elementor-element-8a3f06d {
        display: block !important;
        position: relative !important;
        width: 600px !important; 
        height: 600px !important;
        transform: scale(0.5) !important;
        transform-origin: top center !important;
        margin: 0 auto -300px auto !important;
        z-index: 1;
        left: -100px !important;
    }

    /* Ensure text is always on top of the scaled parallax containers */
    .pbmit-element-title, .pbmit-element-subtitle, .pbmit-heading-desc, .pbmit-ihbox-contents {
        position: relative !important;
        z-index: 50 !important;
    }
    
    /* Remove my old shrinking hack so the JS can animate them normally */
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

    // Clean up all old conflicting CSS patches from my previous attempts
    html = html.replace(/<style>\s*@media \(max-width: 767px\) \{\s*\/\* 1\. BRING BACK THE HERO PIZZA & BURGER ANIMATIONS[\s\S]*?<\/style>/, '');
    html = html.replace(/\/\* Scale down the tween elements significantly so they don't block mobile content \*\/[\s\S]*?z-index: 10 !important;\s*\}/, '');
    html = html.replace(/\.elementor-element-859032c \.pbmit-ihbox-style-3 \{ background-color: #830051 !important; \}/, '');
    html = html.replace(/\.elementor-element-2b5f382 \.pbmit-ihbox-style-3 \{ background-color: #659a16 !important; \}/, '');
    html = html.replace(/\.elementor-element-6a03461 \.pbmit-ihbox-style-3 \{ background-color: #d1122a !important; \}/, '');

    // Add the ultimate laptop-parity restoration patch
    if (html.indexOf('RESTORE EXACT LAPTOP DESIGN FOR 3 PROMO BOXES') === -1) {
        html = html.replace('</head>', cssFinalRestoration + '\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated ultimate laptop parity in ${file}`);
});
