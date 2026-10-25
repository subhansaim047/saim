const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.join(__dirname, 'upstream_tools', 'food-safety-quiz.html'), 'utf8');
const $ = cheerio.load(html);

console.log('=== food-safety-quiz.html ===');
console.log('Title:', $('title').text());
console.log('H1:', $('h1').text().trim());

// How are quiz questions structured?
const questions = [];
$('.quiz-question, [class*="question"]').each((i, el) => {
  questions.push($(el).text().trim().slice(0, 100));
});

console.log(`Found ${questions.length} question elements.`);
if (questions.length === 0) {
  // Let's find inputs or form
  console.log('Inputs count:', $('input').length);
  $('input[type="radio"]').slice(0, 5).each((i, el) => {
    console.log('Radio:', $(el).attr('name'), $(el).val(), $(el).parent().text().trim());
  });
}
