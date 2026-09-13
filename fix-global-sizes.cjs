const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const customStyle = `
<style id="global-section-sizing-fix">
    /* Global fix to make sections fit within the screen without cutting off content */
    
    @media (min-width: 1024px) {
        /* Apply to all sections EXCEPT About (20c303f), Menu (e71b354), and Burger Anim (8c248e2) */
        .elementor-section.elementor-top-section:not(.elementor-element-20c303f):not(.elementor-element-e71b354):not(.elementor-element-8c248e2) {
            min-height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            padding-top: 50px !important;
            padding-bottom: 50px !important;
        }
        
        .elementor-section.elementor-top-section:not(.elementor-element-20c303f):not(.elementor-element-e71b354):not(.elementor-element-8c248e2) > .elementor-container {
            display: flex;
            align-items: center;
        }
        
        /* Reduce huge image sizes inside these scaled columns */
        .elementor-section.elementor-top-section:not(.elementor-element-20c303f):not(.elementor-element-e71b354):not(.elementor-element-8c248e2) .elementor-widget-image img {
            max-height: 70vh !important;
            width: auto;
            object-fit: contain;
        }
    }
</style>
`;

// Remove previous fix if exists
$('#global-section-sizing-fix').remove();
$('head').append(customStyle);

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log('Restored sizing for sections while keeping About section untouched!');
