const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const $ = cheerio.load(html);

console.log('Nav classes found:');
$('nav').each((i, el) => {
  console.log(`nav ${i}: class="${$(el).attr('class')}" id="${$(el).attr('id')}"`);
});

$('.navigation--main').each((i, el) => {
  console.log(`\nnavigation--main ${i}: parent is <${$(el).parent().get(0).tagName} class="${$(el).parent().attr('class')}">`);
  console.log('Direct children count:', $(el).children().length);
});
