const fs = require('fs');
const cheerio = require('cheerio');
const htmlPath = 'public/demos/dilicious-pizza/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

let styleBlock = $('#global-section-sizing-fix').html();
if (styleBlock && !styleBlock.includes('.elementor-element-f3401e1')) {
    styleBlock += `
    /* Restore Burger Section Height to prevent animation cutoff */
    .elementor-section.elementor-top-section.elementor-element-f3401e1 {
      padding-top: 150px !important;
      padding-bottom: 155px !important;
      min-height: 860px !important;
    }
    `;
    $('#global-section-sizing-fix').html(styleBlock);
    fs.writeFileSync(htmlPath, $.html());
    console.log('Fixed burger section sizing!');
} else if (styleBlock) {
    console.log('Burger section fix already present, overriding just in case...');
    // Replace it entirely if it was somewhat present
    const css = `
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
    /* Restore Burger Section Height to prevent animation cutoff */
    .elementor-section.elementor-top-section.elementor-element-f3401e1 {
      padding-top: 150px !important;
      padding-bottom: 155px !important;
      min-height: 860px !important;
    }
    `;
    $('#global-section-sizing-fix').html(css);
    fs.writeFileSync(htmlPath, $.html());
    console.log('Overwrote and fixed burger section sizing!');
} else {
    console.log('Could not find #global-section-sizing-fix');
}
