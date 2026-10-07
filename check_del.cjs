const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const $ = cheerio.load(html);

const burger = $('.elementor-element-f3401e1').closest('.elementor-top-section');
const delivery = $('.elementor-element-4512b57');

console.log("Burger parent:", burger.parent()[0].tagName, burger.parent().attr('class'));
console.log("Delivery parent:", delivery.parent()[0].tagName, delivery.parent().attr('class'));
console.log("Are they siblings?", burger.parent().attr('class') === delivery.parent().attr('class'));
