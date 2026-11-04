const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('=== STEP 1: FIX CSS FOR ALL QUOTE CAROUSELS ===');
let css = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

const universalQuoteCss = `

/* Universal Single-Quote Display for all .quotes-carousel instances */
.quotes-carousel .logo-list-content {
  display: none !important;
  width: 100% !important;
  max-width: 800px !important;
  margin: 0 auto !important;
  text-align: center !important;
}

.quotes-carousel .logo-list-content.is-active,
.quotes-carousel .logo-list-content.slick-active,
.quotes-carousel .logo-list-content:first-child:not(.is-inactive) {
  display: block !important;
  opacity: 1 !important;
}

.quotes-carousel .logo-list-content.is-hidden {
  display: none !important;
}
`;

css += universalQuoteCss;
fs.writeFileSync('public/thejacketmaker/css/styles.css', css);
console.log('Appended universal quote slider CSS');

console.log('=== STEP 2: REPLACE [points_amount] ACROSS ALL PRODUCT FILES ===');
const productFiles = glob.sync('public/thejacketmaker/products/**/*.html');
let pointsReplaced = 0;

productFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('[points_amount]')) {
    content = content.replace(/%20\[points_amount\]%20/g, '%20reward points%20');
    content = content.replace(/\[points_amount\]/g, 'reward points');
    changed = true;
    pointsReplaced++;
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
});
console.log(`Replaced [points_amount] in ${pointsReplaced} product files`);

console.log('=== STEP 3: ENHANCE gallery-controller.js TO AUTO-INJECT ARROWS ON ALL QUOTE CAROUSELS ===');
let galleryJs = fs.readFileSync('public/thejacketmaker/js/gallery-controller.js', 'utf8');

// Update initQuoteSlider to support any page and auto-inject arrows
const robustQuoteSlider = `  // ============================================================
  // 1. AS FEATURED IN QUOTE & LOGO CAROUSEL (UNIVERSAL ENGINE)
  // ============================================================
  function initQuoteSlider() {
    const quotesCarousel = document.querySelector('.quotes-carousel');
    const logosCarousel = document.querySelector('.logos-carousel');
    if (!quotesCarousel) return;

    // Remove any leftover cloned slides
    quotesCarousel.querySelectorAll('.slick-cloned').forEach(el => el.remove());
    if (logosCarousel) {
      logosCarousel.querySelectorAll('.slick-cloned').forEach(el => el.remove());
    }

    // Auto-inject prev and next buttons if missing
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
    }

    const quoteSlides = Array.from(quotesCarousel.querySelectorAll('.logo-list-content'));
    const logoSlides = logosCarousel ? Array.from(logosCarousel.querySelectorAll('.logo-list-image-wrap')) : [];
    const total = quoteSlides.length;
    if (total === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    function showQuote(idx, animate = true) {
      if (idx < 0) idx = total - 1;
      if (idx >= total) idx = 0;
      currentIndex = idx;

      quoteSlides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.classList.add('is-active', 'slick-current', 'slick-active');
          slide.classList.remove('is-inactive', 'is-hidden');
          slide.style.display = 'block';
          slide.setAttribute('aria-hidden', 'false');
          if (animate) {
            slide.style.opacity = '0';
            requestAnimationFrame(() => {
              slide.style.transition = 'opacity 0.25s ease';
              slide.style.opacity = '1';
            });
          } else {
            slide.style.opacity = '1';
          }
        } else {
          slide.classList.remove('is-active', 'slick-current', 'slick-active');
          slide.classList.add('is-inactive', 'is-hidden');
          slide.style.display = 'none';
          slide.style.opacity = '0';
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      // Synchronize logos below
      if (logoSlides.length > 0) {
        logoSlides.forEach((logo, i) => {
          if (i === currentIndex) {
            logo.classList.add('is-active', 'slick-current', 'slick-center', 'slick-active');
            logo.style.opacity = '1';
            logo.style.filter = 'none';
            logo.style.transform = 'scale(1.15)';
            logo.style.transition = 'all 0.3s ease';
            if (logo.scrollIntoViewIfNeeded) {
              logo.scrollIntoViewIfNeeded({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          } else {
            logo.classList.remove('is-active', 'slick-current', 'slick-center', 'slick-active');
            logo.style.opacity = '0.45';
            logo.style.filter = 'grayscale(100%)';
            logo.style.transform = 'scale(1)';
          }
        });
      }
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        showQuote(currentIndex + 1, true);
      }, 4500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    // Initialize with Quote 0
    showQuote(0, false);
    startAutoPlay();

    // Pause on hover
    quotesCarousel.addEventListener('mouseenter', stopAutoPlay);
    quotesCarousel.addEventListener('mouseleave', startAutoPlay);
    if (logosCarousel) {
      logosCarousel.addEventListener('mouseenter', stopAutoPlay);
      logosCarousel.addEventListener('mouseleave', startAutoPlay);
    }

    prevBtn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      showQuote(currentIndex - 1, true);
      startAutoPlay();
    };

    nextBtn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      showQuote(currentIndex + 1, true);
      startAutoPlay();
    };

    logoSlides.forEach((logo, idx) => {
      logo.style.cursor = 'pointer';
      logo.onclick = function (e) {
        e.preventDefault();
        showQuote(idx, true);
        startAutoPlay();
      };
    });
  }`;

const startPos = galleryJs.indexOf('// 1. AS FEATURED IN QUOTE & LOGO CAROUSEL');
const endPos = galleryJs.indexOf('// 2. HOMEPAGE HERO SLIDESHOW');
if (startPos !== -1 && endPos !== -1) {
  galleryJs = galleryJs.slice(0, startPos) + robustQuoteSlider + '\n\n  // ============================================================\n  ' + galleryJs.slice(endPos);
  fs.writeFileSync('public/thejacketmaker/js/gallery-controller.js', galleryJs);
  console.log('Successfully updated universal initQuoteSlider in gallery-controller.js');
}

console.log('=== ALL PRODUCT FIXES COMPLETED ===');
