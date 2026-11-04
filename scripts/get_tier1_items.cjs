const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const tier1Start = html.indexOf('<ul class="navigation__tier-1">');
const tier1End = html.indexOf('</ul>', tier1Start);
const tier1Html = html.slice(tier1Start, html.indexOf('id="shopify-section-store-messages"'));

// Let's find direct children of navigation__tier-1
// Each top item starts with <li class="navigation__item
// Let's find their immediate <a> tags
const regex = /<li\s+class="navigation__item([^"]*)"[^>]*>\s*<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = regex.exec(tier1Html)) !== null) {
  const text = m[3].replace(/<[^>]+>/g, '').trim();
  console.log(`Tab: "${text}" | Class: ${m[1].trim()} | Href: ${m[2]}`);
}
