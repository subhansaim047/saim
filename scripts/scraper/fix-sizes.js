const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const customStyle = `
<style id="global-section-sizing-fix">
    /* Global fix to make sections fit within the screen */
    .elementor-section.elementor-top-section {
        padding-top: 30px !important;
        padding-bottom: 30px !important;
    }
    
    @media (min-width: 1024px) {
        .elementor-section.elementor-top-section {
            /* Force sections to take up exactly screen height and center content */
            height: 100vh !important;
            max-height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
        }
        
        /* Scale down the entire inner wrap slightly if it overflows */
        .elementor-section.elementor-top-section > .elementor-container {
            max-height: 95vh;
            display: flex;
            align-items: center;
        }
        
        /* Reduce huge image sizes inside some columns */
        .elementor-widget-image img {
            max-height: 60vh !important;
            width: auto;
            object-fit: contain;
        }

        /* Specifically adjust the burger section to prevent cutoff */
        #burger-custom-css ~ .elementor-section, 
        .elementor-element-f3401e1 {
            height: auto !important;
            min-height: 100vh !important;
            padding-top: 50px !important;
            padding-bottom: 50px !important;
        }
    }
    
    /* Reduce heading margins */
    .pbmit-heading-subheading {
        margin-bottom: 15px !important;
    }
</style>
`;

// Remove previous fix if exists
$('#global-section-sizing-fix').remove();
$('head').append(customStyle);

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log('Added global sizing fix!');
