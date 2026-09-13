const fs=require('fs'); 
const cheerio=require('cheerio'); 
const $=cheerio.load(fs.readFileSync('public/demos/dilicious-pizza/index.html')); 

$('section.elementor-top-section').each((i, el) => {
    if ($(el).text().includes("FitBite Special")) {
        console.log("Section ID: " + $(el).attr('data-id'));
    }
});
