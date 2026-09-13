const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const cleanStyle = `
<style id="global-section-sizing-fix">
    /* Global clean sizing so sections fit on screen naturally */
    .elementor-section.elementor-top-section:not(.elementor-element-20c303f) {
      padding-top: 100px !important;
      padding-bottom: 100px !important;
    }
    
    /* Specific overrides if needed */
    .elementor-element-e8a2a75 { /* Hero */
      padding-top: 120px !important;
      padding-bottom: 120px !important;
    }
    
    .elementor-element-e71b354 { /* Menu Section */
      padding-top: 80px !important;
      padding-bottom: 80px !important;
    }
    
    /* Heading margins */
    .pbmit-heading-subheading {
      margin-bottom: 20px !important;
    }
</style>
`;

$('#global-section-sizing-fix').remove();
$('head').append(cleanStyle);

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log('Applied safe padding-based sizing!');
