/* ==========================================================================
   O'Resto Burger - Exploding Burger ScrollTrigger Physics Engine
   100% React-Hydration Immune & Self-Healing Mounter
   ========================================================================== */

(function() {
  let isAnimationBound = false;

  function initBurgerAnimation() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    const section = document.getElementById('oresto-burger-talking');
    if (!section) return;

    const layers = gsap.utils.toArray('#oresto-burger-talking .pbmit-tween-effect');
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

      // Mobile (<= 768px): Keep burger perfectly assembled and centered
      "(max-width: 768px)": function() {
        layers.forEach((box) => {
          gsap.set(box, { clearProps: "all" });
        });
      }
    });

    isAnimationBound = true;
    ScrollTrigger.refresh();
  }

  function mountBurgerSection() {
    // Target position: After #Testimonials (before #Gallery)
    const testimonials = document.getElementById('Testimonials');
    const gallery = document.getElementById('Gallery');
    const anchor = testimonials || gallery;
    if (!anchor) return;

    let section = document.getElementById('oresto-burger-talking');
    if (!section) {
      const template = document.getElementById('oresto-burger-template');
      if (template) {
        section = template.content.firstElementChild.cloneNode(true);
        if (testimonials && testimonials.nextElementSibling) {
          testimonials.parentNode.insertBefore(section, testimonials.nextElementSibling);
        } else if (gallery) {
          gallery.parentNode.insertBefore(section, gallery);
        } else {
          anchor.parentNode.appendChild(section);
        }
        initBurgerAnimation();
      }
    } else {
      // Ensure it stays in the correct relative position if DOM gets rewritten
      const desiredParent = anchor.parentNode;
      const desiredNextSibling = (testimonials && testimonials.nextElementSibling !== section) ? testimonials.nextElementSibling : (gallery || null);
      
      if (section.parentNode !== desiredParent) {
        desiredParent.insertBefore(section, desiredNextSibling);
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }
      if (!isAnimationBound) {
        initBurgerAnimation();
      }
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

  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });
})();
