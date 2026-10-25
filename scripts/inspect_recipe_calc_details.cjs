const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.join(__dirname, 'upstream_tools', 'recipe-calculator.html'), 'utf8');
const $ = cheerio.load(html);

$('script').each((i, el) => {
  const code = $(el).html();
  if (code.includes('myCreateFunction')) {
    console.log(`=== SCRIPT WITH myCreateFunction ===`);
    console.log(code);
  }
});
