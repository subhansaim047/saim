const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const floatingCallHtml = `
<style>
.floating-call-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #fcc332;
    color: #111;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 50px;
    box-shadow: 0 5px 15px rgba(252, 195, 50, 0.4);
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 2px solid #fff;
}
.floating-call-btn:hover {
    transform: translateY(-5px);
    color: #000;
    box-shadow: 0 8px 20px rgba(252, 195, 50, 0.6);
}
.floating-call-btn svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
}
</style>
<a href="tel:03011337766" class="floating-call-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
    Call Now
</a>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    const $ = cheerio.load(html, { decodeEntities: false });
    let modified = false;

    // 1. Add floating call button
    if (html.indexOf('floating-call-btn') === -1) {
        $('body').append(floatingCallHtml);
        modified = true;
    }

    // 2. Fix all Order Now buttons to point to tel:03011337766
    $('a').each((i, el) => {
        const text = $(el).text().trim().toLowerCase();
        if (text === 'order now') {
            if ($(el).attr('href') !== 'tel:03011337766') {
                $(el).attr('href', 'tel:03011337766');
                modified = true;
            }
        }
    });

    // 3. Fix Contact Form on contact-us.html
    if (file === 'contact-us.html') {
        const form = $('form.wpcf7-form');
        if (form.length > 0 && form.attr('action') !== 'mailto:fitbitepizza@gmail.com') {
            form.attr('action', 'mailto:fitbitepizza@gmail.com');
            form.attr('method', 'POST');
            form.attr('enctype', 'text/plain');
            modified = true;
        }

        // 4. Add "Get Directions" button below the map or contact details
        if (html.indexOf('Get Directions') === -1) {
            // Find the location element to append the button
            const locationBox = $('.pbmit-ihbox-contents:contains("Ramzan Center")');
            if (locationBox.length > 0) {
                locationBox.append('<div style="margin-top: 15px;"><a href="https://maps.app.goo.gl/kFmcAnKRcsX2MogU9" target="_blank" class="elementor-button elementor-size-sm" style="background-color: #fcc332; color: #000; padding: 10px 20px; border-radius: 5px; font-weight: bold; text-decoration: none;">Get Directions</a></div>');
                modified = true;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(path.join(dir, file), $.html());
        console.log(`Updated ${file}`);
    }
});
