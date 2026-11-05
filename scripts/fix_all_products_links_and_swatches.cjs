const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.join(__dirname, '../audit');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');
const PRODS_DIR = path.join(BASE_DIR, 'products');

const allProds = JSON.parse(fs.readFileSync(path.join(AUDIT_DIR, 'all_store_products_complete.json'), 'utf8'));
const prodByHandle = {};
for (const p of allProds) {
  prodByHandle[p.handle] = p;
}

// Color definitions & swatch images/styles
const COLOR_DEFS = [
  { key: 'distressed-brown', label: 'Distressed Brown', img: '/hq-leathercon/images/brown06-025_small.jpg', bg: '#5c4033' },
  { key: 'tan-brown', label: 'Tan Brown', img: '/hq-leathercon/images/brown05-1555070845100_small.jpg', bg: '#b5651d' },
  { key: 'dark-brown', label: 'Dark Brown', img: '/hq-leathercon/images/brown06-025_small.jpg', bg: '#3d2314' },
  { key: 'vintage-brown', label: 'Vintage Brown', img: '/hq-leathercon/images/brown05-1555070845100_small.jpg', bg: '#6b4423' },
  { key: 'midnight-blue', label: 'Midnight Blue', img: '/hq-leathercon/images/blue01_small.jpg', bg: '#191970' },
  { key: 'rub-off', label: 'Rub-Off Burgundy', img: '/hq-leathercon/images/red_small.jpg', bg: '#6e1e2a' },
  { key: 'black', label: 'Black', img: '/hq-leathercon/images/black02-030_c645a7e6-db18-4d20-8ec1-2eb7e9757712_small.jpg', bg: '#1a1a1a' },
  { key: 'brown', label: 'Brown', img: '/hq-leathercon/images/brown05-1555070845100_small.jpg', bg: '#654321' },
  { key: 'blue', label: 'Blue', img: '/hq-leathercon/images/blue01_small.jpg', bg: '#1f3a60' },
  { key: 'green', label: 'Green', img: '/hq-leathercon/images/green_small.jpg', bg: '#2e4d36' },
  { key: 'red', label: 'Red', img: '/hq-leathercon/images/red_small.jpg', bg: '#8b1e1e' },
  { key: 'maroon', label: 'Maroon', img: '/hq-leathercon/images/red_small.jpg', bg: '#5a1827' },
  { key: 'burgundy', label: 'Burgundy', img: '/hq-leathercon/images/red_small.jpg', bg: '#6b1d2f' },
  { key: 'tan', label: 'Tan', img: '/hq-leathercon/images/brown05-1555070845100_small.jpg', bg: '#c17f3a' },
  { key: 'mocha', label: 'Mocha', img: '/hq-leathercon/images/brown06-025_small.jpg', bg: '#6f5344' },
  { key: 'grey', label: 'Grey', img: '', bg: '#6e7378' },
  { key: 'gray', label: 'Grey', img: '', bg: '#6e7378' },
  { key: 'white', label: 'White', img: '', bg: '#f0f0f0' },
  { key: 'beige', label: 'Beige', img: '', bg: '#d8c8b0' },
  { key: 'olive', label: 'Olive', img: '/hq-leathercon/images/green_small.jpg', bg: '#4b5320' },
  { key: 'navy', label: 'Navy', img: '/hq-leathercon/images/blue01_small.jpg', bg: '#1b2a4a' },
  { key: 'silver', label: 'Silver', img: '', bg: '#b8bdc2' },
  { key: 'pink', label: 'Pink', img: '', bg: '#d88ca0' },
  { key: 'khaki', label: 'Khaki', img: '', bg: '#a3926e' },
  { key: 'cognac', label: 'Cognac', img: '/hq-leathercon/images/brown05-1555070845100_small.jpg', bg: '#9a463d' }
];

function detectColorAndFamily(handle) {
  for (const c of COLOR_DEFS) {
    const token = `-${c.key}-`;
    const idx = handle.indexOf(token);
    if (idx !== -1) {
      const familyKey = handle.slice(0, idx) + '-*-' + handle.slice(idx + token.length);
      return { colorDef: c, familyKey };
    }
    if (handle.endsWith(`-${c.key}`)) {
      const familyKey = handle.slice(0, handle.length - c.key.length - 1) + '-*';
      return { colorDef: c, familyKey };
    }
  }
  return {
    colorDef: { key: 'black', label: 'Default', img: '/hq-leathercon/images/black02-030_c645a7e6-db18-4d20-8ec1-2eb7e9757712_small.jpg', bg: '#1a1a1a' },
    familyKey: handle
  };
}

