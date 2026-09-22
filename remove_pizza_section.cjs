const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const $ = cheerio.load(html);

const sectionToRemove = $('.elementor-element-8c248e2');
if (sectionToRemove.length > 0) {
    sectionToRemove.remove();
    console.log("Removed the GSAP pizza section!");
} else {
    console.log("Could not find the section.");
}

fs.writeFileSync('public/fitbitepizza/index.html', $.html(), 'utf8');
