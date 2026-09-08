const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('burger.html'));
const sec = $('*:contains("Our Pizza Do The Talking")').last().closest('.elementor-top-section');
console.log(sec.find('.pbmit-burger-img-wrapper').html() || "No .pbmit-burger-img-wrapper found");
// Let's find the container of the parts
console.log(sec.find('img[src*="burger-part"]').first().closest('.elementor-widget-container').html());
