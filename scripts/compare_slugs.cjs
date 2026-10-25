const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const htmlPath = path.join(__dirname, 'fooddocs_page.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html);

// Map of card index -> original url
const originalCards = [];
$('.template-grid__card').each((i, el) => {
  const title = $(el).find('.template-grid__preheader').text().trim() || $(el).find('img').attr('alt') || '';
  const href = $(el).find('a').first().attr('href') || '';
  originalCards.push({ index: i, title, href });
});

// Load saim_templates.ts
const saimTs = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'saim_templates.ts'), 'utf8');
const match = saimTs.match(/export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);/);
const currentTemplates = JSON.parse(match[1]);

console.log('Original count:', originalCards.length);
console.log('Current count:', currentTemplates.length);

let matches = 0;
for (let i = 0; i < Math.min(originalCards.length, currentTemplates.length); i++) {
  const orig = originalCards[i];
  const curr = currentTemplates[i];
  // extract slug from orig.href
  const origSlug = orig.href.split('/').pop().replace(/\.html$/, '');
  console.log(`[${i+1}] Curr slug: "${curr.slug}" | Orig slug: "${origSlug}" | Title: "${curr.title}"`);
  if (i >= 15) break;
}
