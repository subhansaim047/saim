const fs = require('fs');
const cheerio = require('cheerio');

const contactHtml = fs.readFileSync('public/demos/dilicious-pizza/contact-us.html', 'utf8');
const $ = cheerio.load(contactHtml, { decodeEntities: false });

const address = "Ramzan Center, Sambrial Rd, Mohalla Thathyaran, Daska, 51010, Pakistan";
const encodedAddress = encodeURIComponent(address);
const newSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=15&output=embed&iwloc=near`;

let modified = false;
$('iframe').each((i, el) => {
    const src = $(el).attr('src');
    if (src && src.includes('maps.google.com/maps')) {
        $(el).attr('src', newSrc);
        $(el).attr('title', address);
        $(el).attr('aria-label', address);
        modified = true;
    }
});

if (modified) {
    fs.writeFileSync('public/demos/dilicious-pizza/contact-us.html', $.html());
    console.log("Updated Google Maps iframe in contact-us.html!");
} else {
    console.log("No Google Maps iframe found.");
}
