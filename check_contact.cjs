const fs = require('fs');
const html = fs.readFileSync('public/frenchyse/contact-us.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

console.log("IFrames:");
$('iframe').each((i, el) => console.log($(el).attr('src')));

// Find anything containing "address", "phone", "email" or just looking at text
console.log("\nBoxes:");
$('.pbminfotech-ihbox-style-2, .pbminfotech-ele-ihbox').each((i, el) => {
    console.log($(el).text().replace(/\s+/g, ' '));
});
