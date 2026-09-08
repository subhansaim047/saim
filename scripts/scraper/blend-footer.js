const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const p = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
let html = fs.readFileSync(p, 'utf8');

const $ = cheerio.load(html, { decodeEntities: false });

// Inject CSS to blend the footer and the last section
$('head').append(`
<style id="blend-footer-css">
#colophon {
    position: relative;
    border-top: none !important;
}
#colophon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, #ffc222 0%, transparent 100%);
    pointer-events: none;
    z-index: 0;
}
.pbmit-footer-big-area-wrapper {
    position: relative;
    z-index: 1;
}
</style>
`);

fs.writeFileSync(p, $.html());
console.log('Added blending CSS');
