const fs = require('fs');
const path = require('path');

// Master mapping of navigation link texts to their exact dedicated destination pages
const LINK_MAP = {
  // --- MEN ---
  "Men's Leather Jackets": "/thejacketmaker/collections/mens-leather-jackets/index.html",
  "All Leather Jackets": "/thejacketmaker/collections/mens-leather-jackets/index.html",
  "Bomber Jackets": "/thejacketmaker/collections/mens-bomber-jackets/index.html",
  "Biker Jackets": "/thejacketmaker/collections/mens-biker-leather-jackets/index.html",
  "Suede Jackets": "/thejacketmaker/collections/mens-suede-jackets/index.html",
  "Varsity Jackets": "/thejacketmaker/collections/mens-varsity-jacket/index.html",
  "Leather Vests": "/thejacketmaker/collections/mens-leather-vests/index.html",
  "Leather Blazers": "/thejacketmaker/collections/mens-blazers/index.html",
  "Fur & Shearling": "/thejacketmaker/collections/mens-fur-shearling-jackets/index.html",
  "Fur & Shearling Jackets": "/thejacketmaker/collections/mens-fur-shearling-jackets/index.html",
  "Aviator Jackets": "/thejacketmaker/collections/mens-aviator-jackets/index.html",
  "Puffer Jackets": "/thejacketmaker/collections/mens-puffer-jackets/index.html",
  "Leather Puffer Jackets": "/thejacketmaker/collections/mens-leather-puffer-jackets/index.html",
  "Hooded Leather Jackets": "/thejacketmaker/collections/mens-black-leather-jackets-hood/index.html",
  "Best Seller": "/thejacketmaker/collections/mens-best-sellers/index.html",
  "Best Sellers": "/thejacketmaker/collections/mens-best-sellers/index.html",
  "Clearance - 50% OFF": "/thejacketmaker/collections/clearance-sale/index.html",
  "Clearance Sale": "/thejacketmaker/collections/clearance-sale/index.html",
  "Factory Seconds - 40% Off": "/thejacketmaker/collections/clearance-sale/index.html",
  "Factory Seconds - 40% OFF": "/thejacketmaker/collections/clearance-sale/index.html",
  "Winter Jackets": "/thejacketmaker/collections/mens-winter-jackets/index.html",
  "Tech & Fabric Jackets": "/thejacketmaker/collections/mens-windbreaker-jackets/index.html",
  "Summer Jackets": "/thejacketmaker/collections/mens-summer-jackets/index.html",
  "Denim Jackets": "/thejacketmaker/collections/mens-denim-jackets/index.html",
  "Waxed Canvas Jackets": "/thejacketmaker/collections/mens-waxed-canvas-jackets/index.html",
  "Puffer Vests": "/thejacketmaker/collections/mens-puffer-vests/index.html",
  "Windbreaker & Puffers": "/thejacketmaker/collections/mens-windbreaker-jackets/index.html",
  "Lightweight Jackets": "/thejacketmaker/collections/mens-lightweight-jackets/index.html",
  "Soft Shell Jackets": "/thejacketmaker/collections/mens-soft-shell-jackets/index.html",
  "Down Jacket": "/thejacketmaker/collections/mens-down-jackets/index.html",
  "Down Jackets": "/thejacketmaker/collections/mens-down-jackets/index.html",
  "Leather Coats": "/thejacketmaker/collections/mens-leather-coats/index.html",
  "Trench & Winter Coats": "/thejacketmaker/collections/mens-winter-coats/index.html",
  "Wool Coats & Jackets": "/thejacketmaker/collections/mens-wool-coats-jackets/index.html",
  "Fur & Shearling Coats": "/thejacketmaker/collections/mens-fur-shearling-coats/index.html",
  "Leather Dusters": "/thejacketmaker/collections/mens-leather-dusters/index.html",
  "Shoes": "/thejacketmaker/collections/mens-leather-shoes/index.html",
  "Leather Shoes": "/thejacketmaker/collections/mens-leather-shoes/index.html",
  "Leather Loafers": "/thejacketmaker/collections/mens-leather-loafers/index.html",
  "Dress Shoes": "/thejacketmaker/collections/mens-dress-shoes/index.html",
  "Casual Shoes": "/thejacketmaker/collections/mens-casual-shoes/index.html",
  "Leather Boots": "/thejacketmaker/collections/mens-leather-boots/index.html",
  "Leather Sneakers": "/thejacketmaker/collections/mens-leather-sneakers/index.html",
  "Bags": "/thejacketmaker/collections/leather-bags/index.html",
  "Leather Bags": "/thejacketmaker/collections/leather-bags/index.html",
  "Vintage Leather Bags": "/thejacketmaker/collections/vintage-leather-bags/index.html",
  "Laptop Bags": "/thejacketmaker/collections/laptop-leather-bags/index.html",
  "Travel Bags": "/thejacketmaker/collections/leather-travel-bags/index.html",
  "Business Bags": "/thejacketmaker/collections/leather-business-bags/index.html",
  "Leather Backpacks": "/thejacketmaker/collections/leather-backpacks/index.html",
  "Leather Wallets": "/thejacketmaker/collections/leather-wallets/index.html",
  "Leather Belts": "/thejacketmaker/collections/mens-leather-belts/index.html",
  "Leather Gifts": "/thejacketmaker/collections/leather-gifts/index.html",
  "Leather Keychains": "/thejacketmaker/collections/leather-keychains/index.html",

  // --- WOMEN ---
  "Women's Leather Jackets": "/thejacketmaker/collections/womens-leather-jackets/index.html",
  "Women's Bomber Jackets": "/thejacketmaker/collections/women-bomber-jackets/index.html",
  "Women's Biker Jackets": "/thejacketmaker/collections/womens-biker-leather-jackets/index.html",
  "Women's Suede Jackets": "/thejacketmaker/collections/womens-suede-jackets/index.html",
  "Women's Leather Vests": "/thejacketmaker/collections/women-leather-vests/index.html",
  "Women's Varsity Jackets": "/thejacketmaker/collections/women-varsity-jackets/index.html",
  "Women's Leather Blazers": "/thejacketmaker/collections/women-blazers/index.html",
  "Women's Aviator Jackets": "/thejacketmaker/collections/womens-aviator-jackets/index.html",
  "Women's New Arrivals": "/thejacketmaker/collections/womens-new-arrival/index.html",
  "Plus Size Leather Jackets": "/thejacketmaker/pages/women-plus-size-leather-jackets/index.html",
  "Women's Trench & Winter Coats": "/thejacketmaker/collections/women-winter-coats/index.html",
  "Women's Leather Coats": "/thejacketmaker/collections/women-leather-coats/index.html",
  "Women's Shearling Jackets": "/thejacketmaker/collections/womens-shearling-jackets/index.html",
  "Women's Trench Coats": "/thejacketmaker/collections/women-leather-trench-coats/index.html",
  "Women's Leather Bags": "/thejacketmaker/collections/womens-leather-bags/index.html",
  "Leather Tote Bags": "/thejacketmaker/collections/leather-tote-bags/index.html",
  "Leather Crossbody Bags": "/thejacketmaker/collections/leather-crossbody-bags/index.html",
  "Women's Hobo Bags": "/thejacketmaker/collections/womens-hobo-bags/index.html",

  // --- CUSTOMIZE ---
  "Custom Jackets": "/thejacketmaker/pages/custom-leather-jackets/index.html",
  "Custom Leather Jackets": "/thejacketmaker/pages/custom-leather-jackets/index.html",
  "Custom Bomber Jackets": "/thejacketmaker/pages/custom-bomber-jackets/index.html",
  "Custom Varsity Jackets": "/thejacketmaker/pages/custom-varsity-letterman-jackets/index.html",
  "Custom Embroidered Jackets": "/thejacketmaker/pages/custom-embroidered-jackets/index.html",
  "Custom Denim Jackets": "/thejacketmaker/pages/custom-denim-jackets/index.html",
  "Custom Windbreaker Jackets": "/thejacketmaker/pages/custom-windbreaker-jackets/index.html",
  "Custom Trench Coats": "/thejacketmaker/pages/custom-trench-coats/index.html",
  "Custom Motorcycle Jackets": "/thejacketmaker/pages/custom-motorcycle-jackets/index.html",
  "Custom Parka Jackets": "/thejacketmaker/pages/custom-parka-jackets/index.html",
  "Custom Satin Jackets": "/thejacketmaker/pages/custom-satin-jackets/index.html",
  "Custom Suits": "/thejacketmaker/pages/custom-suits/index.html",
  "Custom Bags": "/thejacketmaker/pages/custom-leather-bags/index.html",
  "Custom Leather Bags": "/thejacketmaker/pages/custom-leather-bags/index.html",
  "Custom Handbags": "/thejacketmaker/pages/custom-handbags/index.html",
  "Custom Briefcases": "/thejacketmaker/pages/custom-briefcases/index.html",
  "Custom Tote Bags": "/thejacketmaker/pages/custom-tote-bags/index.html",
  "Custom Backpacks": "/thejacketmaker/pages/custom-backpacks/index.html",
  "Custom Messenger Bags": "/thejacketmaker/pages/custom-leather-bags/index.html",
  "Custom Weekender & Duffel Bags": "/thejacketmaker/pages/custom-duffel-weekender-bags/index.html",
  "Custom Portfolio Bags": "/thejacketmaker/pages/custom-portfolio-bags/index.html",
  "Custom Clutch Purses": "/thejacketmaker/pages/custom-clutch-purses/index.html",
  "Custom Shoes": "/thejacketmaker/pages/custom-made-shoes/index.html",
  "Custom Dress Shoes": "/thejacketmaker/pages/custom-dress-shoes/index.html",
  "Custom Boots": "/thejacketmaker/pages/custom-boots/index.html",
  "Custom Leather Goods": "/thejacketmaker/collections/leather-wallets/index.html",
  "Custom Jerseys": "/thejacketmaker/pages/custom-jerseys/index.html",
  "Corporate Gifts": "/thejacketmaker/pages/corporate-gifts/index.html",
  "How It Works": "/thejacketmaker/pages/bespoke/index.html",

  // --- BRAND ---
  "Our Story": "/thejacketmaker/pages/our-story/index.html",
  "Press & Mentions": "/thejacketmaker/pages/happy-customers/index.html",
  "Celebrity Style": "/thejacketmaker/pages/happy-customers/index.html",
  "Customer Reviews": "/thejacketmaker/pages/happy-customers/index.html",
  "Customers' Gallery": "/thejacketmaker/pages/happy-customers/index.html",
  "Our Bespoke Process": "/thejacketmaker/pages/bespoke/index.html",
  "Gift Cards": "/thejacketmaker/products/gift-cards/index.html",
  "#HangOnToIt": "/thejacketmaker/pages/hangontoit/index.html",
  "#MadeForMe": "/thejacketmaker/pages/made-for-me/index.html",
  "Affiliate Program": "/thejacketmaker/pages/affiliate-program/index.html",
  "Brand Ambassador Program": "/thejacketmaker/pages/brand-ambassador-program/index.html",
  "Blog": "/thejacketmaker/pages/our-story/index.html",

  // --- CORPORATE GIFTS ---
  "Employee Gifts": "/thejacketmaker/pages/employee-gift/index.html",
  "Client Gifts": "/thejacketmaker/pages/gifts-for-clients/index.html",
  "Event Gifts": "/thejacketmaker/pages/gifts-for-conferences-events/index.html",
  "Luxury Corporate Gifts": "/thejacketmaker/pages/luxury-corporate-gifts/index.html",

  // --- HELP ---
  "Help Center": "/thejacketmaker/pages/help/index.html",
  "Size Guide": "/thejacketmaker/pages/size-guide/index.html",
  "File A Return": "/thejacketmaker/pages/returns/index.html",
  "Track Order": "/thejacketmaker/pages/contact-us/index.html",
  "Returns & Refunds": "/thejacketmaker/policies/refund-policy/index.html",
  "Delivery Policy": "/thejacketmaker/policies/shipping-policy/index.html",
  "Privacy Policy": "/thejacketmaker/policies/privacy-policy/index.html",
  "Terms of Service": "/thejacketmaker/policies/terms-of-service/index.html",
  "Contact Us": "/thejacketmaker/pages/contact-us/index.html",

  // --- GIFTS ---
  "Gifts For Him": "/thejacketmaker/collections/gifts-for-him/index.html",
  "Gifts For Her": "/thejacketmaker/collections/gifts-for-her/index.html",
  "Leather Gift Sets": "/thejacketmaker/collections/gift-set/index.html",
  "Luxury Leather Gifts": "/thejacketmaker/collections/leather-gifts/index.html",
  "Keychains": "/thejacketmaker/collections/leather-keychains/index.html",

  // --- SALE ---
  "Sale": "/thejacketmaker/collections/sale/index.html",
  "Leather Bags - 50% OFF": "/thejacketmaker/collections/full-grain-leather-bags/index.html",
  "Cyber Monday Sale": "/thejacketmaker/collections/clearance-sale/index.html",
  "DESIGN YOUR OWN": "/thejacketmaker/pages/custom-leather-jackets/index.html"
};

console.log(`Checking existence of all ${Object.keys(LINK_MAP).length} target destinations...`);

let missingFiles = [];
for (const [name, target] of Object.entries(LINK_MAP)) {
  const local = path.join('public', target.replace('/thejacketmaker/', 'thejacketmaker/'));
  if (!fs.existsSync(local)) {
    missingFiles.push({ name, target, local });
  }
}

if (missingFiles.length === 0) {
  console.log('ALL destination files exist on disk! 100% verified.');
} else {
  console.log(`Missing ${missingFiles.length} files:`);
  missingFiles.forEach(m => console.log(`- ${m.name} -> ${m.target} (Path: ${m.local})`));
}
