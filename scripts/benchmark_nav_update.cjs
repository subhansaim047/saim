const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const p = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html';
const html = fs.readFileSync(p, 'utf8');

console.time('cheerio_parse_and_modify');
for (let i = 0; i < 10; i++) {
  const $ = cheerio.load(html, { decodeEntities: false });
  $('li.navigation__item').each((_, el) => {
    const text = $(el).children('a').first().text().trim().toUpperCase();
    if (text === 'CORPORATE GIFTS' || text === 'GIFTING' || text === 'HELP') {
      $(el).remove();
    }
  });
  $.html();
}
console.timeEnd('cheerio_parse_and_modify');
