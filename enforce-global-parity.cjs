const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/fitbitepizza/';

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let html = fs.readFileSync(fullPath, 'utf8');
            
            // We use regex to find all class attributes
            // If an element has elementor-hidden-mobile, we remove it (so it shows on mobile, preserving desktop parity).
            // UNLESS it also has elementor-hidden-desktop. If it's hidden on desktop, it's a mobile-fallback, so we should keep it hidden on mobile to enforce desktop parity.
            
            const $ = cheerio.load(html, { decodeEntities: false });
            let modified = false;

            $('[class*="elementor-hidden-mobile"]').each((i, el) => {
                const $el = $(el);
                if (!$el.hasClass('elementor-hidden-desktop')) {
                    $el.removeClass('elementor-hidden-mobile');
                    modified = true;
                }
            });

            // If there are elements hidden on desktop but NOT hidden on mobile, they are mobile fallbacks. We must hide them on mobile to strictly enforce desktop parity.
            $('[class*="elementor-hidden-desktop"]').each((i, el) => {
                const $el = $(el);
                if (!$el.hasClass('elementor-hidden-mobile')) {
                    $el.addClass('elementor-hidden-mobile');
                    modified = true;
                }
            });

            if (modified) {
                html = $.html();
                fs.writeFileSync(fullPath, html);
                console.log(`Enforced strict global desktop parity in ${fullPath}`);
            }
        }
    });
}

processDirectory(dir);

// Also add a global CSS patch to ensure any other parallax animations on other pages scale down properly
const globalParityCss = `
<style id="global-desktop-parity-animations">
@media (max-width: 767px) {
    /* Globally scale down any GSAP parallax container that might have been unhidden */
    .elementor-widget-pbmit_tween_effect_element,
    .pbmit_tween_effect_element {
        transform: scale(0.65) !important;
        transform-origin: center center !important;
    }
}
</style>
`;

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    if (html.indexOf('global-desktop-parity-animations') === -1) {
        html = html.replace('</head>', globalParityCss + '\n</head>');
        fs.writeFileSync(path.join(dir, file), html);
    }
});
console.log("Global parity CSS applied.");
