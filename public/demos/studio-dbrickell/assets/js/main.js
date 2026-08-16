/**
 * Studio-D Brickell Luxury Beauty Salon — Core JavaScript Module
 * Handles:
 *  1. Hero Slider (Ken Burns slideshow, timer, dot selection, pause on hover)
 *  2. Mobile Navigation Drawer & Accordion Dropdowns
 *  3. Testimonials Carousel (auto-advance, prev/next, dot indicators, touch swipe)
 *  4. Smooth Scrolling for Internal Links
 *  5. Sticky Header Scroll Classes
 *  6. Modal Dialog Helper
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initMobileNav();
  initTestimonialsCarousel();
  initSmoothScroll();
  initStickyHeader();
  initModalHelpers();
});

/* --------------------------------------------------------------------------
   1. Hero Slider Implementation
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot, .slider-nav .dot');
  const heroSection = document.querySelector('.hero-section');

  if (!slides.length) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  let slideInterval = null;
  const slideDuration = 5000;

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentSlide = index;

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
      }
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function stopAutoPlay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  // Dot Click Handlers
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoPlay();
    });
  });

  // Hover Pause
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoPlay);
    heroSection.addEventListener('mouseleave', startAutoPlay);
  }

  // Initialize first slide and start autoplay
  showSlide(0);
  startAutoPlay();
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer & Accordion Dropdowns
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('mobile-nav-close');
  const drawerLinks = drawer ? drawer.querySelectorAll('a:not(.mobile-accordion-header a)') : [];

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Close when clicking internal navigation anchor links
  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Mobile Accordion Toggle Handlers
  const accordionToggles = document.querySelectorAll('.mobile-accordion-toggle');
  accordionToggles.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentItem = btn.closest('.mobile-accordion-item');
      if (!parentItem) return;
      const content = parentItem.querySelector('.mobile-accordion-content');
      if (content) {
        content.classList.toggle('open');
        btn.classList.toggle('expanded');
      }
    });
  });

  const subAccordionToggles = document.querySelectorAll('.mobile-sub-accordion-toggle');
  subAccordionToggles.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentItem = btn.closest('.mobile-sub-accordion-item');
      if (!parentItem) return;
      const content = parentItem.querySelector('.mobile-sub-accordion-content');
      if (content) {
        content.classList.toggle('open');
        btn.classList.toggle('expanded');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Testimonials Carousel
   -------------------------------------------------------------------------- */
function initTestimonialsCarousel() {
  const track = document.getElementById('testimonials-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('#testimonial-dots .dot');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const container = document.querySelector('.testimonials-carousel-wrapper');

  if (!track || !slides.length) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;
  const autoPlayDelay = 6000;

  function updateCarousel(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      if (i === currentIndex) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  }

  function next() {
    updateCarousel(currentIndex + 1);
  }

  function prev() {
    updateCarousel(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, autoPlayDelay);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      next();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prev();
      startAutoplay();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      updateCarousel(i);
      startAutoplay();
    });
  });

  // Pause on hover
  if (container) {
    container.addEventListener('mouseenter', stopAutoplay);
    container.addEventListener('mouseleave', startAutoplay);
  }

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      next();
      startAutoplay();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prev();
      startAutoplay();
    }
  }

  updateCarousel(0);
  startAutoplay();
}

/* --------------------------------------------------------------------------
   4. Smooth Scrolling for Internal Links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.getElementById('site-header');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Sticky Header Scroll Indicator
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   6. Modal Dialog Helper
   -------------------------------------------------------------------------- */
function initModalHelpers() {
  const modal = document.getElementById('booking-success-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const doneBtn = document.getElementById('modal-done-btn');
  const backdrop = document.getElementById('modal-backdrop');

  function closeModal() {
    if (modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (doneBtn) doneBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
      closeModal();
    }
  });
}
