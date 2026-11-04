const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

const navStart = html.indexOf('id="main-nav"');
const navEnd = html.indexOf('</nav>', navStart);
const navHtml = html.slice(navStart, navEnd);

// Find top level menu items
const topItems = [...navHtml.matchAll(/<li[^>]*class="[^"]*navigation__item--with-small-menu[^"]*"[^>]*>([\s\S]*?)<\/li>/gi)];
console.log('Total top menu items (with-small-menu):', topItems.length);

// Also match navigation__item--with-mega-menu
const megaItems = [...navHtml.matchAll(/<li[^>]*class="[^"]*navigation__item--with-mega-menu[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/li>/gi)];
console.log('Total mega menu items:', megaItems.length);

// Let's print each top level link in main-nav
const topLevelLinks = [...navHtml.matchAll(/<a[^>]*class="navigation__link[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)];
console.log('\nTop-level link texts in nav:');
topLevelLinks.slice(0, 30).forEach(l => {
  const text = l[1].replace(/<[^>]+>/g, '').trim();
  console.log(`- "${text}"`);
});
