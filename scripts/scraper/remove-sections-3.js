const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const p = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
let html = fs.readFileSync(p, 'utf8');

const $ = cheerio.load(html, { decodeEntities: false });

let removedNews = false;
let removedVideo = false;

// Latest News
$('.pbmit-element-subtitle').each(function() {
    if ($(this).text().includes('Latest News')) {
        let section = $(this).closest('.elementor-top-section');
        if (section.length) {
            section.remove();
            removedNews = true;
        }
    }
});

// Video
$('.pbmit-lightbox-video').each(function() {
    let section = $(this).closest('.elementor-top-section');
    if (section.length) {
        section.remove();
        removedVideo = true;
    }
});

console.log('Removed News:', removedNews, 'Removed Video:', removedVideo);

fs.writeFileSync(p, $.html());
