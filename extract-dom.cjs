const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8'));

const col1Wrapper = $('.elementor-element-94957df .elementor-widget-wrap').first();
console.log(col1Wrapper.html().substring(0, 1000));
