const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(getHtmlFiles(full));
    } else if (item.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const targetDirs = [
  'public/thejacketmaker/collections',
  'public/thejacketmaker/pages',
  'public/thejacketmaker/policies'
];

let allFiles = [];
targetDirs.forEach(d => {
  allFiles = allFiles.concat(getHtmlFiles(d));
});

console.log(`Processing ${allFiles.length} files safely...`);

const headerLogoReplacement = `<a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon" style="display: inline-flex; align-items: center; gap: 16px; text-decoration: none;">
    <img alt="HQ Leathercon" class="logo__image" height="62" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 62px; width: auto; max-height: 65px; object-fit: contain; vertical-align: middle;"/>
    <span class="logo__brand-title" style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase; white-space: nowrap; line-height: 1;">HQ LEATHERCON</span>
  </a>`;

const footerBlockReplacement = `<div class="footer__brand-block" style="padding: 24px 0 16px; display: flex; align-items: center; gap: 16px;">
  <a href="/thejacketmaker/index.html" style="display: inline-flex; align-items: center; gap: 16px; text-decoration: none;">
    <img alt="HQ Leathercon" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 60px; width: auto; max-height: 62px; object-fit: contain;"/>
    <span style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase; line-height: 1;">HQ LEATHERCON</span>
  </a>
</div>`;

let updatedCount = 0;

for (const file of allFiles) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Header logo safe replace
  const logoStart = html.indexOf('class="logo__link"');
  if (logoStart !== -1) {
    const aTagStart = html.lastIndexOf('<a', logoStart);
    const aTagEnd = html.indexOf('</a>', logoStart);
    if (aTagStart !== -1 && aTagEnd !== -1 && (aTagEnd - aTagStart) < 800) {
      html = html.slice(0, aTagStart) + headerLogoReplacement + html.slice(aTagEnd + 4);
      changed = true;
    }
  }

  // 2. Footer logo safe replace
  const footerStart = html.indexOf('class="footer__brand-block"');
  if (footerStart !== -1) {
    const divStart = html.lastIndexOf('<div', footerStart);
    const divEnd = html.indexOf('</div>', footerStart);
    if (divStart !== -1 && divEnd !== -1 && (divEnd - divStart) < 1200) {
      // also check if inner </a> exists
      const innerA = html.indexOf('</a>', divStart);
      if (innerA !== -1 && innerA < divEnd + 100) {
        const fullDivEnd = html.indexOf('</div>', innerA);
        if (fullDivEnd !== -1) {
          html = html.slice(0, divStart) + footerBlockReplacement + html.slice(fullDivEnd + 6);
          changed = true;
        }
      }
    }
  }

  // 3. Global link replacements
  if (html.includes('href="/collections"')) {
    html = html.replaceAll('href="/collections"', 'href="/thejacketmaker/collections/mens-leather-jackets/index.html"');
    changed = true;
  }
  if (html.includes('/thejacketmaker/pages/refund-policy/index.html')) {
    html = html.replaceAll('/thejacketmaker/pages/refund-policy/index.html', '/thejacketmaker/policies/refund-policy/index.html');
    changed = true;
  }
  if (html.includes('/thejacketmaker/pages/shipping-policy/index.html')) {
    html = html.replaceAll('/thejacketmaker/pages/shipping-policy/index.html', '/thejacketmaker/policies/shipping-policy/index.html');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated ${updatedCount} files successfully in milliseconds!`);
