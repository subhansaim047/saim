/**
 * HQ Leathercon - Complete Interactive Controller
 * Handles:
 *  1. Featured In Quotes & Logos Carousel (custom prev/next arrows & logo clicks)
 *  2. Homepage Hero Slideshow (prev/next navigation & auto-rotation)
 *  3. Announcement Bar Ticker (prev/next toggle)
 *  4. Mobile Navigation Drawer (hamburger toggle & accordion submenus)
 *  5. Product Gallery Thumbnails & Slick Sync
 *  6. Color Swatches, Size Selectors & Add-to-Cart Feedback
 *  7. Collection Filter Accordions & Instant Search
 *  8. Custom Consultation Form Handling
 */

(function () {
  'use strict';

  // ============================================================
  // 1. AS FEATURED IN QUOTE & LOGO CAROUSEL
  // ============================================================
  function initQuoteSlider() {
    const quotesCarousel = document.querySelector('.quotes-carousel');
    const logosCarousel = document.querySelector('.logos-carousel');
    const prevBtn = document.querySelector('.slick-prev-custom');
    const nextBtn = document.querySelector('.slick-next-custom');

    if (!quotesCarousel) return;

    const quoteSlides = Array.from(quotesCarousel.querySelectorAll('.logo-list-content:not(.slick-cloned)'));
    const logoSlides = logosCarousel ? Array.from(logosCarousel.querySelectorAll('.logo-list-image-wrap:not(.slick-cloned)')) : [];
    const total = quoteSlides.length;
    if (total === 0) return;

    let currentIndex = 0;
    // Find initial active index
    quoteSlides.forEach((s, idx) => {
      if (s.classList.contains('slick-current') || s.classList.contains('slick-active')) {
        currentIndex = idx;
      }
    });

    const qTrack = quotesCarousel.querySelector('.slick-track');
    const qList = quotesCarousel.querySelector('.slick-list');
    const lTrack = logosCarousel ? logosCarousel.querySelector('.slick-track') : null;

    function goToQuote(idx) {
      if (idx < 0) idx = total - 1;
      if (idx >= total) idx = 0;
      currentIndex = idx;

      // Update quote slides
      const allQSlides = quotesCarousel.querySelectorAll('.logo-list-content');
      allQSlides.forEach(slide => {
        const sIdx = parseInt(slide.getAttribute('data-slick-index'), 10);
        if (sIdx === currentIndex) {
          slide.classList.add('slick-current', 'slick-active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('slick-current', 'slick-active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      // Smooth slide track
      if (qTrack && qList) {
        const width = qList.clientWidth || 1360;
        const offset = -(currentIndex + 1) * width;
        qTrack.style.transition = 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)';
        qTrack.style.transform = `translate3d(${offset}px, 0px, 0px)`;
      }

      // Update logos
      if (logosCarousel && lTrack) {
        const allLSlides = logosCarousel.querySelectorAll('.logo-list-image-wrap');
        allLSlides.forEach(logo => {
          const lIdx = parseInt(logo.getAttribute('data-slick-index'), 10);
          if (lIdx === currentIndex) {
            logo.classList.add('slick-current', 'slick-center', 'slick-active');
            logo.setAttribute('aria-hidden', 'false');
            logo.style.opacity = '1';
          } else {
            logo.classList.remove('slick-current', 'slick-center');
            logo.style.opacity = '0.5';
            if (Math.abs(lIdx - currentIndex) <= 2) {
              logo.classList.add('slick-active');
              logo.setAttribute('aria-hidden', 'false');
            } else {
              logo.classList.remove('slick-active');
              logo.setAttribute('aria-hidden', 'true');
            }
          }
        });

        const logoItemWidth = 272;
        const logoOffset = -(currentIndex) * logoItemWidth;
        lTrack.style.transition = 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)';
        lTrack.style.transform = `translate3d(${logoOffset}px, 0px, 0px)`;
      }
    }

    if (prevBtn) {
      prevBtn.style.cursor = 'pointer';
      prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        goToQuote(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.style.cursor = 'pointer';
      nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        goToQuote(currentIndex + 1);
      });
    }

    // Logo click selection
    if (logosCarousel) {
      const allLogos = logosCarousel.querySelectorAll('.logo-list-image-wrap');
      allLogos.forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function () {
          const idx = parseInt(this.getAttribute('data-slick-index'), 10);
          if (!isNaN(idx) && idx >= 0 && idx < total) {
            goToQuote(idx);
          }
        });
      });
    }

    // Auto rotate every 6 seconds, pause on hover
    let timer = setInterval(() => goToQuote(currentIndex + 1), 6000);
    const container = quotesCarousel.closest('.section-quote-slider') || quotesCarousel;
    container.addEventListener('mouseenter', () => clearInterval(timer));
    container.addEventListener('mouseleave', () => {
      clearInterval(timer);
      timer = setInterval(() => goToQuote(currentIndex + 1), 6000);
    });
  }

  // ============================================================
  // 2. HOMEPAGE HERO SLIDESHOW
  // ============================================================
  function initHeroSlider() {
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) return;

    const slides = Array.from(slideshow.querySelectorAll('.slide:not(.slick-cloned)'));
    const total = slides.length;
    if (total <= 1) return;

    let currentIndex = 0;
    slides.forEach((s, idx) => {
      if (s.classList.contains('slick-current') || s.classList.contains('slick-active')) {
        currentIndex = idx;
      }
    });

    const prevBtn = slideshow.querySelector('.slick-prev');
    const nextBtn = slideshow.querySelector('.slick-next');
    const track = slideshow.querySelector('.slick-track');
    const list = slideshow.querySelector('.slick-list');

    function goToSlide(idx) {
      if (idx < 0) idx = total - 1;
      if (idx >= total) idx = 0;
      currentIndex = idx;

      slides.forEach((s, i) => {
        if (i === currentIndex) {
          s.classList.add('slick-current', 'slick-active');
          s.style.opacity = '1';
          s.style.visibility = 'visible';
        } else {
          s.classList.remove('slick-current', 'slick-active');
        }
      });

      if (track && list) {
        const width = list.clientWidth || window.innerWidth;
        track.style.transition = 'transform 500ms ease';
        track.style.transform = `translate3d(-${currentIndex * width}px, 0px, 0px)`;
      }
    }

    if (prevBtn) {
      prevBtn.style.cursor = 'pointer';
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.style.cursor = 'pointer';
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      });
    }

    // Auto rotate every 5s, pause on hover
    let timer = setInterval(() => goToSlide(currentIndex + 1), 5000);
    slideshow.addEventListener('mouseenter', () => clearInterval(timer));
    slideshow.addEventListener('mouseleave', () => {
      clearInterval(timer);
      timer = setInterval(() => goToSlide(currentIndex + 1), 5000);
    });
  }

  // ============================================================
  // 3. ANNOUNCEMENT BAR TICKER
  // ============================================================
  function initAnnouncementBar() {
    const prevBtn = document.querySelector('.announcement-button--previous');
    const nextBtn = document.querySelector('.announcement-button--next');
    const items = Array.from(document.querySelectorAll('.announcement-bar .announcement, .announcement-bar__text'));

    if (items.length <= 1) return;

    let cur = 0;
    function show(idx) {
      if (idx < 0) idx = items.length - 1;
      if (idx >= items.length) idx = 0;
      cur = idx;
      items.forEach((item, i) => {
        item.style.display = i === cur ? 'inline-block' : 'none';
      });
    }

    if (prevBtn) {
      prevBtn.style.cursor = 'pointer';
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        show(cur - 1);
      });
    }

    if (nextBtn) {
      nextBtn.style.cursor = 'pointer';
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        show(cur + 1);
      });
    }

    setInterval(() => show(cur + 1), 4000);
  }

  // ============================================================
  // 4. MOBILE NAVIGATION DRAWER & ACCORDIONS
  // ============================================================
  function initMobileDrawer() {
    const toggles = Array.from(document.querySelectorAll('.mobile-nav-toggle, button.mobile-nav-toggle, [data-action="toggle-drawer"]'));
    const mobileNav = document.querySelector('.mobile-nav, #mobile-nav, .navigation--mobile, .drawer--navigation');

    if (toggles.length > 0 && mobileNav) {
      toggles.forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          const isOpen = mobileNav.classList.contains('is-open') || mobileNav.style.display === 'block';
          if (isOpen) {
            mobileNav.classList.remove('is-open');
            mobileNav.style.display = 'none';
          } else {
            mobileNav.classList.add('is-open');
            mobileNav.style.display = 'block';
          }
        });
      });
    }

    // Mobile navigation accordion submenus
    const mobileColumns = Array.from(document.querySelectorAll('.mobile-nav__sublinks-toggle, .mobile-nav__item--has-sublinks > a'));
    mobileColumns.forEach(link => {
      link.addEventListener('click', function (e) {
        const sub = this.nextElementSibling;
        if (sub && (sub.classList.contains('mobile-nav__sublinks') || sub.tagName === 'UL')) {
          e.preventDefault();
          const isShown = sub.style.display === 'block';
          sub.style.display = isShown ? 'none' : 'block';
        }
      });
    });
  }

  // ============================================================
  // 5. PRODUCT GALLERY THUMBNAILS
  // ============================================================
  function initProductGallery() {
    const $ = window.jQuery;
    const $slideshow = $ ? $('.product-slideshow') : null;
    const thumbLinks = Array.from(document.querySelectorAll('.thumbnails a, .thumbnails .thumbnail'));

    function highlightThumbnail(index) {
      thumbLinks.forEach((t, i) => {
        if (i === index) {
          t.classList.add('thumb--active');
          t.style.outline = '2px solid #000';
          t.style.outlineOffset = '1px';
        } else {
          t.classList.remove('thumb--active');
          t.style.outline = 'none';
        }
      });
    }

    thumbLinks.forEach((link, idx) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        highlightThumbnail(idx);

        if ($ && $slideshow && $slideshow.length && $slideshow.hasClass('slick-initialized')) {
          $slideshow.slick('slickGoTo', idx);
        } else {
          // Vanilla fallback
          const mainImg = document.querySelector('.gallery--layout-carousel-beside .main-image img, .product-slideshow .slide img');
          const thumbImg = this.querySelector('img');
          if (mainImg && thumbImg) {
            mainImg.src = thumbImg.src;
          }
        }
      });
    });

    if ($ && $slideshow && $slideshow.length) {
      $slideshow.on('afterChange', function (event, slick, currentSlide) {
        highlightThumbnail(currentSlide);
      });
      highlightThumbnail(0);
    }
  }

  // ============================================================
  // 6. SWATCHES, SIZES & ADD TO CART
  // ============================================================
  function initProductSwatches() {
    // 1. Color Swatches
    const swatches = Array.from(document.querySelectorAll('.opt-label--swatch, .color-swatch, .swatch-element'));
    swatches.forEach(swatch => {
      swatch.addEventListener('click', function (e) {
        e.preventDefault();
        swatches.forEach(s => s.classList.remove('opt-label--active', 'is-selected'));
        this.classList.add('opt-label--active', 'is-selected');

        const colorName = this.getAttribute('data-swatch') ||
                          this.getAttribute('data-value') ||
                          this.getAttribute('title') ||
                          this.textContent.trim();

        const colorLabel = document.querySelector('.option-selector[data-option="Color"] .option-selector__label-value, .cc-swatches__label-value, .swatch-value-display');
        if (colorLabel && colorName) {
          colorLabel.textContent = colorName;
        }
      });
    });

    // 2. Size Pill Selectors
    const sizePills = Array.from(document.querySelectorAll('.opt-btn, .opt-label, .option-selector__btn'));
    sizePills.forEach(pill => {
      pill.addEventListener('click', function (e) {
        e.preventDefault();
        sizePills.forEach(p => p.classList.remove('opt-btn--active', 'is-selected'));
        this.classList.add('opt-btn--active', 'is-selected');
        const input = this.querySelector('input');
        if (input) input.checked = true;
      });
    });

    // 3. Add to Cart Button Feedback
    const addToCartBtns = Array.from(document.querySelectorAll('.product-form__add-button, [name="add"], .add-to-cart, .quantity-submit-row__submit button, .button--large'));
    addToCartBtns.forEach(addToCartBtn => {
      if (addToCartBtn.textContent.trim().toLowerCase() === 'sold out') {
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.style.background = '#111';
        addToCartBtn.style.color = '#fff';
        addToCartBtn.style.cursor = 'pointer';
      }

      addToCartBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const oldText = this.innerHTML;
        this.innerHTML = '<span>Added to Cart &#10003;</span>';
        this.style.backgroundColor = '#10b981';
        this.style.color = '#ffffff';

        setTimeout(() => {
          this.innerHTML = oldText;
          this.style.backgroundColor = '#111';
          this.style.color = '#ffffff';
        }, 2000);
      });
    });
  }

  // ============================================================
  // 7. COLLECTION FILTER INTERACTIONS
  // ============================================================
  function initCollectionInteractions() {
    const filterHeadings = Array.from(document.querySelectorAll('.filter-group__heading'));
    filterHeadings.forEach(heading => {
      heading.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.nextElementSibling;
        if (target) {
          const isHidden = target.style.display === 'none';
          target.style.display = isHidden ? 'block' : 'none';
        }
      });
    });
  }

  // ============================================================
  // 8. CUSTOM CONSULTATION FORM FEEDBACK
  // ============================================================
  function initConsultationForms() {
    const forms = Array.from(document.querySelectorAll('form[action*="consultation"], form.custom-form, .bespoke-form, form[id*="consultation"]'));
    forms.forEach(form => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Submitted Successfully!';
          submitBtn.style.backgroundColor = '#10b981';
        }
        const notice = document.createElement('div');
        notice.style.padding = '16px';
        notice.style.marginTop = '16px';
        notice.style.backgroundColor = '#ecfdf5';
        notice.style.border = '1px solid #10b981';
        notice.style.borderRadius = '4px';
        notice.style.color = '#065f46';
        notice.style.fontSize = '14px';
        notice.style.lineHeight = '1.5';
        notice.innerHTML = '<strong>Thank you!</strong> Your custom order consultation request has been received. Our bespoke design team will contact you within 24 hours.';
        form.appendChild(notice);
      });
    });
  }

  // ============================================================
  // INITIALIZE EVERYTHING ON DOM READY
  // ============================================================
  function init() {
    initQuoteSlider();
    initHeroSlider();
    initAnnouncementBar();
    initMobileDrawer();
    initProductGallery();
    initProductSwatches();
    initCollectionInteractions();
    initConsultationForms();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
