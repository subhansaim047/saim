const fs = require('fs');
const path = require('path');

// 1. Load catalog
const allProds = JSON.parse(fs.readFileSync('audit/all_store_products_complete.json', 'utf8'));
console.log(`Loaded ${allProds.length} total products from catalog.`);

// Master template from an existing clean collection
const masterCollTemplate = fs.readFileSync('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'utf8');

// Helper to filter products
function getProductsForCategory(category) {
  const cat = category.toLowerCase();
  let matches = allProds.filter(p => {
    const title = (p.title || '').toLowerCase();
    const type = (p.product_type || '').toLowerCase();
    const handle = (p.handle || '').toLowerCase();
    const tags = (p.tags || []).join(' ').toLowerCase();

    if (cat.includes('puffer-vest') || cat.includes('vest')) {
      return title.includes('vest') || tags.includes('vest');
    }
    if (cat.includes('puffer') || cat.includes('down')) {
      return title.includes('puffer') || tags.includes('puffer') || title.includes('down');
    }
    if (cat.includes('hood')) {
      return title.includes('hood') || tags.includes('hood');
    }
    if (cat.includes('windbreaker') || cat.includes('lightweight') || cat.includes('summer') || cat.includes('soft-shell')) {
      return title.includes('windbreaker') || title.includes('jacket') || tags.includes('jacket');
    }
    if (cat.includes('denim')) {
      return title.includes('denim') || tags.includes('denim');
    }
    if (cat.includes('waxed')) {
      return title.includes('waxed') || tags.includes('canvas');
    }
    if (cat.includes('duster') || cat.includes('trench') || cat.includes('coat')) {
      return title.includes('coat') || title.includes('trench') || title.includes('duster');
    }
    if (cat.includes('boot')) {
      return title.includes('boot') || tags.includes('boot');
    }
    if (cat.includes('loafer')) {
      return title.includes('loafer') || tags.includes('loafer');
    }
    if (cat.includes('sneaker') || cat.includes('casual-shoes')) {
      return title.includes('sneaker') || title.includes('shoe');
    }
    if (cat.includes('dress-shoes') || cat.includes('shoe') || cat.includes('eviternity')) {
      return type.includes('shoes') || title.includes('shoe') || title.includes('oxford') || title.includes('derby');
    }
    if (cat.includes('wallet')) {
      return title.includes('wallet') || tags.includes('wallet');
    }
    if (cat.includes('belt')) {
      return title.includes('belt') || tags.includes('belt');
    }
    if (cat.includes('laptop') || cat.includes('messenger') || cat.includes('business')) {
      return title.includes('laptop') || title.includes('messenger') || title.includes('briefcase') || title.includes('bag');
    }
    if (cat.includes('tote')) {
      return title.includes('tote') || tags.includes('tote');
    }
    if (cat.includes('crossbody') || cat.includes('hobo')) {
      return title.includes('crossbody') || title.includes('hobo') || title.includes('handbag') || title.includes('bag');
    }
    if (cat.includes('backpack')) {
      return title.includes('backpack') || tags.includes('backpack');
    }
    if (cat.includes('bag')) {
      return type.includes('bags') || title.includes('bag');
    }
    if (cat.includes('sale') || cat.includes('seconds')) {
      return (p.variants && p.variants[0] && parseFloat(p.variants[0].compare_at_price || 0) > parseFloat(p.variants[0].price || 0));
    }
    return false;
  });

  if (matches.length < 8) {
    // Backfill with general matching
    if (cat.includes('shoe')) {
      matches = allProds.filter(p => (p.product_type || '').toLowerCase().includes('shoes') || (p.title || '').toLowerCase().includes('shoe'));
    } else if (cat.includes('bag')) {
      matches = allProds.filter(p => (p.product_type || '').toLowerCase().includes('bags') || (p.title || '').toLowerCase().includes('bag'));
    } else {
      matches = allProds.filter(p => (p.title || '').toLowerCase().includes('jacket')).slice(0, 36);
    }
  }

  return matches;
}

// Collections to build
const collectionsToCreate = [
  { slug: 'mens-leather-puffer-jackets', title: "Men's Leather Puffer Jackets" },
  { slug: 'mens-leather-jackets-hood', title: "Men's Hooded Leather Jackets" },
  { slug: 'mens-windbreaker-jackets', title: "Men's Windbreaker Jackets" },
  { slug: 'mens-summer-jackets', title: "Men's Summer Jackets" },
  { slug: 'mens-denim-jackets', title: "Men's Denim Jackets" },
  { slug: 'mens-waxed-canvas-jackets', title: "Men's Waxed Canvas Jackets" },
  { slug: 'mens-lightweight-jackets', title: "Men's Lightweight Jackets" },
  { slug: 'mens-puffer-vests', title: "Men's Puffer Vests" },
  { slug: 'mens-soft-shell-jackets', title: "Men's Soft Shell Jackets" },
  { slug: 'mens-down-jackets', title: "Men's Down Jackets" },
  { slug: 'mens-winter-coats', title: "Men's Winter Coats" },
  { slug: 'mens-fur-shearling-coats', title: "Men's Fur & Shearling Coats" },
  { slug: 'mens-leather-dusters', title: "Men's Leather Dusters" },
  { slug: 'sale', title: "Clearance Sale - 50% OFF" },
  { slug: 'leather-bags', title: "Leather Bags" },
  { slug: 'vintage-leather-bags', title: "Vintage Leather Bags" },
  { slug: 'laptop-leather-bags', title: "Laptop Leather Bags" },
  { slug: 'leather-travel-bags', title: "Leather Travel Bags" },
  { slug: 'leather-business-bags', title: "Leather Business Bags" },
  { slug: 'leather-backpacks', title: "Leather Backpacks" },
  { slug: 'eviternity', title: "Eviternity Leather Shoes" },
  { slug: 'mens-leather-shoes', title: "Men's Leather Shoes" },
  { slug: 'mens-dress-shoes', title: "Men's Dress Shoes" },
  { slug: 'mens-casual-shoes', title: "Men's Casual Shoes" },
  { slug: 'mens-leather-boots', title: "Men's Leather Boots" },
  { slug: 'mens-leather-sneakers', title: "Men's Leather Sneakers" },
  { slug: 'mens-leather-loafers', title: "Men's Leather Loafers" },
  { slug: 'leather-wallets', title: "Leather Wallets" },
  { slug: 'mens-leather-belts', title: "Men's Leather Belts" },
  { slug: 'women-leather-trench-coats', title: "Women's Leather Trench Coats" },
  { slug: 'womens-leather-bags', title: "Women's Leather Bags" },
  { slug: 'leather-tote-bags', title: "Leather Tote Bags" },
  { slug: 'leather-crossbody-bags', title: "Leather Crossbody Bags" },
  { slug: 'womens-hobo-bags', title: "Women's Hobo Bags" }
];

console.log(`\n--- BUILDING ${collectionsToCreate.length} MISSING COLLECTIONS ---`);
for (const item of collectionsToCreate) {
  const dir = path.join('public/thejacketmaker/collections', item.slug);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, 'index.html');

  const products = getProductsForCategory(item.slug);
  console.log(`Building collection: ${item.slug} (${products.length} products)`);

  let cardsHtml = '';
  for (const p of products.slice(0, 48)) {
    const handle = p.handle;
    const title = p.title;
    const price = (p.variants && p.variants[0]) ? p.variants[0].price : '285.00';
    const compPrice = (p.variants && p.variants[0] && p.variants[0].compare_at_price) ? p.variants[0].compare_at_price : null;
    const imgUrl = (p.images && p.images[0]) ? p.images[0].src : '/thejacketmaker/images/512-logo-black.svg';

    cardsHtml += `
    <div class="card-wrapper product-card-wrapper underline-links-hover grid__item" style="display: block;">
      <div class="card card--standard card--media" style="--ratio-percent: 100%;">
        <div class="card__inner color-background-2 ratio" style="--ratio-percent: 100%;">
          <div class="card__media">
            <a class="media media--transparent media--hover-effect" href="/thejacketmaker/products/${handle}/index.html" style="display: block; position: relative; padding-bottom: 100%;">
              <img alt="${title}" class="motion-reduce" loading="lazy" src="${imgUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
            </a>
          </div>
        </div>
        <div class="card__content" style="padding: 12px 8px; text-align: left;">
          <div class="card__information">
            <h3 class="card__heading h5" style="font-size: 14px; margin: 4px 0;">
              <a class="full-unstyled-link" href="/thejacketmaker/products/${handle}/index.html" style="color: inherit; text-decoration: none;">${title}</a>
            </h3>
            <div class="card-information" style="display: flex; gap: 8px; align-items: baseline;">
              <span class="price-item price-item--regular" style="font-weight: 700; font-size: 14px; color: #111;">$${price}</span>
              ${compPrice ? `<span class="price-item--compare" style="text-decoration: line-through; font-size: 12px; color: #999;">$${compPrice}</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  let html = masterCollTemplate;
  // Update Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${item.title} | HQ Leathercon</title>`);
  html = html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, `<h1 class="collection-header__title majortitle in-content h1-style">${item.title.toUpperCase()}</h1>`);

  // Replace Product Grid
  const gridStart = html.indexOf('id="product-grid"');
  if (gridStart !== -1) {
    const gridEnd = html.indexOf('</ul>', gridStart);
    if (gridEnd !== -1) {
      const before = html.slice(0, html.indexOf('>', gridStart) + 1);
      const after = html.slice(gridEnd);
      html = before + '\n' + cardsHtml + '\n' + after;
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
}

// 2. Build Missing Custom Landing Pages
const pagesToCreate = [
  { slug: 'women-plus-size-leather-jackets', title: "Women's Plus Size Leather Jackets" },
  { slug: 'custom-jackets', title: "Custom Leather Jackets" },
  { slug: 'custom-bag', title: "Custom Leather Bags" },
  { slug: 'custom-made-shoes', title: "Custom Made Shoes" },
  { slug: 'made-for-me', title: "#MadeForMe Bespoke Process" },
  { slug: 'size-guide', title: "Size Guide & Fit Assistance" },
  { slug: 'returns', title: "File A Return & Exchange" }
];

const masterPageTemplate = fs.readFileSync('public/thejacketmaker/pages/custom-leather-jackets/index.html', 'utf8');

console.log(`\n--- BUILDING ${pagesToCreate.length} MISSING PAGES ---`);
for (const p of pagesToCreate) {
  const dir = path.join('public/thejacketmaker/pages', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, 'index.html');

  let pHtml = masterPageTemplate;
  pHtml = pHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${p.title} | HQ Leathercon</title>`);
  pHtml = pHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, `<h1 class="majortitle in-content h1-style" style="text-align: center; margin: 30px 0 15px;">${p.title.toUpperCase()}</h1>`);

  fs.writeFileSync(filePath, pHtml, 'utf8');
  console.log(`Built page: ${p.slug}`);
}

console.log('\n--- 3. UPDATING HEADER & FOOTER LOGO TO HQ CREST + TEXT ACROSS ALL TEMPLATES ---');

// Define new Header Logo HTML
const newHeaderLogo = `
<h1 class="logo__h1">
  <a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon" style="display: inline-flex; align-items: center; gap: 14px; text-decoration: none;">
    <img alt="HQ Leathercon" class="logo__image" height="52" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 52px; width: auto; max-height: 55px; object-fit: contain; vertical-align: middle;"/>
    <span class="logo__brand-title" style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 22px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase; white-space: nowrap; line-height: 1;">HQ LEATHERCON</span>
  </a>
</h1>`;

// Define Footer Brand Block HTML
const newFooterBrand = `
<div class="footer__brand-block" style="padding: 24px 0 16px; display: flex; align-items: center; gap: 14px;">
  <a href="/thejacketmaker/index.html" style="display: inline-flex; align-items: center; gap: 14px; text-decoration: none;">
    <img alt="HQ Leathercon" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 48px; width: auto; object-fit: contain;"/>
    <span style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 22px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase;">HQ LEATHERCON</span>
  </a>
</div>`;

// Update index.html
let indexHtml = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
indexHtml = indexHtml.replace(/<h1 class="logo__h1">[\s\S]*?<\/h1>/i, newHeaderLogo.trim());
if (!indexHtml.includes('footer__brand-block')) {
  indexHtml = indexHtml.replace(
    '<div class="section-footer__row section-footer__row--blocks"',
    newFooterBrand + '\n<div class="section-footer__row section-footer__row--blocks"'
  );
}
fs.writeFileSync('public/thejacketmaker/index.html', indexHtml, 'utf8');
console.log('Successfully updated logo in public/thejacketmaker/index.html!');

// Update all collection and page files
const allHtmlPaths = [
  ...fs.readdirSync('public/thejacketmaker/collections').map(d => `public/thejacketmaker/collections/${d}/index.html`),
  ...fs.readdirSync('public/thejacketmaker/pages').map(d => `public/thejacketmaker/pages/${d}/index.html`)
];

let templatesUpdated = 0;
for (const file of allHtmlPaths) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let mod = false;

    // Header logo replacement
    if (content.includes('logo__h1')) {
      content = content.replace(/<h1 class="logo__h1">[\s\S]*?<\/h1>/i, newHeaderLogo.trim());
      mod = true;
    }

    // Footer brand replacement
    if (!content.includes('footer__brand-block') && content.includes('section-footer__row--blocks')) {
      content = content.replace(
        '<div class="section-footer__row section-footer__row--blocks"',
        newFooterBrand + '\n<div class="section-footer__row section-footer__row--blocks"'
      );
      mod = true;
    }

    if (mod) {
      fs.writeFileSync(file, content, 'utf8');
      templatesUpdated++;
    }
  }
}

console.log(`Updated Logo & Brand Title across ${templatesUpdated} collection and page templates!`);
