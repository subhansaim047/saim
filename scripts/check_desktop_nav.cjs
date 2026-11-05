const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const $ = cheerio.load(html);

console.log($('.desktop-only').html().substring(0, 500));
