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
    const slides = Array.from(document.querySelectorAll('.product-slideshow .slide'));

    // Find the slide index that contains the video
    let videoSlideIndex = -1;
    slides.forEach((slide, idx) => {
      if (slide.querySelector('video') || slide.classList.contains('slide--video') || slide.querySelector('.product-media--video')) {
        videoSlideIndex = idx;
      }
    });

    // Ensure all videos in slideshow are properly configured
    const videos = Array.from(document.querySelectorAll('.product-slideshow video'));
    videos.forEach(v => {
      v.setAttribute('playsinline', 'true');
      v.setAttribute('loop', 'true');
      v.setAttribute('controls', 'true');
      v.style.width = '100%';
      v.style.height = '100%';
      v.style.objectFit = 'cover';
      v.style.position = 'absolute';
      v.style.top = '0';
      v.style.left = '0';
      v.style.zIndex = '5';

      // Hide any poster or button overlays when video is ready
      const parentMedia = v.closest('.product-media');
      if (parentMedia) {
        const posterEl = parentMedia.querySelector('.product-media__poster');
        const playBtn = parentMedia.querySelector('.product-media__video-play-btn');
        v.addEventListener('play', () => {
          if (posterEl) posterEl.style.display = 'none';
          if (playBtn) playBtn.style.display = 'none';
        });
      }
    });

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

    // Attach click listeners to all thumbnails
    thumbLinks.forEach((link, idx) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        highlightThumbnail(idx);

        if ($ && $slideshow.length && $slideshow.hasClass('slick-initialized')) {
          $slideshow.slick('slickGoTo', idx);
        }

        const isVideoThumb = link.classList.contains('thumbnail--media-video') ||
                             !!link.querySelector('.watchvideo') ||
                             link.hasAttribute('data-video-src') ||
                             idx === videoSlideIndex;

        if (isVideoThumb) {
          const activeVideo = document.querySelector('.product-slideshow video');
          if (activeVideo) {
            activeVideo.currentTime = 0;
            const p = activeVideo.play();
            if (p !== undefined) {
              p.catch(() => {
                activeVideo.muted = true;
                activeVideo.play();
              });
            }
          }
        } else {
          videos.forEach(v => v.pause());
        }
      });
    });

    if ($ && $slideshow.length) {
      // Hook into Slick afterChange
      $slideshow.on('afterChange', function (event, slick, currentSlide) {
        highlightThumbnail(currentSlide);

        if (currentSlide === videoSlideIndex) {
          const activeVideo = document.querySelector('.product-slideshow video');
          if (activeVideo) {
            const p = activeVideo.play();
            if (p !== undefined) {
              p.catch(() => {
                activeVideo.muted = true;
                activeVideo.play();
              });
            }
          }
        } else {
          videos.forEach(v => v.pause());
        }
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
