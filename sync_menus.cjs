const fs = require('fs');
const cheerio = require('cheerio');

let indexHtml = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const $index = cheerio.load(indexHtml);
const menuHtml = $index('.elementor-element-f12e04f').html();

let menuPageHtml = fs.readFileSync('public/fitbitepizza/menu.html', 'utf8');
const $menu = cheerio.load(menuPageHtml);
$menu('.elementor-element-f12e04f').html(menuHtml);

fs.writeFileSync('public/fitbitepizza/menu.html', $menu.html(), 'utf8');
console.log('Successfully synced menu.html with index.html menu section');
