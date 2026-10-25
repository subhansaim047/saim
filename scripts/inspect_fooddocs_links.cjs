const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const htmlPath = path.join(__dirname, 'fooddocs_page.html');
if (!fs.existsSync(htmlPath)) {
  console.log('fooddocs_page.html not found');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const $ = cheerio.load(html);

console.log('Examining cards in fooddocs_page.html:');
// Let's find any card container
const links = [];
$('a').each((i, el) => {
  const href = $(el).attr('href') || '';
  const text = $(el).text().replace(/\s+/g, ' ').trim();
  const classes = $(el).attr('class') || '';
  if (href.includes('/haccp-plan-template/') || href.includes('/food-safety-templates/') || href.includes('matrix') || href.includes('calc')) {
    links.push({ href, text: text.slice(0, 50), classes });
  }
});

console.log(`Found ${links.length} matching links:`);
console.table(links.slice(0, 15));
