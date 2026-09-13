const fs = require('fs');
const cheerio = require('cheerio');
const indexHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(indexHtml, { decodeEntities: false });

console.log("Header HTML:");
console.log($('.site-header').html().substring(2000, 4000));
