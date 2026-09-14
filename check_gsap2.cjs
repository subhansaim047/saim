const fs = require('fs');
const html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');

const cheerio = require('cheerio');
const $ = cheerio.load(html);

console.log("--- HERO PIZZA ---");
$('.elementor-element-bff8b9f .pbmit_tween_effect_element').each((i, el) => {
    console.log(`Part ${i}: start=[${$(el).attr('data-x-start')}, ${$(el).attr('data-y-start')}] -> end=[${$(el).attr('data-x-end')}, ${$(el).attr('data-y-end')}]`);
});

console.log("\n--- BURGER ---");
$('.elementor-element-f2a4969 .pbmit_tween_effect_element').each((i, el) => {
    console.log(`Part ${i}: start=[${$(el).attr('data-x-start')}, ${$(el).attr('data-y-start')}] -> end=[${$(el).attr('data-x-end')}, ${$(el).attr('data-y-end')}]`);
});
