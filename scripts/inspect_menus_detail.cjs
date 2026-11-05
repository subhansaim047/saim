const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const $ = cheerio.load(html);

function printSubmenu(selector, label) {
  console.log(`\n=================== ${label} ===================`);
  $(selector).each((i, el) => {
    const mainA = $(el).find('> a');
    const title = mainA.text().trim();
    console.log(`TOP: [${title}] -> ${mainA.attr('href')}`);
    $(el).find('.navigation__tier-2 > li, .navigation__tier-3 > li').each((j, sub) => {
      const a = $(sub).find('> a');
      console.log(`   sub: [${a.text().trim()}] -> ${a.attr('href')}`);
    });
  });
}

$('li.navigation__item').each((i, el) => {
  const t = $(el).find('> a').text().trim();
  if (t.includes('BRAND') || t.includes('CORPORATE') || t.includes('HELP') || t.includes('GIFTING')) {
    printSubmenu(el, t);
  }
});
