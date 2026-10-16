/* ==========================================================================
   O'Resto Burger - Exploding Burger ScrollTrigger Physics Engine
   100% Exact Anzaar Parity (Timing, Physics, Scroll-Up & Scroll-Down)
   100% React-Hydration Immune & Dynamic Layout Observer
   ========================================================================== */

(function() {
  let isAnimationBound = false;
  let refreshDebounce = null;

  function scheduleRefresh() {
    clearTimeout(refreshDebounce);
    refreshDebounce = setTimeout(() => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }, 120);
  }

  function initBurgerAnimation() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    const section = document.getElementById('oresto-burger-talking');
    if (!section || !document.body.contains(section)) return;

    const layers = gsap.utils.toArray('#oresto-burger-talking .pbmit-tween-effect');
    if (!layers || layers.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    // Clean up any pre-existing triggers on this section to prevent duplicates
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger && (st.trigger.id === 'oresto-burger-talking' || st.trigger.closest('#oresto-burger-talking'))) {
        st.kill(true);
      }
    });

    ScrollTrigger.matchMedia({
      // Desktop (> 768px): Exact Anzaar scrub explosion physics
      "(min-width: 769px)": function() {
        layers.forEach((box) => {
          const toppos = box.getAttribute('data-start-position') || "70%";
          const startPos = "top " + toppos;
          const endPos = "bottom 70%";

          const yStart = parseFloat(box.getAttribute('data-y-start')) || 0;
          const yEnd = parseFloat(box.getAttribute('data-y-end')) || 0;
          const xStart = parseFloat(box.getAttribute('data-x-start')) || 0;
          const xEnd = parseFloat(box.getAttribute('data-x-end')) || 0;
          const rotStart = parseFloat(box.getAttribute('data-rotate-x-start')) || 0;
          const rotEnd = parseFloat(box.getAttribute('data-rotate-x-end')) || 0;

          gsap.set(box, {
            xPercent: xStart,
            yPercent: yStart,
            rotation: rotStart
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: box,
              start: startPos,
              end: endPos,
              scrub: 1,
              invalidateOnRefresh: true
            },
            defaults: { ease: "none" }
          });

          tl.to(box, {
            xPercent: xEnd,
            yPercent: yEnd,
            rotation: rotEnd
          });
        });
      },

      // Mobile (<= 768px): Keep burger perfectly assembled and centered
      "(max-width: 768px)": function() {
        layers.forEach((box) => {
          gsap.set(box, { clearProps: "all" });
        });
      }
    });

    isAnimationBound = true;
    scheduleRefresh();
  }

  function mountBurgerSection() {
    const gallery = document.getElementById('Gallery');
    const testimonials = document.getElementById('Testimonials');
    const anchor = gallery || testimonials;
    if (!anchor) return;

    let section = document.getElementById('oresto-burger-talking');
    if (!section) {
      const template = document.getElementById('oresto-burger-template');
      if (template) {
        section = template.content.firstElementChild.cloneNode(true);
        if (gallery) {
          gallery.parentNode.insertBefore(section, gallery);
        } else if (testimonials && testimonials.nextElementSibling) {
          testimonials.parentNode.insertBefore(section, testimonials.nextElementSibling);
        } else {
          anchor.parentNode.appendChild(section);
        }
        initBurgerAnimation();
      }
    } else if (gallery && section.nextElementSibling !== gallery) {
      gallery.parentNode.insertBefore(section, gallery);
      scheduleRefresh();
    } else if (!isAnimationBound) {
      initBurgerAnimation();
    }
  }

  // Initial execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountBurgerSection);
  } else {
    mountBurgerSection();
  }

  // Safety timer to re-mount through React hydration cycles
  let attempts = 0;
  const timer = setInterval(() => {
    attempts++;
    mountBurgerSection();
    if (attempts > 35) clearInterval(timer);
  }, 150);

  // MutationObserver guarantees permanent presence in Framer DOM
  try {
    const observer = new MutationObserver(() => mountBurgerSection());
    observer.observe(document.body, { childList: true, subtree: true });
  } catch (e) {}

  // Layout observer: Automatically refreshes ScrollTrigger as images/fonts load
  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(() => scheduleRefresh());
    ro.observe(document.body);
  }

  window.addEventListener('load', scheduleRefresh);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleRefresh);
  }
})();
