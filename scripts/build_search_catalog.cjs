const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'hq-leathercon');
const catalog = [];
const seenUrls = new Set();

const IMG_BIKER = '/hq-leathercon/images/Men_s_Alex_Brown_Leather_Biker_Jacket5970_055996de-e76f-474c-9a79-3cf7625d6a17.jpg';
const IMG_BOMBER = '/hq-leathercon/images/Alex_Distressed_Burgundy_Leather_Jacket_For_Men_Made_of_100_Real_Sheepskin_Leather_With_Burnished_Finish_1_627b6cdf-51d4-4c4c-9c09-e06768367b68.jpg';
const IMG_WOMEN = '/hq-leathercon/images/Women_27s_Alexis_Black_Single_Breasted_Leather_Coat_Full_Length-2-1652199479095_93dc30f6-d621-41d6-8acd-b12659d908b3.jpg';
const IMG_SHOES = '/hq-leathercon/images/01-Attorney_Derby_Maroon_Leather_Shoes_front-tilted-2-1674451218552_709d014e-3e39-4730-8d3e-82c06a82c731_medium.webp';

function addItem(title, url, image, price, category) {
  if (!title || !url) return;
  const cleanUrl = url.startsWith('/hq-leathercon') ? url : '/hq-leathercon' + (url.startsWith('/') ? url : '/' + url);
  if (seenUrls.has(cleanUrl)) return;
  seenUrls.add(cleanUrl);
  catalog.push({
    t: String(title).replace(/&#39;/g, "'").replace(/&amp;/g, '&').trim(),
    u: cleanUrl,
    i: image || IMG_BIKER,
    p: price || '',
    c: category || 'Product'
  });
}

// 1. Parse key collection HTMLs FIRST so products with exact photos & PKR prices appear first!
const fastCols = ['all', 'mens-biker-leather-jackets', 'mens-bomber-jackets', 'womens-leather-jackets', 'leather-wallets', 'mens-leather-belts', 'mens-leather-shoes', 'leather-bags'];
for (const col of fastCols) {
  const htmlPath = path.join(baseDir, 'collections', col, 'index.html');
  if (!fs.existsSync(htmlPath)) continue;
  const html = fs.readFileSync(htmlPath, 'utf8');
  const blocks = html.split(/class="product-block"/i).slice(1);
  for (const blk of blocks) {
    const chunk = blk.slice(0, 3500);
    const urlM = chunk.match(/href="(\/hq-leathercon\/products\/[^"#?]+\/index\.html)"/i);
    const titleM = chunk.match(/class="product-block__title"[^>]*>([\s\S]*?)<\/h2>/i) || chunk.match(/aria-label="([^"]+)"/i);
    const imgM = chunk.match(/src="(\/hq-leathercon\/images\/[^"]+)"/i) || chunk.match(/data-src="(\/hq-leathercon\/images\/[^"]+)"/i);
    const priceM = chunk.match(/Rs\.[\d,]+\.?\d*\s*PKR/i);
    if (urlM && titleM && imgM) {
      const cleanTitle = titleM[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      addItem(cleanTitle, urlM[1], imgM[1], priceM ? priceM[0] : 'Rs.38,800.00 PKR', 'Leather Collection');
    }
  }
}

// 2. Key collections & bespoke pages with verified local images
const keyPages = [
  { t: "Men's Leather Jackets", u: "/hq-leathercon/collections/mens-leather-jackets/index.html", i: IMG_BIKER, c: "Collection" },
  { t: "Men's Biker Jackets", u: "/hq-leathercon/collections/mens-biker-leather-jackets/index.html", i: IMG_BIKER, c: "Collection" },
  { t: "Men's Bomber Jackets", u: "/hq-leathercon/collections/mens-bomber-jackets/index.html", i: IMG_BOMBER, c: "Collection" },
  { t: "Men's Suede Jackets", u: "/hq-leathercon/collections/mens-suede-jackets/index.html", i: IMG_BOMBER, c: "Collection" },
  { t: "Women's Leather Jackets", u: "/hq-leathercon/collections/womens-leather-jackets/index.html", i: IMG_WOMEN, c: "Collection" },
  { t: "Women's Biker Jackets", u: "/hq-leathercon/collections/womens-biker-leather-jackets/index.html", i: IMG_WOMEN, c: "Collection" },
  { t: "Men's Leather Shoes", u: "/hq-leathercon/collections/mens-leather-shoes/index.html", i: IMG_SHOES, c: "Collection" },
  { t: "Leather Bags & Backpacks", u: "/hq-leathercon/collections/leather-bags/index.html", i: IMG_BOMBER, c: "Collection" },
  { t: "Leather Wallets", u: "/hq-leathercon/collections/leather-wallets/index.html", i: IMG_BIKER, c: "Belts & Wallets" },
  { t: "Men's Leather Belts", u: "/hq-leathercon/collections/mens-leather-belts/index.html", i: IMG_SHOES, c: "Belts & Wallets" },
  { t: "Custom Leather Belts", u: "/hq-leathercon/pages/custom-leather-belts/index.html", i: IMG_SHOES, c: "Belts & Wallets" },
  { t: "Custom Leather Wallets", u: "/hq-leathercon/pages/custom-leather-wallets/index.html", i: IMG_BIKER, c: "Belts & Wallets" },
  { t: "Design Your Own Leather Jacket", u: "/hq-leathercon/products/custom-leather-jacket-builder/index.html", i: IMG_BIKER, c: "Custom Builder" },
  { t: "Custom Jackets", u: "/hq-leathercon/pages/custom-jackets/index.html", i: IMG_BIKER, c: "Bespoke" },
  { t: "Custom Shoes", u: "/hq-leathercon/pages/custom-made-shoes/index.html", i: IMG_SHOES, c: "Bespoke" },
  { t: "Custom Bags", u: "/hq-leathercon/pages/custom-bag/index.html", i: IMG_BOMBER, c: "Bespoke" },
  { t: "Our Story", u: "/hq-leathercon/pages/our-story/index.html", i: "/hq-leathercon/images/hq-crest-logo.png", c: "Brand" }
];

for (const kp of keyPages) {
  addItem(kp.t, kp.u, kp.i, '', kp.c);
}

// 3. Add remaining product slugs in memory
const productsDir = path.join(baseDir, 'products');
if (fs.existsSync(productsDir)) {
  for (const slug of fs.readdirSync(productsDir)) {
    const url = `/hq-leathercon/products/${slug}/index.html`;
    if (seenUrls.has(url)) continue;
    const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    let fallbackImg = IMG_BIKER;
    if (/shoe|boot|loafer|sneaker|oxford|moccasin|belt/i.test(slug)) fallbackImg = IMG_SHOES;
    else if (/women|adalyn|alison|ava|bliss|carolyn|colette|donna|elixir|fiona|kelsee|lana|luna|nexi|rebella|roslyn|rumella|rumy|sally|sasha|savant|selina|sherilyn|stella|vixen|westa|zenith|zenna|zest/i.test(slug)) fallbackImg = IMG_WOMEN;
    else if (/bomber|suede/i.test(slug)) fallbackImg = IMG_BOMBER;
    addItem(title, url, fallbackImg, 'Rs.38,800.00 PKR', 'Leather Goods');
  }
}

const outPath = path.join(baseDir, 'js', 'search-catalog.js');
fs.writeFileSync(outPath, `window.HQ_SEARCH_CATALOG = ${JSON.stringify(catalog)};\n`, 'utf8');
console.log(`Built search-catalog.js with ${catalog.length} searchable items.`);
