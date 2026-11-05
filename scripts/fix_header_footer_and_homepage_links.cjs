const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const RAW_DIR = path.join(__dirname, '../audit/raw_tjm');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

const existingProds = new Set(fs.readdirSync(path.join(BASE_DIR, 'products')));
const existingCols = new Set(fs.readdirSync(path.join(BASE_DIR, 'collections')));
const existingPages = new Set(fs.readdirSync(path.join(BASE_DIR, 'pages')));
const existingPolicies = new Set(fs.readdirSync(path.join(BASE_DIR, 'policies')));

// Context-aware navigation link map (handles both Desktop Mega Menu and Mobile Drawer!)
function fixNavAndFooterLinks($) {
  // Track whether we are inside MEN, WOMEN, CUSTOMIZE, BRAND, CORPORATE GIFTS, GIFTING, SALE
  $('header a[href], .navigation a[href], #shopify-section-header a[href], footer a[href], #shopify-section-footer a[href]').each((_, el) => {
    const $a = $(el);
    const href = ($a.attr('href') || '').trim();
    if (!href || href === '#' || href.startsWith('#') || href.startsWith('http')) return;
    const text = $a.text().replace(/\s+/g, ' ').trim();
    if (!text || text === 'HQ LEATHERCON') return;

    // Determine top-level menu context if inside a nav tier
    const topLi = $a.parents('li.navigation__item--with-children, li.mobile-navigation__item').last();
    const topLabel = topLi.find('> a, > .mobile-navigation__link').first().text().replace(/\s+/g, ' ').trim().toUpperCase();
    const isWomen = topLabel.includes('WOMEN') || href.includes('women');

    const exactMap = {
      'DESIGN YOUR OWN': '/hq-leathercon/products/custom-leather-jacket-builder/index.html',
      'MEN': '/hq-leathercon/pages/men-jackets/index.html',
      'WOMEN': '/hq-leathercon/pages/women-jackets/index.html',
      'CUSTOMIZE': '/hq-leathercon/pages/custom-jackets/index.html',
      'BRAND': '/hq-leathercon/pages/our-story/index.html',
      'CORPORATE GIFTS': '/hq-leathercon/pages/corporate-gifts/index.html',
      'Corporate Gifts': '/hq-leathercon/pages/corporate-gifts/index.html',
      'Luxury Corporate Gifts': '/hq-leathercon/pages/luxury-corporate-gifts/index.html',
      'Employee Gifts': '/hq-leathercon/pages/employee-gift/index.html',
      'Client Gifts': '/hq-leathercon/pages/gifts-for-clients/index.html',
      'Event Gifts': '/hq-leathercon/pages/gifts-for-conferences-events/index.html',
      'GIFTING': '/hq-leathercon/collections/gifts-for-him/index.html',
      'Gifts For Him': '/hq-leathercon/collections/gifts-for-him/index.html',
      'Gifts For Her': '/hq-leathercon/collections/gifts-for-her/index.html',
      'Gift Set': '/hq-leathercon/collections/gift-set/index.html',
      'Leather Gifts': '/hq-leathercon/collections/leather-gifts/index.html',
      'SALE': '/hq-leathercon/collections/clearance-sale/index.html',
      'Sale': '/hq-leathercon/collections/clearance-sale/index.html',
      'Factory Seconds - 40% OFF': '/hq-leathercon/collections/factory-seconds/index.html',
      'Factory Seconds - 40% Off': '/hq-leathercon/collections/factory-seconds/index.html',
      'Leather Bags - 50% OFF': '/hq-leathercon/collections/sale/index.html',
      'Clearance - 50% OFF': '/hq-leathercon/collections/clearance-sale/index.html',
      'Clearance Sale - 50% OFF': '/hq-leathercon/collections/clearance-sale/index.html',
      // Customize menu items
      'Custom Jackets': '/hq-leathercon/pages/custom-jackets/index.html',
      'Custom Leather Jackets': '/hq-leathercon/pages/custom-leather-jackets/index.html',
      'Custom Bomber Jackets': '/hq-leathercon/pages/custom-bomber-jackets/index.html',
      'Custom Varsity Jackets': '/hq-leathercon/pages/custom-varsity-letterman-jackets/index.html',
      'Custom Embroidered Jackets': '/hq-leathercon/pages/custom-embroidered-jackets/index.html',
      'Custom Denim Jackets': '/hq-leathercon/pages/custom-denim-jackets/index.html',
      'Custom Windbreaker Jackets': '/hq-leathercon/pages/custom-windbreaker-jackets/index.html',
      'Custom Trench Coats': '/hq-leathercon/pages/custom-trench-coats/index.html',
      'Custom Motorcycle Jackets': '/hq-leathercon/pages/custom-motorcycle-jackets/index.html',
      'Custom Parka Jackets': '/hq-leathercon/pages/custom-parka-jackets/index.html',
      'Custom Leather Vests': '/hq-leathercon/pages/custom-leather-vests/index.html',
      'Custom Satin Jackets': '/hq-leathercon/pages/custom-satin-jackets/index.html',
      'Custom Suits': '/hq-leathercon/pages/custom-suits/index.html',
      'Custom Bags': '/hq-leathercon/pages/custom-bag/index.html',
      'Custom Leather Bags': '/hq-leathercon/pages/custom-leather-bags/index.html',
      'Custom Handbags': '/hq-leathercon/pages/custom-handbags/index.html',
      'Custom Briefcases': '/hq-leathercon/pages/custom-briefcases/index.html',
      'Custom Tote Bags': '/hq-leathercon/pages/custom-tote-bags/index.html',
      'Custom Backpacks': '/hq-leathercon/pages/custom-backpacks/index.html',
      'Custom Messenger Bags': '/hq-leathercon/pages/custom-messenger-laptop-bags/index.html',
      'Custom Weekender & Duffel Bags': '/hq-leathercon/pages/custom-duffel-weekender-bags/index.html',
      'Custom Portfolio Bags': '/hq-leathercon/pages/custom-portfolio-bags/index.html',
      'Custom Clutch Purses': '/hq-leathercon/pages/custom-clutch-purses/index.html',
      'Custom Shoes': '/hq-leathercon/pages/custom-made-shoes/index.html',
      'Custom Boots': '/hq-leathercon/pages/custom-boots/index.html',
      'Custom Dress Shoes': '/hq-leathercon/pages/custom-dress-shoes/index.html',
      'Custom Leather Shoes': '/hq-leathercon/pages/custom-leather-shoes/index.html',
      'Custom Loafers': '/hq-leathercon/pages/custom-loafers/index.html',
      'Custom Moccasins': '/hq-leathercon/pages/custom-moccasins/index.html',
      'Custom Oxford Shoes': '/hq-leathercon/pages/custom-oxford-shoes/index.html',
      'Custom Leather Goods': '/hq-leathercon/pages/custom-leather-goods/index.html',
      'Custom Leather Wallets': '/hq-leathercon/pages/custom-leather-wallets/index.html',
      'Custom Leather Keychains': '/hq-leathercon/pages/custom-leather-keychains/index.html',
      'Custom Passport Holders': '/hq-leathercon/pages/custom-passport-holders/index.html',
      'Personalized Luggage Tags': '/hq-leathercon/pages/personalized-luggage-tags/index.html',
      'Custom Leather Belts': '/hq-leathercon/pages/custom-leather-belts/index.html',
      'Custom Apparel': '/hq-leathercon/pages/custom-apparel/index.html',
      'Custom Jerseys': '/hq-leathercon/pages/custom-jerseys/index.html',
      'Custom T-Shirts': '/hq-leathercon/pages/custom-tshirts/index.html',
      'Custom Hoodies': '/hq-leathercon/pages/custom-hoodies/index.html',
      'Custom Sweatshirts': '/hq-leathercon/pages/custom-sweatshirts/index.html',
      'Custom Polos': '/hq-leathercon/pages/custom-polo-shirts/index.html',
      'How It Works': '/hq-leathercon/pages/bespoke/index.html',
      // Brand & Footer items
      'Our Story': '/hq-leathercon/pages/our-story/index.html',
      'Customer Reviews': '/hq-leathercon/pages/reviews/index.html',
      'Press & Mentions': '/hq-leathercon/pages/press/index.html',
      'Celebrity Style': '/hq-leathercon/pages/celebrity-style/index.html',
      "Customers' Gallery": '/hq-leathercon/pages/happy-customers/index.html',
      'Our Bespoke Process': '/hq-leathercon/pages/bespoke/index.html',
      '#HangOnToIt': '/hq-leathercon/pages/hangontoit/index.html',
      '#MadeForMe': '/hq-leathercon/pages/made-for-me/index.html',
      'Affiliate Program': '/hq-leathercon/pages/affiliate-program/index.html',
      'Brand Ambassador Program': '/hq-leathercon/pages/brand-ambassador-program/index.html',
      'Help Center': '/hq-leathercon/pages/help/index.html',
      'Contact Us': '/hq-leathercon/pages/contact-us/index.html',
      'Size Guide': '/hq-leathercon/pages/size-guide/index.html',
      'File a Return': '/hq-leathercon/pages/returns/index.html',
      'Track Order': '/hq-leathercon/pages/track-order/index.html',
      "Men's Outerwear": '/hq-leathercon/pages/men-jackets/index.html',
      "Women's Outerwear": '/hq-leathercon/pages/women-jackets/index.html',
      "Men's Shoes": '/hq-leathercon/pages/eviternity/index.html',
      'Bags & Accessories': '/hq-leathercon/pages/trucarry/index.html',
      'Cyber Monday Sale': '/hq-leathercon/pages/black-friday-jacket-deals/index.html',
      // Men/Women shared or specific collection items
      'Fur & Shearling': '/hq-leathercon/collections/mens-fur-shearling-jackets/index.html',
      'Puffer Jackets': '/hq-leathercon/collections/mens-leather-puffer-jackets/index.html',
      'Hooded Leather Jackets': '/hq-leathercon/collections/mens-leather-jackets-hood/index.html',
      'Best Seller': '/hq-leathercon/collections/mens-best-sellers/index.html',
      'Best Sellers': '/hq-leathercon/collections/best-leather-jackets-women/index.html',
      'Winter Jackets': '/hq-leathercon/collections/mens-winter-jackets/index.html',
      'Tech & Fabric Jackets': '/hq-leathercon/collections/mens-windbreaker-jackets/index.html',
      'Summer Jackets': '/hq-leathercon/collections/mens-summer-jackets/index.html',
      'Denim Jackets': '/hq-leathercon/collections/mens-denim-jackets/index.html',
      'Waxed Canvas Jackets': '/hq-leathercon/collections/mens-waxed-canvas-jackets/index.html',
      'Puffer Vests': '/hq-leathercon/collections/mens-puffer-vests/index.html',
      'Windbreaker & Puffers': '/hq-leathercon/collections/mens-puffer-jackets/index.html',
      'Lightweight Jackets': '/hq-leathercon/collections/mens-lightweight-jackets/index.html',
      'Soft Shell Jackets': '/hq-leathercon/collections/mens-soft-shell-jackets/index.html',
      'Down Jacket': '/hq-leathercon/products/exton-black-hooded-down-puffer-jacket/index.html',
      'Down Jackets': '/hq-leathercon/collections/mens-down-jackets/index.html',
      'Wool Coats & Jackets': '/hq-leathercon/collections/mens-wool-coats-jackets/index.html',
      'Fur & Shearling Coats': '/hq-leathercon/collections/mens-fur-shearling-coats/index.html',
      'Leather Dusters': '/hq-leathercon/collections/mens-leather-dusters/index.html',
      'Shoes': '/hq-leathercon/pages/eviternity/index.html',
      'Leather Shoes': '/hq-leathercon/collections/mens-leather-shoes/index.html',
      'Leather Loafers': '/hq-leathercon/collections/mens-leather-loafers/index.html',
      'Dress Shoes': '/hq-leathercon/collections/mens-dress-shoes/index.html',
      'Casual Shoes': '/hq-leathercon/collections/mens-casual-shoes/index.html',
      'Leather Boots': '/hq-leathercon/collections/mens-leather-boots/index.html',
      'Leather Sneakers': '/hq-leathercon/collections/mens-leather-sneakers/index.html',
      'Vintage Leather Bags': '/hq-leathercon/collections/vintage-leather-bags/index.html',
      'Laptop Bags': '/hq-leathercon/collections/laptop-leather-bags/index.html',
      'Travel Bags': '/hq-leathercon/collections/leather-travel-bags/index.html',
      'Business Bags': '/hq-leathercon/collections/leather-business-bags/index.html',
      'Leather Backpacks': '/hq-leathercon/collections/leather-backpacks/index.html',
      'Leather Wallets': '/hq-leathercon/collections/leather-wallets/index.html',
      'Leather Belts': '/hq-leathercon/collections/mens-leather-belts/index.html',
      'Leather Accessories': '/hq-leathercon/collections/leather-gifts/index.html',
      'Plus Size Leather Jackets': '/hq-leathercon/pages/women-plus-size-leather-jackets/index.html',
      'New Arrivals': '/hq-leathercon/collections/womens-new-arrival/index.html',
      'Leather Trench Coats': '/hq-leathercon/collections/women-leather-trench-coats/index.html',
      'Shearling Jackets & Coats': '/hq-leathercon/collections/womens-shearling-jackets/index.html',
      'Shearling Jackets & coats': '/hq-leathercon/collections/womens-shearling-jackets/index.html',
      'Hobo Bags': '/hq-leathercon/collections/womens-hobo-bags/index.html',
      'Tote Bags': '/hq-leathercon/collections/leather-tote-bags/index.html',
      'Crossbody Bags': '/hq-leathercon/collections/leather-crossbody-bags/index.html'
    };

    if (exactMap[text]) {
      $a.attr('href', exactMap[text]);
      return;
    }

    // Gender-dependent collection links (MEN vs WOMEN)
    const genderMap = {
      'Jackets': isWomen ? '/hq-leathercon/collections/womens-leather-jackets/index.html' : '/hq-leathercon/collections/mens-leather-jackets/index.html',
      'Leather Jackets': isWomen ? '/hq-leathercon/collections/womens-leather-jackets/index.html' : '/hq-leathercon/collections/mens-leather-jackets/index.html',
      'All Leather Jackets': isWomen ? '/hq-leathercon/collections/womens-leather-jackets/index.html' : '/hq-leathercon/collections/mens-leather-jackets/index.html',
      'Bomber Jackets': isWomen ? '/hq-leathercon/collections/women-bomber-jackets/index.html' : '/hq-leathercon/collections/mens-bomber-jackets/index.html',
      'Biker Jackets': isWomen ? '/hq-leathercon/collections/womens-biker-leather-jackets/index.html' : '/hq-leathercon/collections/mens-biker-leather-jackets/index.html',
      'Suede Jackets': isWomen ? '/hq-leathercon/collections/womens-suede-jackets/index.html' : '/hq-leathercon/collections/mens-suede-jackets/index.html',
      'Varsity Jackets': isWomen ? '/hq-leathercon/collections/women-varsity-jackets/index.html' : '/hq-leathercon/collections/mens-varsity-jacket/index.html',
      'Leather Vests': isWomen ? '/hq-leathercon/collections/women-leather-vests/index.html' : '/hq-leathercon/collections/mens-leather-vests/index.html',
      'Leather Blazers': isWomen ? '/hq-leathercon/collections/women-blazers/index.html' : '/hq-leathercon/collections/mens-blazers/index.html',
      'Aviator Jackets': isWomen ? '/hq-leathercon/collections/womens-aviator-jackets/index.html' : '/hq-leathercon/collections/mens-aviator-jackets/index.html',
      'Coats': isWomen ? '/hq-leathercon/collections/women-winter-coats/index.html' : '/hq-leathercon/collections/mens-winter-coats/index.html',
      'Leather Coats': isWomen ? '/hq-leathercon/collections/women-leather-coats/index.html' : '/hq-leathercon/collections/mens-leather-coats/index.html',
      'Trench & Winter Coats': isWomen ? '/hq-leathercon/collections/women-winter-coats/index.html' : '/hq-leathercon/collections/mens-winter-coats/index.html',
      'Bags': isWomen ? '/hq-leathercon/collections/womens-leather-bags/index.html' : '/hq-leathercon/pages/trucarry/index.html',
      'Leather Bags': isWomen ? '/hq-leathercon/collections/womens-leather-bags/index.html' : '/hq-leathercon/collections/leather-bags/index.html'
    };

    if (genderMap[text]) {
      $a.attr('href', genderMap[text]);
    }
  });
}

