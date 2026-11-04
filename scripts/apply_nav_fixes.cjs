const fs = require('fs');

let html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// 1. Fix the 4 missing links identified in deep audit:
// Men's Leather Jackets column title:
html = html.replace(
  '<a href="/collections" class="navigation__link navigation__column-title" aria-haspopup="true" aria-expanded="false">Leather Jackets</a>',
  '<a href="/thejacketmaker/collections/mens-leather-jackets/index.html" class="navigation__link navigation__column-title" aria-haspopup="true" aria-expanded="false">Leather Jackets</a>'
);
// Women's Leather Jackets column title:
html = html.replace(
  '<a aria-expanded="false" aria-haspopup="true" class="navigation__link navigation__column-title" href="/collections">Leather Jackets</a>',
  '<a aria-expanded="false" aria-haspopup="true" class="navigation__link navigation__column-title" href="/thejacketmaker/collections/womens-leather-jackets/index.html">Leather Jackets</a>'
);

// Any other href="/collections"
html = html.replace(/href="\/collections"/g, 'href="/thejacketmaker/collections/mens-leather-jackets/index.html"');

// Policies:
html = html.replace(
  /href="\/thejacketmaker\/pages\/refund-policy\/index\.html"/g,
  'href="/thejacketmaker/policies/refund-policy/index.html"'
);
html = html.replace(
  /href="\/thejacketmaker\/pages\/shipping-policy\/index\.html"/g,
  'href="/thejacketmaker/policies/shipping-policy/index.html"'
);

// 2. Fix specific navigation items so they don't open the same page:
// In Men's menu:
const menReplacements = [
  // Tech & Fabric Jackets
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-winter-jackets/index.html">Summer Jackets</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-summer-jackets/index.html">Summer Jackets</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-winter-jackets/index.html">Denim Jackets</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-denim-jackets/index.html">Denim Jackets</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-winter-jackets/index.html">Waxed Canvas Jackets</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-waxed-canvas-jackets/index.html">Waxed Canvas Jackets</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-puffer-jackets/index.html">Puffer Vests</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-puffer-vests/index.html">Puffer Vests</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-puffer-jackets/index.html">Windbreaker &amp; Puffers</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-windbreaker-jackets/index.html">Windbreaker &amp; Puffers</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-winter-jackets/index.html">Lightweight Jackets</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-lightweight-jackets/index.html">Lightweight Jackets</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-winter-jackets/index.html">Soft Shell Jackets</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-soft-shell-jackets/index.html">Soft Shell Jackets</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-puffer-jackets/index.html">Down Jacket</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-down-jackets/index.html">Down Jacket</a>' },
  // Coats
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-winter-jackets/index.html">Trench &amp; Winter Coats</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-winter-coats/index.html">Trench &amp; Winter Coats</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-fur-shearling-jackets/index.html">Fur &amp; Shearling Coats</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-fur-shearling-coats/index.html">Fur &amp; Shearling Coats</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/mens-leather-coats/index.html">Leather Dusters</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-leather-dusters/index.html">Leather Dusters</a>' },
  // Shoes
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-shoes-men/index.html">Leather Loafers</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-leather-loafers/index.html">Leather Loafers</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-shoes-men/index.html">Dress Shoes</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-dress-shoes/index.html">Dress Shoes</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-shoes-men/index.html">Casual Shoes</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-casual-shoes/index.html">Casual Shoes</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-shoes-men/index.html">Leather Boots</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-leather-boots/index.html">Leather Boots</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-shoes-men/index.html">Leather Sneakers</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-leather-sneakers/index.html">Leather Sneakers</a>' },
  // Bags
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-bags/index.html">Vintage Leather Bags</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/vintage-leather-bags/index.html">Vintage Leather Bags</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-bags/index.html">Laptop Bags</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/laptop-leather-bags/index.html">Laptop Bags</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-bags/index.html">Travel Bags</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/leather-travel-bags/index.html">Travel Bags</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-bags/index.html">Business Bags</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/leather-business-bags/index.html">Business Bags</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-bags/index.html">Leather Backpacks</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/leather-backpacks/index.html">Leather Backpacks</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/all/index.html">Leather Wallets</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/leather-wallets/index.html">Leather Wallets</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/all/index.html">Leather Belts</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/mens-leather-belts/index.html">Leather Belts</a>' }
];

menReplacements.forEach(r => {
  if (html.includes(r.from)) {
    console.log(`Replaced Men item: ${r.from.slice(0, 40)}...`);
    html = html.replace(r.from, r.to);
  }
});

// In Customize menu:
const custReplacements = [
  { from: '<a class="navigation__link" href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Bags</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/pages/custom-leather-bags/index.html">Custom Bags</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-grain-leather-shoes-men/index.html">Custom Shoes</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/pages/custom-made-shoes/index.html">Custom Shoes</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/collections/full-full-grain-leather-wallets/index.html">Custom Leather Goods</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/collections/leather-wallets/index.html">Custom Leather Goods</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/pages/custom-leather-bags/index.html">Custom Weekender &amp; Duffel Bags</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/pages/custom-duffel-weekender-bags/index.html">Custom Weekender &amp; Duffel Bags</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/pages/custom-leather-jackets/index.html">DESIGN YOUR OWN</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/pages/custom-leather-jackets/index.html">DESIGN YOUR OWN</a>' }
];

custReplacements.forEach(r => {
  if (html.includes(r.from)) {
    console.log(`Replaced Customize item: ${r.from.slice(0, 40)}...`);
    html = html.replace(r.from, r.to);
  }
});

// In Help menu:
const helpReplacements = [
  { from: '<a class="navigation__link" href="/thejacketmaker/pages/help/index.html">Size Guide</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/pages/size-guide/index.html">Size Guide</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/pages/help/index.html">File A Return</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/pages/returns/index.html">File A Return</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/pages/help/index.html">Returns &amp; Refunds</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/policies/refund-policy/index.html">Returns &amp; Refunds</a>' },
  { from: '<a class="navigation__link" href="/thejacketmaker/pages/help/index.html">Delivery Policy</a>',
    to: '<a class="navigation__link" href="/thejacketmaker/policies/shipping-policy/index.html">Delivery Policy</a>' }
];

helpReplacements.forEach(r => {
  if (html.includes(r.from)) {
    console.log(`Replaced Help item: ${r.from.slice(0, 40)}...`);
    html = html.replace(r.from, r.to);
  }
});

fs.writeFileSync('public/thejacketmaker/index.html', html, 'utf8');
console.log('Successfully updated public/thejacketmaker/index.html!');
