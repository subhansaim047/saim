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
  // 3. ANNOUNCEMENT BAR (USA REGISTERED MANUFACTURER IN PAKISTAN)
  // ============================================================
  function initAnnouncementBar() {
    try {
      const ANNOUNCEMENT_TEXT = 'WE ARE A MANUFACTURER REGISTERED IN USA, BASED IN PAKISTAN';
      const announcements = Array.from(document.querySelectorAll('#shopify-section-announcement-bar .announcement'));
      if (announcements.length > 0) {
        announcements.forEach((ann, idx) => {
          const textEl = ann.querySelector('.announcement__text') || ann;
          textEl.textContent = ANNOUNCEMENT_TEXT;
          if (idx === 0) {
            ann.classList.remove('announcement--inactive');
            ann.style.display = 'block';
          } else {
            ann.classList.add('announcement--inactive');
            ann.style.display = 'none';
          }
        });
      }
      document.querySelectorAll('#shopify-section-announcement-bar .announcement-button').forEach(btn => {
        btn.style.display = 'none';
      });
    } catch (e) {}
  }

  // ============================================================
  // 4. MOBILE NAVIGATION DRAWER & ACCORDIONS (100% LAPTOP CATEGORY & BUTTON PARITY)
  // ============================================================
  const HQ_WHATSAPP_NUMBER = '923440609206';

  function initMobileDrawer() {
    try {
      // Remove legacy broken mobile drawer template so theme.js doesn't overlay a blank white panel
      document.querySelectorAll('.mobile-navigation-drawer-template, .mobile-navigation-drawer').forEach(el => el.remove());

      // Inject Mobile Quick-Access Category & Navigation Bar right below header so all laptop top buttons are visible on mobile without any right-edge cut-off
      const headerSec = document.getElementById('shopify-section-header');
      let catBar = document.getElementById('hq-mobile-cat-bar');
      if (headerSec && !catBar) {
        catBar = document.createElement('nav');
        catBar.id = 'hq-mobile-cat-bar';
        catBar.setAttribute('aria-label', 'Mobile Quick Categories');
        headerSec.appendChild(catBar);
      }
      if (catBar) {
        catBar.innerHTML = `
          <a href="/hq-leathercon/products/custom-leather-jacket-builder/index.html" class="hq-cat-pill--accent">DESIGN YOUR OWN</a>
          <a href="/hq-leathercon/pages/men-jackets/index.html">MEN</a>
          <a href="/hq-leathercon/pages/women-jackets/index.html">WOMEN</a>
          <a href="/hq-leathercon/collections/mens-leather-belts/index.html">BELTS</a>
          <a href="/hq-leathercon/collections/leather-wallets/index.html">WALLETS</a>
          <a href="/hq-leathercon/pages/eviternity/index.html">SHOES</a>
          <a href="/hq-leathercon/pages/trucarry/index.html">BAGS</a>
          <a href="/hq-leathercon/collections/mens-winter-coats/index.html">COATS</a>
          <a href="/hq-leathercon/collections/mens-leather-puffer-jackets/index.html">PUFFERS</a>
          <a href="/hq-leathercon/pages/custom-jackets/index.html">CUSTOMIZE</a>
          <a href="/hq-leathercon/pages/our-story/index.html">OUR STORY</a>
          <a href="/hq-leathercon/pages/size-guide/index.html">SIZE GUIDE</a>
          <a href="/hq-leathercon/pages/help/index.html">HELP</a>
          <a href="/hq-leathercon/pages/contact-us/index.html">CONTACT</a>
          <a href="/hq-leathercon/collections/clearance-sale/index.html" class="hq-cat-pill--sale">SALE</a>
        `;
      }

      let drawerOverlay = document.getElementById('hq-mobile-drawer-overlay');
      if (!drawerOverlay) {
        drawerOverlay = document.createElement('div');
        drawerOverlay.id = 'hq-mobile-drawer-overlay';
        drawerOverlay.style.cssText = 'display:none; position:fixed; inset:0; z-index:99999990; background:rgba(15,23,42,0.58); backdrop-filter:blur(2px);';
        drawerOverlay.innerHTML = `
          <nav id="hq-mobile-drawer" aria-label="Mobile Navigation" style="width:88%; max-width:350px; height:100%; background:#ffffff; color:#111111; display:flex; flex-direction:column; box-shadow:6px 0 28px rgba(0,0,0,0.28); overflow-y:auto; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
            <div style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; border-bottom:1px solid #e5e7eb; background:#fafafa;">
              <a href="/hq-leathercon/index.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:#111;">
                <img src="/hq-leathercon/images/hq-crest-logo.png" alt="HQ Leathercon" style="height:30px; width:auto;" />
                <span style="font-family:'Cinzel',Georgia,serif; font-size:13px; font-weight:700; letter-spacing:0.14em; color:#111;">HQ LEATHERCON</span>
              </a>
              <button type="button" id="hq-mobile-drawer-close" aria-label="Close menu" style="background:none; border:none; width:34px; height:34px; font-size:24px; line-height:1; color:#111; cursor:pointer; display:flex; align-items:center; justify-content:center;">&times;</button>
            </div>

            <ul style="list-style:none; margin:0; padding:0; flex:1;">
              <!-- DESIGN YOUR OWN -->
              <li style="border-bottom:1px solid #f1f5f9; background:#111111;">
                <a href="/hq-leathercon/products/custom-leather-jacket-builder/index.html" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; font-size:13.5px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#ffffff; text-decoration:none;">
                  <span>DESIGN YOUR OWN</span>
                  <span style="font-size:12px; background:rgba(255,255,255,0.16); padding:3px 8px; border-radius:4px;">3D BUILDER &rarr;</span>
                </a>
              </li>

              <!-- MEN (Full Laptop Mega-Menu Parity) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>MEN</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:6px 0 14px 22px; background:#f8fafc;">
                  <li style="padding:6px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Leather Jackets</li>
                  <li><a href="/hq-leathercon/pages/men-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#111827; text-decoration:none; font-size:13px; font-weight:600;">Men's Outerwear Hub</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">All Leather Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-bomber-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Bomber Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-biker-leather-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Biker Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-suede-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Suede Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-varsity-jacket/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Varsity Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-vests/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Vests</a></li>
                  <li><a href="/hq-leathercon/collections/mens-blazers/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Blazers</a></li>
                  <li><a href="/hq-leathercon/collections/mens-aviator-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Aviator Jackets</a></li>

                  <li style="padding:10px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Tech &amp; Fabric Jackets</li>
                  <li><a href="/hq-leathercon/collections/mens-windbreaker-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Windbreaker Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-puffer-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Puffer Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-puffer-vests/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Puffer Vests</a></li>
                  <li><a href="/hq-leathercon/collections/mens-lightweight-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Lightweight Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-soft-shell-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Soft Shell Jackets</a></li>

                  <li style="padding:10px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Men's Coats</li>
                  <li><a href="/hq-leathercon/collections/mens-winter-coats/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Trench &amp; Winter Coats</a></li>
                  <li><a href="/hq-leathercon/collections/mens-wool-coats-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Wool Coats &amp; Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-fur-shearling-coats/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Fur &amp; Shearling Coats</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-dusters/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Dusters</a></li>

                  <li style="padding:10px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Men's Footwear</li>
                  <li><a href="/hq-leathercon/pages/eviternity/index.html" style="display:block; padding:6px 14px 6px 0; color:#111827; text-decoration:none; font-size:13px; font-weight:600;">All Men's Shoes</a></li>
                  <li><a href="/hq-leathercon/collections/mens-dress-shoes/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Dress Shoes</a></li>
                  <li><a href="/hq-leathercon/collections/mens-casual-shoes/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Casual Shoes</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-loafers/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Loafers</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-boots/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Boots</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-sneakers/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Sneakers</a></li>

                  <li style="padding:10px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Bags, Belts, Wallets &amp; Plus Size</li>
                  <li><a href="/hq-leathercon/pages/trucarry/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">All Bags &amp; Accessories</a></li>
                  <li><a href="/hq-leathercon/collections/mens-leather-belts/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Belts</a></li>
                  <li><a href="/hq-leathercon/collections/leather-wallets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Wallets</a></li>
                  <li><a href="/hq-leathercon/collections/mens-big-tall-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Men's Plus Size Jackets</a></li>
                </ul>
              </li>

              <!-- WOMEN (Full Laptop Mega-Menu Parity) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>WOMEN</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:6px 0 14px 22px; background:#f8fafc;">
                  <li style="padding:6px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Women's Leather Jackets</li>
                  <li><a href="/hq-leathercon/pages/women-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#111827; text-decoration:none; font-size:13px; font-weight:600;">Women's Outerwear Hub</a></li>
                  <li><a href="/hq-leathercon/collections/womens-leather-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">All Leather Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/women-bomber-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Bomber Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/womens-biker-leather-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Biker Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/womens-suede-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Suede Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/womens-aviator-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Aviator Jackets</a></li>
                  <li><a href="/hq-leathercon/collections/women-blazers/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Blazers</a></li>
                  <li><a href="/hq-leathercon/collections/women-leather-vests/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Leather Vests</a></li>

                  <li style="padding:10px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Coats &amp; Puffers</li>
                  <li><a href="/hq-leathercon/collections/women-winter-coats/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Women's Trench &amp; Winter Coats</a></li>
                  <li><a href="/hq-leathercon/collections/womens-shearling-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Shearling Jackets &amp; Coats</a></li>
                  <li><a href="/hq-leathercon/collections/womens-puffer-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Women's Puffer Jackets</a></li>

                  <li style="padding:10px 14px 3px 0; font-size:11px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#0f172a;">Bags &amp; Plus Size</li>
                  <li><a href="/hq-leathercon/collections/womens-leather-bags/index.html" style="display:block; padding:6px 14px 6px 0; color:#111827; text-decoration:none; font-size:13px; font-weight:600;">All Women's Leather Bags</a></li>
                  <li><a href="/hq-leathercon/collections/womens-hobo-bags/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Hobo Bags</a></li>
                  <li><a href="/hq-leathercon/collections/leather-tote-bags/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Tote Bags</a></li>
                  <li><a href="/hq-leathercon/collections/leather-crossbody-bags/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Crossbody Bags</a></li>
                  <li><a href="/hq-leathercon/pages/women-plus-size-leather-jackets/index.html" style="display:block; padding:6px 14px 6px 0; color:#475569; text-decoration:none; font-size:13px;">Women's Plus Size Jackets</a></li>
                </ul>
              </li>

              <!-- BELTS & WALLETS -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>BELTS &amp; WALLETS</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 22px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/collections/mens-leather-belts/index.html" style="display:block; padding:7px 14px 7px 0; color:#111827; text-decoration:none; font-size:13.5px; font-weight:600;">Leather Belts</a></li>
                  <li><a href="/hq-leathercon/collections/leather-wallets/index.html" style="display:block; padding:7px 14px 7px 0; color:#111827; text-decoration:none; font-size:13.5px; font-weight:600;">Leather Wallets</a></li>
                  <li><a href="/hq-leathercon/pages/custom-leather-belts/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Custom Leather Belts</a></li>
                  <li><a href="/hq-leathercon/pages/custom-leather-wallets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Custom Leather Wallets</a></li>
                </ul>
              </li>

              <!-- CUSTOMIZE (Full Bespoke Categories) -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>CUSTOMIZE</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 22px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/custom-jackets/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Custom Jackets</a></li>
                  <li><a href="/hq-leathercon/pages/custom-made-shoes/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Custom Shoes</a></li>
                  <li><a href="/hq-leathercon/pages/custom-bag/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13.5px; font-weight:600;">Custom Bags</a></li>
                  <li><a href="/hq-leathercon/pages/custom-leather-belts/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Custom Leather Belts</a></li>
                  <li><a href="/hq-leathercon/pages/custom-leather-wallets/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Custom Leather Wallets</a></li>
                  <li><a href="/hq-leathercon/pages/corporate-gifts/index.html" style="display:block; padding:7px 14px 7px 0; color:#475569; text-decoration:none; font-size:13px;">Corporate Gifts</a></li>
                </ul>
              </li>

              <!-- BRAND -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>BRAND</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 22px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/our-story/index.html" style="display:block; padding:7px 14px 7px 0; color:#111827; text-decoration:none; font-size:13.5px; font-weight:600;">Our Story</a></li>
                </ul>
              </li>

              <!-- SALE -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#b91c1c;">
                  <span>SALE</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 22px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/collections/clearance-sale/index.html" style="display:block; padding:7px 14px 7px 0; color:#b91c1c; text-decoration:none; font-size:13.5px; font-weight:700;">Clearance Sale - 50% OFF</a></li>
                  <li><a href="/hq-leathercon/pages/black-friday-jacket-deals/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Cyber Monday Sale</a></li>
                  <li><a href="/hq-leathercon/collections/factory-seconds/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Factory Seconds - 40% OFF</a></li>
                  <li><a href="/hq-leathercon/collections/sale/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Leather Bags - 50% OFF</a></li>
                </ul>
              </li>

              <!-- HELP, SIZE GUIDE & POLICIES -->
              <li class="hq-mob-item" style="border-bottom:1px solid #f1f5f9;">
                <div class="hq-mob-trigger" style="display:flex; align-items:center; justify-content:space-between; padding:14px 18px; cursor:pointer; font-size:13.5px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111;">
                  <span>HELP &amp; SIZE GUIDE</span>
                  <span class="hq-mob-chevron" style="font-size:16px; font-weight:400; transition:transform 0.2s;">+</span>
                </div>
                <ul class="hq-mob-sub" style="display:none; list-style:none; margin:0; padding:4px 0 12px 22px; background:#f8fafc;">
                  <li><a href="/hq-leathercon/pages/help/index.html" style="display:block; padding:7px 14px 7px 0; color:#111827; text-decoration:none; font-size:13px; font-weight:600;">Help Center &amp; FAQs</a></li>
                  <li><a href="/hq-leathercon/pages/size-guide/index.html" style="display:block; padding:7px 14px 7px 0; color:#111827; text-decoration:none; font-size:13px; font-weight:600;">Size Guide</a></li>
                  <li><a href="/hq-leathercon/pages/contact-us/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Contact Us</a></li>
                  <li><a href="/hq-leathercon/policies/shipping-policy/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Shipping &amp; Delivery Policy</a></li>
                  <li><a href="/hq-leathercon/policies/refund-policy/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Return &amp; Refund Policy</a></li>
                  <li><a href="/hq-leathercon/pages/returns/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">File a Return / Exchange</a></li>
                  <li><a href="/hq-leathercon/pages/track-order/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Track Order</a></li>
                  <li><a href="/hq-leathercon/policies/privacy-policy/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Privacy Policy</a></li>
                  <li><a href="/hq-leathercon/policies/terms-of-service/index.html" style="display:block; padding:7px 14px 7px 0; color:#334155; text-decoration:none; font-size:13px;">Terms of Service</a></li>
                </ul>
              </li>

              <!-- WHATSAPP DIRECT CONNECT BUTTON -->
              <li style="padding:16px;">
                <a href="https://wa.me/923440609206?text=Hi%20HQ%20Leathercon!%20I%20have%20an%20inquiry." target="_blank" rel="noopener noreferrer" style="display:flex; align-items:center; justify-content:center; gap:8px; padding:12px 16px; background:#128C7E; color:#ffffff; border-radius:6px; text-decoration:none; font-size:13px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; box-shadow:0 4px 12px rgba(18,140,126,0.28);">
                  <span>WhatsApp: +92 344 0609206</span>
                </a>
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
  // 5. PRODUCT GALLERY THUMBNAILS, TOUCH SWIPE & INSTANT IMAGE PRELOADER
  // ============================================================
  function optimizeShopifyImageUrl(url, width) {
    if (!url || typeof url !== 'string' || !url.includes('cdn.shopify.com')) return url;
    try {
      const u = new URL(url, window.location.origin);
      u.searchParams.set('width', String(width || 800));
      return u.toString();
    } catch (e) {
      return url + (url.includes('?') ? '&' : '?') + 'width=' + (width || 800);
    }
  }

  function initProductGallery() {
    const galleries = Array.from(document.querySelectorAll('.product-detail .gallery, .gallery--layout-carousel-beside, .product-gallery'));
    if (!galleries.length) return;

    galleries.forEach(gallery => {
      if (gallery.dataset.hqGalleryInit === '1') return;
      gallery.dataset.hqGalleryInit = '1';

      const slideshow = gallery.querySelector('.product-slideshow, .slideshow');
      if (!slideshow) return;

      // 1. Destroy any broken Slick / Owl Carousel instances so they never freeze or lock the track
      const $ = window.jQuery;
      if ($) {
        try {
          const $ss = $(slideshow);
          if ($ss.hasClass('slick-initialized') || $ss.hasClass('slick-slider')) {
            $ss.slick('unslick');
          }
        } catch (e) {}
        try {
          const $th = $(gallery).find('.thumbnails.owl-carousel');
          if ($th.length && $th.data('owl.carousel')) {
            $th.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
          }
        } catch (e) {}
      }

      // Unwrap any leftover .slick-list / .slick-track or .owl-stage wrappers
      slideshow.querySelectorAll('.slick-cloned').forEach(el => el.remove());
      const slickList = slideshow.querySelector('.slick-list');
      if (slickList) {
        const slidesInside = Array.from(slickList.querySelectorAll('.slide'));
        slidesInside.forEach(s => slideshow.appendChild(s));
        slickList.remove();
      }
      slideshow.classList.remove('slick-initialized', 'slick-slider');

      const thumbContainer = gallery.querySelector('.thumbnails');
      if (thumbContainer) {
        thumbContainer.classList.remove('owl-carousel', 'owl-loaded', 'owl-drag');
        const owlStage = thumbContainer.querySelector('.owl-stage-outer');
        if (owlStage) {
          const items = Array.from(owlStage.querySelectorAll('a.thumbnail, .thumbnail'));
          items.forEach(item => thumbContainer.appendChild(item));
          owlStage.remove();
        }
        thumbContainer.querySelectorAll('.owl-nav, .owl-dots').forEach(el => el.remove());
      }

      const slides = Array.from(slideshow.querySelectorAll('.slide'));
      const thumbLinks = thumbContainer ? Array.from(thumbContainer.querySelectorAll('a.thumbnail, .thumbnail')) : [];
      if (!slides.length) return;

      // 2. Optimize & Preload all gallery images immediately so switching is 0ms instant
      slides.forEach((slide, i) => {
        const img = slide.querySelector('img');
        if (img) {
          const rawSrc = img.getAttribute('data-src') || img.getAttribute('src') || '';
          if (rawSrc) {
            const fastMainSrc = optimizeShopifyImageUrl(rawSrc, 900);
            img.src = fastMainSrc;
            img.setAttribute('data-src', fastMainSrc);
            img.removeAttribute('srcset');
            img.removeAttribute('data-srcset');
            img.loading = i === 0 ? 'eager' : 'eager';
            img.decoding = 'async';
            if (i === 0) img.setAttribute('fetchpriority', 'high');
            img.classList.remove('lazyload');
            img.classList.add('lazyloaded');
            const preloadImg = new Image();
            preloadImg.src = fastMainSrc;
          }
        }
      });

      thumbLinks.forEach(thumb => {
        const tImg = thumb.querySelector('img');
        if (tImg) {
          const rawThumb = tImg.getAttribute('data-src') || tImg.getAttribute('src') || thumb.getAttribute('href') || '';
          if (rawThumb) {
            tImg.src = optimizeShopifyImageUrl(rawThumb, 180);
            tImg.loading = 'eager';
            tImg.decoding = 'async';
          }
        }
      });

      const slideUrls = slides.map((s, i) => {
        const im = s.querySelector('img');
        const u = (im && (im.getAttribute('data-src') || im.getAttribute('src'))) || (thumbLinks[i] && thumbLinks[i].getAttribute('href')) || '';
        return optimizeShopifyImageUrl(u, 900);
      });

      let currentIndex = 0;
      const total = slides.length;

      function showProductSlide(idx) {
        if (idx < 0) idx = total - 1;
        if (idx >= total) idx = 0;
        currentIndex = idx;

        // Also update the first slide's <img> src directly so even if any theme CSS shows slide 0, it displays the selected photo immediately!
        const firstSlideImg = slides[0] ? slides[0].querySelector('img') : null;
        if (firstSlideImg && slideUrls[currentIndex]) {
          firstSlideImg.src = slideUrls[currentIndex];
          firstSlideImg.setAttribute('data-src', slideUrls[currentIndex]);
        }

        slides.forEach((slide, i) => {
          const isActive = i === currentIndex;
          slide.classList.toggle('hq-slide-active', isActive);
          slide.classList.toggle('slick-current', isActive);
          slide.classList.toggle('slick-active', isActive);
          slide.style.setProperty('display', isActive ? 'block' : 'none', 'important');
          slide.style.setProperty('opacity', isActive ? '1' : '0', 'important');
          slide.style.setProperty('visibility', isActive ? 'visible' : 'hidden', 'important');
          slide.style.setProperty('position', 'relative', 'important');
          slide.style.setProperty('width', '100%', 'important');
          slide.style.setProperty('left', '0', 'important');
          slide.style.setProperty('top', '0', 'important');
          slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        thumbLinks.forEach((t, i) => {
          const isActive = i === currentIndex;
          t.classList.toggle('thumb--active', isActive);
          t.classList.toggle('selected', isActive);
          if (isActive) {
            t.style.setProperty('border', '2px solid #111111', 'important');
            t.style.setProperty('opacity', '1', 'important');
            t.style.setProperty('transform', 'scale(1.03)', 'important');
            // Smoothly scroll thumbnail strip horizontally if needed
            if (thumbContainer && thumbContainer.scrollWidth > thumbContainer.clientWidth) {
              const targetLeft = t.offsetLeft - (thumbContainer.clientWidth - t.clientWidth) / 2;
              thumbContainer.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
            }
          } else {
            t.style.setProperty('border', '2px solid transparent', 'important');
            t.style.setProperty('opacity', '0.68', 'important');
            t.style.setProperty('transform', 'scale(1)', 'important');
          }
        });
      }

      // Initialize first image immediately
      showProductSlide(0);

      // 3. Bind click & touch on every thumbnail (capture phase so theme.js can never block it)
      thumbLinks.forEach((link, idx) => {
        link.style.cursor = 'pointer';
        link.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          showProductSlide(idx);
        }, true);
      });

      // 4. Add Prev / Next arrows on main image for easy mobile & desktop navigation
      const mainImgWrap = gallery.querySelector('.main-image') || slideshow.parentElement;
      if (mainImgWrap && total > 1 && !mainImgWrap.querySelector('.hq-prod-nav-btn')) {
        mainImgWrap.style.position = 'relative';
        const prevBtn = document.createElement('button');
        prevBtn.type = 'button';
        prevBtn.className = 'hq-prod-nav-btn hq-prod-nav-btn--prev';
        prevBtn.setAttribute('aria-label', 'Previous product image');
        prevBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';

        const nextBtn = document.createElement('button');
        nextBtn.type = 'button';
        nextBtn.className = 'hq-prod-nav-btn hq-prod-nav-btn--next';
        nextBtn.setAttribute('aria-label', 'Next product image');
        nextBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';

        prevBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          showProductSlide(currentIndex - 1);
        });
        nextBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          showProductSlide(currentIndex + 1);
        });

        mainImgWrap.appendChild(prevBtn);
        mainImgWrap.appendChild(nextBtn);
      }

      // 5. Touch Swipe left/right on main image without blocking vertical page scroll
      let touchStartX = 0;
      let touchStartY = 0;
      slideshow.addEventListener('touchstart', function (e) {
        if (!e.touches || !e.touches.length) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      slideshow.addEventListener('touchend', function (e) {
        if (!e.changedTouches || !e.changedTouches.length) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.3) {
          if (dx < 0) showProductSlide(currentIndex + 1);
          else showProductSlide(currentIndex - 1);
        }
      }, { passive: true });
    });

    // Also optimize any collection/card Shopify images on the page for fast loading
    document.querySelectorAll('img[src*="cdn.shopify.com"], img[data-src*="cdn.shopify.com"]').forEach((img, idx) => {
      if (img.closest('.product-slideshow, .thumbnails')) return;
      const src = img.getAttribute('src') || img.getAttribute('data-src') || '';
      if (src && !src.includes('width=')) {
        const fastUrl = optimizeShopifyImageUrl(src, 540);
        img.src = fastUrl;
        if (img.hasAttribute('data-src')) img.setAttribute('data-src', fastUrl);
      }
      if (idx < 6) {
        img.loading = 'eager';
      }
      img.decoding = 'async';
    });
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
  // 8. CUSTOM CONSULTATION FORM FEEDBACK (CONNECTED TO WHATSAPP +92 344 0609206)
  // ============================================================
  function initConsultationForms() {
    const forms = Array.from(document.querySelectorAll('form[action*="consultation"], form.custom-form, .bespoke-form, form[id*="consultation"], .ncf-form form, #new_consultation_form'));
    forms.forEach(form => {
      if (form.dataset.hqConsultInit === '1') return;
      form.dataset.hqConsultInit = '1';
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Collect entered fields for WhatsApp inquiry
        const fields = [];
        this.querySelectorAll('input, select, textarea').forEach(inp => {
          if (inp.type === 'hidden' || inp.type === 'submit' || inp.type === 'button') return;
          if ((inp.type === 'radio' || inp.type === 'checkbox') && !inp.checked) return;
          const val = (inp.value || '').trim();
          if (!val) return;
          const label = inp.getAttribute('placeholder') || inp.getAttribute('name') || inp.getAttribute('id') || 'Field';
          fields.push(`• ${label}: ${val}`);
        });

        const submitBtn = this.querySelector('button[type="submit"], input[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitBtn.tagName === 'INPUT') {
            submitBtn.value = 'Connecting to WhatsApp...';
          } else {
            submitBtn.textContent = 'Connecting to WhatsApp...';
          }
          submitBtn.style.backgroundColor = '#128C7E';
          submitBtn.style.color = '#ffffff';
        }

        let notice = this.querySelector('.hq-consult-notice');
        if (!notice) {
          notice = document.createElement('div');
          notice.className = 'hq-consult-notice';
          notice.style.padding = '16px';
          notice.style.marginTop = '16px';
          notice.style.backgroundColor = '#ecfdf5';
          notice.style.border = '1px solid #10b981';
          notice.style.borderRadius = '6px';
          notice.style.color = '#065f46';
          notice.style.fontSize = '14px';
          notice.style.lineHeight = '1.5';
          this.appendChild(notice);
        }
        notice.innerHTML = '<strong>Thank you!</strong> Opening WhatsApp (+92 344 0609206) to connect you directly with our bespoke design team.';

        const waMsg = `Hi HQ Leathercon! I would like to request a Bespoke / Custom Consultation:\n${fields.join('\n')}\n• Page: ${window.location.href}`;
        const waUrl = `https://wa.me/${HQ_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
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
      priceEl.setAttribute('data-base-pkr', String(finalPrice));
      priceEl.textContent = 'Rs.' + finalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' PKR';
      if (typeof window.HQ_RECONVERT_PRICES === 'function') {
        window.HQ_RECONVERT_PRICES();
      }
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

      // Ensure .logo-area has balanced 3-column grid (left, centered logo, right spacer) and mobile currency selector is visible
      document.querySelectorAll('.logo-area').forEach(area => {
        if (!area.querySelector('.logo-area__right')) {
          const rightSpacer = document.createElement('div');
          rightSpacer.className = 'logo-area__right';
          area.appendChild(rightSpacer);
        }
        area.querySelectorAll('.logo-area__right .desktop-only').forEach(el => {
          el.classList.remove('desktop-only');
        });
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

          // Under CUSTOMIZE: full Bespoke menu (Custom Jackets, Custom Shoes, Custom Bags, Custom Belts, Custom Wallets, Corporate Gifts)
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
                <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/custom-leather-belts/index.html">Custom Leather Belts</a></li>
                <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/custom-leather-wallets/index.html">Custom Leather Wallets</a></li>
                <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/corporate-gifts/index.html">Corporate Gifts</a></li>
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

        // Add HELP & SIZE GUIDE dropdown in Desktop Nav if not already present
        const hasHelpNav = Array.from(ul.children).some(li => /SIZE\s*GUIDE|HELP/i.test(li.textContent || ''));
        if (!hasHelpNav) {
          const helpLi = document.createElement('li');
          helpLi.className = 'navigation__item navigation__item--with-children navigation__item--with-small-menu';
          const tierId = isMobile ? 'NavigationTier2-HelpMob' : 'NavigationTier2-HelpDesk';
          helpLi.innerHTML = `
            <a aria-controls="${tierId}" aria-expanded="false" aria-haspopup="true" class="navigation__link" href="/hq-leathercon/pages/help/index.html">HELP &amp; SIZE GUIDE</a>
            <a class="navigation__children-toggle" href="#"><svg class="feather feather-chevron-down" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" viewBox="0 0 24 24" width="24"><title>Toggle menu</title><polyline points="6 9 12 15 18 9"></polyline></svg></a>
            <div class="navigation__tier-2-container navigation__child-tier" id="${tierId}">
              <div class="container">
                <ul class="navigation__tier-2">
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/size-guide/index.html">Size Guide</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/help/index.html">Help Center &amp; FAQs</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/contact-us/index.html">Contact Us</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/policies/shipping-policy/index.html">Shipping &amp; Delivery</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/policies/refund-policy/index.html">Return &amp; Refund Policy</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/returns/index.html">File a Return / Exchange</a></li>
                  <li class="navigation__item"><a class="navigation__link" href="/hq-leathercon/pages/track-order/index.html">Track Order</a></li>
                </ul>
              </div>
            </div>
          `;
          ul.appendChild(helpLi);
        }
      });
    } catch (e) {}
  }

  // ============================================================
  // 10. REPLACE ADD TO CART WITH WHATSAPP ORDER / INQUIRY (+92 344 0609206)
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
        return `https://wa.me/${HQ_WHATSAPP_NUMBER}?text=` + encodeURIComponent(msg);
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

      // Ensure any existing wa.me links point to +92 344 0609206
      document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
        const href = a.getAttribute('href') || '';
        if (!href.includes(HQ_WHATSAPP_NUMBER)) {
          a.setAttribute('href', href.replace(/wa\.me\/(\d+)?/, `wa.me/${HQ_WHATSAPP_NUMBER}`));
        }
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
      // Unwrap any [class*="ai-product-column-"] if previously wrapped so desktop 50/50 split is never broken
      document.querySelectorAll('.hq-swipe-wrap > [class*="ai-product-column-"]').forEach(col => {
        const wrap = col.parentElement;
        if (wrap && wrap.parentElement) {
          wrap.parentElement.insertBefore(col, wrap);
          wrap.remove();
        }
      });

      const containers = Array.from(
        document.querySelectorAll('[class*="ai-product-column-"], .collection-slider .collection-listing')
      );

      containers.forEach(sc => {
        if (sc.dataset.hqSwipeInit === '1') return;
        sc.dataset.hqSwipeInit = '1';

        const isAiProductCol = Array.from(sc.classList).some(c => c.startsWith('ai-product-column-'));

        // Disable native HTML5 link/image ghost dragging so swipe works cleanly
        sc.querySelectorAll('a, img').forEach(el => {
          el.setAttribute('draggable', 'false');
        });

        // Wrap ONLY .collection-slider .collection-listing in .hq-swipe-wrap (never wrap ai-product-column so 50/50 desktop flex stays intact)
        if (!isAiProductCol && sc.parentElement && !sc.parentElement.classList.contains('hq-swipe-wrap')) {
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
          if (isAiProductCol && window.innerWidth >= 990) return;
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
          if (isAiProductCol && window.innerWidth >= 990) return;
          if (!e.touches || !e.touches.length) return;
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          startScrollLeft = sc.scrollLeft;
          dragged = false;
          sc.style.scrollBehavior = 'auto';
        }, { passive: true });

        sc.addEventListener('touchmove', function (e) {
          if (isAiProductCol && window.innerWidth >= 990) return;
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

  // ============================================================
  // 14. INTERACTIVE CURRENCY SELECTOR + AUTOMATIC USD ($) FOR US VISITORS
  // ============================================================
  function initCurrencySelector() {
    try {
      const disclosures = Array.from(document.querySelectorAll('.disclosure[data-disclosure-country], .logo-area__right .disclosure, #pagefooter .disclosure'));
      if (!disclosures.length) return;

      const RATES = {
        PKR: { rate: 1, prefix: 'Rs.', suffix: ' PKR', decimals: 2 },
        USD: { rate: 0.0036, prefix: '$', suffix: ' USD', decimals: 2 },
        GBP: { rate: 0.00285, prefix: '£', suffix: ' GBP', decimals: 2 },
        EUR: { rate: 0.00335, prefix: '€', suffix: ' EUR', decimals: 2 },
        CAD: { rate: 0.0050, prefix: '$', suffix: ' CAD', decimals: 2 },
        AUD: { rate: 0.0055, prefix: '$', suffix: ' AUD', decimals: 2 },
        AED: { rate: 0.0132, prefix: 'AED ', suffix: '', decimals: 2 },
        SAR: { rate: 0.0135, prefix: 'SAR ', suffix: '', decimals: 2 },
        QAR: { rate: 0.0131, prefix: 'QAR ', suffix: '', decimals: 2 },
        KWD: { rate: 0.0011, prefix: 'KWD ', suffix: '', decimals: 2 },
        OMR: { rate: 0.0014, prefix: 'OMR ', suffix: '', decimals: 2 },
        BHD: { rate: 0.00136, prefix: 'BHD ', suffix: '', decimals: 2 },
        CHF: { rate: 0.0032, prefix: 'CHF ', suffix: '', decimals: 2 },
        SGD: { rate: 0.00485, prefix: 'S$', suffix: ' SGD', decimals: 2 },
        NZD: { rate: 0.0061, prefix: '$', suffix: ' NZD', decimals: 2 },
        JPY: { rate: 0.55, prefix: '¥', suffix: ' JPY', decimals: 0 },
        HKD: { rate: 0.028, prefix: 'HK$', suffix: ' HKD', decimals: 2 },
        MYR: { rate: 0.016, prefix: 'RM', suffix: ' MYR', decimals: 2 },
        TRY: { rate: 0.125, prefix: '₺', suffix: ' TRY', decimals: 2 },
        ZAR: { rate: 0.065, prefix: 'R', suffix: ' ZAR', decimals: 2 }
      };

      let activeCurrencyCode = 'PKR';

      function cleanRawLabel(raw) {
        return (raw || '')
          .replace(/\bDown\s*$/i, '')
          .replace(/\s+/g, ' ')
          .trim();
      }

      function compactLabelForMobile(fullText) {
        const clean = cleanRawLabel(fullText);
        if (window.innerWidth > 768) return clean;
        const parenMatch = clean.match(/\(([^)]+)\)/);
        if (parenMatch && parenMatch[1]) {
          return parenMatch[1].trim();
        }
        return clean
          .replace(/^United Arab Emirates/i, 'UAE')
          .replace(/^United Kingdom/i, 'UK')
          .replace(/^United States/i, 'USA')
          .replace(/^Saudi Arabia/i, 'KSA')
          .replace(/^South Africa/i, 'S. Africa')
          .replace(/^New Zealand/i, 'NZ');
      }

      function extractCurrencyCode(label) {
        const m = (label || '').match(/\(([A-Z]{3})\b/);
        return m ? m[1] : 'PKR';
      }

      function convertAllPricesOnPage(currencyCode) {
        activeCurrencyCode = currencyCode || activeCurrencyCode || 'PKR';
        const cfg = RATES[activeCurrencyCode] || RATES.PKR;
        const priceNodes = document.querySelectorAll(
          '.theme-money, .current-price, .was-price, [class*="ai-product-price-"], [class*="ai-compare-price-"], #hq-builder-price'
        );
        priceNodes.forEach(node => {
          if (node.children.length > 0 && node.querySelector('.theme-money')) return;
          let rawPkr = node.getAttribute('data-base-pkr') || node.getAttribute('data-base-price');
          if (!rawPkr) {
            const text = (node.textContent || '').trim();
            const match = text.match(/Rs\.\s*([\d,]+(?:\.\d+)?)/i) || text.match(/([\d,]+(?:\.\d+)?)\s*PKR/i);
            if (match) {
              rawPkr = match[1].replace(/,/g, '');
              node.setAttribute('data-base-pkr', rawPkr);
            }
          }
          if (!rawPkr) return;
          const pkrVal = parseFloat(rawPkr);
          if (isNaN(pkrVal)) return;
          const converted = pkrVal * cfg.rate;
          const formatted = converted.toLocaleString('en-US', {
            minimumFractionDigits: cfg.decimals,
            maximumFractionDigits: cfg.decimals
          });
          node.textContent = `${cfg.prefix}${formatted}${cfg.suffix}`;
        });
      }

      window.HQ_RECONVERT_PRICES = function () {
        convertAllPricesOnPage(activeCurrencyCode);
      };

      function applyCurrencySelection(countryVal, labelText, isManualUserAction) {
        disclosures.forEach(disc => {
          const btn = disc.querySelector('.disclosure__toggle');
          const list = disc.querySelector('.disclosure-list');
          const input = disc.querySelector('input[name="country_code"]');
          if (btn && labelText) {
            const isHeader = !!disc.closest('.logo-area__right');
            btn.setAttribute('data-full-label', labelText);
            btn.textContent = isHeader ? compactLabelForMobile(labelText) : labelText;
            btn.setAttribute('aria-expanded', 'false');
          }
          if (list) {
            list.setAttribute('aria-expanded', 'false');
            list.querySelectorAll('.disclosure-list__item').forEach(li => {
              const opt = li.querySelector('.disclosure-list__option');
              const val = opt ? opt.getAttribute('data-value') : '';
              const isMatch = val === countryVal;
              li.classList.toggle('disclosure-list__item--current', isMatch);
              if (opt) opt.setAttribute('aria-current', isMatch ? 'true' : 'false');
            });
          }
          if (input && countryVal) {
            input.value = countryVal;
          }
        });

        const code = extractCurrencyCode(labelText);
        convertAllPricesOnPage(code);
        try {
          localStorage.setItem('hq_selected_country', countryVal);
          localStorage.setItem('hq_selected_label', labelText);
          if (isManualUserAction) {
            localStorage.setItem('hq_user_manual_currency', '1');
          }
        } catch (e) {}
      }

      disclosures.forEach(disc => {
        if (disc.dataset.hqCurrencyInit === '1') return;
        disc.dataset.hqCurrencyInit = '1';

        const form = disc.closest('form');
        if (form) {
          form.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
          });
        }

        const btn = disc.querySelector('.disclosure__toggle');
        const list = disc.querySelector('.disclosure-list');
        if (!btn || !list) return;

        // Remove any <title>Down</title> inside toggle SVGs so textContent never includes "Down"
        btn.querySelectorAll('svg title').forEach(t => t.remove());

        const initFullLabel = cleanRawLabel(btn.getAttribute('data-full-label') || btn.textContent || 'Pakistan (PKR ₨)');
        btn.setAttribute('data-full-label', initFullLabel);
        const isHeader = !!disc.closest('.logo-area__right');
        btn.textContent = isHeader ? compactLabelForMobile(initFullLabel) : initFullLabel;

        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = list.getAttribute('aria-expanded') === 'true';
          // Close all other disclosures first
          disclosures.forEach(other => {
            const ob = other.querySelector('.disclosure__toggle');
            const ol = other.querySelector('.disclosure-list');
            if (ob) ob.setAttribute('aria-expanded', 'false');
            if (ol) ol.setAttribute('aria-expanded', 'false');
          });
          btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
          list.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        });

        list.querySelectorAll('.disclosure-list__option').forEach(opt => {
          opt.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const val = opt.getAttribute('data-value') || 'PK';
            const label = (opt.textContent || '').replace(/\s+/g, ' ').trim();
            applyCurrencySelection(val, label, true);
          });
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.disclosure')) {
          disclosures.forEach(disc => {
            const b = disc.querySelector('.disclosure__toggle');
            const l = disc.querySelector('.disclosure-list');
            if (b) b.setAttribute('aria-expanded', 'false');
            if (l) l.setAttribute('aria-expanded', 'false');
          });
        }
      });

      window.addEventListener('resize', function () {
        disclosures.forEach(disc => {
          if (!disc.closest('.logo-area__right')) return;
          const btn = disc.querySelector('.disclosure__toggle');
          if (btn && btn.getAttribute('data-full-label')) {
            btn.textContent = compactLabelForMobile(btn.getAttribute('data-full-label'));
          }
        });
      });

      // Helper to check if visitor is in the United States via IANA Timezone
      function isUSTimezone() {
        try {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
          if (!tz) return false;
          if (/^US\//i.test(tz) || tz === 'Pacific/Honolulu') return true;
          return /^America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Adak|Detroit|Boise|Menominee|Metlakatla|Nome|Sitka|Yakutat|Juneau|Indiana\/|Kentucky\/|North_Dakota\/)/i.test(tz);
        } catch (e) {
          return false;
        }
      }

      // 1. Check URL query parameter override (?currency=USD or ?country=US)
      const params = new URLSearchParams(window.location.search);
      const urlCur = (params.get('currency') || '').toUpperCase();
      const urlCountry = (params.get('country') || '').toUpperCase();
      if (urlCur === 'USD' || urlCountry === 'US') {
        applyCurrencySelection('US', 'United States (USD $)', false);
        return;
      }

      // 2. Check if user manually picked a currency earlier
      let manualChoice = false;
      try {
        manualChoice = localStorage.getItem('hq_user_manual_currency') === '1';
        const savedCountry = localStorage.getItem('hq_selected_country');
        const savedLabel = localStorage.getItem('hq_selected_label');
        if (manualChoice && savedCountry && savedLabel) {
          applyCurrencySelection(savedCountry, savedLabel, false);
          return;
        }
      } catch (e) {}

      // 3. Automatic US Detection (Synchronous Timezone + Async GeoIP)
      if (isUSTimezone()) {
        applyCurrencySelection('US', 'United States (USD $)', false);
        return;
      }

      // Check session-cached GeoIP first
      try {
        const cachedGeo = sessionStorage.getItem('hq_geo_country');
        if (cachedGeo === 'US') {
          applyCurrencySelection('US', 'United States (USD $)', false);
          return;
        } else if (cachedGeo) {
          const savedCountry = localStorage.getItem('hq_selected_country');
          const savedLabel = localStorage.getItem('hq_selected_label');
          if (savedCountry && savedLabel) {
            applyCurrencySelection(savedCountry, savedLabel, false);
          }
          return;
        }
      } catch (e) {}

      // Restore any previous non-manual selection while GeoIP checks in background
      try {
        const savedCountry = localStorage.getItem('hq_selected_country');
        const savedLabel = localStorage.getItem('hq_selected_label');
        if (savedCountry && savedLabel) {
          applyCurrencySelection(savedCountry, savedLabel, false);
        }
      } catch (e) {}

      // Lightweight GeoIP lookup for US visitors
      fetch('https://api.country.is/')
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(data => data && data.country ? data.country.toUpperCase() : '')
        .catch(() =>
          fetch('https://ipwho.is/')
            .then(r => r.ok ? r.json() : null)
            .then(d => d && d.country_code ? d.country_code.toUpperCase() : '')
            .catch(() => '')
        )
        .then(countryCode => {
          if (!countryCode) return;
          try { sessionStorage.setItem('hq_geo_country', countryCode); } catch (e) {}
          if (countryCode === 'US' && localStorage.getItem('hq_user_manual_currency') !== '1') {
            applyCurrencySelection('US', 'United States (USD $)', false);
          }
        });
    } catch (e) {}
  }

  // ============================================================
  // 15. SIZE GUIDE PAGE: FIX MISSING IMAGES, HIDE BLANK VIDEOS, & WIRE UP CM/IN TOGGLE
  // ============================================================
  function initSizeGuidePage() {
    try {
      // Fix broken Women's Size Guide image URL across any page or modal
      document.querySelectorAll('img[src*="sc-women-e9973375c9d4d589e12cbb6d14e9d170ed45d2268ca1ca80d8af31b1758fcbfe"]').forEach(img => {
        img.src = 'data:image/webp;base64,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';
      });

      // Remove broken 500px blank YouTube video containers inside How to Measure
      document.querySelectorAll('.vide_container').forEach(vc => vc.remove());

      // Inject Footwear Measurement Visual Diagram under Men's Footwear -> How to Measure if missing
      const footwearSec = document.querySelector('#size_mens-footwear .new_single_size_main, #mens_footwear');
      if (footwearSec && !footwearSec.querySelector('.size_img_text')) {
        const measureBlock = document.createElement('div');
        measureBlock.className = 'size_img_text';
        measureBlock.innerHTML = `
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:24px; text-align:center;">
            <svg viewBox="0 0 360 240" width="340" height="226" style="width:100% !important; max-width:340px !important; height:auto !important; min-height:220px !important; margin:0 auto !important; display:block !important;" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="8" width="344" height="224" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
              <text x="180" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a" letter-spacing="1">FOOT LENGTH &amp; WIDTH GUIDE</text>
              <path d="M105,155 C75,155 65,135 68,115 C71,95 92,86 125,88 C165,90 205,82 240,78 C268,75 288,88 290,112 C292,138 272,158 242,158 C202,158 145,155 105,155 Z" fill="#f1f5f9" stroke="#1e293b" stroke-width="2.5"/>
              <line x1="68" y1="185" x2="290" y2="185" stroke="#128C7E" stroke-width="2.5"/>
              <line x1="68" y1="177" x2="68" y2="193" stroke="#128C7E" stroke-width="2.5"/>
              <line x1="290" y1="177" x2="290" y2="193" stroke="#128C7E" stroke-width="2.5"/>
              <text x="179" y="206" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#128C7E">A. Foot Length (Heel to Longest Toe)</text>
              <line x1="235" y1="76" x2="235" y2="158" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,3"/>
              <circle cx="235" cy="78" r="3.5" fill="#0f172a"/>
              <circle cx="235" cy="158" r="3.5" fill="#0f172a"/>
              <text x="235" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0f172a">B. Ball Width</text>
            </svg>
          </div>
          <div class="size_text">
            <div class="mbl">
              <strong>1. Place Your Foot on Paper</strong>
              <p>Place a blank sheet of paper on a hard floor flush against a wall. Stand upright with your heel lightly touching the wall.</p>
            </div>
            <div class="mbl">
              <strong>2. Measure Foot Length (A)</strong>
              <p>Mark the tip of your longest toe on the paper and measure the distance from the wall edge in inches or centimeters.</p>
            </div>
            <div class="mbl">
              <strong>3. Measure Ball Width (B)</strong>
              <p>Measure across the widest part of your forefoot. If you are between two sizes or have a wide foot, we recommend sizing up by 0.5.</p>
            </div>
          </div>
        `;
        footwearSec.appendChild(measureBlock);
      }

      // Wire up CM / IN toggle buttons on Size Guide tables
      document.querySelectorAll('ul.table_types li[data-table]').forEach(btn => {
        if (btn.dataset.hqSizeToggle === '1') return;
        btn.dataset.hqSizeToggle = '1';
        btn.style.cursor = 'pointer';
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('data-table');
          const section = this.closest('.new_single_size_main, .size-guide-section') || document;
          section.querySelectorAll('ul.table_types li[data-table]').forEach(li => {
            const isMatch = li === this;
            li.classList.toggle('active', isMatch);
            li.classList.toggle('active_type', isMatch);
          });
          section.querySelectorAll('.size_table, .table_type_container').forEach(tbl => {
            const isMatch = tbl.id === targetId || tbl.getAttribute('data-table') === targetId;
            tbl.classList.toggle('active', isMatch);
          });
        });
      });
    } catch (e) {}
  }

  // ============================================================
  // 16. CONTACT US, RETURNS & TRACK ORDER INTERACTIVE WHATSAPP FORMS
  // ============================================================
  function initContactUsAndSupportForms() {
    try {
      // Update any legacy address block on Contact Us page
      const addressSec = document.querySelector('#shopify-section-contact-address, .address-section');
      if (addressSec && /Iconic Fashion|Evolution Fashion/i.test(addressSec.innerHTML)) {
        addressSec.innerHTML = `
          <div class="container">
            <h3 class="Heading u-h1" style="margin-bottom:24px;">OUR LOCATIONS &amp; DIRECT CONTACT</h3>
            <div class="address-box" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:24px;">
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:22px;">
                <p style="margin:0 0 6px 0; font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#128C7E;">USA Registered Office</p>
                <p style="margin:0 0 8px 0;"><strong>HQ Leathercon LLC</strong></p>
                <p style="margin:0; color:#475569; line-height:1.6;">Registered Manufacturer in the United States<br/>Global Client &amp; Bespoke Operations</p>
              </div>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:22px;">
                <p style="margin:0 0 6px 0; font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#128C7E;">Manufacturing &amp; Craftsmanship Hub</p>
                <p style="margin:0 0 8px 0;"><strong>HQ Leathercon Tannery &amp; Atelier</strong></p>
                <p style="margin:0; color:#475569; line-height:1.6;">Based in Pakistan — Handcrafted Full-Grain Leather Goods &amp; Worldwide Express Dispatch</p>
              </div>
              <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:22px;">
                <p style="margin:0 0 6px 0; font-size:12px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#128C7E;">24/7 Direct Customer Care</p>
                <p style="margin:0 0 8px 0;"><strong>WhatsApp &amp; Phone:</strong> <a href="https://wa.me/923440609206" target="_blank" rel="noopener noreferrer" style="color:#128C7E; font-weight:700; text-decoration:none;">+92 344 0609206</a></p>
                <p style="margin:0; color:#475569; line-height:1.6;"><strong>Email:</strong> <a href="mailto:contact@hqleathercon.com" style="color:#0f172a;">contact@hqleathercon.com</a></p>
              </div>
            </div>
          </div>
        `;
      }

      // Replace broken .pxFormGenerator ("Loading form...") with interactive HQ Leathercon Contact Form
      document.querySelectorAll('.pxFormGenerator').forEach(placeholder => {
        if (placeholder.dataset.hqFormReplaced === '1') return;
        placeholder.dataset.hqFormReplaced = '1';
        placeholder.className = 'hq-contact-form-card';
        placeholder.style.cssText = 'max-width:760px; margin:20px auto 36px auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:28px 24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); text-align:left;';
        placeholder.innerHTML = `
          <h3 style="margin:0 0 8px 0; font-size:20px; font-weight:700; color:#0f172a;">Send Us a Message</h3>
          <p style="margin:0 0 20px 0; font-size:14px; color:#475569;">Have a question about sizing, custom leather orders, wholesale manufacturing, or an existing order? Fill out the form below to message our team directly.</p>
          <form id="hq-interactive-contact-form" style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="grid-column:span 1;">
              <label style="display:block; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#334155; margin-bottom:6px;">Full Name *</label>
              <input type="text" name="name" required placeholder="Your Full Name" style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:14px; color:#0f172a; box-sizing:border-box;" />
            </div>
            <div style="grid-column:span 1;">
              <label style="display:block; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#334155; margin-bottom:6px;">Email Address *</label>
              <input type="email" name="email" required placeholder="you@example.com" style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:14px; color:#0f172a; box-sizing:border-box;" />
            </div>
            <div style="grid-column:span 1;">
              <label style="display:block; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#334155; margin-bottom:6px;">Phone / WhatsApp Number *</label>
              <input type="tel" name="phone" required placeholder="+1 (555) 000-0000" style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:14px; color:#0f172a; box-sizing:border-box;" />
            </div>
            <div style="grid-column:span 1;">
              <label style="display:block; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#334155; margin-bottom:6px;">Inquiry Type</label>
              <select name="subject" style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:14px; color:#0f172a; background:#ffffff; box-sizing:border-box;">
                <option value="Custom / Bespoke Leather Order">Custom / Bespoke Leather Order</option>
                <option value="Product & Sizing Inquiry">Product &amp; Sizing Inquiry</option>
                <option value="Wholesale / Bulk Manufacturing">Wholesale / Bulk Manufacturing</option>
                <option value="Order Status / Shipping">Order Status / Shipping</option>
                <option value="Return / Exchange Request">Return / Exchange Request</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            <div style="grid-column:1 / -1;">
              <label style="display:block; font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#334155; margin-bottom:6px;">Your Message *</label>
              <textarea name="message" rows="4" required placeholder="Tell us how we can help you..." style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:14px; color:#0f172a; box-sizing:border-box; resize:vertical;"></textarea>
            </div>
            <div style="grid-column:1 / -1;">
              <button type="submit" class="hq-whatsapp-order-btn" style="width:100%; padding:14px 20px; background:#128C7E; color:#ffffff; border:none; border-radius:6px; font-size:14px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase; cursor:pointer;">
                Send Message via WhatsApp (+92 344 0609206)
              </button>
            </div>
            <div id="hq-contact-form-status" style="grid-column:1 / -1; display:none; padding:14px; border-radius:6px; background:#ecfdf5; border:1px solid #10b981; color:#065f46; font-size:13.5px;"></div>
          </form>
        `;

        const form = placeholder.querySelector('#hq-interactive-contact-form');
        const statusEl = placeholder.querySelector('#hq-contact-form-status');
        if (form) {
          form.addEventListener('submit', function (e) {
            e.preventDefault();
            const fd = new FormData(form);
            const name = fd.get('name') || '';
            const email = fd.get('email') || '';
            const phone = fd.get('phone') || '';
            const subject = fd.get('subject') || 'General Inquiry';
            const message = fd.get('message') || '';

            if (statusEl) {
              statusEl.style.display = 'block';
              statusEl.innerHTML = '<strong>Thank you!</strong> Redirecting to WhatsApp (+92 344 0609206) to send your inquiry directly to HQ Leathercon.';
            }

            const waText = `Hi HQ Leathercon! New Contact Us Inquiry:\n• Name: ${name}\n• Email: ${email}\n• Phone: ${phone}\n• Topic: ${subject}\n• Message: ${message}`;
            window.open(`https://wa.me/${HQ_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`, '_blank', 'noopener,noreferrer');
          });
        }
      });
    } catch (e) {}
  }

  // ============================================================
  // 17. HELP CENTER LIVE FAQ SEARCH & ACCORDION ENHANCEMENT
  // ============================================================
  function initHelpAndPolicyPages() {
    try {
      const searchInp = document.querySelector('.faq-search__input');
      if (searchInp && searchInp.dataset.hqFaqSearch !== '1') {
        searchInp.dataset.hqFaqSearch = '1';
        const form = searchInp.closest('form');
        if (form) {
          form.addEventListener('submit', function (e) {
            e.preventDefault();
          });
        }
        searchInp.addEventListener('input', function () {
          const q = (this.value || '').trim().toLowerCase();
          document.querySelectorAll('.cc-accordion-item').forEach(item => {
            const text = (item.textContent || '').toLowerCase();
            const match = !q || text.includes(q);
            item.style.display = match ? '' : 'none';
            if (q && match) {
              item.classList.add('is-open');
              const panel = item.querySelector('.cc-accordion-item__panel');
              if (panel) panel.style.display = 'block';
            }
          });
        });
      }
    } catch (e) {}
  }

  // ============================================================
  // 18. CANONICAL FOOTER & BRANDING SYNC ACROSS ALL PAGES
  // ============================================================
  function syncCanonicalFooterAndBranding() {
    try {
      const footerSection = document.getElementById('shopify-section-footer');
      if (footerSection && !footerSection.querySelector('.footer__brand-block a[href*="923440609206"]')) {
        footerSection.innerHTML = `<div data-section-type="footer">
<div class="container container--no-max section-footer__row-container">
<div class="footer__brand-block" style="padding: 24px 0 18px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
  <a href="/hq-leathercon/index.html" style="display: inline-flex; flex-direction: column; align-items: center; text-decoration: none; text-align: center;">
    <img alt="HQ Leathercon" src="/hq-leathercon/images/hq-crest-logo.png" style="height: 56px; width: auto; max-height: 60px; object-fit: contain; margin: 0 auto 6px auto; display: block;">
    <span class="footer__brand-title" style="font-family: 'Cinzel', 'Playfair Display', Georgia, 'Times New Roman', serif; font-size: 17px; font-weight: 700; letter-spacing: 0.22em; color: #111111; text-transform: uppercase; line-height: 1.1;">HQ LEATHERCON</span>
  </a>
  <div style="font-size: 13px; color: #334155; line-height: 1.6;">
    <strong>Manufacturer Registered in USA, Based in Pakistan</strong><br>
    WhatsApp / Direct Order: <a href="https://wa.me/923440609206" target="_blank" rel="noopener noreferrer" style="color: #128C7E; font-weight: 700; text-decoration: none;">+92 344 0609206</a> &nbsp;|&nbsp;
    Email: <a href="mailto:contact@hqleathercon.com" style="color: #111111; text-decoration: underline;">contact@hqleathercon.com</a>
  </div>
</div>
<div class="section-footer__row section-footer__row--blocks" data-num-blocks="5">
<div aria-label="Secondary navigation" class="section-footer__row__col section-footer__menu-block" role="navigation">
<div class="section-footer__title heading-font h6-style no-wrap">Shop</div>
<ul class="section-footer__menu-block__menu">
<li><a class="no-wrap" href="/hq-leathercon/pages/men-jackets/index.html">Men's Outerwear</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/women-jackets/index.html">Women's Outerwear</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/eviternity/index.html">Men's Shoes</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/trucarry/index.html">Bags &amp; Accessories</a></li>
<li><a class="no-wrap" href="/hq-leathercon/collections/mens-leather-belts/index.html">Leather Belts</a></li>
<li><a class="no-wrap" href="/hq-leathercon/collections/leather-wallets/index.html">Leather Wallets</a></li>
<li><a class="no-wrap" href="/hq-leathercon/collections/clearance-sale/index.html">Clearance Sale</a></li>
</ul>
</div>
<div aria-label="Secondary navigation" class="section-footer__row__col section-footer__menu-block" role="navigation">
<div class="section-footer__title heading-font h6-style no-wrap">Bespoke</div>
<ul class="section-footer__menu-block__menu">
<li><a class="no-wrap" href="/hq-leathercon/products/custom-leather-jacket-builder/index.html">Design Your Own</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/custom-jackets/index.html">Custom Jackets</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/custom-made-shoes/index.html">Custom Shoes</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/custom-bag/index.html">Custom Bags</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/custom-leather-belts/index.html">Custom Belts</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/custom-leather-wallets/index.html">Custom Wallets</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/corporate-gifts/index.html">Corporate Gifts</a></li>
</ul>
</div>
<div aria-label="Secondary navigation" class="section-footer__row__col section-footer__menu-block" role="navigation">
<div class="section-footer__title heading-font h6-style no-wrap">Brand</div>
<ul class="section-footer__menu-block__menu">
<li><a class="no-wrap" href="/hq-leathercon/pages/our-story/index.html">Our Story</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/bespoke/index.html">Our Bespoke Process</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/reviews/index.html">Customer Reviews</a></li>
</ul>
</div>
<div aria-label="Secondary navigation" class="section-footer__row__col section-footer__menu-block" role="navigation">
<div class="section-footer__title heading-font h6-style no-wrap">Help &amp; Policies</div>
<ul class="section-footer__menu-block__menu">
<li><a class="no-wrap" href="/hq-leathercon/pages/help/index.html">Help Center &amp; FAQs</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/size-guide/index.html">Size Guide</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/contact-us/index.html">Contact Us</a></li>
<li><a class="no-wrap" href="/hq-leathercon/policies/shipping-policy/index.html">Shipping &amp; Delivery</a></li>
<li><a class="no-wrap" href="/hq-leathercon/policies/refund-policy/index.html">Return &amp; Refund Policy</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/returns/index.html">File a Return</a></li>
<li><a class="no-wrap" href="/hq-leathercon/pages/track-order/index.html">Track Order</a></li>
<li><a class="no-wrap" href="/hq-leathercon/policies/privacy-policy/index.html">Privacy Policy</a></li>
<li><a class="no-wrap" href="/hq-leathercon/policies/terms-of-service/index.html">Terms of Service</a></li>
</ul>
</div>
<div class="section-footer__row__col section-footer__newsletter-block">
<div class="section-footer__text">
<p>Sign up for exclusive offers, bespoke releases, and VIP pricing.</p>
</div>
<div class="signup-form">
<form accept-charset="UTF-8" action="https://wa.me/923440609206" class="contact-form" id="footer_newsletter_signup" method="get" target="_blank">
<p>
<input aria-label="Email" class="signup-form__email" name="text" placeholder="Enter email for VIP updates" required="" type="email" value="">
</p>
<button class="btn btn--primary signup-form__button" type="submit">Sign up</button>
</form>
</div>
<div style="margin-top: 14px;">
  <a href="https://wa.me/923440609206?text=Hi%20HQ%20Leathercon!%20I%20would%20like%20to%20inquire%20about%20your%20leather%20products." target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; padding:10px 16px; background:#128C7E; color:#ffffff; border-radius:6px; text-decoration:none; font-size:12.5px; font-weight:700; letter-spacing:0.05em; text-transform:uppercase;">
    <span>Chat on WhatsApp: +92 344 0609206</span>
  </a>
</div>
</div>
</div>
</div>
<div class="container container--no-max section-footer__row-container">
<div class="section-footer__row section-footer__row-lower">
<div class="section-footer__row__col"></div>
<div class="section-footer__row__col">
<div class="copyright">
<span class="copy">© 2026 <a href="/hq-leathercon/index.html">HQ Leathercon</a>. Registered in USA, Manufacturing Based in Pakistan. All Rights Reserved.</span>
</div>
</div>
</div>
</div>
</div>`;
      }
      if (footerSection && window.innerWidth <= 768) {
        footerSection.querySelectorAll('.section-footer__menu-block').forEach(block => {
          if (block.dataset.hqFooterAcc === '1') return;
          block.dataset.hqFooterAcc = '1';
          const title = block.querySelector('.section-footer__title');
          const menu = block.querySelector('.section-footer__menu-block__menu');
          if (!title || !menu) return;
          title.style.cursor = 'pointer';
          title.addEventListener('click', function (e) {
            if (window.innerWidth > 768) return;
            e.preventDefault();
            e.stopPropagation();
            const isOpen = block.classList.toggle('is-open');
            menu.style.setProperty('display', isOpen ? 'block' : 'none', 'important');
          }, true);
        });
      }
    } catch (e) {}
  }

  function init() {
    enforceCleanHeaderAndMobileNav();
    syncCanonicalFooterAndBranding();
    normalizeNavigationLinks();
    cleanLiquidTokens();
    initDesktopMegaMenu();
    initQuoteSlider();
    initHeroSlider();
    initAnnouncementBar();
    initCurrencySelector();
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
    initSizeGuidePage();
    initContactUsAndSupportForms();
    initHelpAndPolicyPages();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
