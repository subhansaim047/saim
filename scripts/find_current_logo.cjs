const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Find logo in header
const logoMatch = html.match(/<h1[^>]*class="[^"]*logo[^"]*"[\s\S]*?<\/h1>/i) ||
                  html.match(/<div[^>]*class="[^"]*logo[^"]*"[\s\S]*?<\/div>/i) ||
                  html.match(/class="[^"]*header__logo[^"]*"[\s\S]*?<\/a>/i);

if (logoMatch) {
  console.log('--- HEADER LOGO MATCH ---');
  console.log(logoMatch[0]);
}

// Find logo in footer
const footerIdx = html.indexOf('<footer') || html.indexOf('site-footer');
if (footerIdx !== -1) {
  const footerSnippet = html.slice(footerIdx, footerIdx + 3000);
  const footerLogo = footerSnippet.match(/<img[^>]+logo[^>]*>/i) || footerSnippet.match(/class="[^"]*footer__logo[^"]*"[\s\S]*?<\/a>/i);
  console.log('--- FOOTER LOGO MATCH ---');
  console.log(footerLogo ? footerLogo[0] : 'NONE');
}
