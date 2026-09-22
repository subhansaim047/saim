const fs = require('fs');
const menuDataTs = fs.readFileSync('anzaar-menu-temp.ts', 'utf16le');

let str = menuDataTs.replace('export const menuData = ', '');
let menuData;
try {
  menuData = eval(str);
} catch(e) {
  console.log('Error evaluating:', e);
  process.exit(1);
}

let html = '';
for (const cat of menuData) {
  html += '<div style="margin-bottom: 50px;">' +
    '<h3 style="margin-bottom: 25px; color: #f29f05; font-size: 32px; font-weight: 800; border-bottom: 2px solid #e8e2d8; padding-bottom: 12px; text-transform: uppercase;">' +
      cat.category +
    '</h3>' +
    '<div class="pbmit-element-posts-wrapper row multi-columns-row">';

  for (const item of cat.items) {
    let subtitle = 'Rs. ' + item.price;
    if (item.sizes) subtitle = item.sizes + ' - ' + subtitle;
    
    html += '<article class="pbmit-ele pbmit-ele-miconheading pbmit-miconheading-style-6 col-md-12">' +
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
  
  html += '</div></div>';
}

let menuHtml = fs.readFileSync('public/fitbitepizza/menu.html', 'utf8');

const s = menuHtml.indexOf('<div style="margin-bottom: 50px;">');
const e = menuHtml.indexOf('<div class="elementor-element elementor-element-d12dfef');
if (s !== -1 && e !== -1) {
   const newHtml = menuHtml.substring(0, s) + html + '</div></div></div></div></div></div>' + menuHtml.substring(e);
   fs.writeFileSync('public/fitbitepizza/menu.html', newHtml, 'utf8');
   console.log('Menu successfully updated!');
} else {
   console.log('Failed');
}
