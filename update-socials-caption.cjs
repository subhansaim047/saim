const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // 1. Remove social media links except Facebook
    $('.pbmit-social-links').each((i, ul) => {
        $(ul).find('li').each((j, li) => {
            if (!$(li).hasClass('pbmit-social-facebook')) {
                $(li).remove();
            }
        });
    });

    // 2. Change font of "Taste the Best Pizza in Daska!"
    $('.pbmit-footer-left h2').each((i, el) => {
        const spans = $(el).find('span');
        if (spans.length >= 2) {
            // Apply font styles to the second span
            $(spans[1]).attr('style', "font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 400; color: #fcc332; display: block; margin-top: 10px; letter-spacing: 1px;");
        } else if (spans.length === 1 && $(spans[0]).text().includes('Taste')) {
            $(spans[0]).attr('style', "font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 400; color: #fcc332; display: block; margin-top: 10px; letter-spacing: 1px;");
        }
    });
    
    // Add Poppins font link if not present
    let finalHtml = $.html();
    if (!finalHtml.includes('family=Poppins')) {
        finalHtml = finalHtml.replace('</head>', '\n<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), finalHtml);
    console.log(`Updated ${file}`);
});
