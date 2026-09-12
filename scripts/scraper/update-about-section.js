const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const indexPath = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
let html = fs.readFileSync(indexPath, 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// ============================================================
// 1. Replace the 2 left-side images with Hamza Ilyas photo
//    Image widget IDs: 1e18fd8 (pizza-shop) and 9fb3b21 (eating-pizza)
// ============================================================

// Replace pizza-shop-img-01.jpg (1e18fd8)
const img1 = $('.elementor-element-1e18fd8 img');
if (img1.length) {
    img1.attr('src', 'images/hamza-ilyas.jpg');
    img1.attr('srcset', '');
    img1.attr('alt', 'Hamza Ilyas - Founder & CEO');
    console.log('Replaced image 1 (1e18fd8)');
}

// Replace eating-pizza-img-01.jpg (9fb3b21)
const img2 = $('.elementor-element-9fb3b21 img');
if (img2.length) {
    img2.attr('src', 'images/hamza-ilyas.jpg');
    img2.attr('srcset', '');
    img2.attr('alt', 'Hamza Ilyas - Founder & CEO');
    console.log('Replaced image 2 (9fb3b21)');
}

// ============================================================
// 2. Add the quote BEFORE the "Order Now" button on right side
//    The button widget ID is c623065
// ============================================================
const quoteHTML = `
<div class="elementor-element elementor-widget hamza-quote-block" style="margin: 20px 0 25px 0; padding: 20px 25px; border-left: 4px solid #b80818; background: rgba(184,8,24,0.04); border-radius: 0 8px 8px 0;">
  <p style="font-family: 'Norican', cursive; font-size: 18px; line-height: 1.6; color: #282932; margin: 0 0 12px 0; font-style: italic;">
    &ldquo;We didn&rsquo;t just want to make pizza. We wanted to create a place people come back to.&rdquo;
  </p>
  <p style="margin: 0; font-size: 14px; font-weight: 600; color: #b80818; letter-spacing: 0.5px;">
    &mdash; Hamza Ilyas, Founder &amp; CEO
  </p>
</div>
`;

const orderNowWidget = $('.elementor-element-c623065');
if (orderNowWidget.length) {
    orderNowWidget.before(quoteHTML);
    console.log('Added quote block before Order Now button');
}

fs.writeFileSync(indexPath, $.html());
console.log('Done! index.html saved.');
