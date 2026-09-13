const fs = require('fs');
const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Add Google Font if not exists
if (!html.includes('family=Luckiest+Guy')) {
    $('head').append('\n<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">\n');
}

// 2. Change the headings
const headings = $('.elementor-element-e8a2a75 .pbmit-custom-heading .pbmit-element-title');
headings.each((i, el) => {
    const text = $(el).text().replace(/\s+/g, '');
    if (text === 'Cheesy') {
        $(el).html('FitBite');
        $(el).attr('style', "font-family: 'Luckiest Guy', cursive; font-weight: normal; font-style: normal; text-transform: uppercase;");
    } else if (text === 'Pizza') {
        $(el).html('Pizza');
        $(el).attr('style', "font-family: 'Luckiest Guy', cursive; font-weight: normal; font-style: normal; text-transform: uppercase;");
    }
});

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log("Updated index.html");
