const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const $ = cheerio.load(html);

const deletedPaths = [
  'corporate-gifts',
  'employee-gift',
  'gifts-for-clients',
  'gifts-for-conferences-events',
  'luxury-corporate-gifts',
  'gift-set',
  'gifts-for-her',
  'gifts-for-him',
  'leather-gifts',
  'pages/help'
];

$('a').each((i, a) => {
  const href = $(a).attr('href') || '';
  for (const dp of deletedPaths) {
    if (href.includes(dp)) {
      const parentLi = $(a).closest('li');
      const parentMenu = parentLi.parents('.navigation__tier-1 > li').find('> a').text().trim();
      console.log(`Link: [${$(a).text().trim()}] (${href}) inside Menu: [${parentMenu || 'outside nav'}]`);
      break;
    }
  }
});
