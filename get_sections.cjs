const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html);
const sections = $('.elementor-top-section');
console.log('Total sections:', sections.length);
sections.each((i, el) => {
  console.log('Section ' + (i+1) + ' ID:', $(el).attr('data-id'), '| Text preview:', $(el).text().replace(/\s+/g, ' ').substring(0, 100));
});
