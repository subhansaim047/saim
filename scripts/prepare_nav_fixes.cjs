const fs = require('fs');

// Exact mapping of navigation button text to target URL
const navMapping = [
  // DESIGN YOUR OWN
  { match: /href="[^"]*"([^>]*>DESIGN YOUR OWN<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-jackets/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Design Your Own<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-jackets/index.html"$1' },

  // CUSTOMIZE SUB-LINKS:
  // Bags
  { match: /href="[^"]*"([^>]*>Custom Handbags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-handbags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Briefcases<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-briefcases/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Tote Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-tote-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Backpacks<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-backpacks/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Messenger &amp; Laptop Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-messenger-laptop-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Duffel &amp; Weekender Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-duffel-weekender-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Portfolio Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-portfolio-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Clutch Purses<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-clutch-purses/index.html"$1' },

  // Shoes
  { match: /href="[^"]*"([^>]*>Custom Leather Shoes<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-shoes/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Boots<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-boots/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Dress Shoes<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-dress-shoes/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Loafers<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-loafers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Moccasins<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-moccasins/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Oxford Shoes<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-oxford-shoes/index.html"$1' },

  // Leather Goods
  { match: /href="[^"]*"([^>]*>Custom Leather Wallets<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-wallets/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Leather Keychains<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/leather-keychains/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Passport Holders<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-passport-holders/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Personalized Luggage Tags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/personalized-luggage-tags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Leather Belts<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-belts/index.html"$1' },

  // Social Proof & Reviews
  { match: /href="[^"]*"([^>]*>Customer Reviews<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Customers' Gallery<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Press &amp; Mentions<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Celebrity Style<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },

  // Sale items
  { match: /href="[^"]*"([^>]*>Factory Seconds - 40% OFF<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/clearance-sale/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Leather Bags - 50% OFF<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/full-grain-leather-bags/index.html"$1' },

  // Gifting
  { match: /href="[^"]*"([^>]*>Gift Set<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/gift-set/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Leather Gifts<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/leather-gifts/index.html"$1' }
];

console.log(`Prepared ${navMapping.length} navigation link mappings.`);
