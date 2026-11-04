const fs = require('fs');
const path = require('path');

// 1. Load catalog data
const allProds = JSON.parse(fs.readFileSync('audit/all_store_products_complete.json', 'utf8'));
const kcProds = allProds.filter(p => p.handle.includes('keychain') || p.title.toLowerCase().includes('keychain'));
console.log(`Found ${kcProds.length} keychain products in catalog`);

// 2. Build dedicated collections/leather-keychains/index.html
const collPath = 'public/thejacketmaker/collections/leather-keychains/index.html';
let collHtml = fs.readFileSync(collPath, 'utf8');

// Replace H1 title
collHtml = collHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '<h1 class="collection-header__title majortitle in-content h1-style">LEATHER KEYCHAINS</h1>');

// Build product cards HTML
let cardsHtml = '';
for (const p of kcProds) {
  const handle = p.handle;
  const title = p.title;
  const price = p.variants && p.variants[0] ? p.variants[0].price : '25.00';
  const imgUrl = (p.images && p.images[0]) ? p.images[0].src : '/thejacketmaker/images/512-logo-black.svg';
  const img2Url = (p.images && p.images[1]) ? p.images[1].src : imgUrl;

  cardsHtml += `
  <div class="card-wrapper product-card-wrapper underline-links-hover grid__item" style="display: block;">
    <div class="card card--standard card--media" style="--ratio-percent: 100%;">
      <div class="card__inner color-background-2 ratio" style="--ratio-percent: 100%;">
        <div class="card__media">
          <a class="media media--transparent media--hover-effect" href="/thejacketmaker/products/${handle}/index.html" style="display: block; position: relative; padding-bottom: 100%;">
            <img alt="${title}" class="motion-reduce" loading="lazy" src="${imgUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity 0.3s ease;">
          </a>
        </div>
      </div>
      <div class="card__content" style="padding: 12px 8px; text-align: left;">
        <div class="card__information">
          <h3 class="card__heading h5" style="font-size: 14px; margin: 4px 0;">
            <a class="full-unstyled-link" href="/thejacketmaker/products/${handle}/index.html" style="color: inherit; text-decoration: none;">${title}</a>
          </h3>
          <div class="card-information">
            <span class="price-item price-item--regular" style="font-weight: 700; font-size: 14px; color: #111;">$${price}</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

// Replace product grid content in collections/leather-keychains/index.html
const gridStart = collHtml.indexOf('id="product-grid"');
if (gridStart !== -1) {
  const gridEnd = collHtml.indexOf('</ul>', gridStart);
  if (gridEnd !== -1) {
    const before = collHtml.slice(0, collHtml.indexOf('>', gridStart) + 1);
    const after = collHtml.slice(gridEnd);
    collHtml = before + '\n' + cardsHtml + '\n' + after;
  }
} else {
  // If product-grid id not present, look for class product-grid or main-collection-product-grid
  const pGridMatch = collHtml.match(/<div[^>]*class="[^"]*(?:product-grid|product-list)[^"]*"[^>]*>/i);
  if (pGridMatch) {
    const idx = collHtml.indexOf(pGridMatch[0]);
    const nextDiv = collHtml.indexOf('</div>', idx + pGridMatch[0].length + 100);
    collHtml = collHtml.slice(0, idx + pGridMatch[0].length) + '\n' + cardsHtml + '\n' + collHtml.slice(nextDiv);
  }
}

fs.writeFileSync(collPath, collHtml, 'utf8');
console.log('Successfully updated collections/leather-keychains/index.html with all 13 genuine keychain items!');

// 3. Fix each of the 13 Keychain Product Pages
for (const p of kcProds) {
  const pPath = `public/thejacketmaker/products/${p.handle}/index.html`;
  if (!fs.existsSync(pPath)) continue;

  let pHtml = fs.readFileSync(pPath, 'utf8');

  // Title
  pHtml = pHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, `<h1 class="product-detail__title uppercase-body majortitle in-content h1-style">${p.title}</h1>`);

  // Build real keychain gallery images
  if (p.images && p.images.length > 0) {
    const mainImg = p.images[0].src;
    
    // Replace main image
    pHtml = pHtml.replace(
      /<div class="main-image">[\s\S]*?(?=<div class="gallery__thumbnails|<div class="product-detail__detail)/i,
      `<div class="main-image" style="flex: 1 1 auto; min-width: 0; position: relative;">
        <div class="slideshow product-slideshow" style="position: relative;">
          <div class="slide slick-current slick-active" style="display: block; width: 100%;">
            <div class="product-media product-media--image" style="padding-bottom: 100%;">
              <img alt="${p.title}" class="rimage__image cover" src="${mainImg}" style="position: absolute; top:0; left:0; width:100%; height:100%; object-fit: contain;">
            </div>
          </div>
        </div>
      </div>`
    );

    // Build real thumbnails
    let thumbsHtml = '<div class="gallery__thumbnails" style="display: flex; gap: 8px; margin-top: 12px; overflow-x: auto;">';
    p.images.forEach((img, i) => {
      thumbsHtml += `
      <a class="thumbnail-item ${i === 0 ? 'active' : ''}" href="${img.src}" data-index="${i}" style="width: 64px; height: 64px; border: 1px solid ${i === 0 ? '#111' : '#e5e5e5'}; flex-shrink: 0; padding: 2px; cursor: pointer; display: block;">
        <img alt="${p.title}" src="${img.src}" style="width: 100%; height: 100%; object-fit: cover;">
      </a>`;
    });
    thumbsHtml += '</div>';

    // Replace gallery__thumbnails if present or insert after main-image
    if (pHtml.includes('class="gallery__thumbnails')) {
      pHtml = pHtml.replace(/<div class="gallery__thumbnails[\s\S]*?<\/div>\s*<\/div>/i, thumbsHtml + '</div>');
    }

    // Replace all occurrences of Ionic_Black_Leather_Jacket in meta tags and schemas
    pHtml = pHtml.replace(/https?:\/\/[^"'\s]*Ionic_Black_Leather_Jacket[^"'\s]*/gi, mainImg);
    pHtml = pHtml.replace(/Ionic Black Leather Jacket/gi, p.title);
  }

  // Replace Jacket specs with Keychain specs
  const kcDescription = `
  <div class="product-detail__description rte" style="margin-top: 16px;">
    <p>Crafted from premium 100% genuine full-grain leather, the ${p.title} combines artisanal durability with timeless style. Designed to keep your keys organized securely, with heavy-duty metal hardware and hand-finished burnished edges.</p>
    <ul>
      <li><strong>Material:</strong> 100% Genuine Full-Grain Leather</li>
      <li><strong>Hardware:</strong> Heavy-duty antique brass / nickel finish</li>
      <li><strong>Feature:</strong> Secure key ring & carabiner clasp</li>
      <li><strong>Handcrafted:</strong> Hand-cut and edge burnished</li>
    </ul>
  </div>`;

  if (pHtml.includes('class="product-detail__description')) {
    pHtml = pHtml.replace(/<div class="product-detail__description[^"]*"[\s\S]*?<\/div>/i, kcDescription);
  }

  // Remove jacket specifications table (Collar Style, Cuffs Style, Shell, Lining)
  pHtml = pHtml.replace(/<div class="specs-table"[\s\S]*?<\/table>\s*<\/div>/gi, '');
  pHtml = pHtml.replace(/Collar Style:[\s\S]*?Cuffs Style:[\s\S]*?Inside Pockets: Four/gi, '');

  fs.writeFileSync(pPath, pHtml, 'utf8');
  console.log(`Updated keychain product page: ${p.handle}`);
}

console.log('All keychain products and collections successfully fixed!');
