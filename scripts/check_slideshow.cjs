const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const $ = cheerio.load(html);

$('.slideshow .slide').each((i, el) => {
  console.log(`Slide ${i}: class="${$(el).attr('class')}" style="${$(el).attr('style')}"`);
});
