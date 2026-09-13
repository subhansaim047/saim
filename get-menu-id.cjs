const fs=require('fs'); 
const cheerio=require('cheerio'); 
const $=cheerio.load(fs.readFileSync('public/demos/dilicious-pizza/index.html')); 
console.log($('h2:contains("FitBite")').closest('section').attr('class')); 
console.log($('h2:contains("FitBite")').closest('section').attr('data-id'));
