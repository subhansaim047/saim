const fs = require('fs');

const pngBuffer = fs.readFileSync('public/thejacketmaker/images/hq-crest-logo.png');
const base64Png = pngBuffer.toString('base64');
const dataUri = `data:image/png;base64,${base64Png}`;

// Vertical stacked SVG: Crest on top, "HQ LEATHERCON" underneath
const newSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240 100" width="240" height="100">
  <defs>
    <style>
      .brand-title {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-weight: 800;
        letter-spacing: 2.5px;
        fill: #111111;
        font-size: 16px;
        text-anchor: middle;
      }
    </style>
  </defs>
  <!-- Crest Emblem Centered on Top -->
  <image href="${dataUri}" x="75" y="2" width="90" height="66" preserveAspectRatio="xMidYMid meet" />
  <!-- Brand Text Underneath -->
  <text x="120" y="88" class="brand-title">HQ LEATHERCON</text>
</svg>
`;

fs.writeFileSync('public/thejacketmaker/images/512-logo-black_1e5d3070-b9c0-4dc5-ac39-8ea250f9b448.svg', newSvg, 'utf8');
console.log('Successfully updated 512-logo-black...svg with stacked vertical layout!');
