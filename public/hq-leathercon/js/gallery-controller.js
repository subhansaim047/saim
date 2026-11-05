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
  // 4. MOBILE NAVIGATION DRAWER & ACCORDIONS (MATCHES LAPTOP FOOTER + BELTS & WALLETS)
  // ============================================================
  function initMobileDrawer() {
    try {
      // Remove legacy broken mobile drawer template so theme.js doesn't overlay a blank white panel
      document.querySelectorAll('.mobile-navigation-drawer-template, .mobile-navigation-drawer').forEach(el => el.remove());

      let drawerOverlay = document.getElementById('hq-mobile-drawer-overlay');
      if (!drawerOverlay) {
        drawerOverlay = document.createElement('div');
        drawerOverlay.id = 'hq-mobile-drawer-overlay';
        drawerOverlay.style.cssText = 'display:none; position:fixed; inset:0; z-index:99999990; background:rgba(15,23,42,0.55); backdrop-filter:blur(2px);';
        drawerOverlay.innerHTML = `
          <nav id="hq-mobile-drawer" aria-label="Mobile Navigation" style="width:86%; max-width:330px; height:100%; background:#ffffff; color:#111111; display:flex; flex-direction:column; box-shadow:6px 0 28px rgba(0,0,0,0.25); overflow-y:auto; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
            <div style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; border-bottom:1px solid #e5e7eb; background:#fafafa;">
              <a href="/hq-leathercon/index.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:#111;">
                <img src="/hq-leathercon/images/hq-crest-logo.png" alt="HQ Leathercon" style="height:30px; width:auto;" />
                <span style="font-family:'Cinzel',Georgia,serif; font-size:13px; font-weight:700; letter-spacing:0.14em; color:#111;">HQ LEATHERCON</span>
              </a>
              <button type="button" id="hq-mobile-drawer-close" aria-label="Close menu" style="background:none; border:none; width:34px; height:34px; font-size:24px; line-height:1; color:#111; cursor:pointer; display:flex; align-items:center; justify-content:center;">&times;</button>
            </div>

            <ul style="list-style:none; margin:0; padding:0; flex:1;">
              <!-- MEN (Shop) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>MEN</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 28px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/men-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Men's Outerwear</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">All Leather Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-biker-leather-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Biker Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-bomber-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Bomber Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-suede-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Suede Jackets</a></li>
                  <li><a href="/hq-leathercon/pages/eviternity/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Men's Shoes</a></li>
                  <li><a href="/hq-leathercon/pages/trucarry/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Bags &amp; Accessories</a></li>
                </ul>
              </li>

              <!-- WOMEN (Shop) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>WOMEN</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 28px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/women-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Women's Outerwear</a></li>
                  <li><a href="/hq-leathercon/collections/womens-leather-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">All Leather Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/womens-biker-leather-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Biker Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/women-bomber-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Bomber Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/womens-suede-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Suede Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/womens-leather-bags/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Women's Leather Bags</a></li>
                </ul>
              </li>

              <!-- CUSTOMIZE (Matches Laptop Footer Bespoke: Custom Jackets, Custom Shoes, Custom Bags) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>CUSTOMIZE</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 28px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/custom-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Custom Jackets</a></li>
                  <li><a href="/hq-leathercon/pages/custom-made-shoes/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Custom Shoes</a></li>
                  <li><a href="/hq-leathercon/pages/custom-bag/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Custom Bags</a></li>
                </ul>
              </li>

              <!-- BRAND (Matches Laptop Footer: ONLY Our Story) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>BRAND</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 28px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/our-story/index.html" style="display:block; padding:7px 14px 7px 0; color:#111827; text-decoration:none; font-size:13.5px; font-weight:600;">Our Story</a></li>
                </ul>
              </li>

              <!-- SALE -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#b91c1c;">
                  <span>SALE</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 28px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/black-friday-jacket-deals/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Cyber Monday Sale</a></li>
                  <li><a href="/hq-leathercon/collections/factory-seconds/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Factory Seconds - 40% OFF</a></li>
                  <li><a href="/hq-leathercon/collections/sale/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Leather Bags - 50% OFF</a></li>
                </ul>
              </li>

              <!-- HELP (Matches Laptop Footer Help: Contact Us, Privacy Policy, Terms of Service) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>HELP</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 28px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/contact-us/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Contact Us</a></li>
                  <li><a href="/hq-leathercon/policies/privacy-policy/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Privacy Policy</a></li>
                  <li><a href="/hq-leathercon/policies/terms-of-service/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Terms of Service</a></li>
                </ul>
              </li>

              <!-- DESIGN YOUR OWN -->
              <li style="border-bottom:1px solid #f1f5f9;">
                <a href="/hq-leathercon/products/custom-leather-jacket-builder/index.html" style="display:block; padding:14px 18px; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111; text-decoration:none;">DESIGN YOUR OWN</a>
              </li>

              <!-- BELTS & WALLETS BUTTON (After all items in mobile menu) -->
              <li class="hq-mob-item" style="padding:14px 16px;">
                <div class="hq-mob-trigger" id="hq-mob-belts-wallets-btn" style="display:flex; align-items:center; justify-content:space-between; padding:12px 16px; background:#111111; color:#ffffff; border-radius:6px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; box-shadow:0 4px 12px rgba(0,0,0,0.15);">
                  <span>BELTS &amp; WALLETS</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; color:#ffffff;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:6px 0 0 0; padding:8px 14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px;">
                  <li><a href="/hq-leathercon/collections/mens-leather-belts/index.html" style="display:block; padding:8px 0; color:#0f172a; text-decoration:none; font-size:13.5px; font-weight:600; border-bottom:1px solid #e2e8f0;">Leather Belts</a></li>
                  <li><a href="/hq-leathercon/collections/leather-wallets/index.html" style="display:block; padding:8px 0; color:#0f172a; text-decoration:none; font-size:13.5px; font-weight:600; border-bottom:1px solid #e2e8f0;">Leather Wallets</a></li>
                  <li><a href="/hq-leathercon/pages/custom-leather-belts/index.html" style="display:block; padding:8px 0; color:#334155; text-decoration:none; font-size:13px; border-bottom:1px solid #e2e8f0;">Custom Leather Belts</a></li>
                  <li><a href="/hq-leathercon/pages/custom-leather-wallets/index.html" style="display:block; padding:8px 0; color:#334155; text-decoration:none; font-size:13px;">Custom Leather Wallets</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        `;
        document.body.appendChild(drawerOverlay);
      }

      const closeBtn = document.getElementById('hq-mobile-drawer-close');
      function openDrawer(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        document.body.classList.remove('mobile-nav-open');
        drawerOverlay.style.display = 'block';
      }
      function closeDrawer() {
        drawerOverlay.style.display = 'none';
      }

      document.querySelectorAll('.mobile-nav-toggle, button.mobile-nav-toggle, [data-action="toggle-drawer"]').forEach(btn => {
        btn.addEventListener('click', openDrawer, true);
      });

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      drawerOverlay.addEventListener('click', function (e) {
        if (e.target === drawerOverlay) closeDrawer();
      });

      drawerOverlay.querySelectorAll('.hq-mob-trigger').forEach(trig => {
        trig.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const sub = this.nextElementSibling;
          const chev = this.querySelector('.hq-mob-chevron');
          if (!sub) return;
          const isOpen = sub.style.display === 'block';
          sub.style.display = isOpen ? 'none' : 'block';
          if (chev) chev.textContent = isOpen ? '+' : '−';
        });
      });
    } catch (e) {}
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
      const banner = document.getElementById('saimdev-demo-banner');
      if (banner) {
        banner.style.setProperty('padding', '4px 12px', 'important');
        banner.style.setProperty('border-bottom', '1px solid rgba(0, 229, 255, 0.3)', 'important');
        banner.style.setProperty('flex-wrap', 'nowrap', 'important');
        banner.style.setProperty('min-height', '28px', 'important');
        banner.querySelectorAll('span').forEach(sp => {
          if (sp.textContent && sp.textContent.includes('1:1 Interactive')) {
            sp.textContent = 'HQ Leathercon';
          }
        });
      }
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

  // ============================================================
  // 9. CLEAN HEADER, BRAND="OUR STORY" ONLY, & BELTS/WALLETS NAV
  // ============================================================
  function enforceCleanHeaderAndMobileNav() {
    try {
      // Remove Account & Cart buttons
      document.querySelectorAll('.header-account-link, .logo-area__right a[href*="/account"], .mobile-navigation-drawer a[href*="/account"], a.cart-link, .logo-area__right .show-search-link').forEach(el => el.remove());

      // Ensure .logo-area has balanced 3-column grid (left, centered logo, right spacer)
      document.querySelectorAll('.logo-area').forEach(area => {
        if (!area.querySelector('.logo-area__right')) {
          const rightSpacer = document.createElement('div');
          rightSpacer.className = 'logo-area__right';
          area.appendChild(rightSpacer);
        }
      });

      // Clean Desktop & Mobile Nav Tier 1
      const navLists = document.querySelectorAll('.navigation--main .navigation__tier-1, .mobile-navigation-drawer .navigation__tier-1');
      navLists.forEach(ul => {
        const isMobile = !!ul.closest('.mobile-navigation-drawer');
        Array.from(ul.children).forEach(li => {
          const topLink = li.querySelector(':scope > a.navigation__link');
          if (!topLink) return;
          const label = (topLink.textContent || '').trim().toUpperCase();

          // Remove Corporate Gifts & Gifting
          if (label === 'CORPORATE GIFTS' || label === 'GIFTING') {
            li.remove();
            return;
          }

          // Under BRAND: keep ONLY "Our Story"
          if (label === 'BRAND') {
            const tier2 = li.querySelector('.navigation__tier-2');
            if (tier2) {
              tier2.innerHTML = '<li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/our-story/index.html">Our Story</a></li>';
            }
          }

          // Under CUSTOMIZE: match Laptop Footer Bespoke (Custom Jackets, Custom Shoes, Custom Bags)
          if (label === 'CUSTOMIZE') {
            li.classList.remove('navigation__item--with-mega-menu');
            li.classList.add('navigation__item--with-small-menu');
            const tier2 = li.querySelector('.navigation__tier-2');
            if (tier2) {
              tier2.className = 'navigation__tier-2';
              tier2.innerHTML = `
                <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/custom-jackets/index.html">Custom Jackets</a></li>
                <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/custom-made-shoes/index.html">Custom Shoes</a></li>
                <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/custom-bag/index.html">Custom Bags</a></li>
              `;
            }
          }
        });

        // Add BELTS & WALLETS button if not already present
        const hasBeltsWallets = Array.from(ul.children).some(li => /BELTS\s*&\s*WALLETS/i.test(li.textContent || ''));
        if (!hasBeltsWallets) {
          const bwLi = document.createElement('li');
          bwLi.className = 'navigation__item navigation__item--with-children navigation__item--with-small-menu';
          const tierId = isMobile ? 'NavigationTier2-BeltsWalletsMob' : 'NavigationTier2-BeltsWalletsDesk';
          bwLi.innerHTML = `
            <a aria-controls="${tierId}" aria-expanded="false" aria-haspopup="true" class="navigation__link" href="/hq-leathercon/collections/leather-wallets/index.html">BELTS &amp; WALLETS</a>
            <a class="navigation__children-toggle" href="#"><svg class="feather feather-chevron-down" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" viewBox="0 0 24 24" width="24"><title>Toggle menu</title><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="navigation__tier-2-container navigation__child-tier" id="${tierId}">
              <div class="container">
                <ul class="navigation__tier-2">
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/collections/mens-leather-belts/index.html">Leather Belts</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/collections/leather-wallets/index.html">Leather Wallets</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/custom-leather-belts/index.html">Custom Leather Belts</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/custom-leather-wallets/index.html">Custom Leather Wallets</a></li>
                </ul>
              </div>
            </div>
          `;
          ul.appendChild(bwLi);
        }
      });
    } catch (e) {}
  }

  // ============================================================
  // 10. REPLACE ADD TO CART WITH WHATSAPP ORDER / INQUIRY
  // ============================================================
  function initWhatsAppOrderButtons() {
    try {
      const waSvg = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.448 5.601-1.469c1.908 1.213 4.168 1.922 6.607 1.922 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>';

      function buildWhatsAppUrl() {
        const titleEl = document.querySelector('h1.title, .product-detail h1, h1');
        const priceEl = document.querySelector('.price-container .current-price, .product-price .current-price');
        const title = titleEl ? titleEl.textContent.trim() : document.title;
        const price = priceEl ? priceEl.textContent.trim() : '';

        const details = [];
        // Standard size/color selectors
        document.querySelectorAll('.option-selector input:checked, .swatch input:checked').forEach(inp => {
          details.push(inp.value);
        });
        const selSize = document.querySelector('select.original-selector option:checked');
        if (selSize && selSize.textContent && selSize.value) {
          details.push('Size: ' + selSize.textContent.trim());
        }
        // Custom builder options
        document.querySelectorAll('#avpoptions-container__v2 .avp-option').forEach(opt => {
          if (opt.style.display === 'none') return;
          const optName = opt.querySelector('.apo-title')?.textContent?.trim();
          const checked = Array.from(opt.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked')).map(i => i.value);
          const sel = opt.querySelector('select');
          if (checked.length && optName) {
            details.push(`${optName}: ${checked.join(', ')}`);
          } else if (sel && sel.value && optName) {
            details.push(`${optName}: ${sel.value}`);
          }
        });

        let msg = `Hi HQ Leathercon! I would like to send an order / inquiry for:\n• Product: ${title}`;
        if (price) msg += `\n• Price: ${price}`;
        if (details.length) msg += `\n• Options: ${details.join(' | ')}`;
        msg += `\n• Link: ${window.location.href}`;
        return 'https://wa.me/?text=' + encodeURIComponent(msg);
      }

      // Remove duplicate org addcart button
      document.querySelectorAll('button.avis-org-addcart-button').forEach(b => b.remove());

      const cartButtons = document.querySelectorAll(
        '.quantity-submit-row__submit button[type="submit"], button.avis-new-addcart-button, button[name="add"], .add-to-cart, .product-form__cart-submit'
      );

      cartButtons.forEach(btn => {
        btn.type = 'button';
        btn.classList.add('hq-whatsapp-order-btn');
        btn.innerHTML = `${waSvg}<span>Send Order / Inquiry on WhatsApp</span>`;
        btn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
        };
      });

      // Also update any sticky mobile ATC bar if present
      document.querySelectorAll('.my__atc button, .sticky-atc button').forEach(btn => {
        btn.type = 'button';
        btn.classList.add('hq-whatsapp-order-btn');
        btn.innerHTML = `${waSvg}<span>Order / Inquiry on WhatsApp</span>`;
        btn.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
        };
      });
    } catch (e) {}
  }

  // ============================================================
  // 11. INTERACTIVE WORKING SEARCH BAR ACROSS ALL PAGES
  // ============================================================
  function initLiveSearchBar() {
    try {
      // Load search catalog asynchronously if not already loaded
      if (!window.HQ_SEARCH_CATALOG && !document.getElementById('hq-search-catalog-script')) {
        const s = document.createElement('script');
        s.id = 'hq-search-catalog-script';
        s.src = '/hq-leathercon/js/search-catalog.js';
        document.head.appendChild(s);
      }

      // Create search modal if not exists
      let modal = document.getElementById('hq-live-search-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'hq-live-search-modal';
        modal.style.cssText = 'display:none; position:fixed; inset:0; z-index:99999999; background:rgba(15,23,42,0.68); backdrop-filter:blur(4px); overflow-y:auto; padding:20px 12px;';
        modal.innerHTML = `
          <div style="max-width:860px; margin:20px auto; background:#ffffff; border-radius:10px; box-shadow:0 20px 50px rgba(0,0,0,0.3); overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
            <div style="display:flex; align-items:center; gap:10px; padding:14px 18px; border-bottom:1px solid #e5e7eb; background:#f8fafc;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input id="hq-live-search-input" type="text" placeholder="Search leather jackets, biker, bomber, suede, shoes, bags, belts, wallets..." style="flex:1; border:none; background:transparent; font-size:16px; color:#111827; outline:none; padding:4px 0;" autocomplete="off" />
              <button id="hq-live-search-close" type="button" style="background:#e2e8f0; border:none; border-radius:6px; width:32px; height:32px; font-size:18px; line-height:1; color:#334155; cursor:pointer; display:flex; align-items:center; justify-content:center;">&times;</button>
            </div>
            <div style="padding:10px 18px; border-bottom:1px solid #f1f5f9; display:flex; flex-wrap:wrap; gap:6px; align-items:center; font-size:12px; color:#64748b;">
              <span>Popular:</span>
              <button type="button" class="hq-search-chip" data-q="biker" style="background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:12px; color:#1e293b; cursor:pointer;">Biker Jackets</button>
              <button type="button" class="hq-search-chip" data-q="bomber" style="background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:12px; color:#1e293b; cursor:pointer;">Bomber Jackets</button>
              <button type="button" class="hq-search-chip" data-q="suede" style="background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:12px; color:#1e293b; cursor:pointer;">Suede</button>
              <button type="button" class="hq-search-chip" data-q="shoes" style="background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:12px; color:#1e293b; cursor:pointer;">Leather Shoes</button>
              <button type="button" class="hq-search-chip" data-q="bag" style="background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:12px; color:#1e293b; cursor:pointer;">Leather Bags</button>
              <button type="button" class="hq-search-chip" data-q="belt" style="background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:12px; color:#1e293b; cursor:pointer;">Belts</button>
              <button type="button" class="hq-search-chip" data-q="wallet" style="background:#f1f5f9; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:12px; color:#1e293b; cursor:pointer;">Wallets</button>
            </div>
            <div id="hq-live-search-results" style="padding:16px 18px; max-height:65vh; overflow-y:auto;"></div>
          </div>
        `;
        document.body.appendChild(modal);
      }

      const input = document.getElementById('hq-live-search-input');
      const resultsBox = document.getElementById('hq-live-search-results');
      const closeBtn = document.getElementById('hq-live-search-close');

      function renderResults(query) {
        const catalog = window.HQ_SEARCH_CATALOG || [];
        const q = (query || '').trim().toLowerCase();
        const terms = q ? q.split(/\s+/) : [];

        const matched = q
          ? catalog.filter(item => {
              const hay = (item.t + ' ' + item.c).toLowerCase();
              return terms.every(term => hay.includes(term));
            }).slice(0, 24)
          : catalog.slice(0, 12);

        if (!matched.length) {
          resultsBox.innerHTML = `<div style="text-align:center; padding:32px 16px; color:#64748b; font-size:14px;">No matching products found for "<strong>${query}</strong>". Try searching for <em>biker, bomber, brown, suede, shoes, bag, belt, wallet</em>.</div>`;
          return;
        }

        const heading = q ? `Showing ${matched.length} results for "${query}"` : 'Featured Categories & Bestsellers';
        let html = `<div style="font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-bottom:12px;">${heading}</div>`;
        html += `<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(145px, 1fr)); gap:10px;">`;
        matched.forEach(item => {
          const imgSrc = typeof item.i === 'string' ? item.i : (item.i && item.i.src ? item.i.src : '');
          const imgHtml = imgSrc
            ? `<img src="${imgSrc}" alt="${item.t}" style="width:100%; height:140px; object-fit:cover; display:block; background:#f8fafc;" loading="lazy" />`
            : `<div style="width:100%; height:80px; background:linear-gradient(135deg,#1e293b,#334155); color:#fff; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:0.08em; padding:8px; text-align:center;">${item.c || 'Collection'}</div>`;
          html += `
            <a href="${item.u}" style="display:flex; flex-direction:column; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden; text-decoration:none; color:#111827; background:#fff; transition:box-shadow 0.2s;">
              ${imgHtml}
              <div style="padding:10px;">
                <div style="font-size:10px; text-transform:uppercase; color:#64748b; font-weight:600; margin-bottom:3px;">${item.c || 'Product'}</div>
                <div style="font-size:12.5px; font-weight:600; line-height:1.35; color:#0f172a; margin-bottom:4px;">${item.t}</div>
                ${item.p ? `<div style="font-size:12px; font-weight:700; color:#128C7E;">${item.p}</div>` : ''}
              </div>
            </a>
          `;
        });
        html += `</div>`;
        resultsBox.innerHTML = html;
      }

      function openSearch(e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        modal.style.display = 'block';
        renderResults(input.value);
        setTimeout(() => input.focus(), 50);
      }

      function closeSearch() {
        modal.style.display = 'none';
      }

      document.querySelectorAll('.show-search-link, a[href="/search"]').forEach(btn => {
        btn.addEventListener('click', openSearch);
      });

      closeBtn.addEventListener('click', closeSearch);
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeSearch();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') closeSearch();
      });
      input.addEventListener('input', function () {
        renderResults(this.value);
      });
      modal.querySelectorAll('.hq-search-chip').forEach(chip => {
        chip.addEventListener('click', function () {
          input.value = this.getAttribute('data-q') || '';
          renderResults(input.value);
          input.focus();
        });
      });
    } catch (e) {}
  }

  // ============================================================
  // 12. MOBILE COLLECTION LAYOUT SWITCHER (2-COL VS 1-COL)
  // ============================================================
  function initMobileCollectionGridSwitcher() {
    try {
      const switchers = document.querySelectorAll('.layout-switchers .layout-switch');
      const prodList = document.querySelector('.collection-listing .product-list');
      if (!switchers.length || !prodList) return;

      switchers.forEach((btn, idx) => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          switchers.forEach(b => b.classList.remove('layout-switch--active'));
          btn.classList.add('layout-switch--active');
          if (idx === 1) {
            prodList.classList.remove('product-list--per-row-mob-2');
            prodList.classList.add('product-list--per-row-mob-1');
          } else {
            prodList.classList.remove('product-list--per-row-mob-1');
            prodList.classList.add('product-list--per-row-mob-2');
          }
        });
      });
    } catch (e) {}
  }

  // ============================================================
  // 13. TOUCH & POINTER SWIPEABLE PRODUCT CAROUSELS (CLEARANCE SALE & SLIDERS)
  // ============================================================
  function initSwipeableProductCarousels() {
    try {
      const containers = Array.from(
        document.querySelectorAll('[class*="ai-product-column-"], .collection-slider .collection-listing')
      );

      containers.forEach(sc => {
        if (sc.dataset.hqSwipeInit === '1') return;
        sc.dataset.hqSwipeInit = '1';

        // Disable native HTML5 link/image ghost dragging so swipe works cleanly
        sc.querySelectorAll('a, img').forEach(el => {
          el.setAttribute('draggable', 'false');
        });

        // Wrap in .hq-swipe-wrap and add Prev/Next floating buttons for mobile/tablet
        if (sc.parentElement && !sc.parentElement.classList.contains('hq-swipe-wrap')) {
          const wrap = document.createElement('div');
          wrap.className = 'hq-swipe-wrap';
          sc.parentElement.insertBefore(wrap, sc);
          wrap.appendChild(sc);

          const prevBtn = document.createElement('button');
          prevBtn.type = 'button';
          prevBtn.className = 'hq-swipe-btn hq-swipe-btn--prev';
          prevBtn.setAttribute('aria-label', 'Previous products');
          prevBtn.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>';

          const nextBtn = document.createElement('button');
          nextBtn.type = 'button';
          nextBtn.className = 'hq-swipe-btn hq-swipe-btn--next';
          nextBtn.setAttribute('aria-label', 'Next products');
          nextBtn.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>';

          prevBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            sc.scrollBy({ left: -255, behavior: 'smooth' });
          });

          nextBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            sc.scrollBy({ left: 255, behavior: 'smooth' });
          });

          wrap.appendChild(prevBtn);
          wrap.appendChild(nextBtn);
        }

        let isDown = false;
        let startX = 0;
        let startY = 0;
        let startScrollLeft = 0;
        let dragged = false;

        // Mouse / Pointer Drag support
        sc.addEventListener('mousedown', function (e) {
          isDown = true;
          dragged = false;
          startX = e.clientX;
          startScrollLeft = sc.scrollLeft;
          sc.style.scrollBehavior = 'auto';
        });

        window.addEventListener('mousemove', function (e) {
          if (!isDown) return;
          const dx = e.clientX - startX;
          if (Math.abs(dx) > 5) {
            dragged = true;
            sc.scrollLeft = startScrollLeft - dx;
          }
        });

        window.addEventListener('mouseup', function () {
          if (!isDown) return;
          isDown = false;
          sc.style.scrollBehavior = 'smooth';
          if (dragged) {
            setTimeout(() => { dragged = false; }, 60);
          }
        });

        // Touch Swipe support (explicit horizontal touch tracking)
        sc.addEventListener('touchstart', function (e) {
          if (!e.touches || !e.touches.length) return;
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          startScrollLeft = sc.scrollLeft;
          dragged = false;
          sc.style.scrollBehavior = 'auto';
        }, { passive: true });

        sc.addEventListener('touchmove', function (e) {
          if (!e.touches || !e.touches.length) return;
          const dx = e.touches[0].clientX - startX;
          const dy = e.touches[0].clientY - startY;
          if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 5) {
            dragged = true;
            sc.scrollLeft = startScrollLeft - dx;
            if (e.cancelable) e.preventDefault();
          }
        }, { passive: false });

        sc.addEventListener('touchend', function () {
          sc.style.scrollBehavior = 'smooth';
          if (dragged) {
            setTimeout(() => { dragged = false; }, 60);
          }
        }, { passive: true });

        // Prevent accidental click navigation right after a swipe/drag
        sc.addEventListener('click', function (e) {
          if (dragged) {
            e.preventDefault();
            e.stopPropagation();
          }
        }, true);
      });
    } catch (e) {}
  }

  function init() {
    enforceCleanHeaderAndMobileNav();
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
    initWhatsAppOrderButtons();
    initLiveSearchBar();
    initMobileCollectionGridSwitcher();
    initSwipeableProductCarousels();
    initCollectionInteractions();
    initConsultationForms();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
