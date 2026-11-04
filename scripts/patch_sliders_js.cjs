const fs = require('fs');

const jsPath = 'public/thejacketmaker/js/gallery-controller.js';
let js = fs.readFileSync(jsPath, 'utf8');

// 1. Rewrite initQuoteSlider
const newQuoteSlider = `
  function initQuoteSlider() {
    const quotesCarousel = document.querySelector('.quotes-carousel');
    const logosCarousel = document.querySelector('.logos-carousel');
    const prevBtn = document.querySelector('.slick-prev-custom');
    const nextBtn = document.querySelector('.slick-next-custom');

    if (!quotesCarousel) return;

    // Remove cloned slides that cause track offset bugs
    quotesCarousel.querySelectorAll('.slick-cloned').forEach(el => el.remove());
    if (logosCarousel) {
      logosCarousel.querySelectorAll('.slick-cloned').forEach(el => el.remove());
    }

    const quoteSlides = Array.from(quotesCarousel.querySelectorAll('.logo-list-content'));
    const logoSlides = logosCarousel ? Array.from(logosCarousel.querySelectorAll('.logo-list-image-wrap')) : [];
    const total = quoteSlides.length;
    if (total === 0) return;

    let currentIndex = 0;

    const qTrack = quotesCarousel.querySelector('.slick-track');
    if (qTrack) {
      qTrack.style.width = '100%';
      qTrack.style.transform = 'none';
      qTrack.style.display = 'flex';
      qTrack.style.justifyContent = 'center';
      qTrack.style.alignItems = 'center';
      qTrack.style.margin = '0 auto';
    }

    // Reset styles on all quote slides
    quoteSlides.forEach((slide) => {
      slide.style.width = '100%';
      slide.style.maxWidth = '850px';
      slide.style.margin = '0 auto';
      slide.style.textAlign = 'center';
      slide.style.position = 'relative';
      slide.style.left = '0';
      slide.style.right = '0';
      slide.style.transition = 'opacity 0.4s ease';
    });

    function showQuote(idx) {
      if (idx < 0) idx = total - 1;
      if (idx >= total) idx = 0;
      currentIndex = idx;

      quoteSlides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.classList.add('slick-current', 'slick-active');
          slide.style.display = 'block';
          slide.style.opacity = '1';
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('slick-current', 'slick-active');
          slide.style.display = 'none';
          slide.style.opacity = '0';
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      // Synchronize logos below
      if (logoSlides.length > 0) {
        logoSlides.forEach((logo, i) => {
          if (i === currentIndex) {
            logo.classList.add('slick-current', 'slick-center', 'slick-active');
            logo.style.opacity = '1';
            logo.style.filter = 'none';
            logo.style.transform = 'scale(1.15)';
            logo.style.transition = 'all 0.3s ease';
          } else {
            logo.classList.remove('slick-current', 'slick-center', 'slick-active');
            logo.style.opacity = '0.45';
            logo.style.filter = 'grayscale(100%)';
            logo.style.transform = 'scale(1)';
          }
        });
      }
    }

    // Initialize with Quote 0 centered
    showQuote(0);

    if (prevBtn) {
      prevBtn.style.cursor = 'pointer';
      prevBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        showQuote(currentIndex - 1);
      };
    }

    if (nextBtn) {
      nextBtn.style.cursor = 'pointer';
      nextBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        showQuote(currentIndex + 1);
      };
    }

    // Logo click triggers quote jump
    logoSlides.forEach((logo, idx) => {
      logo.style.cursor = 'pointer';
      logo.onclick = function (e) {
        e.preventDefault();
        showQuote(idx);
      };
    });
  }`;

// 2. Rewrite initHeroSlider
const newHeroSlider = `
  function initHeroSlider() {
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) return;

    const slides = Array.from(slideshow.querySelectorAll('.slide:not(.slick-cloned)'));
    const total = slides.length;
    if (total <= 1) return;

    let currentIndex = 0;

    // Reset track and slides
    const track = slideshow.querySelector('.slick-track');
    if (track) {
      track.style.width = '100%';
      track.style.transform = 'none';
      track.style.position = 'relative';
      track.style.display = 'block';
    }

    slides.forEach((s) => {
      s.style.width = '100%';
      s.style.left = '0px';
      s.style.top = '0px';
      s.style.right = '0px';
      s.style.bottom = '0px';
    });

    function showSlide(idx) {
      if (idx < 0) idx = total - 1;
      if (idx >= total) idx = 0;
      currentIndex = idx;

      slides.forEach((s, i) => {
        if (i === currentIndex) {
          s.classList.add('slick-current', 'slick-active');
          s.style.display = 'block';
          s.style.opacity = '1';
          s.style.visibility = 'visible';
          s.style.zIndex = '5';
          s.setAttribute('aria-hidden', 'false');
        } else {
          s.classList.remove('slick-current', 'slick-active');
          s.style.display = 'none';
          s.style.opacity = '0';
          s.style.visibility = 'hidden';
          s.style.zIndex = '1';
          s.setAttribute('aria-hidden', 'true');
        }
      });
    }

    // Initialize slide 0 cleanly
    showSlide(0);

    const prevBtn = slideshow.querySelector('.slick-prev');
    const nextBtn = slideshow.querySelector('.slick-next');

    if (prevBtn) {
      prevBtn.style.cursor = 'pointer';
      prevBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        showSlide(currentIndex - 1);
      };
    }

    if (nextBtn) {
      nextBtn.style.cursor = 'pointer';
      nextBtn.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        showSlide(currentIndex + 1);
      };
    }

    // Auto-advance every 5 seconds
    let timer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);

    slideshow.onmouseenter = () => clearInterval(timer);
    slideshow.onmouseleave = () => {
      clearInterval(timer);
      timer = setInterval(() => showSlide(currentIndex + 1), 5000);
    };
  }`;

// Replace initQuoteSlider
const qRegex = /function initQuoteSlider\(\) \{[\s\S]*?\n  \}/;
js = js.replace(qRegex, newQuoteSlider.trim());

// Replace initHeroSlider
const hRegex = /function initHeroSlider\(\) \{[\s\S]*?\n  \}/;
js = js.replace(hRegex, newHeroSlider.trim());

fs.writeFileSync(jsPath, js, 'utf8');
console.log('Successfully updated gallery-controller.js with rock-solid Hero Slider & Quote Slider!');
