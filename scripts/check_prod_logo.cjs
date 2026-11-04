const fs = require('fs');

const p = 'public/thejacketmaker/products/dean-leather-biker-jacket/index.html';
if (fs.existsSync(p)) {
  const html = fs.readFileSync(p, 'utf8');
  console.log('Product has hq-crest-logo:', html.includes('hq-crest-logo.png'));
  const logoMatch = html.match(/<a[^>]*class="logo__link"[^>]*>([\s\S]*?)<\/a>/i);
  if (logoMatch) console.log('Logo match:\n', logoMatch[0]);
} else {
  console.log('Product file not found at path');
}
