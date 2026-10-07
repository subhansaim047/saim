const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/about-us.html', 'utf8');
const $ = cheerio.load(html, { recognizeSelfClosing: true, decodeEntities: false });

const statsSection = $('.elementor-element-8cfa297');
if (statsSection.length) {
    statsSection.removeClass('pbmit-elementor-bg-color-globalcolor');
    statsSection.addClass('pbmit-elementor-bg-color-blackish');
    console.log("Updated background color class");
}

fs.writeFileSync('public/frenchyse/about-us.html', $.html(), 'utf8');
