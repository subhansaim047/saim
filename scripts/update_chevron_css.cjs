const fs = require('fs');

let css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

const targetRule = `/* Quote Carousel Arrows & Layout */
.quotes-carousel {
  position: relative !important;
  width: 100% !important;
  max-width: 960px !important;
  margin: 0 auto !important;
}

.quotes-carousel .slick-prev-custom,
.quotes-carousel .slick-next-custom {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 20 !important;
  background: #ffffff !important;
  border: 1px solid #d1d5db !important;
  border-radius: 50% !important;
  width: 44px !important;
  height: 44px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  color: #111111 !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
  transition: all 0.2s ease !important;
  outline: none !important;
}

.quotes-carousel .slick-prev-custom {
  left: 0 !important;
}

.quotes-carousel .slick-next-custom {
  right: 0 !important;
}

.quotes-carousel .slick-prev-custom:hover,
.quotes-carousel .slick-next-custom:hover {
  background: #111111 !important;
  color: #ffffff !important;
  border-color: #111111 !important;
}

.quotes-carousel .slick-prev-custom svg,
.quotes-carousel .slick-next-custom svg {
  display: inline-block !important;
  width: 20px !important;
  min-width: 20px !important;
  height: 20px !important;
  min-height: 20px !important;
  stroke: #111111 !important;
  fill: none !important;
  stroke-width: 2.5px !important;
  pointer-events: none !important;
  transition: stroke 0.2s ease !important;
}

.quotes-carousel .slick-prev-custom:hover svg,
.quotes-carousel .slick-next-custom:hover svg {
  stroke: #ffffff !important;
}`;

// Replace previous snippet or append
if (css.includes('/* Quote Carousel Arrows & Layout */')) {
  const start = css.indexOf('/* Quote Carousel Arrows & Layout */');
  css = css.slice(0, start) + targetRule + '\n';
} else {
  css += '\n' + targetRule + '\n';
}

fs.writeFileSync('public/thejacketmaker/css/styles.css', css, 'utf8');
console.log('Updated styles.css with perfect SVG chevron styling!');
