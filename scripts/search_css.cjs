const fs = require('fs');

const css = fs.readFileSync('scripts/sybiosme_extracted.css', 'utf-8');

function searchRules(keyword) {
  console.log(`\n================= KEYWORD: ${keyword} =================`);
  const regex = new RegExp(`[^{}]*${keyword}[^{}]*\\{[^{}]*\\}`, 'gi');
  const matches = css.match(regex);
  if (matches) {
    matches.slice(0, 10).forEach(m => console.log(m.trim()));
  } else {
    console.log('No matches');
  }
}

searchRules('action-button');
searchRules('disclosure-icon');
searchRules('plan-card');
searchRules('contact-card');
searchRules('contact-accordion');
searchRules('faq-group');
