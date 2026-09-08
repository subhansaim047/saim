const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('burger.html', 'utf8');
const $ = cheerio.load(html);

const element = $('*:contains("Our Pizza Do The Talking")').last();
const section = element.closest('.elementor-top-section');

console.log('Section ID:', section.attr('data-id'));
console.log('Section Classes:', section.attr('class'));
console.log('Inner HTML length:', section.html() ? section.html().length : 0);

// Find all images in this section
const images = [];
section.find('img').each((i, el) => {
    images.push($(el).attr('src'));
});
console.log('Images:', images);
