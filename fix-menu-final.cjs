const fs = require('fs');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
let menuHtml = fs.readFileSync(dir + 'menu.html', 'utf8');
let $m = cheerio.load(menuHtml, { decodeEntities: false });

// 1. Remove the bad post-16.css link
$m('link[href*="post-16.css"]').remove();

// 2. Add the correct post-1124.css link
if ($m('link[href*="post-1124.css"]').length === 0) {
    $m('head').append('\n<link rel="stylesheet" id="elementor-post-1124-css" href="/demos/dilicious-pizza/css/post-1124.css" media="all">');
}

// 3. Fix the wrapper in menu.html
// Currently, section.elementor-top-section is directly inside div.entry-content
const section = $m('div.entry-content > section.elementor-top-section, div.entry-content > div.elementor-top-section');
if (section.length) {
    // We need to wrap it!
    const wrapper = cheerio.load('<div data-elementor-type="wp-page" data-elementor-id="1124" class="elementor elementor-1124"></div>')('div');
    section.wrap(wrapper);
} else {
    // Maybe it's already wrapped but with a different ID?
    const existingWrapper = $m('div.entry-content > div.elementor');
    if (existingWrapper.length) {
        existingWrapper.attr('data-elementor-id', '1124');
        existingWrapper.attr('class', 'elementor elementor-1124');
    }
}

fs.writeFileSync(dir + 'menu.html', $m.html());
console.log("Fixed menu.html styling dependencies and wrappers!");
