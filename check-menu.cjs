const fs=require('fs'); 
const cheerio=require('cheerio'); 
const $=cheerio.load(fs.readFileSync('public/demos/dilicious-pizza/index.html')); 

let p = $('h2:contains("FitBite")').first().parent();
for(let i=0; i<15; i++) {
    if (p.length === 0) break;
    console.log(p.get(0).tagName + " - " + p.attr('class'));
    p = p.parent();
}
