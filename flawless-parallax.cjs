const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const cssPerfectMobile = `
<style id="perfect-mobile-parallax">
@media (max-width: 767px) {

    /* 1. MIDDLE PIZZA (Why our pizza best) */
    /* Prevent it from overlapping the text below it! */
    .elementor-element-6152e5e {
        display: block !important;
        position: relative !important;
        width: 600px !important; 
        height: 500px !important;
        left: 50% !important;
        margin-left: -300px !important;
        
        /* The container is 500px tall. Scale 0.45 makes visual height 225px.
           Transform origin is top center. So the top stays in place, 
           and the bottom 275px is empty ghost space.
           We remove the ghost space with margin-bottom: -275px 
           and add 30px padding for safety = -245px. */
        margin-top: 30px !important;
        margin-bottom: -245px !important; 
        
        transform: scale(0.45) !important;
        transform-origin: top center !important;
        z-index: 10 !important;
    }

    /* Ensure the text blocks (01, 02, 03, 04) are relative and have proper spacing 
       so they aren't hidden under the pizza */
    .elementor-element-15e8b6b,
    .elementor-element-2c8cff4,
    .elementor-element-e608a1c,
    .elementor-element-593309a {
        position: relative !important;
        z-index: 20 !important;
        margin-top: 20px !important;
    }


    /* 2. BURGER SECTION */
    /* The Burger parts container */
    .elementor-element-f2a4969 {
        display: block !important; 
        position: relative !important;
        width: 600px !important; 
        height: 500px !important;
        left: 50% !important;
        margin-left: -300px !important;
        
        /* The yellow circle is part of the text column above it.
           On mobile, the text column gets very tall, so the yellow circle sits far below the text.
           We need to pull the burger UP to sit on the yellow circle. */
        margin-top: -200px !important;
        margin-bottom: -150px !important; 
        
        transform: scale(0.45) !important;
        transform-origin: top center !important;
        z-index: 20 !important;
    }
    
    /* Make sure the Burger text doesn't overlap the burger */
    .elementor-element-5707ad7 {
        z-index: 30 !important;
        padding-bottom: 200px !important; /* Give space for the yellow circle and burger to sit below the text */
    }


    /* 3. HERO PIZZA */
    .elementor-element-bff8b9f, .elementor-element-8a3f06d {
        display: block !important;
        position: relative !important;
        width: 600px !important; 
        height: 600px !important;
        left: 50% !important;
        margin-left: -300px !important;
        
        margin-top: 0 !important;
        margin-bottom: -250px !important; /* Remove 600px -> 300px ghost space */
        
        transform: scale(0.5) !important;
        transform-origin: top center !important;
        z-index: 10 !important;
    }

}
</style>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');

    // Clean up all previous css overrides to avoid conflicts
    html = html.replace(/<style id="restore-laptop-animations">[\s\S]*?<\/style>/, '');
    html = html.replace(/<style id="global-desktop-parity-animations">[\s\S]*?<\/style>/, '');
    html = html.replace(/<style id="perfect-mobile-parallax">[\s\S]*?<\/style>/, '');

    html = html.replace('</head>', cssPerfectMobile + '\n</head>');

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Applied flawless mobile parallax math in ${file}`);
});
