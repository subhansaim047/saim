const fs = require('fs');
const cheerio = require('cheerio');

// Load old HTML
const oldHtml = fs.readFileSync('old_index.html', 'utf8');
const $old = cheerio.load(oldHtml, { decodeEntities: false });

// Find the 3 boxes in old HTML
const oldBoxes = $old('.pbmit-ihbox-style-3');
if (oldBoxes.length === 3) {
    const middleBoxHtml = $old(oldBoxes[1]).parent().html();
    
    // Load new HTML
    const newHtml = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
    const $new = cheerio.load(newHtml, { decodeEntities: false });
    
    const newBoxes = $new('.pbmit-ihbox-style-3');
    if (newBoxes.length === 3) {
        $new(newBoxes[1]).parent().html(middleBoxHtml);
        fs.writeFileSync('public/demos/dilicious-pizza/index.html', $new.html());
        console.log("Restored middle box successfully.");
    } else {
        console.log("Could not find 3 boxes in new HTML. Found: " + newBoxes.length);
    }
} else {
    console.log("Could not find 3 boxes in old HTML. Found: " + oldBoxes.length);
}
