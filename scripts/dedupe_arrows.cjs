const fs = require('fs');

let js = fs.readFileSync('public/thejacketmaker/js/gallery-controller.js', 'utf8');

// Update arrow injection logic in gallery-controller.js to prevent duplicate buttons
const oldArrowInject = `    // Auto-inject prev and next buttons if missing
    let prevBtn = quotesCarousel.querySelector('.slick-prev-custom');
    let nextBtn = quotesCarousel.querySelector('.slick-next-custom');

    if (!prevBtn) {
      prevBtn = document.createElement('button');
      prevBtn.className = 'slick-prev-custom slick-arrow';
      prevBtn.setAttribute('aria-label', 'Previous quote');
      prevBtn.setAttribute('type', 'button');
      prevBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
      quotesCarousel.insertBefore(prevBtn, quotesCarousel.firstChild);
    }

    if (!nextBtn) {
      nextBtn = document.createElement('button');
      nextBtn.className = 'slick-next-custom slick-arrow';
      nextBtn.setAttribute('aria-label', 'Next quote');
      nextBtn.setAttribute('type', 'button');
      nextBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
      quotesCarousel.appendChild(nextBtn);
    }`;

const newArrowInject = `    // Ensure exactly ONE prev button and ONE next button exist
    const existingPrev = Array.from(quotesCarousel.querySelectorAll('.slick-prev, .slick-prev-custom'));
    const existingNext = Array.from(quotesCarousel.querySelectorAll('.slick-next, .slick-next-custom'));

    // Remove duplicates
    if (existingPrev.length > 1) {
      for (let i = 1; i < existingPrev.length; i++) existingPrev[i].remove();
    }
    if (existingNext.length > 1) {
      for (let i = 1; i < existingNext.length; i++) existingNext[i].remove();
    }

    let prevBtn = quotesCarousel.querySelector('.slick-prev, .slick-prev-custom');
    let nextBtn = quotesCarousel.querySelector('.slick-next, .slick-next-custom');

    if (!prevBtn) {
      prevBtn = document.createElement('button');
      prevBtn.className = 'slick-prev-custom slick-arrow';
      prevBtn.setAttribute('aria-label', 'Previous quote');
      prevBtn.setAttribute('type', 'button');
      prevBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
      quotesCarousel.insertBefore(prevBtn, quotesCarousel.firstChild);
    }

    if (!nextBtn) {
      nextBtn = document.createElement('button');
      nextBtn.className = 'slick-next-custom slick-arrow';
      nextBtn.setAttribute('aria-label', 'Next quote');
      nextBtn.setAttribute('type', 'button');
      nextBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
      quotesCarousel.appendChild(nextBtn);
    }`;

if (js.includes('Auto-inject prev and next buttons if missing')) {
  js = js.replace(oldArrowInject, newArrowInject);
  fs.writeFileSync('public/thejacketmaker/js/gallery-controller.js', js);
  console.log('Successfully updated arrow deduplication in gallery-controller.js');
}

// In styles.css, ensure no redundant buttons can show
let css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');
css += `
/* Deduplicate any extra arrows */
.quotes-carousel button.slick-arrow ~ button.slick-prev,
.quotes-carousel button.slick-arrow ~ button.slick-prev-custom,
.quotes-carousel button.slick-arrow ~ button.slick-next,
.quotes-carousel button.slick-arrow ~ button.slick-next-custom {
  display: none !important;
}
`;
fs.writeFileSync('public/thejacketmaker/css/styles.css', css);
console.log('Appended button deduplication CSS in styles.css');
