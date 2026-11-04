const fs = require('fs');

const pngBuffer = fs.readFileSync('public/thejacketmaker/images/hq-crest-logo.png');
const base64Png = pngBuffer.toString('base64');
const dataUri = `data:image/png;base64,${base64Png}`;

// We want a wide SVG (e.g. viewBox="0 0 480 90") with the crest image on the left (e.g. height 80, width auto)
// and "HQ LEATHERCON" on the right in bold uppercase font!
const newSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460 90" width="460" height="90">
  <defs>
    <style>
      .brand-title {
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-weight: 800;
        letter-spacing: 3px;
        fill: #111111;
        font-size: 32px;
      }
    </style>
  </defs>
  <!-- Crest Emblem -->
  <image href="${dataUri}" x="0" y="5" width="100" height="80" preserveAspectRatio="xMidYMid meet" />
  <!-- Brand Text -->
  <text x="115" y="56" class="brand-title">HQ LEATHERCON</text>
</svg>
`;

fs.writeFileSync('public/thejacketmaker/images/512-logo-black_1e5d3070-b9c0-4dc5-ac39-8ea250f9b448.svg', newSvg, 'utf8');
console.log('Successfully updated 512-logo-black...svg with crest logo and text!');
