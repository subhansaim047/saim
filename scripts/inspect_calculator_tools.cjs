const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const tools = ['recipe-calculator', 'recipe-card-generator', 'food-cost-calculator'];

for (const tool of tools) {
  const file = path.join(__dirname, 'upstream_tools', `${tool}.html`);
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const $ = cheerio.load(html);

  console.log(`\n=================== ${tool} ===================`);
  
  // Find the table or container with inputs
  $('table').each((i, tbl) => {
    console.log(`Table ${i+1}: class="${$(tbl).attr('class')}", id="${$(tbl).attr('id')}"`);
    console.log($(tbl).html().slice(0, 500));
  });

  // Find any scripts specific to the calculator
  $('script').each((i, sc) => {
    const code = $(sc).html() || '';
    if (code.includes('function') && (code.includes('calc') || code.includes('recipe') || code.includes('cost') || code.includes('multiply') || code.includes('yield'))) {
      console.log(`--- Script snippet in ${tool} ---`);
      console.log(code.slice(0, 1000));
    }
  });
}
