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

console.log(`Updating ${allFiles.length} template files with vertical logo and clean points...`);

const headerLogoVertical = `<a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon" style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; text-align: center;">
    <img alt="HQ Leathercon" class="logo__image" height="48" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 48px; width: auto; max-height: 52px; object-fit: contain; margin-bottom: 4px; display: block; margin-left: auto; margin-right: auto;"/>
    <span class="logo__brand-title" style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 0.12em; color: #111111; text-transform: uppercase; white-space: nowrap; line-height: 1; display: block; text-align: center;">HQ LEATHERCON</span>
  </a>`;

let count = 0;
for (const file of allFiles) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace header logo
  const logoStart = html.indexOf('class="logo__link"');
  if (logoStart !== -1) {
    const aTagStart = html.lastIndexOf('<a', logoStart);
    const aTagEnd = html.indexOf('</a>', logoStart);
    if (aTagStart !== -1 && aTagEnd !== -1 && (aTagEnd - aTagStart) < 1000) {
      html = html.slice(0, aTagStart) + headerLogoVertical + html.slice(aTagEnd + 4);
      changed = true;
    }
  }

  // Remove [points_amount] raw token if present
  if (html.includes('[points_amount]')) {
    html = html.replaceAll('[points_amount]', 'reward');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    count++;
  }
}

console.log(`Updated ${count} files with vertical header logo!`);
