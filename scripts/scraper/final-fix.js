const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // Task 1: Fix animations (remove 'completed' class)
    $('.numinate.completed').removeClass('completed');
    
    // Task 2: Remove header cart and search
    $('.pbmit-search-cart-box').remove();
    $('.pbmit-header-search-form-wrapper').remove();
    
    // Task 4: Remove cloudflare insights
    $('script[src*="cloudflareinsights.com"]').remove();
    
    // Task 5: Move Newsletter in index.html
    if (f === 'index.html') {
        let newsletterSection = null;
        $('.pbmit-element-subtitle').each(function() {
            if ($(this).text().includes('Our Newsletter')) {
                let section = $(this).closest('.elementor-top-section');
                if (section.length) {
                    newsletterSection = section;
                }
            }
        });
        
        if (newsletterSection) {
            let footer = $('#colophon');
            if (footer.length) {
                // Detach and insert before footer
                newsletterSection.insertBefore(footer);
                console.log('Moved Newsletter in index.html');
            }
        }
    }
    
    // Task 3: Replace Latin text (we do this on the HTML string directly to avoid cheerio altering whitespace unnecessarily or missing text nodes)
    let processedHtml = $.html();
    processedHtml = processedHtml.replace(/Crasut nislac sapien interdum scele risque sed in elit rutrum\./g, 'Crafted with the finest ingredients and culinary expertise to deliver an unforgettable dining experience.');
    processedHtml = processedHtml.replace(/Mauris vitae odio non massa pharetra luctus\. Nullam sed eleifend libero\. Suspendisse vulputate imperdiet mi, ut vehicula dolor molestie nec\./g, 'Discover the perfect blend of fresh ingredients, bold flavors, and timeless recipes. Experience a meal that satisfies your cravings and delights your taste buds.');
    
    fs.writeFileSync(p, processedHtml);
    console.log('Processed', f);
});
