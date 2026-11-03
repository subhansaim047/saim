/**
 * The Jacket Maker - High Performance Interactive Controller
 * Native integration with Slick Slider, Video Players, Swatches, and Filters
 */

(function () {
  'use strict';

  function initProductGallery() {
    const $ = window.jQuery;
    const $slideshow = $('.product-slideshow');
    const thumbLinks = Array.from(document.querySelectorAll('.thumbnails a'));

    // Unpack video templates in all slides
    const slides = Array.from(document.querySelectorAll('.product-slideshow .slide'));
    slides.forEach((slide) => {
      const videoTemplate = slide.querySelector('script.product-media__video-template');
      if (videoTemplate) {
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = videoTemplate.textContent || videoTemplate.innerHTML;
        const videoEl = tempDiv.querySelector('video');
        if (videoEl) {
          const sources = videoEl.querySelectorAll('source');
          sources.forEach(s => {
            let src = s.getAttribute('src');
            if (src && src.startsWith('//')) {
              s.setAttribute('src', 'https:' + src);
            }
          });
          let poster = videoEl.getAttribute('poster');
          if (poster && poster.startsWith('//')) {
            videoEl.setAttribute('poster', 'https:' + poster);
          }

          videoEl.setAttribute('controls', 'true');
          videoEl.setAttribute('playsinline', 'true');
          videoEl.setAttribute('preload', 'auto');
          videoEl.setAttribute('loop', 'true');
          videoEl.style.width = '100%';
          videoEl.style.height = '100%';
          videoEl.style.objectFit = 'cover';
          videoEl.style.position = 'absolute';
          videoEl.style.top = '0';
          videoEl.style.left = '0';
          videoEl.style.zIndex = '10';

          const mediaFrame = slide.querySelector('.product-media');
          if (mediaFrame) {
            mediaFrame.style.position = 'relative';
            mediaFrame.appendChild(videoEl);

            const posterEl = mediaFrame.querySelector('.product-media__poster');
            const playBtn = mediaFrame.querySelector('.product-media__video-play-btn');

            if (playBtn) {
              playBtn.style.zIndex = '15';
              playBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (posterEl) posterEl.style.display = 'none';
                playBtn.style.display = 'none';
                videoEl.play();
              });
            }

            videoEl.addEventListener('play', () => {
              if (posterEl) posterEl.style.display = 'none';
              if (playBtn) playBtn.style.display = 'none';
            });
          }
        }
      }
    });

    function highlightThumbnail(index) {
      thumbLinks.forEach((t, i) => {
        if (i === index) {
          t.classList.add('thumb--active');
          t.style.outline = '2px solid #000';
          t.style.outlineOffset = '2px';
        } else {
          t.classList.remove('thumb--active');
          t.style.outline = 'none';
        }
      });
    }

    if ($ && $slideshow.length) {
      // Hook into Slick afterChange
      $slideshow.on('afterChange', function (event, slick, currentSlide) {
        highlightThumbnail(currentSlide);

        // Manage video playback
        slides.forEach((s, idx) => {
          const video = s.querySelector('video');
          if (video) {
            if (idx === currentSlide) {
              const posterEl = s.querySelector('.product-media__poster');
              const playBtn = s.querySelector('.product-media__video-play-btn');
              if (posterEl) posterEl.style.display = 'none';
              if (playBtn) playBtn.style.display = 'none';
              video.currentTime = 0;
              const p = video.play();
              if (p) p.catch(() => { video.muted = true; video.play(); });
            } else {
              video.pause();
            }
          }
        });
      });

      // Hook thumbnail clicks to slickGoTo
      thumbLinks.forEach((link, idx) => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          $slideshow.slick('slickGoTo', idx);
        });
      });

      // Highlight initial thumbnail
      highlightThumbnail(0);
    }
  }

  function initProductSwatches() {
    // 1. Color Swatches
    const colorSwatches = Array.from(document.querySelectorAll('.custom-swatch a'));
    const colorLabel = document.querySelector('legend.label');

    colorSwatches.forEach(swatch => {
      swatch.addEventListener('click', function (e) {
        const title = (this.getAttribute('title') || '').trim();
        const href = this.getAttribute('href');

        const currentPath = window.location.pathname;
        if (href && href !== '#' && href !== currentPath && !href.endsWith(currentPath.split('/').pop())) {
          return;
        }

        e.preventDefault();
        colorSwatches.forEach(s => {
          s.style.outline = 'none';
          s.style.borderRadius = '50%';
        });
        this.style.outline = '2px solid #000';
        this.style.outlineOffset = '2px';
        this.style.borderRadius = '50%';

        if (colorLabel && title) {
          colorLabel.textContent = 'Color: ' + title;
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

    // 3. Add to Cart button feedback
    const addToCartBtn = document.querySelector('.product-form__add-button, [name="add"], .add-to-cart');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const oldText = this.innerHTML;
        this.innerHTML = '<span>Added to Cart &#10003;</span>';
        this.style.backgroundColor = '#10b981';
        this.style.color = '#ffffff';

        setTimeout(() => {
          this.innerHTML = oldText;
          this.style.backgroundColor = '';
          this.style.color = '';
        }, 2000);
      });
    }
  }

  function initCollectionInteractions() {
    // Filter accordions
    const filterHeadings = Array.from(document.querySelectorAll('.filter-group__heading'));
    filterHeadings.forEach(heading => {
      heading.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSelector = this.getAttribute('data-toggle-target');
        let target = null;
        if (targetSelector) {
          target = document.querySelector(targetSelector);
        } else {
          target = this.nextElementSibling;
        }
        if (target) {
          target.classList.toggle('toggle-target--hidden');
          if (target.classList.contains('toggle-target--hidden')) {
            target.style.display = 'none';
          } else {
            target.style.display = 'block';
          }
        }
      });
    });

    // Filter checkboxes (Color, Size, Material)
    const checkboxes = Array.from(document.querySelectorAll('.filter-group__checkbox'));
    const productCards = Array.from(document.querySelectorAll('.filters-adjacent .product-block'));

    if (checkboxes.length > 0 && productCards.length > 0) {
      checkboxes.forEach(cb => {
        cb.addEventListener('change', function () {
          const checked = checkboxes.filter(c => c.checked).map(c => {
            const label = c.closest('label');
            return label ? label.textContent.trim().toLowerCase() : '';
          }).filter(Boolean);

          if (checked.length === 0) {
            productCards.forEach(card => card.style.display = '');
            return;
          }

          productCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const matches = checked.some(term => cardText.includes(term));
            card.style.display = matches ? '' : 'none';
          });
        });
      });
    }
  }

  function init() {
    initProductGallery();
    initProductSwatches();
    initCollectionInteractions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