// 1. Fix Homepage (public/hq-leathercon/index.html)
console.log('Fixing public/hq-leathercon/index.html...');
const rawHome = fs.readFileSync(path.join(RAW_DIR, 'home.html'), 'utf8');
const $rawHome = cheerio.load(rawHome);
const indexHtmlPath = path.join(BASE_DIR, 'index.html');
const $index = cheerio.load(fs.readFileSync(indexHtmlPath, 'utf8'));

fixNavAndFooterLinks($index);
$index('head > title').first().text('HQ Leathercon: Custom Leather Jackets, Bags & Shoes');

// Fix Homepage main category cards that pointed to /collections/all
$index('main a[href], #MainContent a[href]').each((_, el) => {
  const $a = $index(el);
  const txt = $a.text().replace(/\s+/g, ' ').trim();
  if (txt === "Men's Coats") $a.attr('href', '/hq-leathercon/collections/mens-winter-coats/index.html');
  else if (txt === "Puffer Jackets") $a.attr('href', '/hq-leathercon/collections/mens-puffer-jackets/index.html');
  else if (txt === "Women's Coats") $a.attr('href', '/hq-leathercon/collections/women-leather-coats/index.html');
  else if (txt === "Shop Clearance Items") $a.attr('href', '/hq-leathercon/collections/clearance-sale/index.html');
});

