const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // Previous fixes
    $('.numinate.completed').removeClass('completed');
    $('.pbmit-search-cart-box').remove();
    $('.pbmit-header-search-form-wrapper').remove();
    $('script[src*="cloudflareinsights.com"]').remove();
    
    // NEW: Remove video from ALL pages
    $('.pbmit-lightbox-video').each(function() {
        let section = $(this).closest('.elementor-top-section');
        if (section.length) {
            section.remove();
        }
    });

    // Fix Newsletter position
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
            let elementorWrapper = $('div[data-elementor-type="wp-page"]');
            if (elementorWrapper.length) {
                // Append inside the main elementor wrapper instead of directly before footer
                newsletterSection.appendTo(elementorWrapper);
                console.log('Moved Newsletter in index.html to elementor wrapper');
            }
        }
    }
    
    let processedHtml = $.html();
    processedHtml = processedHtml.replace(/Crasut nislac sapien interdum scele risque sed in elit rutrum\./g, 'Crafted with the finest ingredients and culinary expertise to deliver an unforgettable dining experience.');
    processedHtml = processedHtml.replace(/Mauris vitae odio non massa pharetra luctus\. Nullam sed eleifend libero\. Suspendisse vulputate imperdiet mi, ut vehicula dolor molestie nec\./g, 'Discover the perfect blend of fresh ingredients, bold flavors, and timeless recipes. Experience a meal that satisfies your cravings and delights your taste buds.');
    
    fs.writeFileSync(p, processedHtml);
    console.log('Processed', f);
});
