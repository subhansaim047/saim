const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'fooddocs_page.html'), 'utf8');

// Find all template-grid__card-wrapper
const cardRegex = /<div class="template-grid__card-wrapper">([\s\S]*?)<\/div>\s*<\/div>/g;
let match;
const cards = [];

const cardBlockRegex = /<a[^>]+class="template-grid__card"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;

while ((match = cardBlockRegex.exec(html)) !== null) {
  const href = match[1];
  const inner = match[2];

  // img
  const imgMatch = inner.match(/<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/i) || inner.match(/<img[^>]+alt="([^"]*)"[^>]*src="([^"]+)"/i);
  let imgSrc = '';
  let imgAlt = '';
  if (imgMatch) {
    if (imgMatch[1].startsWith('http') || imgMatch[1].startsWith('/')) {
      imgSrc = imgMatch[1];
      imgAlt = imgMatch[2];
    } else {
      imgSrc = imgMatch[2];
      imgAlt = imgMatch[1];
    }
  }

  // preheader
  const preMatch = inner.match(/<div class="template-grid__preheader"[^>]*>(.*?)<\/div>/i);
  const preheader = preMatch ? preMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // title
  const titleMatch = inner.match(/<h[34][^>]*>(.*?)<\/h[34]>/i);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // paragraph / description
  const pMatch = inner.match(/<p[^>]*>(.*?)<\/p>/i);
  const desc = pMatch ? pMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  cards.push({ href, preheader, title, desc, imgSrc, imgAlt });
}

console.log('Total template cards extracted:', cards.length);
cards.forEach((c, idx) => {
  console.log(`\nCard ${idx + 1}: [${c.preheader}] ${c.title}`);
  console.log(`  Link: ${c.href}`);
  console.log(`  Desc: ${c.desc}`);
  console.log(`  Img: ${c.imgSrc}`);
});

fs.writeFileSync(path.join(__dirname, 'extracted_cards.json'), JSON.stringify(cards, null, 2), 'utf8');
