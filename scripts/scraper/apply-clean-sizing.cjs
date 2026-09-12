const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const cleanStyle = `
<style id="global-section-sizing-fix">
    /* Global clean sizing so sections fit on screen naturally without any overlapping */
    .elementor-section.elementor-top-section {
      padding-top: 60px !important;
      padding-bottom: 60px !important;
    }
    .elementor-element-e8a2a75 {
      padding-top: 80px !important;
      padding-bottom: 80px !important;
    }
    .elementor-element-20c303f {
      padding-top: 50px !important;
      padding-bottom: 50px !important;
    }
    /* Constrain Hamza Ilyas image in Section 2 so it fits comfortably on screen */
    .elementor-element-20c303f img {
      max-height: 480px !important;
      width: auto !important;
      object-fit: cover !important;
      border-radius: 20px !important;
    }
    /* Section 4 margin fix */
    .elementor-element-e71b354 {
      margin-top: 60px !important;
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
console.log('Successfully applied clean sizing without overlaps!');
