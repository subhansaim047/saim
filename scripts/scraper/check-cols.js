const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('burger.html'));
const cols = $('*:contains("Our Pizza Do The Talking")').last().closest('.elementor-top-section').find('> .elementor-container > .elementor-column');
cols.each((i, c) => {
  console.log($(c).attr('data-id'));
});
