const fs = require('fs');
const cheerio = require('cheerio');

const statsHtml = fs.readFileSync('stats_section.html', 'utf8');
const indexHtml = fs.readFileSync('public/frenchyse/index.html', 'utf8');

const $ = cheerio.load(indexHtml, { recognizeSelfClosing: true, decodeEntities: false });

const heroSection = $('.elementor-element-e8a2a75');
heroSection.after(statsHtml);

fs.writeFileSync('public/frenchyse/index.html', $.html(), 'utf8');
console.log("Injected stats section into index.html");