// Group products by familyKey and also by prefix (first word(s) before color)
const familyGroups = {};
const prefixGroups = {};
const prodColorInfo = {};

const existingSlugs = fs.readdirSync(PRODS_DIR, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);

for (const slug of existingSlugs) {
  const info = detectColorAndFamily(slug);
  prodColorInfo[slug] = info;
  if (!familyGroups[info.familyKey]) familyGroups[info.familyKey] = [];
  familyGroups[info.familyKey].push(slug);

  const prefix = info.familyKey.split('-*-')[0];
  if (prefix && prefix !== slug) {
    if (!prefixGroups[prefix]) prefixGroups[prefix] = [];
    prefixGroups[prefix].push(slug);
  }
}

function buildSwatchesHtml(slug) {
  const info = prodColorInfo[slug];
  let siblings = familyGroups[info.familyKey] || [slug];
  if (siblings.length === 1) {
    const prefix = info.familyKey.split('-*-')[0];
    if (prefix && prefixGroups[prefix] && prefixGroups[prefix].length > 1 && prefixGroups[prefix].length <= 10) {
      siblings = prefixGroups[prefix];
    }
  }
  // Deduplicate by color label
  const seenLabels = new Set();
  const swatchItems = [];
  for (const sibSlug of siblings) {
    const sibInfo = prodColorInfo[sibSlug];
    if (seenLabels.has(sibInfo.colorDef.label)) continue;
    seenLabels.add(sibInfo.colorDef.label);
    const sibTitle = (prodByHandle[sibSlug] && prodByHandle[sibSlug].title) ? prodByHandle[sibSlug].title : sibSlug;
    const isCurrent = sibSlug === slug;
    const cDef = sibInfo.colorDef;
    const innerVisual = cDef.img
      ? `<img alt="color swatch ${sibTitle.replace(/"/g, '&quot;')}" class="lazyloaded" height="64" loading="lazy" src="${cDef.img}" width="64"/>`
      : `<span style="display:inline-block;width:32px;height:32px;border-radius:50%;background:${cDef.bg};border:1px solid #ccc;"></span>`;

    swatchItems.push(`<div class="custom-swatch${isCurrent ? ' active' : ''}">
<a href="/hq-leathercon/products/${sibSlug}/index.html" title="${cDef.label}"${isCurrent ? ' aria-current="page"' : ''}>
${innerVisual}
</a>
</div>`);
  }

  return `<div class="custom-swatches">\n${swatchItems.join('\n')}\n</div>`;
}

console.log(`Processing ${existingSlugs.length} product pages...`);
let updatedCount = 0;

