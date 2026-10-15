/* ==========================================================================
   O'Resto Pizza - Exploding Pizza Slice ScrollTrigger Physics Engine
   100% React-Hydration Immune & Self-Healing Mounter
   ========================================================================== */

(function() {
  let isAnimationBound = false;

  function initPizzaAnimation() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    const section = document.getElementById('oresto-pizza-why-best');
    if (!section) return;

    const layers = gsap.utils.toArray('#oresto-pizza-why-best .pbmit-tween-effect');
    if (!layers || layers.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      // Desktop (> 768px): Full exploding scrub physics
      "(min-width: 769px)": function() {
        layers.forEach((box) => {
          const yStart = parseFloat(box.getAttribute('data-y-start')) || 0;
          const yEnd = parseFloat(box.getAttribute('data-y-end')) || 0;
          const xStart = parseFloat(box.getAttribute('data-x-start')) || 0;
          const xEnd = parseFloat(box.getAttribute('data-x-end')) || 0;
          const rotStart = parseFloat(box.getAttribute('data-rotate-x-start')) || 0;
          const rotEnd = parseFloat(box.getAttribute('data-rotate-x-end')) || 0;

          gsap.set(box, {
            yPercent: yStart,
            xPercent: xStart,
            rotation: rotStart
          });

          gsap.to(box, {
            yPercent: yEnd,
            xPercent: xEnd,
            rotation: rotEnd,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 35%",
              scrub: 1.2
            }
          });
        });
      },

      // Mobile (<= 768px): Keep pizza perfectly assembled and stable
      "(max-width: 768px)": function() {
        layers.forEach((box) => {
          gsap.set(box, { clearProps: "all" });
        });
      }
    });

    isAnimationBound = true;
    ScrollTrigger.refresh();
  }

  function mountPizzaSection() {
    const menu = document.getElementById('Menu');
    if (!menu) return;

    let section = document.getElementById('oresto-pizza-why-best');
    if (!section) {
      const template = document.getElementById('oresto-pizza-template');
      if (template) {
        section = template.content.firstElementChild.cloneNode(true);
        menu.parentNode.insertBefore(section, menu);
        initPizzaAnimation();
      }
    } else if (section.nextElementSibling !== menu) {
      menu.parentNode.insertBefore(section, menu);
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    } else if (!isAnimationBound) {
      initPizzaAnimation();
    }
  }

  // Initial execution
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountPizzaSection);
  } else {
    mountPizzaSection();
  }

  // Safety timer to re-mount through React hydration cycles
  let attempts = 0;
  const timer = setInterval(() => {
    attempts++;
    mountPizzaSection();
    if (attempts > 35) clearInterval(timer);
  }, 150);

  // MutationObserver guarantees permanent presence in Framer DOM
  try {
    const observer = new MutationObserver(() => mountPizzaSection());
    observer.observe(document.body, { childList: true, subtree: true });
  } catch (e) {}

  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
})();
