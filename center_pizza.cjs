const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const $ = cheerio.load(html);

const pizzaColumn = $('.elementor-element-8a3f06d');
if (pizzaColumn.length > 0) {
    // It's elementor-col-100 now. Let's make it 50% width and center it
    pizzaColumn.removeClass('elementor-col-100').addClass('elementor-col-50');
    // Add margin auto to center it horizontally in the 100% wide container
    let style = pizzaColumn.attr('style') || '';
    style += ' margin: 0 auto;';
    pizzaColumn.attr('style', style);
}

fs.writeFileSync('public/fitbitepizza/index.html', $.html(), 'utf8');
console.log('Centered pizza!');
