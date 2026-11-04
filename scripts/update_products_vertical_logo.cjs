const fs = require('fs');
const path = require('path');

const prodDir = 'public/thejacketmaker/products';
const list = fs.readdirSync(prodDir);

console.log(`Checking ${list.length} product directories for header logo and points cleanups...`);

const headerLogoVertical = `<a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon" style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; text-align: center;">
    <img alt="HQ Leathercon" class="logo__image" height="48" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 48px; width: auto; max-height: 52px; object-fit: contain; margin-bottom: 4px; display: block; margin-left: auto; margin-right: auto;"/>
    <span class="logo__brand-title" style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 0.12em; color: #111111; text-transform: uppercase; white-space: nowrap; line-height: 1; display: block; text-align: center;">HQ LEATHERCON</span>
  </a>`;

let count = 0;
for (const p of list) {
  const filePath = path.join(prodDir, p, 'index.html');
  if (fs.existsSync(filePath)) {
    let html = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Check header logo
    const logoStart = html.indexOf('class="logo__link"');
    if (logoStart !== -1) {
      const aTagStart = html.lastIndexOf('<a', logoStart);
      const aTagEnd = html.indexOf('</a>', logoStart);
      if (aTagStart !== -1 && aTagEnd !== -1 && (aTagEnd - aTagStart) < 1000) {
        html = html.slice(0, aTagStart) + headerLogoVertical + html.slice(aTagEnd + 4);
        changed = true;
      }
    }

    if (html.includes('[points_amount]')) {
      html = html.replaceAll('[points_amount]', 'reward');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, html, 'utf8');
      count++;
    }
  }
}

console.log(`Updated ${count} product pages with vertical header logo!`);
