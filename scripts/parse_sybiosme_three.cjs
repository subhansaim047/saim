const fs = require('fs');
const cheerio = require('cheerio');

// 1. Analyze Pricing
const pricingHtml = fs.readFileSync('scripts/sybiosme_main_pricing_section.html', 'utf-8');
const $p = cheerio.load(pricingHtml);

console.log('=== PRICING STRUCTURE ===');
console.log('Header text:', $p('header.section-heading').text().replace(/\s+/g, ' ').trim());

const planCards = [];
$p('article.plan-card').each((i, el) => {
  const card = $p(el);
  planCards.push({
    planId: card.attr('data-plan'),
    title: card.find('.plan-title-row h3').text().trim(),
    description: card.find('.plan-description').text().trim(),
    price: card.find('.plan-price, .price, .num').text().replace(/\s+/g, ' ').trim(),
    features: card.find('li, .plan-features, .plan-specs').map((j, li) => $p(li).text().trim()).get(),
    classes: card.attr('class'),
    htmlSnippet: card.html().slice(0, 300)
  });
});
console.log('Plan Cards:', JSON.stringify(planCards, null, 2));

// 2. Analyze FAQ
const faqHtml = fs.readFileSync('scripts/sybiosme_faq_full.html', 'utf-8');
const $f = cheerio.load(faqHtml);

console.log('\n=== FAQ STRUCTURE ===');
console.log('Header text:', $f('header.section-heading#faq').text().replace(/\s+/g, ' ').trim());

const faqGroups = [];
$f('.faq-group').each((i, el) => {
  const g = $f(el);
  const groupTitle = g.find('h3').text().trim();
  const rows = [];
  g.find('.faq-row').each((j, r) => {
    const row = $f(r);
    rows.push({
      question: row.find('.faq-trigger span.text-body').text().trim(),
      answerPreview: row.find('.faq-answer').text().replace(/\s+/g, ' ').trim().slice(0, 100)
    });
  });
  faqGroups.push({ groupTitle, rowsCount: rows.length, rows });
});
console.log('FAQ Groups:', JSON.stringify(faqGroups, null, 2));

// 3. Analyze Contact
console.log('\n=== CONTACT STRUCTURE ===');
const contactCard = $f('#contact, .contact-card');
console.log('Contact Card exists:', contactCard.length > 0);
if (contactCard.length > 0) {
  console.log('Contact classes:', contactCard.attr('class'));
  console.log('Contact text:', contactCard.text().replace(/\s+/g, ' ').trim().slice(0, 500));
  console.log('Inputs found:', contactCard.find('input, textarea, button').map((i, el) => ({
    tag: el.tagName,
    name: $f(el).attr('name') || $f(el).attr('type') || $f(el).text().trim(),
    type: $f(el).attr('type')
  })).get());
}
