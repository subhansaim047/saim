const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// 1. Remove floating basket from all files
const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    
    // We must pass decodeEntities: false to avoid corrupting text
    const $ = cheerio.load(html, { decodeEntities: false });
    
    // Remove PBM Dock (Basket)
    $('#pbmdock-main').remove();
    
    // Update footer links
    const footerMenuHtml = `
  <li class="menu-item"><a href="/demos/dilicious-pizza/">Home</a></li>
  <li class="menu-item"><a href="/demos/dilicious-pizza/about-us/">About Us</a></li>
  <li class="menu-item"><a href="/demos/dilicious-pizza/menu/">Menu</a></li>
  <li class="menu-item"><a href="/demos/dilicious-pizza/reservation/">Reservation</a></li>
  <li class="menu-item"><a href="/demos/dilicious-pizza/our-services/">Our Services</a></li>
  <li class="menu-item"><a href="/demos/dilicious-pizza/contact-us/">Contact Us</a></li>
    `;
    $('#menu-company').html(footerMenuHtml);
    
    // If it's index.html, remove specific sections
    if (f === 'index.html') {
        // Find Latest News section
        // Search for element with text "Latest News"
        let latestNewsHeading = $('.pbmit-element-subtitle:contains("Latest News")');
        if (latestNewsHeading.length > 0) {
            let section = latestNewsHeading.closest('section.elementor-top-section');
            if (section.length > 0) {
                section.remove();
                console.log('Removed Latest News section from index.html');
            }
        }
        
        // Find Video section
        // Look for pbmit-video-button or similar
        let videoBtn = $('.pbmit-video-button');
        if (videoBtn.length > 0) {
            let section = videoBtn.closest('section.elementor-top-section');
            if (section.length > 0) {
                section.remove();
                console.log('Removed Video section from index.html');
            }
        } else {
            // Alternative: look for elementor-widget-video or video background
            let videoWidget = $('.elementor-widget-video');
            if (videoWidget.length > 0) {
                let section = videoWidget.closest('section.elementor-top-section');
                if (section.length > 0) {
                    section.remove();
                    console.log('Removed Video section from index.html (widget found)');
                }
            }
        }
    }
    
    fs.writeFileSync(p, $.html());
    console.log('Processed', f);
});
