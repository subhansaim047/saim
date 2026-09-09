const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('burger.html'));
const sec = $('*:contains("Our Pizza Do The Talking")').last().closest('.elementor-top-section');
console.log('Prev ID:', sec.prev().attr('data-id'));
