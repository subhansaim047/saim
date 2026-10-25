const fs = require('fs');
const cheerio = require('cheerio');

const p$ = cheerio.load(fs.readFileSync('scripts/sybiosme_main_pricing_section.html', 'utf-8'));
const f$ = cheerio.load(fs.readFileSync('scripts/sybiosme_faq_full.html', 'utf-8'));

console.log('--- FIRST PLAN CARD HTML ---');
const firstCard = p$('article.plan-card').first();
console.log(firstCard.parent().html().slice(0, 3000));

console.log('\n--- FIRST FAQ GROUP HTML ---');
const firstFaqGroup = f$('.faq-group').first();
console.log(firstFaqGroup.html().slice(0, 2000));

console.log('\n--- CONTACT CARD HTML ---');
const contactCard = f$('.contact-card');
console.log(contactCard.html().slice(0, 3000));
