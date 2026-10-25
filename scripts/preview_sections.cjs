const fs = require('fs');

const pricingHtml = fs.readFileSync('scripts/sybiosme_main_pricing_section.html', 'utf-8');
const faqHtml = fs.readFileSync('scripts/sybiosme_faq_full.html', 'utf-8');
const contactHtml = fs.readFileSync('scripts/sybiosme_contact_full.html', 'utf-8');

console.log('=== PRICING HTML PREVIEW ===');
console.log(pricingHtml.slice(0, 1500));

console.log('\n=== FAQ HTML PREVIEW ===');
console.log(faqHtml.slice(0, 1500));

console.log('\n=== CONTACT HTML PREVIEW ===');
console.log(contactHtml.slice(0, 1500));
