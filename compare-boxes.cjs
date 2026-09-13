const fs = require('fs');
const cheerio = require('cheerio');

const oldHtml = fs.readFileSync('old_index.html', 'utf8');
const $old = cheerio.load(oldHtml, { decodeEntities: false });

const newHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $new = cheerio.load(newHtml, { decodeEntities: false });

// Find the section with the 3 boxes. They were in elementor columns.
// Let's find `.pbmit-ihbox-style-3`
let oldBoxes = [];
$old('.pbmit-ihbox-style-3').each((i, el) => {
    oldBoxes.push($old(el).html());
});

console.log("Old Boxes count: " + oldBoxes.length);

let newBoxes = [];
$new('.pbmit-ihbox-style-3').each((i, el) => {
    newBoxes.push($new(el).html());
});

console.log("New Boxes count: " + newBoxes.length);

// Also look for the logo one which might not have pbmit-ihbox-style-3 anymore
let newBoxContainers = $new('.elementor-element-c2666d6, .elementor-element-b866367, .elementor-element-47672dc');
console.log("Found " + newBoxContainers.length + " containers in new HTML");

