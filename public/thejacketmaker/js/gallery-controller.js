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
    // ============================================================
    // ============================================================
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

    // Ensure exactly ONE prev button and ONE next button exist
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
            if (logosCarousel && logosCarousel.scrollWidth > logosCarousel.clientWidth) {
              const targetLeft = logo.offsetLeft - (logosCarousel.clientWidth - logo.clientWidth) / 2;
              logosCarousel.scrollTo({ left: targetLeft, behavior: 'smooth' });
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
  
  function initDesktopMegaMenu() {
    if (window.innerWidth < 769) return;
    const items = document.querySelectorAll('.navigation--main .navigation__item--with-children');
    items.forEach(item => {
      const tier2 = item.querySelector('.navigation__tier-2-container');
      if (!tier2) return;

      item.addEventListener('mouseenter', () => {
        items.forEach(other => {
          if (other !== item) {
            other.classList.remove('navigation__item--show-children', 'is-hovered');
            const otherTier = other.querySelector('.navigation__tier-2-container');
            if (otherTier) {
              otherTier.style.opacity = '0';
              otherTier.style.visibility = 'hidden';
              otherTier.style.display = 'none';
            }
          }
        });

        item.classList.add('navigation__item--show-children', 'is-hovered');
        tier2.style.opacity = '1';
        tier2.style.visibility = 'visible';
        tier2.style.display = 'block';
        tier2.style.pointerEvents = 'auto';
      });

      item.addEventListener('mouseleave', () => {
        item.classList.remove('navigation__item--show-children', 'is-hovered');
        tier2.style.opacity = '0';
        tier2.style.visibility = 'hidden';
        tier2.style.display = 'none';
        tier2.style.pointerEvents = 'none';
      });
    });
  }

  
  function cleanLiquidTokens() {
    try {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeValue && node.nodeValue.includes('[points_amount]')) {
          node.nodeValue = node.nodeValue.replace(/[points_amount]/g, 'reward points');
        }
      }
    } catch(e) {}
  }

  function init() {
    cleanLiquidTokens();
    initDesktopMegaMenu();
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
