const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const htmlPath = path.join(__dirname, 'fooddocs_page.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html);

const urls = [];
$('.template-grid__card').each((i, el) => {
  const title = $(el).find('.template-grid__preheader').text().trim() || $(el).find('img').attr('alt') || '';
  const href = $(el).find('a').first().attr('href') || '';
  urls.push({ i: i + 1, title, href });
});

console.log(`Total template cards found in fooddocs_page.html: ${urls.length}`);
console.log('Sample 20:');
console.table(urls.slice(0, 20));
