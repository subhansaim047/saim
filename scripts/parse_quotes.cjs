const fs = require('fs');
const cheerio = require('cheerio');

const sec = fs.readFileSync('scripts/quotes_section_backup.html', 'utf8');
const $ = cheerio.load(sec);

const quotes = [];
$('.quotes-carousel .logo-list-content:not(.slick-cloned)').each((i, el) => {
  quotes.push($(el).find('.logo-list-content-wrap').text().trim());
});

const logos = [];
$('.logos-carousel .logo-list-image-wrap:not(.slick-cloned)').each((i, el) => {
  const img = $(el).find('img');
  logos.push({
    src: img.attr('src') || img.attr('data-src'),
    alt: img.attr('alt') || 'Publication Logo'
  });
});

console.log('Quotes (' + quotes.length + '):');
quotes.forEach((q, i) => console.log(i + ': ' + q));
console.log('\nLogos (' + logos.length + '):');
logos.forEach((l, i) => console.log(i + ': ' + l.src));

fs.writeFileSync('scripts/quotes_data.json', JSON.stringify({ quotes, logos }, null, 2));
console.log('\nSaved scripts/quotes_data.json');
