const fs = require('fs');
const path = require('path');

function extractDivById(html, id) {
  const idRegex = new RegExp(`<div\\b[^>]*\\bid=["']${id}["'][^>]*>`, 'i');
  const m = idRegex.exec(html);
  if (!m) return null;
  const startIdx = m.index;
  const tagRegex = /<\/?div\b[^>]*>/gi;
  tagRegex.lastIndex = startIdx;
  let depth = 0;
  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    if (match[0].startsWith('</')) {
      depth--;
      if (depth === 0) {
        return {
          start: startIdx,
          end: tagRegex.lastIndex
        };
      }
    } else {
      depth++;
    }
  }
  return null;
}

function getAllHtmlFiles(dir, list = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(full, list);
    } else if (entry.name.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const baseDir = 'public/hq-leathercon';
const homePath = path.join(baseDir, 'index.html');
const homeHtml = fs.readFileSync(homePath, 'utf8');
const homeHeaderRange = extractDivById(homeHtml, 'shopify-section-header');
const homeFooterRange = extractDivById(homeHtml, 'shopify-section-footer');

const canonicalHeader = homeHtml.slice(homeHeaderRange.start, homeHeaderRange.end);
const canonicalFooter = homeHtml.slice(homeFooterRange.start, homeFooterRange.end);

const allFiles = [
  ...getAllHtmlFiles(path.join(baseDir, 'collections')),
  ...getAllHtmlFiles(path.join(baseDir, 'pages')),
  ...getAllHtmlFiles(path.join(baseDir, 'policies')),
  ...getAllHtmlFiles(path.join(baseDir, 'products'))
];

let updated = 0;
let missingHeader = 0;
let missingFooter = 0;

for (const f of allFiles) {
  let html = fs.readFileSync(f, 'utf8');
  let changed = false;

  const hRange = extractDivById(html, 'shopify-section-header');
  if (hRange) {
    const currentH = html.slice(hRange.start, hRange.end);
    if (currentH !== canonicalHeader) {
      html = html.slice(0, hRange.start) + canonicalHeader + html.slice(hRange.end);
      changed = true;
    }
  } else {
    missingHeader++;
  }

  const fRange = extractDivById(html, 'shopify-section-footer');
  if (fRange) {
    const currentF = html.slice(fRange.start, fRange.end);
    if (currentF !== canonicalFooter) {
      html = html.slice(0, fRange.start) + canonicalFooter + html.slice(fRange.end);
      changed = true;
    }
  } else {
    missingFooter++;
  }

  if (changed) {
    fs.writeFileSync(f, html, 'utf8');
    updated++;
  }
}

console.log(`Total files checked: ${allFiles.length}, Updated: ${updated}, MissingHeader: ${missingHeader}, MissingFooter: ${missingFooter}`);
