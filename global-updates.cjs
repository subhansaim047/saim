const fs = require('fs');
const path = require('path');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const FB_LINK = 'https://www.facebook.com/p/FIT-BITE-PIZZA-100063928218830/';
const MAPS_LINK = 'https://maps.app.goo.gl/kFmcAnKRcsX2MogU9';
const PHONE_NUM = '0301-1337766';
const PHONE_URI = 'tel:03011337766';
const ADDRESS = 'Ramzan Center, Sambrial Rd, Mohalla Thathyaran, Daska, 51010, Pakistan';

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Replace old phone texts
    html = html.replace(/90-500-28-999/g, PHONE_NUM);
    html = html.replace(/\(\+1\)\s*541\s*628\s*88/g, PHONE_NUM);
    html = html.replace(/\+1\s*964\s*565\s*87652,\s*\+1\s*555\s*234-8765/g, PHONE_NUM);
    html = html.replace(/0301-1337766/g, PHONE_NUM); // just in case it was half replaced

    // Replace old address texts
    html = html.replace(/256 Elizaberth Ave Str, Brooklyn, CA 90025/g, ADDRESS);
    html = html.replace(/256 Elizaberth Ave, Brooklyn, CA 90025/g, ADDRESS);
    html = html.replace(/55 Road, Brooklyn Street New York 600/g, ADDRESS);
    
    // Sometimes address is split by <br> or spans, let's just make sure. If there are other dummy addresses, they might be missed.
    
    // Replace tel: links
    html = html.replace(/href="tel:\[PHONE\]"/g, `href="${PHONE_URI}"`);
    html = html.replace(/href="tel:9050028999"/g, `href="${PHONE_URI}"`);
    html = html.replace(/href="tel:\(\+1\)54162888"/g, `href="${PHONE_URI}"`);

    // Replace Facebook links
    // <li class="pbmit-social-li pbmit-social-facebook "><a title="Facebook" href="#"
    html = html.replace(/(<li class="[^"]*pbmit-social-facebook[^"]*">\s*<a[^>]*href=")([^"]*)(")/g, `$1${FB_LINK}$3`);
    
    // Wait, let's also wrap the address in a Google maps link if we find the exact address text inside a widget
    // Actually, it's safer to just wrap it anywhere it appears, except inside HTML tags.
    // Let's not risk breaking HTML, just replacing text is fine. The user asked to add google map link.
    // I will replace `<div class="pbmit-contact-widget-line pbmit-contact-widget-address">ADDRESS</div>` with an anchor.
    html = html.replace(
        new RegExp(`<div class="pbmit-contact-widget-line pbmit-contact-widget-address">${ADDRESS}</div>`, 'g'),
        `<div class="pbmit-contact-widget-line pbmit-contact-widget-address"><a href="${MAPS_LINK}" target="_blank">${ADDRESS}</a></div>`
    );

    // Also on contact us page, there's a big address block.
    // Let's use cheerio to find the specific contact-us.html blocks
    if (file === 'contact-us.html') {
        const cheerio = require('cheerio');
        const $ = cheerio.load(html, { decodeEntities: false });
        
        // Find ihbox for address, phone, email
        $('.pbmit-ihbox-style-15 .pbmit-ihbox-contents').each((i, el) => {
            const title = $(el).find('h2').text().toLowerCase();
            if (title.includes('address')) {
                $(el).find('.pbmit-heading-desc').html(`<a href="${MAPS_LINK}" target="_blank">${ADDRESS}</a>`);
            } else if (title.includes('phone') || title.includes('call now')) {
                // There might be <a href="tel:...">
                $(el).find('.pbmit-heading-desc').html(`<a href="${PHONE_URI}">${PHONE_NUM}</a>`);
            }
        });
        
        // Let's also find the iframe map if it exists and change its src?
        // The Google Maps link provided is a short link `https://maps.app.goo.gl/kFmcAnKRcsX2MogU9`. We can't use it directly in iframe.
        // We will just leave the iframe or remove it, but user didn't ask to remove it. We'll leave it as is or update if we find an iframe.
        
        html = $.html();
    }
    
    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated ${file}`);
});
