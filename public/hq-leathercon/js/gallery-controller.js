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

  
  function normalizeNavigationLinks() {
    try {
      const exactMap = {
        'DESIGN YOUR OWN': '/hq-leathercon/products/custom-leather-jacket-builder/index.html',
        'MEN': '/hq-leathercon/pages/men-jackets/index.html',
        'WOMEN': '/hq-leathercon/pages/women-jackets/index.html',
        'CUSTOMIZE': '/hq-leathercon/pages/custom-jackets/index.html',
        'BRAND': '/hq-leathercon/pages/our-story/index.html',
        'CORPORATE GIFTS': '/hq-leathercon/pages/corporate-gifts/index.html',
        'Corporate Gifts': '/hq-leathercon/pages/corporate-gifts/index.html',
        'Luxury Corporate Gifts': '/hq-leathercon/pages/luxury-corporate-gifts/index.html',
        'Employee Gifts': '/hq-leathercon/pages/employee-gift/index.html',
        'Client Gifts': '/hq-leathercon/pages/gifts-for-clients/index.html',
        'Event Gifts': '/hq-leathercon/pages/gifts-for-conferences-events/index.html',
        'GIFTING': '/hq-leathercon/collections/gifts-for-him/index.html',
        'Gifts For Him': '/hq-leathercon/collections/gifts-for-him/index.html',
        'Gifts For Her': '/hq-leathercon/collections/gifts-for-her/index.html',
        'Gift Set': '/hq-leathercon/collections/gift-set/index.html',
        'Leather Gifts': '/hq-leathercon/collections/leather-gifts/index.html',
        'SALE': '/hq-leathercon/collections/clearance-sale/index.html',
        'Sale': '/hq-leathercon/collections/clearance-sale/index.html',
        'Factory Seconds - 40% OFF': '/hq-leathercon/collections/factory-seconds/index.html',
        'Factory Seconds - 40% Off': '/hq-leathercon/collections/factory-seconds/index.html',
        'Leather Bags - 50% OFF': '/hq-leathercon/collections/sale/index.html',
        'Clearance - 50% OFF': '/hq-leathercon/collections/clearance-sale/index.html',
        'Clearance Sale - 50% OFF': '/hq-leathercon/collections/clearance-sale/index.html',
        'Custom Jackets': '/hq-leathercon/pages/custom-jackets/index.html',
        'Custom Leather Jackets': '/hq-leathercon/pages/custom-leather-jackets/index.html',
        'Custom Bomber Jackets': '/hq-leathercon/pages/custom-bomber-jackets/index.html',
        'Custom Varsity Jackets': '/hq-leathercon/pages/custom-varsity-letterman-jackets/index.html',
        'Custom Embroidered Jackets': '/hq-leathercon/pages/custom-embroidered-jackets/index.html',
        'Custom Denim Jackets': '/hq-leathercon/pages/custom-denim-jackets/index.html',
        'Custom Windbreaker Jackets': '/hq-leathercon/pages/custom-windbreaker-jackets/index.html',
        'Custom Trench Coats': '/hq-leathercon/pages/custom-trench-coats/index.html',
        'Custom Motorcycle Jackets': '/hq-leathercon/pages/custom-motorcycle-jackets/index.html',
        'Custom Parka Jackets': '/hq-leathercon/pages/custom-parka-jackets/index.html',
        'Custom Leather Vests': '/hq-leathercon/pages/custom-leather-vests/index.html',
        'Custom Satin Jackets': '/hq-leathercon/pages/custom-satin-jackets/index.html',
        'Custom Suits': '/hq-leathercon/pages/custom-suits/index.html',
        'Custom Bags': '/hq-leathercon/pages/custom-bag/index.html',
        'Custom Leather Bags': '/hq-leathercon/pages/custom-leather-bags/index.html',
        'Custom Handbags': '/hq-leathercon/pages/custom-handbags/index.html',
        'Custom Briefcases': '/hq-leathercon/pages/custom-briefcases/index.html',
        'Custom Tote Bags': '/hq-leathercon/pages/custom-tote-bags/index.html',
        'Custom Backpacks': '/hq-leathercon/pages/custom-backpacks/index.html',
        'Custom Messenger Bags': '/hq-leathercon/pages/custom-messenger-laptop-bags/index.html',
        'Custom Weekender & Duffel Bags': '/hq-leathercon/pages/custom-duffel-weekender-bags/index.html',
        'Custom Portfolio Bags': '/hq-leathercon/pages/custom-portfolio-bags/index.html',
        'Custom Clutch Purses': '/hq-leathercon/pages/custom-clutch-purses/index.html',
        'Custom Shoes': '/hq-leathercon/pages/custom-made-shoes/index.html',
        'Custom Boots': '/hq-leathercon/pages/custom-boots/index.html',
        'Custom Dress Shoes': '/hq-leathercon/pages/custom-dress-shoes/index.html',
        'Custom Leather Shoes': '/hq-leathercon/pages/custom-leather-shoes/index.html',
        'Custom Loafers': '/hq-leathercon/pages/custom-loafers/index.html',
        'Custom Moccasins': '/hq-leathercon/pages/custom-moccasins/index.html',
        'Custom Oxford Shoes': '/hq-leathercon/pages/custom-oxford-shoes/index.html',
        'Custom Leather Goods': '/hq-leathercon/pages/custom-leather-goods/index.html',
        'Custom Leather Wallets': '/hq-leathercon/pages/custom-leather-wallets/index.html',
        'Custom Leather Keychains': '/hq-leathercon/pages/custom-leather-keychains/index.html',
        'Custom Passport Holders': '/hq-leathercon/pages/custom-passport-holders/index.html',
        'Personalized Luggage Tags': '/hq-leathercon/pages/personalized-luggage-tags/index.html',
        'Custom Leather Belts': '/hq-leathercon/pages/custom-leather-belts/index.html',
        'Custom Apparel': '/hq-leathercon/pages/custom-apparel/index.html',
        'Custom Jerseys': '/hq-leathercon/pages/custom-jerseys/index.html',
        'Custom T-Shirts': '/hq-leathercon/pages/custom-tshirts/index.html',
        'Custom Hoodies': '/hq-leathercon/pages/custom-hoodies/index.html',
        'Custom Sweatshirts': '/hq-leathercon/pages/custom-sweatshirts/index.html',
        'Custom Polos': '/hq-leathercon/pages/custom-polo-shirts/index.html',
        'How It Works': '/hq-leathercon/pages/bespoke/index.html',
        'Our Story': '/hq-leathercon/pages/our-story/index.html',
        'Customer Reviews': '/hq-leathercon/pages/reviews/index.html',
        'Press & Mentions': '/hq-leathercon/pages/press/index.html',
        'Celebrity Style': '/hq-leathercon/pages/celebrity-style/index.html',
        "Customers' Gallery": '/hq-leathercon/pages/happy-customers/index.html',
        'Our Bespoke Process': '/hq-leathercon/pages/bespoke/index.html',
        '#HangOnToIt': '/hq-leathercon/pages/hangontoit/index.html',
        '#MadeForMe': '/hq-leathercon/pages/made-for-me/index.html',
        'Affiliate Program': '/hq-leathercon/pages/affiliate-program/index.html',
        'Brand Ambassador Program': '/hq-leathercon/pages/brand-ambassador-program/index.html',
        'Help Center': '/hq-leathercon/pages/help/index.html',
        'Contact Us': '/hq-leathercon/pages/contact-us/index.html',
        'Size Guide': '/hq-leathercon/pages/size-guide/index.html',
        'File a Return': '/hq-leathercon/pages/returns/index.html',
        'Track Order': '/hq-leathercon/pages/track-order/index.html',
        "Men's Outerwear": '/hq-leathercon/pages/men-jackets/index.html',
        "Women's Outerwear": '/hq-leathercon/pages/women-jackets/index.html',
        "Men's Shoes": '/hq-leathercon/pages/eviternity/index.html',
        'Bags & Accessories': '/hq-leathercon/pages/trucarry/index.html',
        'Cyber Monday Sale': '/hq-leathercon/pages/black-friday-jacket-deals/index.html',
        'Fur & Shearling': '/hq-leathercon/collections/mens-fur-shearling-jackets/index.html',
        'Puffer Jackets': '/hq-leathercon/collections/mens-leather-puffer-jackets/index.html',
        'Hooded Leather Jackets': '/hq-leathercon/collections/mens-leather-jackets-hood/index.html',
        'Best Seller': '/hq-leathercon/collections/mens-best-sellers/index.html',
        'Best Sellers': '/hq-leathercon/collections/best-leather-jackets-women/index.html',
        'Winter Jackets': '/hq-leathercon/collections/mens-winter-jackets/index.html',
        'Tech & Fabric Jackets': '/hq-leathercon/collections/mens-windbreaker-jackets/index.html',
        'Summer Jackets': '/hq-leathercon/collections/mens-summer-jackets/index.html',
        'Denim Jackets': '/hq-leathercon/collections/mens-denim-jackets/index.html',
        'Waxed Canvas Jackets': '/hq-leathercon/collections/mens-waxed-canvas-jackets/index.html',
        'Puffer Vests': '/hq-leathercon/collections/mens-puffer-vests/index.html',
        'Windbreaker & Puffers': '/hq-leathercon/collections/mens-puffer-jackets/index.html',
        'Lightweight Jackets': '/hq-leathercon/collections/mens-lightweight-jackets/index.html',
        'Soft Shell Jackets': '/hq-leathercon/collections/mens-soft-shell-jackets/index.html',
        'Down Jacket': '/hq-leathercon/products/exton-black-hooded-down-puffer-jacket/index.html',
        'Down Jackets': '/hq-leathercon/collections/mens-down-jackets/index.html',
        'Wool Coats & Jackets': '/hq-leathercon/collections/mens-wool-coats-jackets/index.html',
        'Fur & Shearling Coats': '/hq-leathercon/collections/mens-fur-shearling-coats/index.html',
        'Leather Dusters': '/hq-leathercon/collections/mens-leather-dusters/index.html',
        'Shoes': '/hq-leathercon/pages/eviternity/index.html',
        'Leather Shoes': '/hq-leathercon/collections/mens-leather-shoes/index.html',
        'Leather Loafers': '/hq-leathercon/collections/mens-leather-loafers/index.html',
        'Dress Shoes': '/hq-leathercon/collections/mens-dress-shoes/index.html',
        'Casual Shoes': '/hq-leathercon/collections/mens-casual-shoes/index.html',
        'Leather Boots': '/hq-leathercon/collections/mens-leather-boots/index.html',
        'Leather Sneakers': '/hq-leathercon/collections/mens-leather-sneakers/index.html',
        'Vintage Leather Bags': '/hq-leathercon/collections/vintage-leather-bags/index.html',
        'Laptop Bags': '/hq-leathercon/collections/laptop-leather-bags/index.html',
        'Travel Bags': '/hq-leathercon/collections/leather-travel-bags/index.html',
        'Business Bags': '/hq-leathercon/collections/leather-business-bags/index.html',
        'Leather Backpacks': '/hq-leathercon/collections/leather-backpacks/index.html',
        'Leather Wallets': '/hq-leathercon/collections/leather-wallets/index.html',
        'Leather Belts': '/hq-leathercon/collections/mens-leather-belts/index.html',
        'Leather Accessories': '/hq-leathercon/collections/leather-gifts/index.html',
        'Plus Size Leather Jackets': '/hq-leathercon/pages/women-plus-size-leather-jackets/index.html',
        'New Arrivals': '/hq-leathercon/collections/womens-new-arrival/index.html',
        'Leather Trench Coats': '/hq-leathercon/collections/women-leather-trench-coats/index.html',
        'Shearling Jackets & Coats': '/hq-leathercon/collections/womens-shearling-jackets/index.html',
        'Shearling Jackets & coats': '/hq-leathercon/collections/womens-shearling-jackets/index.html',
        'Hobo Bags': '/hq-leathercon/collections/womens-hobo-bags/index.html',
        'Tote Bags': '/hq-leathercon/collections/leather-tote-bags/index.html',
        'Crossbody Bags': '/hq-leathercon/collections/leather-crossbody-bags/index.html'
      };

      const navLinks = document.querySelectorAll('header a[href], .navigation a[href], #shopify-section-header a[href], footer a[href], #shopify-section-footer a[href]');
      navLinks.forEach(a => {
        const href = (a.getAttribute('href') || '').trim();
        if (!href || href === '#' || href.startsWith('#') || href.startsWith('http')) return;
        const text = (a.textContent || '').replace(/\s+/g, ' ').trim();
        if (!text || text === 'HQ LEATHERCON') return;

        if (exactMap[text]) {
          a.setAttribute('href', exactMap[text]);
          return;
        }

        // Check if inside WOMEN section
        let isWomen = href.includes('women');
        let p = a.parentElement;
        while (p && p.tagName !== 'HEADER') {
          if (p.matches && p.matches('li.navigation__item--with-children, li.mobile-navigation__item')) {
            const topLink = p.querySelector(':scope > a, :scope > .mobile-navigation__link');
            if (topLink && /women/i.test(topLink.textContent || '')) {
              isWomen = true;
            }
          }
          p = p.parentElement;
        }

        const genderMap = {
          'Jackets': isWomen ? '/hq-leathercon/collections/womens-leather-jackets/index.html' : '/hq-leathercon/collections/mens-leather-jackets/index.html',
          'Leather Jackets': isWomen ? '/hq-leathercon/collections/womens-leather-jackets/index.html' : '/hq-leathercon/collections/mens-leather-jackets/index.html',
          'All Leather Jackets': isWomen ? '/hq-leathercon/collections/womens-leather-jackets/index.html' : '/hq-leathercon/collections/mens-leather-jackets/index.html',
          'Bomber Jackets': isWomen ? '/hq-leathercon/collections/women-bomber-jackets/index.html' : '/hq-leathercon/collections/mens-bomber-jackets/index.html',
          'Biker Jackets': isWomen ? '/hq-leathercon/collections/womens-biker-leather-jackets/index.html' : '/hq-leathercon/collections/mens-biker-leather-jackets/index.html',
          'Suede Jackets': isWomen ? '/hq-leathercon/collections/womens-suede-jackets/index.html' : '/hq-leathercon/collections/mens-suede-jackets/index.html',
          'Varsity Jackets': isWomen ? '/hq-leathercon/collections/women-varsity-jackets/index.html' : '/hq-leathercon/collections/mens-varsity-jacket/index.html',
          'Leather Vests': isWomen ? '/hq-leathercon/collections/women-leather-vests/index.html' : '/hq-leathercon/collections/mens-leather-vests/index.html',
          'Leather Blazers': isWomen ? '/hq-leathercon/collections/women-blazers/index.html' : '/hq-leathercon/collections/mens-blazers/index.html',
          'Aviator Jackets': isWomen ? '/hq-leathercon/collections/womens-aviator-jackets/index.html' : '/hq-leathercon/collections/mens-aviator-jackets/index.html',
          'Coats': isWomen ? '/hq-leathercon/collections/women-winter-coats/index.html' : '/hq-leathercon/collections/mens-winter-coats/index.html',
          'Leather Coats': isWomen ? '/hq-leathercon/collections/women-leather-coats/index.html' : '/hq-leathercon/collections/mens-leather-coats/index.html',
          'Trench & Winter Coats': isWomen ? '/hq-leathercon/collections/women-winter-coats/index.html' : '/hq-leathercon/collections/mens-winter-coats/index.html',
          'Bags': isWomen ? '/hq-leathercon/collections/womens-leather-bags/index.html' : '/hq-leathercon/pages/trucarry/index.html',
          'Leather Bags': isWomen ? '/hq-leathercon/collections/womens-leather-bags/index.html' : '/hq-leathercon/collections/leather-bags/index.html'
        };
        if (genderMap[text]) {
          a.setAttribute('href', genderMap[text]);
        }
      });
    } catch (e) {}
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

  function initCustomBuilderOptions() {
    const container = document.getElementById('avpoptions-container__v2');
    if (!container) return;

    const options = Array.from(container.querySelectorAll(':scope > .avp-option'));

    function recalculateBuilderPrice() {
      const priceEl = document.querySelector('.price-container .current-price');
      if (!priceEl) return;
      const basePrice = parseFloat(priceEl.getAttribute('data-base-price') || '56000');
      let addonTotal = 0;

      container.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked').forEach(inp => {
        const optionBox = inp.closest('.avp-option');
        if (optionBox && optionBox.style.display === 'none') return;
        addonTotal += parseFloat(inp.getAttribute('data-addon-pkr') || '0');
      });

      container.querySelectorAll('select').forEach(sel => {
        const optionBox = sel.closest('.avp-option');
        if (optionBox && optionBox.style.display === 'none') return;
        const opt = sel.options[sel.selectedIndex];
        if (opt) {
          addonTotal += parseFloat(opt.getAttribute('data-addon-pkr') || '0');
        }
      });

      const finalPrice = Math.max(0, basePrice + addonTotal);
      priceEl.textContent = 'Rs.' + finalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' PKR';
    }

    function updateConditionalFields() {
      // 1: Base Style file upload
      const baseChecked = options[0] ? options[0].querySelector('input[type="radio"]:checked') : null;
      if (options[1]) {
        const showFile1 = baseChecked && baseChecked.value && baseChecked.value.toLowerCase().includes("design isn't here");
        options[1].style.setProperty('display', showFile1 ? 'block' : 'none', 'important');
        options[1].style.opacity = showFile1 ? '1' : '0';
      }
      // 7: Inner Lining custom file upload
      const liningChecked = options[6] ? options[6].querySelector('input[type="radio"]:checked') : null;
      if (options[7]) {
        const showFile7 = liningChecked && liningChecked.value && liningChecked.value.toLowerCase().includes('custom');
        options[7].style.setProperty('display', showFile7 ? 'block' : 'none', 'important');
        options[7].style.opacity = showFile7 ? '1' : '0';
      }
      // 9: Artwork/Logo Embroidery file upload
      const artChecked = options[8] ? options[8].querySelectorAll('input[type="checkbox"]:checked').length > 0 : false;
      if (options[9]) {
        options[9].style.setProperty('display', artChecked ? 'block' : 'none', 'important');
        options[9].style.opacity = artChecked ? '1' : '0';
      }
      // 11 & 12: Personalization Embroidery text & font
      const persChecked = options[10] ? options[10].querySelector('input[type="radio"]:checked') : null;
      const showPers = persChecked && persChecked.value && persChecked.value.toLowerCase().includes('embroidery');
      [11, 12].forEach(idx => {
        if (options[idx]) {
          options[idx].style.setProperty('display', showPers ? 'block' : 'none', 'important');
          options[idx].style.opacity = showPers ? '1' : '0';
        }
      });
    }

    // Swatch wrappers (radio & checkbox)
    container.querySelectorAll('.apo-swatch-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', function(e) {
        e.preventDefault();
        const inp = wrapper.querySelector('input');
        if (!inp) return;
        const optGroup = wrapper.closest('.avp-option');
        if (inp.type === 'radio') {
          if (optGroup) {
            optGroup.querySelectorAll('.apo-swatch-wrapper').forEach(w => w.classList.remove('apo-swatch-selected'));
            optGroup.querySelectorAll('input[type="radio"]').forEach(r => { r.checked = false; });
          }
          inp.checked = true;
          wrapper.classList.add('apo-swatch-selected');
        } else if (inp.type === 'checkbox') {
          inp.checked = !inp.checked;
          wrapper.classList.toggle('apo-swatch-selected', inp.checked);
        }
        updateConditionalFields();
        recalculateBuilderPrice();
      });
    });

    // Custom swatch dropdowns (Leather Shade & Hardware)
    container.querySelectorAll('.option-avis-dropdown-inner').forEach(dropInner => {
      const trigger = dropInner.querySelector('.option-avis-swatch-drop-down');
      const menu = dropInner.querySelector('.option-avis-dropdown-values');
      if (!trigger || !menu) return;

      trigger.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = menu.style.display === 'block';
        container.querySelectorAll('.option-avis-dropdown-values').forEach(m => { m.style.display = 'none'; });
        menu.style.display = isOpen ? 'none' : 'block';
      });

      dropInner.querySelectorAll('.option-avis-value').forEach(li => {
        li.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const inp = li.querySelector('input[type="radio"]');
          if (inp) {
            dropInner.querySelectorAll('input[type="radio"]').forEach(r => { r.checked = false; });
            inp.checked = true;
          }
          const srcBox = li.querySelector('.option-avis-swatch-value-box');
          const srcTitle = li.querySelector('.choice-list-variatnt-title');
          const destBox = trigger.querySelector('.option-avis-swatch-value-box');
          const destTitle = trigger.querySelector('.choice-list-variatnt-title');
          if (srcBox && destBox) {
            destBox.setAttribute('style', srcBox.getAttribute('style') || '');
          }
          if (srcTitle && destTitle) {
            destTitle.innerHTML = srcTitle.innerHTML;
          }
          menu.style.display = 'none';
          recalculateBuilderPrice();
        });
      });
    });

    document.addEventListener('click', function() {
      container.querySelectorAll('.option-avis-dropdown-values').forEach(m => { m.style.display = 'none'; });
    });

    container.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', recalculateBuilderPrice);
    });

    updateConditionalFields();
    recalculateBuilderPrice();
  }

  function init() {
    normalizeNavigationLinks();
    cleanLiquidTokens();
    initDesktopMegaMenu();
    initQuoteSlider();
    initHeroSlider();
    initAnnouncementBar();
    initMobileDrawer();
    initProductGallery();
    initProductSwatches();
    initCustomBuilderOptions();
    initCollectionInteractions();
    initConsultationForms();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
