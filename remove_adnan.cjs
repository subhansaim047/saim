const fs = require('fs');
const cheerio = require('cheerio');
const file = 'public/pizzabox/index.html';
const html = fs.readFileSync(file, 'utf8');
const $ = cheerio.load(html);
let removed = 0;
$('section[data-id="20c303f"]').each(function() {
    $(this).remove();
    removed++;
});
if (removed > 0) {
    fs.writeFileSync(file, $.html());
    console.log('Removed ' + removed + ' section(s).');
} else {
    console.log('Section not found.');
}
