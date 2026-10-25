const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.join(__dirname, 'upstream_tools', 'food-cost-calculator.html'), 'utf8');
const $ = cheerio.load(html);

console.log('=== TABLES IN FOOD COST ===');
$('table').each((i, el) => {
  console.log(`--- TABLE ${i+1} id=${$(el).attr('id')} ---`);
  console.log($(el).find('thead').html() || $(el).find('tr:first-child').html());
  console.log('--- NEXT SIBLINGS / BUTTONS ---');
  console.log($(el).next().html());
});
