const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/about-us.html', 'utf8');
const $ = cheerio.load(html);

const statsSection = $('.pbmit-fid-inner').closest('.elementor-top-section');
console.log("Stats Section classes:");
console.log(statsSection.attr('class'));
console.log("Stats Section ID:", statsSection.attr('data-id'));

// Let's check for any background color classes
const classes = statsSection.attr('class').split(' ');
const bgClasses = classes.filter(c => c.includes('bg-color') || c.includes('bgcolor'));
console.log("BG classes:", bgClasses);

// Let's also check the style attribute
console.log("Style:", statsSection.attr('style'));
