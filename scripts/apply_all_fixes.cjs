const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

console.log('=== STEP 1: VERIFY AND ENSURE TRIMMED LOGO IMAGES ===');
const userUploadedLogo = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/.user_uploaded/media_1793778140196_92fb7955.png';
const targetPng = path.resolve('public/thejacketmaker/images/hq-crest-logo.png');
const targetWebp = path.resolve('public/thejacketmaker/images/hq-crest-logo.webp');

async function processLogo() {
  if (fs.existsSync(userUploadedLogo)) {
    await sharp(userUploadedLogo).trim().png({ quality: 100 }).toFile(targetPng);
    await sharp(userUploadedLogo).trim().webp({ quality: 100 }).toFile(targetWebp);
    console.log('Successfully trimmed and saved hq-crest-logo PNG and WebP');
  } else {
    console.log('User uploaded logo source not found, checking existing target');
  }
}

async function run() {
  await processLogo();

  // Load quotes data
  const quotesData = JSON.parse(fs.readFileSync('scripts/quotes_data.json', 'utf8'));
  const { quotes, logos } = quotesData;
  console.log(`Loaded ${quotes.length} quotes and ${logos.length} logos`);

  // Build clean quotes HTML
  let quotesHtml = `<!-- Clean High-Performance Quotes Carousel -->
<div class="quotes-carousel" id="hq-quotes-carousel">
  <button aria-label="Previous quote" class="slick-prev-custom slick-arrow" type="button">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  </button>
  <div class="quotes-track-wrapper">
`;

  quotes.forEach((q, idx) => {
    const isActive = idx === 0 ? ' is-active' : '';
    const style = idx === 0 ? 'display: block; opacity: 1;' : 'display: none; opacity: 0;';
    quotesHtml += `    <div class="logo-list-content${isActive}" data-index="${idx}" style="${style}">
      <p class="logo-list-content-wrap">${q}</p>
    </div>\n`;
  });

  quotesHtml += `  </div>
  <button aria-label="Next quote" class="slick-next-custom slick-arrow" type="button">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  </button>
</div>

<div class="logos-carousel" id="hq-logos-carousel">
  <div class="logos-track-wrapper">
`;

  logos.forEach((l, idx) => {
    const isActive = idx === 0 ? ' is-active' : '';
    const style = idx === 0 ? 'opacity: 1; filter: none; transform: scale(1.15);' : 'opacity: 0.45; filter: grayscale(100%); transform: scale(1);';
    quotesHtml += `    <div class="logo-list-image-wrap${isActive}" data-index="${idx}" style="${style}">
      <img alt="${l.alt}" class="lazyloaded" height="auto" loading="lazy" src="${l.src}" width="auto"/>
    </div>\n`;
  });

  quotesHtml += `  </div>
</div>`;

  console.log('=== STEP 2: UPDATE public/thejacketmaker/index.html ===');
  let indexHtml = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

  // Replace quote section inside index.html
  const qStartStr = '<div class="quotes-carousel';
  const qEndStr = '<p class="extra-text-line dark-text">Over 3000 5-Star Customer Reviews</p>';
  const qStart = indexHtml.indexOf(qStartStr);
  const qEnd = indexHtml.indexOf(qEndStr);

  if (qStart !== -1 && qEnd !== -1) {
    indexHtml = indexHtml.slice(0, qStart) + quotesHtml + '\n' + indexHtml.slice(qEnd);
    console.log('Successfully replaced quotes-carousel and logos-carousel in index.html');
  } else {
    console.warn('Could not locate exact quotes section boundaries in index.html');
  }

  // Ensure header logo uses hq-crest-logo.png with brand title
  const logoLinkRegex = /<a class="logo__link"[\s\S]*?<\/a>/;
  const headerLogoReplacement = `<a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon">
    <img alt="HQ Leathercon" class="logo__image" height="56" src="/thejacketmaker/images/hq-crest-logo.png"/>
    <span class="logo__brand-title">HQ LEATHERCON</span>
  </a>`;

  if (indexHtml.match(logoLinkRegex)) {
    indexHtml = indexHtml.replace(logoLinkRegex, headerLogoReplacement);
    console.log('Updated header logo in index.html');
  }

  fs.writeFileSync('public/thejacketmaker/index.html', indexHtml);
  console.log('Saved public/thejacketmaker/index.html');

  console.log('=== STEP 3: UPDATE public/thejacketmaker/js/custom.js ===');
  let customJs = fs.readFileSync('public/thejacketmaker/js/custom.js', 'utf8');
  // Remove slick init on quotes-carousel and logos-carousel
  const slickQuotesRegex = /\$\("\.quotes-carousel"\)\.slick\([\s\S]*?asNavFor:"\.quotes-carousel",arrows:!1,centerPadding:"0",responsive:\[\{breakpoint:768,settings:\{slidesToShow:3\}\}\]\}\),?/;
  if (slickQuotesRegex.test(customJs)) {
    customJs = customJs.replace(slickQuotesRegex, '');
    console.log('Removed slick initialization on quotes-carousel and logos-carousel from custom.js');
  } else {
    console.log('Slick quotes regex did not match directly, checking alternate match');
    // Alternate match
    const qIdx = customJs.indexOf('$(".quotes-carousel").slick');
    const flatlayIdx = customJs.indexOf('$(".flatlayslider").slick');
    if (qIdx !== -1 && flatlayIdx !== -1 && flatlayIdx > qIdx) {
      customJs = customJs.slice(0, qIdx) + customJs.slice(flatlayIdx);
      console.log('Removed slick quotes block by index slice in custom.js');
    }
  }
  fs.writeFileSync('public/thejacketmaker/js/custom.js', customJs);

  console.log('=== STEP 4: UPDATE public/thejacketmaker/js/gallery-controller.js ===');
  let galleryJs = fs.readFileSync('public/thejacketmaker/js/gallery-controller.js', 'utf8');

  // Replace initQuoteSlider with rock-solid independent engine
  const quoteSliderCode = `  // ============================================================
  // 1. AS FEATURED IN QUOTE & LOGO CAROUSEL (ROBUST ENGINE)
  // ============================================================
  function initQuoteSlider() {
    const quotesCarousel = document.querySelector('.quotes-carousel');
    const logosCarousel = document.querySelector('.logos-carousel');
    const prevBtn = document.querySelector('.quotes-carousel .slick-prev-custom');
    const nextBtn = document.querySelector('.quotes-carousel .slick-next-custom');

    if (!quotesCarousel) return;

    // Remove any leftover cloned slides
    quotesCarousel.querySelectorAll('.slick-cloned').forEach(el => el.remove());
    if (logosCarousel) {
      logosCarousel.querySelectorAll('.slick-cloned').forEach(el => el.remove());
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

    if (prevBtn) {
      prevBtn.style.cursor = 'pointer';
      prevBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        showQuote(currentIndex - 1, true);
        startAutoPlay();
      };
    }

    if (nextBtn) {
      nextBtn.style.cursor = 'pointer';
      nextBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        showQuote(currentIndex + 1, true);
        startAutoPlay();
      };
    }

    // Logo click triggers quote jump
    logoSlides.forEach((logo, idx) => {
      logo.style.cursor = 'pointer';
      logo.onclick = function (e) {
        e.preventDefault();
        showQuote(idx, true);
        startAutoPlay();
      };
    });
  }`;

  const jsStart = galleryJs.indexOf('// 1. AS FEATURED IN QUOTE & LOGO CAROUSEL');
  const jsEnd = galleryJs.indexOf('// 2. HOMEPAGE HERO SLIDESHOW');
  if (jsStart !== -1 && jsEnd !== -1) {
    galleryJs = galleryJs.slice(0, jsStart) + quoteSliderCode + '\n\n  // ============================================================\n  ' + galleryJs.slice(jsEnd);
    console.log('Successfully updated initQuoteSlider in gallery-controller.js');
  }
  fs.writeFileSync('public/thejacketmaker/js/gallery-controller.js', galleryJs);

  console.log('=== STEP 5: UPDATE public/thejacketmaker/css/styles.css ===');
  let stylesCss = fs.readFileSync('public/thejacketmaker/css/styles.css', 'utf8');

  // Append new definitive CSS overrides at the very end of styles.css
  const definitiveCss = `

/* ============================================================
   DEFINITIVE HQ LEATHERCON BRANDING & QUOTE SLIDER ENGINE
   ============================================================ */

/* 1. Header & Footer Logo Branding */
.logo__link {
  display: inline-flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  text-align: center !important;
  padding: 4px 0 !important;
}

.logo__image {
  height: 56px !important;
  max-height: 60px !important;
  width: auto !important;
  object-fit: contain !important;
  margin: 0 auto 5px auto !important;
  display: block !important;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.10)) !important;
}

.logo__brand-title {
  font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif !important;
  font-size: 16px !important;
  font-weight: 800 !important;
  letter-spacing: 0.16em !important;
  color: #111111 !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
  line-height: 1 !important;
  display: block !important;
  text-align: center !important;
}

/* 2. As Featured In Quote Carousel */
.section-quote-slider {
  position: relative !important;
  width: 100% !important;
  padding: 44px 0 32px !important;
  background: #ffffff !important;
  overflow: hidden !important;
}

.section-quote-slider h2 {
  font-weight: 400 !important;
  letter-spacing: 5px !important;
  font-size: 14px !important;
  margin-bottom: 2rem !important;
  text-align: center !important;
  color: #666666 !important;
}

.quotes-carousel {
  position: relative !important;
  width: 100% !important;
  max-width: 960px !important;
  margin: 0 auto 24px auto !important;
  padding: 0 60px !important;
  min-height: 110px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  box-sizing: border-box !important;
}

.quotes-carousel .quotes-track-wrapper {
  width: 100% !important;
  max-width: 800px !important;
  margin: 0 auto !important;
  position: relative !important;
  text-align: center !important;
  overflow: hidden !important;
}

.quotes-carousel .logo-list-content {
  width: 100% !important;
  max-width: 800px !important;
  margin: 0 auto !important;
  text-align: center !important;
  box-sizing: border-box !important;
}

.quotes-carousel .logo-list-content-wrap {
  font-size: 22px !important;
  line-height: 1.5 !important;
  font-weight: 500 !important;
  color: #1a1a1a !important;
  margin: 0 auto !important;
  padding: 0 10px !important;
  text-align: center !important;
  display: block !important;
}

.quotes-carousel .slick-prev-custom,
.quotes-carousel .slick-next-custom {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 30 !important;
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.10) !important;
  transition: all 0.2s ease !important;
  outline: none !important;
}

.quotes-carousel .slick-prev-custom {
  left: 6px !important;
}

.quotes-carousel .slick-next-custom {
  right: 6px !important;
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
  height: 20px !important;
  stroke: #111111 !important;
  fill: none !important;
  stroke-width: 2.5px !important;
  pointer-events: none !important;
  transition: stroke 0.2s ease !important;
}

.quotes-carousel .slick-prev-custom:hover svg,
.quotes-carousel .slick-next-custom:hover svg {
  stroke: #ffffff !important;
}

/* 3. Publication Logos Carousel */
.logos-carousel {
  width: 100% !important;
  max-width: 1100px !important;
  margin: 0 auto 2.5rem auto !important;
  overflow: hidden !important;
}

.logos-carousel .logos-track-wrapper {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
  gap: 28px !important;
  margin: 0 auto !important;
}

.logos-carousel .logo-list-image-wrap {
  flex: 0 0 auto !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  padding: 8px 12px !important;
}

.logos-carousel .logo-list-image-wrap img {
  height: 38px !important;
  width: auto !important;
  max-width: 130px !important;
  object-fit: contain !important;
  transition: all 0.3s ease !important;
}

/* 4. Mobile Responsiveness */
@media screen and (max-width: 767px) {
  .logo-area.container {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .logo__image {
    height: 38px !important;
    max-height: 40px !important;
    margin: 0 auto 3px auto !important;
  }
  .logo__brand-title {
    font-size: 12px !important;
    letter-spacing: 0.10em !important;
  }

  .quotes-carousel {
    padding: 0 46px !important;
    min-height: 85px !important;
    margin-bottom: 16px !important;
  }
  .quotes-carousel .logo-list-content-wrap {
    font-size: 15px !important;
    line-height: 1.4 !important;
    padding: 0 !important;
  }
  .quotes-carousel .slick-prev-custom {
    left: 2px !important;
    width: 36px !important;
    height: 36px !important;
  }
  .quotes-carousel .slick-next-custom {
    right: 2px !important;
    width: 36px !important;
    height: 36px !important;
  }

  .logos-carousel .logos-track-wrapper {
    gap: 16px !important;
  }
  .logos-carousel .logo-list-image-wrap img {
    height: 28px !important;
    max-width: 95px !important;
  }
}
`;

  stylesCss += definitiveCss;
  fs.writeFileSync('public/thejacketmaker/css/styles.css', stylesCss);
  console.log('Appended definitive CSS to public/thejacketmaker/css/styles.css');

  console.log('=== ALL FIXES APPLIED SUCCESSFULLY ===');
}

run().catch(console.error);
