const fs = require('fs');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

// the hero section is typically the first section inside .elementor-1124
const mainWrapper = $('.elementor-1124');
const firstSection = mainWrapper.children('.elementor-section').first();

console.log("First section ID:", firstSection.attr('data-id'));
console.log("Classes:", firstSection.attr('class'));

// Output a snippet of the first section to confirm it's the hero
console.log(firstSection.html().substring(0, 500));