for (const slug of existingSlugs) {
  const fp = path.join(PRODS_DIR, slug, 'index.html');
  if (!fs.existsSync(fp)) continue;
  let html = fs.readFileSync(fp, 'utf8');
  const origHtml = html;

  const p = prodByHandle[slug];
  const cleanTitle = p ? p.title.replace(/The Jacket Maker/gi, 'HQ Leathercon') : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // 1. Clean <title> tag if it has LeftRightDownToggle menu garbage
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${cleanTitle} | HQ Leathercon</title>`);

  // 2. Fix Header DESIGN YOUR OWN link
  html = html.replace(
    '<a class="navigation__link" href="/hq-leathercon/products/ionic-black-leather-jacket/index.html">DESIGN YOUR OWN</a>',
    '<a class="navigation__link" href="/hq-leathercon/products/custom-leather-jacket-builder/index.html">DESIGN YOUR OWN</a>'
  );

  // 3. Replace <div class="custom-swatches">...</div> inside fieldset with accurate sibling swatches
  const swatchStart = html.indexOf('<div class="custom-swatches">');
  if (swatchStart !== -1) {
    const fieldsetEnd = html.indexOf('</fieldset>', swatchStart);
    if (fieldsetEnd !== -1) {
      const newSwatches = buildSwatchesHtml(slug) + '\n</div>\n';
      html = html.slice(0, swatchStart) + newSwatches + html.slice(fieldsetEnd);
    }
  }

  // 4. Fix "You May Also Like" Card 3 (Bravado Black Hooded Leather Bomber Jacket)
  html = html.replace(
    /<a aria-label="Bravado Black Hooded Leather Bomber Jacket" class="product-link" href="\/hq-leathercon\/products\/ionic-black-leather-jacket\/index\.html" tabindex="-1">/g,
    '<a aria-label="Bravado Black Hooded Leather Bomber Jacket" class="product-link" href="/hq-leathercon/products/bravado-black-hooded-leather-bomber-jacket/index.html" tabindex="-1">'
  );
  html = html.replace(
    /<a class="product-link" href="\/hq-leathercon\/products\/ionic-black-leather-jacket\/index\.html">\s*<h2 class="product-block__title">Bravado Black Hooded Leather Bomber Jacket<\/h2>/g,
    '<a class="product-link" href="/hq-leathercon/products/bravado-black-hooded-leather-bomber-jacket/index.html">\n<h2 class="product-block__title">Bravado Black Hooded Leather Bomber Jacket</h2>'
  );

  // 5. Fix "You May Also Like" Card 1 (which had Ionic Black image & link but current product title) -> make it Inferno Black Leather Jacket (or Ionic Black if current is Inferno)
  const relSectionIdx = html.indexOf('You May Also Like');
  if (relSectionIdx !== -1) {
    const beforeRel = html.slice(0, relSectionIdx);
    let afterRel = html.slice(relSectionIdx);
    const card1Slug = slug === 'inferno-black-leather-jacket' ? 'allaric-alley-black-leather-biker-jacket' : 'inferno-black-leather-jacket';
    const card1Title = slug === 'inferno-black-leather-jacket' ? 'Allaric Alley Black Leather Biker Jacket' : 'Inferno Black Leather Jacket';
    const card1Img = slug === 'inferno-black-leather-jacket'
      ? '/hq-leathercon/images/Men_s_Allaric_Alley_Black_Leather_Biker_Jacket_2_11ac1524-562b-450d-bc1c-641e2af60a29.jpg'
      : '/hq-leathercon/images/Inferno_Black_Leather_Jacket_Made_of_100_Real_Sheepskin_Leather_fc7e93d2-fc85-4a78-aec3-81cd0cc2c2ed.jpg';

    // Replace the first product-block inside You May Also Like
    const firstBlockStart = afterRel.indexOf('<div class="product-block"');
    const secondBlockStart = afterRel.indexOf('<div class="product-block"', firstBlockStart + 20);
    if (firstBlockStart !== -1 && secondBlockStart !== -1) {
      let block1 = afterRel.slice(firstBlockStart, secondBlockStart);
      block1 = block1
        .replace(/href="\/hq-leathercon\/products\/[^"]+"/g, `href="/hq-leathercon/products/${card1Slug}/index.html"`)
        .replace(/aria-label="[^"]+"/g, `aria-label="${card1Title}"`)
        .replace(/alt="[^"]+"/g, `alt="${card1Title}"`)
        .replace(/<h2 class="product-block__title">[\s\S]*?<\/h2>/, `<h2 class="product-block__title">${card1Title}</h2>`)
        .replace(/\/hq-leathercon\/images\/Ionic_Black_Leather_Jacket[^"'\s]*/g, card1Img);
      afterRel = afterRel.slice(0, firstBlockStart) + block1 + afterRel.slice(secondBlockStart);
      html = beforeRel + afterRel;
    }
  }

  // 6. Replace any remaining self-references to ionic-black-leather-jacket in non-ionic product pages
  if (slug !== 'ionic-black-leather-jacket') {
    html = html
      .replace(/\/hq-leathercon\/products\/ionic-black-leather-jacket\/index\.html/g, `/hq-leathercon/products/${slug}/index.html`)
      .replace(/\/products\/ionic-black-leather-jacket/g, `/hq-leathercon/products/${slug}/index.html`)
      .replace(/"handle"\s*:\s*"ionic-black-leather-jacket"/g, `"handle":"${slug}"`)
      .replace(/handle:\s*"ionic-black-leather-jacket"/g, `handle: "${slug}"`)
      .replace(/value="ionic-black-leather-jacket"/g, `value="${slug}"`)
      .replace(/value="products\/ionic-black-leather-jacket"/g, `value="products/${slug}"`);
  }

  if (html !== origHtml) {
    fs.writeFileSync(fp, html, 'utf8');
    updatedCount++;
  }
}

console.log(`Successfully updated ${updatedCount} / ${existingSlugs.length} product pages!`);
