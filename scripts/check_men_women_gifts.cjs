const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const $ = cheerio.load(html);

$('.navigation--main > ul.navigation__tier-1 > li').each((i, el) => {
  const topText = $(el).find('> a').text().trim();
  console.log(`\n=== Desktop Menu ${i}: ${topText} ===`);
  $(el).find('a').each((j, a) => {
    const text = $(a).text().trim();
    const href = $(a).attr('href');
    if (/gift|corporate|help|brand/i.test(text) || /gift|corporate|help/i.test(href)) {
      console.log(`  matches: [${text}] -> ${href}`);
    }
  });
});
