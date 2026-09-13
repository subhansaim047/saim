const cheerio=require('cheerio'); 
const fs=require('fs'); 
const $=cheerio.load(fs.readFileSync('public/demos/dilicious-pizza/about-us.html')); 
let p = $('.pbmit-ele-team').first().parent();
for(let i=0; i<10; i++) {
    console.log(p.get(0).tagName + " - " + p.attr('class'));
    p = p.parent();
}
