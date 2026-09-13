const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/demos/dilicious-pizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

// Extract the menu section from index.html
const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const $index = cheerio.load(indexHtml, { decodeEntities: false });
const menuSectionHTML = $index('.elementor-element-e71b354').parent().html(); 
// .elementor-element-e71b354 is the section we built. Actually its parent might be the section itself?
// Let's get the outer HTML of the section.
const menuSection = $index('section.elementor-element-e71b354').prop('outerHTML') || $index('.elementor-element-e71b354').closest('section').prop('outerHTML');

files.forEach(file => {
    if (file === 'our-team.html' || file === 'reservation.html') return;
    
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    let $ = cheerio.load(html, { decodeEntities: false });
    
    let modified = false;

    // 1. Remove Team Member sections
    const teamElements = $('.pbmit-ele-team');
    if (teamElements.length > 0) {
        // Find the top-level elementor section containing this
        teamElements.closest('section.elementor-top-section').remove();
        modified = true;
    }

    // 2. Remove nav links for team and reservation
    const linksToRemove = $('a[href*="our-team"], a[href*="reservation"]');
    if (linksToRemove.length > 0) {
        linksToRemove.closest('li.menu-item').remove();
        modified = true;
    }

    // 3. Update Menu Page (Replace whatever menu it has with the index menu)
    if (file === 'menu.html' && menuSection) {
        // Find the main content area in menu.html
        // Usually it's in a div.elementor-widget-wrap or similar. 
        // We'll replace the existing menu section.
        // Let's look for a known menu element in menu.html or just clear the main body and add it?
        // Let's just find the first .elementor-top-section after the hero and replace it.
        // Wait, menu.html might have different IDs. Let's just replace all top sections inside the page content except the title/hero section.
        // The page title section is usually <div class="pbmit-title-bar-wrapper">.
        // We will just replace the .elementor-section that contains food items.
        const existingMenus = $('.pbmit-ele-menu');
        if (existingMenus.length > 0) {
            existingMenus.closest('section.elementor-top-section').first().replaceWith(menuSection);
            // Remove any other food menu sections
            $('.pbmit-ele-menu').closest('section.elementor-top-section').remove();
        } else {
             // If no pbmit-ele-menu, maybe it's just raw elementor. We will append the menuSection to the main content div.
             $('.elementor-1144').html(menuSection); // elementor-1144 is often the post id for menu. Let's just do it safely.
        }
        modified = true;
    }

    // 4. Update CTA buttons to tel:
    const ctaTexts = ['order now', 'call us', 'book a table', 'contact us', 'order online'];
    $('a').each((i, el) => {
        const text = $(el).text().trim().toLowerCase();
        if (ctaTexts.includes(text) || $(el).attr('href') === 'reservation.html' || $(el).attr('href') === 'contact-us.html') {
            $(el).attr('href', 'tel:[PHONE]');
            modified = true;
        }
        // Also if it's the specific header phone number text
        if (text.includes('90-500-28-999') || $(el).attr('href') === 'tel:9050028999') {
             $(el).attr('href', 'tel:[PHONE]');
             // We can't replace the inner text if it has spans, let's leave inner text for now, but change href.
        }
    });

    if (modified) {
        fs.writeFileSync(path.join(dir, file), $.html());
        console.log(`Updated ${file}`);
    }
});
