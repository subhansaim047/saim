const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('burger.html'));

$('link[rel="stylesheet"]').each((i, el) => {
    console.log($(el).attr('href'));
});

// Also check <style> tags
$('style').each((i, el) => {
    const css = $(el).html();
    if (css.includes('f3401e1') || css.includes('burger-part')) {
        console.log('Found CSS in style tag:', $(el).attr('id') || i);
        fs.writeFileSync('burger-inline.css', css);
    }
});
