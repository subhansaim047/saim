const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const $ = cheerio.load(html);

const widget = $('.elementor-widget-pbmit_testimonial_element');
const section = widget.closest('.elementor-top-section');

console.log("Section ID:", section.attr('data-id'));
console.log(widget.html().substring(0, 1500));
