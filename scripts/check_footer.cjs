const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const $ = cheerio.load(html);

$('.section-footer__menu-block').each((i, el) => {
  const title = $(el).find('.section-footer__title').text().trim();
  console.log(`\nFooter Col ${i}: ${title}`);
  $(el).find('li a').each((j, a) => {
    console.log(`   ${j}: [${$(a).text().trim()}] -> ${$(a).attr('href')}`);
  });
});
