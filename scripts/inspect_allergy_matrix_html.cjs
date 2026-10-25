const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const html = fs.readFileSync(path.join(__dirname, 'upstream_tools', 'allergy-matrix.html'), 'utf8');
const $ = cheerio.load(html);

console.log('=== allergy-matrix.html ===');
console.log('Title:', $('title').text());
console.log('H1:', $('h1').text().trim());

// Check if there are tables or iframe or downloadable template
$('iframe').each((i, el) => console.log('iframe src:', $(el).attr('src')));
$('a[href*="pdf"], a[href*="hubfs"]').each((i, el) => console.log('PDF link:', $(el).attr('href'), $(el).text().trim()));

// Let's check sections
$('h2').each((i, el) => console.log(`H2: ${$(el).text().trim()}`));
