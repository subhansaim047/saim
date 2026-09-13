const fs = require('fs');
const cheerio = require('cheerio');

const menuHtml = fs.readFileSync('public/demos/dilicious-pizza/menu.html', 'utf8');
let $m = cheerio.load(menuHtml, { decodeEntities: false });

// Check if post-16.css is already there
if ($m('link[href*="post-16.css"]').length === 0) {
    // Append it to head
    $m('head').append('\n<link rel="stylesheet" id="elementor-post-16-css" href="/demos/dilicious-pizza/css/post-16.css" media="all">');
    fs.writeFileSync('public/demos/dilicious-pizza/menu.html', $m.html());
    console.log("Injected post-16.css into menu.html");
} else {
    console.log("post-16.css already exists");
}
