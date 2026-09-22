const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('public/fitbitepizza/index.html', 'utf8');
const $ = cheerio.load(html);

// Find the section f12e04f
const menuSection = $('.elementor-element-f12e04f');
if (menuSection.length > 0) {
    // Generate the menu HTML again
    const menuDataTs = fs.readFileSync('anzaar-menu-temp.ts', 'utf16le');
    let str = menuDataTs.replace('export const menuData = ', '');
    let menuData = eval(str);

    let newHtml = '<div class="elementor-container elementor-column-gap-no"><div class="elementor-column elementor-col-100 elementor-inner-column"><div class="elementor-widget-wrap elementor-element-populated"><div class="elementor-widget-container">';
    
    for (const cat of menuData) {
      newHtml += '<div style="margin-bottom: 50px;">' +
        '<h3 style="margin-bottom: 25px; color: #f29f05; font-size: 32px; font-weight: 800; border-bottom: 2px solid #e8e2d8; padding-bottom: 12px; text-transform: uppercase;">' +
          cat.category +
        '</h3>' +
        '<div class="pbmit-element-posts-wrapper row multi-columns-row">';
    
      for (const item of cat.items) {
        let subtitle = 'Rs. ' + item.price;
        if (item.sizes) subtitle = item.sizes + ' - ' + subtitle;
        
        newHtml += '<article class="pbmit-ele pbmit-ele-miconheading pbmit-miconheading-style-6 col-md-12">' +
            '<div class="pbmit-ihbox pbmit-ihbox-style-6">' +
                '<div class="pbmit-ihbox-contents" style="padding-left: 0; margin-left: 0;">' +
                    '<div class="pbmit-content-inner">' +
                        '<h2 class="pbmit-element-title">' + item.name + '</h2>' +
                        '<h4 class="pbmit-element-subtitle" style="font-size: 15px; margin-top: 5px; color: #D8B27A;">' + subtitle + '</h4>' +
                    '</div>' +
                '</div>' + 
            '</div>' +
        '</article>';
      }
      
      newHtml += '</div></div>';
    }
    newHtml += '</div></div></div></div>';

    menuSection.html(newHtml);
    console.log("Successfully replaced the menu in index.html");
}

fs.writeFileSync('public/fitbitepizza/index.html', $.html(), 'utf8');
