const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('public/frenchyse/index.html', 'utf8');
const $ = cheerio.load(html, { recognizeSelfClosing: true, decodeEntities: false });

const statsSection = $('.elementor-element-8cfa297');
if (statsSection.length) {
    statsSection.remove();
    console.log("Removed stats section from index.html");
}

fs.writeFileSync('public/frenchyse/index.html', $.html(), 'utf8');