// Match Instagram / Customer Gallery "Shop Now" links on Homepage against raw_tjm/home.html by @handle or image
const rawShopByHandle = {};
$rawHome('.instafeed-lightbox, .instagram-slide, .slick-slide, div').each((_, el) => {
  const instaLink = $rawHome(el).find('a[href*="instagram.com"], a').filter((i, a) => $rawHome(a).text().trim().startsWith('@')).first();
  const shopLink = $rawHome(el).find('a[href*="/products/"]').first();
  if (instaLink.length && shopLink.length) {
    const handleTxt = instaLink.text().trim();
    const prodHref = shopLink.attr('href') || '';
    const pSlug = prodHref.split('/products/')[1] ? prodHref.split('/products/')[1].split('?')[0].split('/')[0] : '';
    if (handleTxt && pSlug && existingProds.has(pSlug)) {
      rawShopByHandle[handleTxt] = `/hq-leathercon/products/${pSlug}/index.html`;
    }
  }
});

$index('main a').each((_, el) => {
  const $a = $index(el);
  const txt = $a.text().trim();
  if (txt.startsWith('@') && rawShopByHandle[txt]) {
    const container = $a.closest('.slick-slide, .column, .grid__item, div');
    container.find('a[href*="/products/"]').attr('href', rawShopByHandle[txt]);
  }
});

fs.writeFileSync(indexHtmlPath, $index.html(), 'utf8');
console.log('Fixed public/hq-leathercon/index.html!');

// 2. Apply fixNavAndFooterLinks across all collections, pages, and policies
for (const dir of ['collections', 'pages', 'policies']) {
  const fullDir = path.join(BASE_DIR, dir);
  if (!fs.existsSync(fullDir)) continue;
  const slugs = fs.readdirSync(fullDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
  let count = 0;
  for (const slug of slugs) {
    const fp = path.join(fullDir, slug, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const $ = cheerio.load(fs.readFileSync(fp, 'utf8'));
    fixNavAndFooterLinks($);
    fs.writeFileSync(fp, $.html(), 'utf8');
    count++;
  }
  console.log(`Updated header/mega-menu/mobile-drawer/footer links in ${count} ${dir} pages!`);
}
