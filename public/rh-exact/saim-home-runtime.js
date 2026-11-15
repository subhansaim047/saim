/* Saim Dev Homepage Deferred Runtime — consolidated from inline scripts for faster HTML parse */

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  // Dark sections: legacy class list + any element opted in via data-nav="dark" (used by new service pages)
  const darkSections = document.querySelectorAll('.section-case, .section-services, .section-founder, .section-footer, [data-nav="dark"]');
  
  let lastScrollY = window.scrollY;
  
  function checkNavbarPosition() {
    const currentScrollY = window.scrollY;
    const navbarRect = navbar.getBoundingClientRect();
    const navbarCenter = navbarRect.top + (navbarRect.height / 2);
    
    // Toggle scrolled frosted glass state on both desktop and mobile viewports
    if (currentScrollY > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    let isInDarkSection = false;
    
    darkSections.forEach(section => {
      const sectionRect = section.getBoundingClientRect();
      
      // Перевіряємо чи центр навбару знаходиться в межах секції
      if (navbarCenter >= sectionRect.top && navbarCenter <= sectionRect.bottom) {
        isInDarkSection = true;
      }
    });
    
    // Додаємо або видаляємо клас dark-mode
    if (isInDarkSection) {
      navbar.classList.add('dark-mode');
    } else {
      navbar.classList.remove('dark-mode');
    }
    
    lastScrollY = currentScrollY;
  }
  
  // Початкова перевірка — без анімації, щоб при завантаженні сторінки
  // navbar одразу стояв на потрібній позиції, не "виїжджаючи".
  // Далі transition повертається, і скрол лишається плавним.
  navbar.style.setProperty('transition', 'none', 'important');
  checkNavbarPosition();
  void navbar.offsetHeight;
  navbar.style.removeProperty('transition');
  
  // Перевірка при скролі
  window.addEventListener('scroll', checkNavbarPosition);
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #6]', err);
  }
})();

;(function () {
  try {
(function () {
  if (window.__lazySliderVideos) return; // the slider clones this embed; run once
  window.__lazySliderVideos = true;

  window.__rhHomeVideosArmed = window.__rhHomeVideosArmed || false;
  function load(v) { if (!v.getAttribute('src') && v.getAttribute('data-lazy-src')) { v.src = v.getAttribute('data-lazy-src'); v.load(); } }
  function play(v) {
    if (!window.__rhHomeVideosArmed) return;
    load(v);
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }

  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      e.target.__inSliderView = e.isIntersecting;
      if (e.isIntersecting && window.__rhHomeVideosArmed) play(e.target);
      else if (e.target.getAttribute('src') && !e.target.paused) e.target.pause();
    });
  }, { rootMargin: '150px 250px' }) : null;

  function armVideos() {
    if (window.__rhHomeVideosArmed) return;
    window.__rhHomeVideosArmed = true;
    [].slice.call(document.querySelectorAll('video[data-lazy-src]')).forEach(function (v) {
      if (v.__inSliderView || !io) play(v);
    });
  }
  function scheduleArmVideos() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(armVideos, { timeout: 600 });
    } else {
      setTimeout(armVideos, 200);
    }
  }
  if (document.readyState === 'complete') scheduleArmVideos();
  else window.addEventListener('load', scheduleArmVideos, { once: true });
  ['pointerenter', 'touchstart', 'pointerdown'].forEach(function (ev) {
    document.addEventListener(ev, function (e) {
      if (e.target && e.target.closest && e.target.closest('.wrapper-slider')) armVideos();
    }, { passive: true });
  });

  function scan() {
    [].slice.call(document.querySelectorAll('video[data-lazy-src]')).forEach(function (v) {
      if (v.__lazySeen) return;
      v.__lazySeen = true;
      if (io) io.observe(v); else play(v);
    });
  }

  var timer = null;
  function scanSoon() { if (!timer) timer = setTimeout(function () { timer = null; scan(); }, 100); }

  function boot() {
    scan();
    if ('MutationObserver' in window) new MutationObserver(scanSoon).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  if (document.readyState === 'complete') scan(); else window.addEventListener('load', scan, { once: true });
})();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #7]', err);
  }
})();

;(function () {
  try {
class InfiniteSlider {
        constructor(wrapperSelector) {
            this.wrapper = document.querySelector(wrapperSelector);
            this.slides = Array.from(this.wrapper.children);
            this.originalCount = this.slides.length;
            this.slideWidth = 0;
            this.totalWidth = 0;
            this.isDragging = false;
            this.startX = 0;
            this.currentTranslate = 0;
            this.prevTranslate = 0;
            this.animationID = null;
            this.autoScrollSpeed = 0.5;
            this.velocity = 0;
            this.lastX = 0;
            this.lastTime = Date.now();
            this.momentumID = null;
            this.resizeTimeout = null;

            // ---- FIX: слайдер виден или нет (scroll вне экрана / вкладка
            // свёрнута) — используется, чтобы не крутить autoScroll и не
            // декодировать видео впустую, когда их всё равно никто не видит.
            this.isSliderVisible = true;
            this.isPageVisible = document.visibilityState !== 'hidden';
            this.videoObserver = null;

            this.init();
        }

        init() {
            if (!window.__loaderAnimationComplete) {
                this.createLoadingOverlay();
                this.waitForLoaderThenReveal();
            }
            if (this.wrapper) this.wrapper.style.touchAction = 'pan-y';
            this.setupVideoObserver();
            this.observeSlideVideos(this.slides);
            this.cloneSlides();
            this.updateSlideWidth();
            this.setInitialPosition();
            this.addEventListeners();
            this.setupVisibilityObserver();
            this.startAutoScroll();

            window.addEventListener('resize', () => this.handleResize());
            document.addEventListener('visibilitychange', () => this.handlePageVisibility());
        }

        waitForLoaderThenReveal() {
            if (window.__loaderAnimationComplete) {
                this.animateLoadingOut();
                return;
            }
            window.addEventListener('loaderAnimationComplete', () => {
                this.animateLoadingOut();
            }, { once: true });
        }

        createLoadingOverlay() {
            this.slides.forEach(slide => {
                const overlay = document.createElement('div');
                overlay.className = 'slide-loading-overlay';
                overlay.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #f2f2f2;
                    z-index: 10;
                    pointer-events: none;
                `;
                slide.style.position = 'relative';
                slide.appendChild(overlay);
            });
        }

        animateLoadingOut() {
            if (this.__overlaysCleared) return;
            this.__overlaysCleared = true;
            const overlays = this.wrapper.querySelectorAll('.slide-loading-overlay');
            overlays.forEach((overlay, index) => {
                setTimeout(() => {
                    overlay.style.transition = 'opacity 0.2s ease, transform 0.26s cubic-bezier(0.65, 0, 0.35, 1)';
                    overlay.style.opacity = '0';
                    overlay.style.transform = 'translateX(100%)';
                    setTimeout(() => {
                        overlay.remove();
                    }, 270);
                }, Math.min(index, 6) * 20);
            });
            setTimeout(() => {
                this.wrapper.querySelectorAll('.slide-loading-overlay').forEach(el => el.remove());
            }, 450);
        }

        // Запускает воспроизведение видео вручную с обработкой ошибок
        // автовоспроизведения (например, если браузер заблокировал autoplay)
        playVideoSafely(video) {
            video.muted = true;
            video.setAttribute('muted', '');
            video.playsInline = true;
            var playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(function () {
                    var retry = function () {
                        video.play().catch(function () {});
                        document.removeEventListener('touchstart', retry);
                        document.removeEventListener('click', retry);
                    };
                    document.addEventListener('touchstart', retry, { once: true });
                    document.addEventListener('click', retry, { once: true });
                });
            }
        }

        // ---- FIX: единый IntersectionObserver на все видео слайдера
        // (и оригинальные, и клоны). Пока видео не попало в кадр — оно не
        // грузится и не декодируется вообще. Как только уходит из кадра —
        // ставится на паузу. Одновременно "живых" декодеров видео теперь
        // столько, сколько реально видно на экране (2-4), а не втрое больше.
        setupVideoObserver() {
            this.videoObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;
                    video.__inSliderView = entry.isIntersecting;
                    if (entry.isIntersecting) {
                        if (!window.__rhHomeVideosArmed) return;
                        if (!video.__loaderSliderLoaded) {
                            video.__loaderSliderLoaded = true;
                            if (!video.getAttribute('src') && video.getAttribute('data-lazy-src')) {
                                video.src = video.getAttribute('data-lazy-src');
                            }
                            video.load();
                        }
                        this.playVideoSafely(video);
                    } else {
                        video.pause();
                    }
                });
            }, { root: null, rootMargin: '200px', threshold: 0 });
        }

        observeSlideVideos(slides) {
            slides.forEach(slide => {
                var videos = slide.querySelectorAll('video');
                videos.forEach(video => {
                    video.setAttribute('draggable', 'false');
                    this.videoObserver.observe(video);
                });
            });
        }

        cloneSlides() {
            const originalSlides = [...this.slides];

            for (let i = 0; i < 2; i++) {
                originalSlides.forEach(slide => {
                    const clone = slide.cloneNode(true);
                    const img = clone.querySelector('img');
                    if (img) img.setAttribute('draggable', 'false');

                    // Клонированные <video> с autoplay браузер не запускает
                    // сам по себе (autoplay срабатывает только при парсинге
                    // "родного" HTML, а не при вставке через appendChild).
                    // load() + play() теперь вызываются лениво, только когда
                    // конкретный клон реально попадёт в область видимости —
                    // см. setupVideoObserver().
                    this.wrapper.appendChild(clone);
                });
            }

            this.slides = Array.from(this.wrapper.children);
            this.observeSlideVideos(Array.from(this.wrapper.children).slice(this.originalCount));
        }

        updateSlideWidth() {
            if (this.slides.length > 0) {
                const slide = this.slides[0];
                const style = window.getComputedStyle(slide);
                this.slideWidth = slide.offsetWidth + parseFloat(style.marginRight) + 20;
            }
            this.totalWidth = this.slideWidth * this.originalCount;
        }

        setInitialPosition() {
            this.currentTranslate = -this.totalWidth;
            this.prevTranslate = this.currentTranslate;
            this.setSliderPosition();
        }

        addEventListeners() {
            this.wrapper.addEventListener('mousedown', (e) => this.dragStart(e));
            window.addEventListener('mousemove', (e) => this.drag(e));
            window.addEventListener('mouseup', () => this.dragEnd());

            this.wrapper.addEventListener('touchstart', (e) => this.dragStart(e), { passive: true });
            window.addEventListener('touchmove', (e) => this.drag(e), { passive: false });
            window.addEventListener('touchend', () => this.dragEnd(), { passive: true });
            window.addEventListener('touchcancel', () => this.dragEnd(), { passive: true });

            this.wrapper.addEventListener('contextmenu', (e) => e.preventDefault());
        }

        // ---- FIX: отдельный IntersectionObserver на сам слайдер целиком.
        // Если пользователь проскроллил дальше по странице и слайдера не
        // видно — останавливаем бесконечный requestAnimationFrame автоскролла.
        // Он и так ничего не рисует полезного, но продолжает грузить
        // главный поток каждый кадр без остановки.
        setupVisibilityObserver() {
            const sliderVisibilityObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    this.isSliderVisible = entry.isIntersecting;
                    this.syncAutoScrollState();
                });
            }, { root: null, rootMargin: '0px', threshold: 0 });

            sliderVisibilityObserver.observe(this.wrapper);
        }

        handlePageVisibility() {
            this.isPageVisible = document.visibilityState !== 'hidden';
            this.syncAutoScrollState();

            // на паузу/возобновление видимых видео при сворачивании вкладки
            const videos = this.wrapper.querySelectorAll('video');
            videos.forEach(video => {
                if (!this.isPageVisible) {
                    video.pause();
                } else if (this.isSliderVisible && video.__loaderSliderLoaded) {
                    this.playVideoSafely(video);
                }
            });
        }

        syncAutoScrollState() {
            const shouldRun = this.isSliderVisible && this.isPageVisible;
            if (shouldRun) {
                if (!this.isDragging && !this.animationID) {
                    this.startAutoScroll();
                }
            } else {
                this.cancelAutoScroll();
            }
        }

        dragStart(e) {
            this.isDragging = true;
            this.touchAxis = e.type.includes('mouse') ? 'x' : null;
            this.startX = this.getPositionX(e);
            this.startY = e.touches && e.touches[0] ? e.touches[0].clientY : 0;
            this.lastX = this.startX;
            this.lastTime = Date.now();
            this.velocity = 0;

            if (e.type.includes('mouse')) {
                this.wrapper.classList.add('grabbing', 'dragging');
                this.cancelMomentum();
                this.cancelAutoScroll();
                if (e.cancelable) e.preventDefault();
            }
        }

        drag(e) {
            if (!this.isDragging) return;

            if (e.touches && e.touches[0]) {
                if (this.touchAxis === null) {
                    const dx = Math.abs(e.touches[0].clientX - this.startX);
                    const dy = Math.abs(e.touches[0].clientY - this.startY);
                    if (dy > dx && dy > 4) {
                        this.isDragging = false;
                        this.touchAxis = 'y';
                        return;
                    }
                    if (dx <= 6) return;
                    this.touchAxis = 'x';
                    this.wrapper.classList.add('dragging');
                    this.cancelMomentum();
                    this.cancelAutoScroll();
                }
                if (this.touchAxis !== 'x') return;
            }

            if (e.cancelable) e.preventDefault();

            const currentPosition = this.getPositionX(e);
            const currentTime = Date.now();
            const diff = currentPosition - this.startX;
            const timeDiff = currentTime - this.lastTime;

            if (timeDiff > 0) {
                this.velocity = (currentPosition - this.lastX) / timeDiff;
            }

            this.lastX = currentPosition;
            this.lastTime = currentTime;

            this.currentTranslate = this.prevTranslate + diff;
            this.setSliderPosition();
        }

        dragEnd() {
            if (!this.isDragging) {
                this.touchAxis = null;
                return;
            }

            this.isDragging = false;
            this.touchAxis = null;
            this.wrapper.classList.remove('grabbing', 'dragging');
            this.prevTranslate = this.currentTranslate;

            this.applyMomentum();
        }

        applyMomentum() {
            const friction = 0.95;
            const minVelocity = 0.1;

            const momentum = () => {
                if (Math.abs(this.velocity) > minVelocity) {
                    this.currentTranslate += this.velocity * 16;
                    this.prevTranslate = this.currentTranslate;
                    this.velocity *= friction;

                    this.checkPosition();
                    this.setSliderPosition();

                    this.momentumID = requestAnimationFrame(momentum);
                } else {
                    this.velocity = 0;
                    this.checkPosition();
                    this.startAutoScroll();
                }
            };

            if (Math.abs(this.velocity) > minVelocity) {
                this.momentumID = requestAnimationFrame(momentum);
            } else {
                this.velocity = 0;
                this.checkPosition();
                setTimeout(() => {
                    this.startAutoScroll();
                }, 50);
            }
        }

        cancelMomentum() {
            if (this.momentumID) {
                cancelAnimationFrame(this.momentumID);
                this.momentumID = null;
            }
        }

        getPositionX(e) {
            if (e.type.includes('mouse')) return e.pageX;
            const pt = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
            return pt ? pt.clientX : (typeof e.clientX === 'number' ? e.clientX : this.lastX);
        }

        setSliderPosition() {
            // Округлення до цілого піксела прибирає мікро-тремтіння
            this.wrapper.style.transform = `translate3d(${Math.round(this.currentTranslate)}px, 0, 0)`;
        }

        checkPosition() {
            // Опорна точка — середній набір. Телепортуємо РІВНО на один набір,
            // щойно слайдер вийшов за його межі. Це безшовно, бо набори ідентичні.
            if (this.currentTranslate <= -this.totalWidth * 2) {
                this.currentTranslate += this.totalWidth;
                this.prevTranslate += this.totalWidth;
            } else if (this.currentTranslate >= 0) {
                this.currentTranslate -= this.totalWidth;
                this.prevTranslate -= this.totalWidth;
            }
        }

        startAutoScroll() {
            this.cancelAutoScroll();

            // ---- FIX: если слайдер сейчас не виден (проскроллили мимо)
            // или вкладка свёрнута — не запускаем цикл вообще, а не только
            // "не двигаем позицию внутри цикла", как было раньше.
            if (!this.isSliderVisible || !this.isPageVisible) return;

            const animate = () => {
                if (!this.isDragging && Math.abs(this.velocity) < 0.1) {
                    this.currentTranslate -= this.autoScrollSpeed;
                    this.prevTranslate = this.currentTranslate;
                    this.checkPosition();
                    this.setSliderPosition();
                }
                this.animationID = requestAnimationFrame(animate);
            };

            this.animationID = requestAnimationFrame(animate);
        }

        cancelAutoScroll() {
            if (this.animationID) {
                cancelAnimationFrame(this.animationID);
                this.animationID = null;
            }
        }

        handleResize() {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                const oldTotalWidth = this.totalWidth;

                let progress = 0;
                if (oldTotalWidth > 0) {
                    progress = (this.currentTranslate % oldTotalWidth) / oldTotalWidth;
                }

                this.updateSlideWidth();

                this.currentTranslate = -this.totalWidth + progress * this.totalWidth;
                this.prevTranslate = this.currentTranslate;

                this.checkPosition();
                this.setSliderPosition();
            }, 150);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new InfiniteSlider('.wrapper-slider');
    });
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #8]', err);
  }
})();

;(function () {
  try {
// Функція анімації лічильника
function animateCounter(elementId, targetValue, duration, prefix, suffix) {
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.warn(`Element with ID "${elementId}" not found`);
        return;
    }
    
    const startTime = performance.now();
    const startValue = 0;
    
    // Плавніша easing функція
    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easedProgress = easeOutCubic(progress);
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);
        
        // Оновлюємо текст з префіксом та суфіксом
        element.textContent = prefix + currentValue + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Встановлюємо фінальне значення без паузи
            element.textContent = prefix + targetValue + suffix;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Запуск анімацій для перших трьох лічильників
function startCounters() {
    animateCounter('number-text-1', 99, 2500, '', '+');
    animateCounter('number-text-2', 160, 2500, '', '+');
    animateCounter('number-text-3', 100, 2500, '', '%');
}

// Відстеження scroll in view для перших трьох лічильників
let hasAnimated = false;
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            startCounters();
        }
    });
}, {
    threshold: 0.3
});

// Окремий observer для number-text-4
let hasAnimated4 = false;
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated4) {
            hasAnimated4 = true;
            animateCounter('number-text-4', 5, 2000, '', 'x');
        }
    });
}, {
    threshold: 0.3
});

// Запуск після завантаження сторінки
window.addEventListener('load', function() {
    const firstCounter = document.getElementById('number-text-1');
    if (firstCounter) {
        observer.observe(firstCounter);
    }
    
    // Окремий observer для number-text-4
    const fourthCounter = document.getElementById('number-text-4');
    if (fourthCounter) {
        observer4.observe(fourthCounter);
    }
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #9]', err);
  }
})();

;(function () {
  try {
// Знаходимо collection list
const collectionList = document.querySelector('.collection-list-2');

if (collectionList) {
  // Знаходимо всі видимі елементи колекції
  const visibleItems = collectionList.querySelectorAll('.w-dyn-item:not([style*="display: none"])');
  
  console.log('Знайдено видимих елементів:', visibleItems.length);
  
  // Шукаємо потрібний елемент по слагу або тексту
  let targetElement = null;
  
  visibleItems.forEach(item => {
    // Перевіряємо по слагу в посиланні
    const link = item.querySelector('a[href*="elumity-is-an-ai-powered-knowledge-management-platform"]');
    
    // Або перевіряємо по тексту заголовка
    const heading = item.querySelector('h3, h2, h1, .heading');
    const hasMatchingText = heading && heading.textContent.includes('Elumity is an AI-powered knowledge management platform');
    
    if (link || hasMatchingText) {
      targetElement = item;
      console.log('Знайдено потрібний елемент:', item);
    }
  });
  
  // Якщо знайшли елемент, додаємо обробники подій
  if (targetElement) {
    const mouseProject = document.querySelector('.mouse-project');
    
    // Встановлюємо дефолтний курсор на картку
    targetElement.style.cursor = 'default';
    
    // Також встановлюємо дефолтний курсор на всі дочірні елементи
    const allChildren = targetElement.querySelectorAll('*');
    allChildren.forEach(child => {
      child.style.cursor = 'default';
    });
    
    if (mouseProject) {
      targetElement.addEventListener('mouseenter', () => {
        mouseProject.style.setProperty('display', 'none', 'important');
        console.log('Mouse project прихований');
      });
      
      targetElement.addEventListener('mouseleave', () => {
        mouseProject.style.removeProperty('display');
        console.log('Mouse project відображається знову');
      });
    } else {
      console.log('Елемент .mouse-project не знайдено');
    }
  } else {
    console.log('Елемент з слагом elumity не знайдено');
  }
}
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #10]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function() {
  const servicesView = document.querySelector('.services-view');
  const lineItems = document.querySelectorAll('.line-yellow');
  
  let activeImages = [];
  let occupiedPositions = [];
  let animationTimeouts = [];
  
  function getMaxWidth() {
    const vw = window.innerWidth;
    
    if (vw > 1440) return 480;
    if (vw > 1200) return 420;
    if (vw > 977) return 360;
    return 320;
  }
  
  function isDesktop() {
    return window.innerWidth > 977;
  }
  
  function isOverlapping(newPos, existingPositions) {
    const maxWidth = getMaxWidth();
    const minDistance = maxWidth * 0.7;
    
    for (let pos of existingPositions) {
      const newLeftPx = (newPos.left / 100) * window.innerWidth;
      const newTopPx = (newPos.top / 100) * window.innerHeight;
      const existingLeftPx = (pos.left / 100) * window.innerWidth;
      const existingTopPx = (pos.top / 100) * window.innerHeight;
      
      const distance = Math.sqrt(
        Math.pow(newLeftPx - existingLeftPx, 2) + 
        Math.pow(newTopPx - existingTopPx, 2)
      );
      
      if (distance < minDistance) {
        return true;
      }
    }
    return false;
  }
  
  function getRandomPosition() {
    const maxWidth = getMaxWidth();
    let attempts = 0;
    let position;
    
    do {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const padding = 20;
      
      const randomLeftPx = padding + Math.random() * (viewportWidth - maxWidth - padding * 2);
      const randomTopPx = padding + Math.random() * (viewportHeight - 300 - padding * 2);
      
      position = { 
        left: (randomLeftPx / viewportWidth) * 100,
        top: (randomTopPx / viewportHeight) * 100
      };
      
      attempts++;
      if (attempts > 150) break;
    } while (isOverlapping(position, occupiedPositions));
    
    return position;
  }
  
  function clearAllTimeouts() {
    animationTimeouts.forEach(timeout => clearTimeout(timeout));
    animationTimeouts = [];
  }
  
  function showImages(lineItem) {
    if (!isDesktop()) return;
    
    clearAllTimeouts();
    clearImages();
    
    const images = lineItem.querySelectorAll('img[image-service]');
    const maxWidth = getMaxWidth();
    
    images.forEach((img, index) => {
      const timeoutId = setTimeout(() => {
        if (!isDesktop()) return;
        
        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        imgClone.srcset = img.srcset || '';
        imgClone.alt = img.alt || '';
        imgClone.loading = 'lazy';
        
        const position = getRandomPosition();
        occupiedPositions.push(position);
        
        imgClone.style.position = 'fixed';
        imgClone.style.left = `${position.left}vw`;
        imgClone.style.top = `${position.top}vh`;
        imgClone.style.maxWidth = `${maxWidth}px`;
        imgClone.style.height = 'auto';
        imgClone.style.opacity = '0';
        imgClone.style.transform = 'scale(0.8)';
        imgClone.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        imgClone.style.pointerEvents = 'none';
        imgClone.style.zIndex = '60';
        imgClone.style.borderRadius = '8px';
        
        servicesView.appendChild(imgClone);
        activeImages.push(imgClone);
        
        const showTimeoutId = setTimeout(() => {
          imgClone.style.opacity = '1';
          imgClone.style.transform = 'scale(1)';
        }, 50);
        
        animationTimeouts.push(showTimeoutId);
      }, index * 1000);
      
      animationTimeouts.push(timeoutId);
    });
  }
  
  function clearImages() {
    activeImages.forEach(img => {
      img.style.opacity = '0';
      img.style.transform = 'scale(0.8)';
      
      setTimeout(() => {
        if (img.parentNode === servicesView) {
          servicesView.removeChild(img);
        }
      }, 500);
    });
    
    activeImages = [];
    occupiedPositions = [];
  }
  
  lineItems.forEach(lineItem => {
    lineItem.addEventListener('mouseenter', function() {
      showImages(this);
    });
    
    lineItem.addEventListener('mouseleave', function() {
      clearAllTimeouts();
      clearImages();
    });
  });
  
  servicesView.addEventListener('mouseleave', function() {
    clearAllTimeouts();
    clearImages();
  });
  
  window.addEventListener('resize', function() {
    if (!isDesktop()) {
      clearAllTimeouts();
      clearImages();
    }
  });
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #15]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function () {
  const bg = document.querySelector('.bg-pricing');
  const monthly = document.querySelector('.monthly');
  const threeMonthly = document.querySelector('._3-monthly');
  const monthlyBtn = monthly ? monthly.querySelector('.button-base-book') : null;
  const threeMonthlyBtn = threeMonthly ? threeMonthly.querySelector('.button-base-book') : null;
  const icon = threeMonthly ? threeMonthly.querySelector('.ic-16-pricing') : null;

  const desc1 = document.querySelector('.description-1');
  const desc2 = document.querySelector('.description-2');
  const div1 = document.querySelector('.div-1-pricing');
  const div2 = document.querySelector('.div-2-pricing');
  const list1 = document.querySelector('.list-black-pricing-1');
  const list2 = document.querySelector('.list-black-pricing-2');

  if (!bg || !monthly || !threeMonthly) return;

  function positionBgUnder(target) {
    const parent = bg.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    bg.style.left = (targetRect.left - parentRect.left) + 'px';
    bg.style.width = targetRect.width + 'px';
    bg.style.height = targetRect.height + 'px';
  }

  function switchToMonthly() {
    positionBgUnder(monthly);
    if (monthlyBtn) monthlyBtn.style.color = '#BAFF00';
    if (threeMonthlyBtn) threeMonthlyBtn.style.color = '#ffffff';
    if (icon) icon.style.color = '#ffffff';
    bg.dataset.active = 'monthly';

    if (desc1) desc1.style.display = 'block';
    if (desc2) desc2.style.display = 'none';
    if (div1) div1.style.display = 'flex';
    if (div2) div2.style.display = 'none';
    if (list1) list1.style.display = 'flex';
    if (list2) list2.style.display = 'none';
  }

  function switchToThreeMonthly() {
    positionBgUnder(threeMonthly);
    if (threeMonthlyBtn) threeMonthlyBtn.style.color = '#B5F900';
    if (monthlyBtn) monthlyBtn.style.color = '#ffffff';
    if (icon) icon.style.color = '#BAFF00';
    bg.dataset.active = '3monthly';

    if (desc1) desc1.style.display = 'none';
    if (desc2) desc2.style.display = 'block';
    if (div1) div1.style.display = 'none';
    if (div2) div2.style.display = 'flex';
    if (list1) list1.style.display = 'none';
    if (list2) list2.style.display = 'flex';
  }

  // Скрываем bg до инициализации
  bg.style.opacity = '0';
  bg.style.transition = 'none';

  function init() {
    // Начальные состояния
    if (desc2) desc2.style.display = 'none';
    if (div2) div2.style.display = 'none';
    if (list2) list2.style.display = 'none';

    positionBgUnder(monthly);
    if (monthlyBtn) monthlyBtn.style.color = '#BAFF00';
    if (threeMonthlyBtn) threeMonthlyBtn.style.color = '#ffffff';
    if (icon) icon.style.color = '#ffffff';
    bg.dataset.active = 'monthly';

    requestAnimationFrame(() => {
      bg.style.opacity = '1';
      requestAnimationFrame(() => {
        bg.style.transition = 'left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease';
        if (monthlyBtn) monthlyBtn.style.transition = 'color 0.35s ease';
        if (threeMonthlyBtn) threeMonthlyBtn.style.transition = 'color 0.35s ease';
        if (icon) icon.style.transition = 'color 0.35s ease';
      });
    });
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(init);
  } else {
    setTimeout(init, 0);
  }

  monthly.addEventListener('click', switchToMonthly);
  threeMonthly.addEventListener('click', switchToThreeMonthly);

  window.addEventListener('resize', function () {
    const currentActive = bg.dataset.active === '3monthly' ? threeMonthly : monthly;
    const saved = bg.style.transition;
    bg.style.transition = 'none';
    positionBgUnder(currentActive);
    requestAnimationFrame(() => { bg.style.transition = saved; });
  });
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #16]', err);
  }
})();

;(function () {
  try {
(function(){
function boot(){
  document.querySelectorAll('.section-faq .dropdown-2').forEach(function(dd){
    if(dd.__faq)return;dd.__faq=true;
    var top=dd.querySelector('.dropdown-top'),list=dd.querySelector('.dropdown-list-3');if(!top||!list)return;
    top.setAttribute('role','button');top.setAttribute('tabindex','0');top.setAttribute('aria-expanded','false');
    function toggle(e){
      if(e){e.preventDefault();e.stopPropagation();}
      var open=!dd.classList.contains('is-open');
      if(open){list.style.height=list.scrollHeight+'px';list.addEventListener('transitionend',function f(){if(dd.classList.contains('is-open'))list.style.height='auto';list.removeEventListener('transitionend',f);});}
      else{list.style.height=list.scrollHeight+'px';list.offsetHeight;list.style.height='0px';}
      dd.classList.toggle('is-open',open);top.setAttribute('aria-expanded',open?'true':'false');
    }
    top.addEventListener('click',toggle,true);
    top.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){toggle(e);}});
  });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #17]', err);
  }
})();

;(function () {
  try {
(function () {
  var d = document.documentElement;
  var p = window.location.pathname;
  var l = (d.getAttribute('lang') || '').toLowerCase();
  if (p === '/cz' || p.indexOf('/cz/') === 0 || l.indexOf('cs') === 0) {
    d.classList.add('is-cz');
  }
})();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #18]', err);
  }
})();

;(function () {
  try {
(function () {
  if (!document.documentElement.classList.contains('is-cz')) return;

  function swapIcon() {
    var icons = document.querySelectorAll('.cards .icon-24');
    if (icons.length < 2) return;
    var src = icons[0].getAttribute('src');
    if (!src) return;
    if (icons[1].getAttribute('src') === src) return;
    icons[1].setAttribute('src', src);
    icons[1].removeAttribute('srcset');
    icons[1].removeAttribute('sizes');
  }

  var A = '.part-black-2-pricing';
  var B = '.part-gray-2';

  function visible(sel) {
    var nodes = document.querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var r = n.getBoundingClientRect();
      if (n.offsetParent !== null && r.height > 0) return n;
    }
    return null;
  }

  function reset(n) {
    if (!n) return;
    n.style.top = '';
    n.style.position = '';
  }

  function align() {
    swapIcon();

    var a = visible(A);
    var b = visible(B);
    if (!a || !b) return;

    reset(a);
    reset(b);

    if (window.innerWidth < 992) return;

    var diff = b.getBoundingClientRect().top - a.getBoundingClientRect().top;
    if (Math.abs(diff) < 1) return;

    if (diff > 0) {
      b.style.position = 'relative';
      b.style.top = (-diff) + 'px';
    } else {
      a.style.position = 'relative';
      a.style.top = diff + 'px';
    }
  }

  var t;
  function schedule() {
    clearTimeout(t);
    t = setTimeout(align, 120);
  }

  swapIcon();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', align);
  } else {
    align();
  }

  window.addEventListener('load', align);
  window.addEventListener('resize', schedule);
  setTimeout(align, 400);
  setTimeout(align, 1200);

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(align);
  }
})();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #19]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function () {
    var isMobile = window.matchMedia('(max-width: 480px)').matches;
    if (isMobile) {
      // МОБИЛКА: наблюдаем за каждой карточкой отдельно
      var cards = document.querySelectorAll('.card-compare');
      if (!cards.length) return;
      var cardObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-animated');
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      cards.forEach(function (card) {
        cardObserver.observe(card);
      });
    } else {
      // ДЕСКТОП/ПЛАНШЕТ: один триггер на всю секцию
      var trigger = document.querySelector('.bottom_side-compare');
      if (!trigger) return;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            trigger.classList.add('is-animated');
            observer.unobserve(trigger);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(trigger);
    }
  });
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #20]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function () {
  var dropdownEls = document.querySelectorAll('.dropdoown-process');
  var instances = [];
  var mobileMQ = window.matchMedia('(max-width: 991px)');

  dropdownEls.forEach(function (trigger) {
    var textBlock = trigger.querySelector('.open-text-dropdown');
    var deliverables = trigger.querySelector('.deliverables-process');
    var leftSide = trigger.querySelector('.left_side-dropdown-process');
    var rightSide = trigger.querySelector('.right_side-dropdown-process');
    var iconWrapper = trigger.querySelector('.icon-plus-wrapper');
    var iconGraphic = trigger.querySelector('.ic-process');
    var gap24 = trigger.querySelector('.gap-24-process');
    var panels = [textBlock, deliverables].filter(Boolean);
    var isAnimating = false;
    var centerOffset = 0;

    function calcCenterOffset() {
      if (!leftSide || !iconWrapper) return 0;
      var leftHeight = leftSide.offsetHeight;
      var iconHeight = iconWrapper.offsetHeight;
      return Math.max(0, (leftHeight - iconHeight) / 2);
    }

    function applyClosedOffset() {
      centerOffset = calcCenterOffset();
      if (rightSide) {
        rightSide.style.marginTop = centerOffset + 'px';
      }
    }

    function positionIconMobile() {
      if (!iconWrapper) return;

      if (!mobileMQ.matches) {
        iconWrapper.style.top = '';
        iconWrapper.style.transform = '';
        return;
      }

      var parent = iconWrapper.offsetParent;
      if (!iconGraphic || !parent) return;

      var iconRect = iconGraphic.getBoundingClientRect();
      var parentRect = parent.getBoundingClientRect();
      var iconCenterY = iconRect.top + iconRect.height / 2;
      var topPx = iconCenterY - parentRect.top - iconWrapper.offsetHeight / 2;

      iconWrapper.style.top = topPx + 'px';
      iconWrapper.style.transform = 'none';
    }

    function alignDeliverablesMobile() {
      if (!rightSide) return;

      if (!mobileMQ.matches) {
        rightSide.style.marginLeft = '';
        return;
      }

      if (!gap24 || !leftSide) return;

      var gap24Rect = gap24.getBoundingClientRect();
      var leftRect = leftSide.getBoundingClientRect();
      var offset = gap24Rect.left - leftRect.left;

      rightSide.style.marginLeft = offset + 'px';
    }

    function refreshMobileLayout() {
      positionIconMobile();
      alignDeliverablesMobile();
    }

    applyClosedOffset();
    refreshMobileLayout();

    window.addEventListener('resize', function () {
      if (!trigger.classList.contains('is-open')) {
        applyClosedOffset();
      }
      refreshMobileLayout();
    });

    function openPanels() {
      isAnimating = true;
      trigger.classList.add('is-open');

      if (rightSide) {
        rightSide.style.marginTop = '0px';
      }

      panels.forEach(function (panel) {
        panel.style.display = 'flex';
        panel.classList.add('is-visible');
        panel.offsetHeight; // reflow
        panel.style.maxHeight = panel.scrollHeight + 'px';
      });

      setTimeout(function () {
        panels.forEach(function (panel) {
          panel.style.maxHeight = 'none';
        });
        isAnimating = false;
        refreshMobileLayout();
      }, 520);
    }

    function closePanels() {
      isAnimating = true;
      trigger.classList.remove('is-open');

      if (rightSide) {
        rightSide.style.marginTop = centerOffset + 'px';
      }

      panels.forEach(function (panel) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.offsetHeight; // reflow
        panel.style.maxHeight = '0px';
        panel.classList.remove('is-visible');
      });

      setTimeout(function () {
        panels.forEach(function (panel) {
          panel.style.display = 'none';
        });
        isAnimating = false;
        refreshMobileLayout();
      }, 500);
    }

    var instance = { trigger: trigger, open: openPanels, close: closePanels };
    instances.push(instance);

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      if (isAnimating) return;

      var isOpen = trigger.classList.contains('is-open');

      if (isOpen) {
        closePanels();
      } else {
        instances.forEach(function (other) {
          if (other !== instance && other.trigger.classList.contains('is-open')) {
            other.close();
          }
        });
        openPanels();
      }
    });
  });
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #21]', err);
  }
})();

;(function () {
  try {
(function(){
function boot(){
  var btn=document.querySelector('[data-copy-email]'),toast=document.querySelector('[data-copy-toast]');if(!btn)return;
  var tm;
  function show(){if(!toast)return;toast.classList.add('is-on');clearTimeout(tm);tm=setTimeout(function(){toast.classList.remove('is-on');},2200);}
  function fallback(t){var a=document.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';document.body.appendChild(a);a.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(a);}
  btn.addEventListener('click',function(e){e.preventDefault();var t=btn.getAttribute('data-copy-email');if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(show,function(){fallback(t);show();});}else{fallback(t);show();}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #22]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function () {
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.button').forEach(function (button) {
    var innerText = button.querySelector('.inner-text-btn');
    if (!innerText) return; // buttons without the roll markup are skipped, not fatal

    // Ensure a decorative second copy exists for the hover letter-roll without duplicating HTML text
    var divs = innerText.querySelectorAll('div');
    if (divs.length === 1) {
      var rollClone = divs[0].cloneNode(true);
      rollClone.setAttribute('aria-hidden', 'true');
      innerText.appendChild(rollClone);
    }

    // Split each label copy into letters (unchanged behaviour)
    innerText.querySelectorAll('div').forEach(function (div) {
      var text = div.textContent;
      div.innerHTML = '';
      text.split('').forEach(function (ch) {
        var span = document.createElement('span');
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        span.style.display = 'inline-block';
        span.style.position = 'relative';
        div.appendChild(span);
      });
    });

    var letters = innerText.querySelectorAll('span');
    var perDiv = letters.length / 2;
    // Same 15ms-per-letter cascade, both label copies in sync
    var cascade = function (i) { return (i % perDiv) * 0.015; };

    // overwrite:true kills the in-flight tween immediately, so the roll retargets from the current position
    button.addEventListener('mouseenter', function () {
      if (!canHover.matches || reduce.matches) return;
      gsap.to(letters, { y: '-100%', duration: 0.3, ease: 'power2.out', stagger: cascade, overwrite: true });
    });
    button.addEventListener('mouseleave', function () {
      if (!canHover.matches || reduce.matches) return;
      gsap.to(letters, { y: '0%', duration: 0.2, ease: 'power2.out', stagger: cascade, overwrite: true });
    });
  });
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #27]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Lenis === 'undefined') return;
  document.documentElement.classList.remove('lenis-stopped');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  let lenis = new Lenis({
    lerp: 0.14,
    wheelMultiplier: 1.0,
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
  });
  window.__saimLenis = lenis;
  window.addEventListener('load', function () {
    document.documentElement.classList.remove('lenis-stopped');
    lenis.resize();
  });
  setTimeout(function () { lenis.resize(); }, 450);
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  if (window.jQuery) {
    $("[data-lenis-start]").on("click", function () {
      lenis.start();
    });
    $("[data-lenis-stop]").on("click", function () {
      lenis.stop();
    });
    $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });
  }
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #29]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function() {
    if (!window.jQuery || !$.fn || !$.fn.slick) return;
    $(function() {
        //-------- Filter functionality ----------
        // Add class name of category slug to each slider item
        $('.card-slider_item').addClass(function() {
            return $(this).find('.card-category_slug').text() //class of element hidden in slider collection with category slug
        });
        // When you click a dropdown link, filter the slider
        $(".dropdown-link").click(function() {
            if ($(this).hasClass("cc-selected")) { //if the dropdown link is already selected, unselect and unfilter the slider
                $("#cms-slider").slick('slickUnfilter');
                $(this).removeClass("cc-selected");
            } else { //if the dropdown link isn't selected, add selected class and filter the slider
                $(".dropdown-link").removeClass("cc-selected");
                $(this).addClass("cc-selected");
                var filter = $(this).find('.dropdown-link_slug').text(); //class of element hidden in dropdown link with category slug
                var filterClass = '.' + filter; //add '.' before slug name to associate it as a class
                $("#cms-slider").slick('slickUnfilter'); //clear previous filter on slider
                $("#cms-slider").slick('slickFilter', filterClass); //filter the slider by the selected dropdown link's slug
            }
        });
        //-------- Configure slider ----------
        $('#cms-slider').slick({
            arrows: false,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 8000,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        //--------- Set custom nav ---------
        $('#cms-slider-right').click(function() {
            $('#cms-slider').slick('slickNext');
        });
        $('#cms-slider-left').click(function() {
            $('#cms-slider').slick('slickPrev');
        });
    });
    });
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #31]', err);
  }
})();

;(function () {
  try {
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card-clients');
  
  cards.forEach(card => {
    // Вимикаємо hover на старті
    card.style.pointerEvents = 'none';
    
    // Створюємо Intersection Observer для кожної картки
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Коли картка з'являється у viewport
          setTimeout(() => {
            card.style.pointerEvents = 'auto';
          }, 200);
          
          // Відключаємо observer після першого спрацювання
          observer.unobserve(card);
        }
      });
    }, {
      threshold: 0.2 // картка вважається видимою коли 20% з'явилось у viewport
    });
    
    // Починаємо спостерігати за карткою
    observer.observe(card);
  });
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #32]', err);
  }
})();

;(function () {
  try {
(function(){const NAV_VARIANT = "bar";

  (function () {
    if (window.__rhNavMenu) return; // the same menu may also arrive as an embed copied from Webflow
    window.__rhNavMenu = true;
    // Which variant to show: ?nav=pill|bar in the address wins and is remembered for this tab.
    var variant = NAV_VARIANT;
    try {
      var asked = new URLSearchParams(location.search).get('nav');
      if (asked === 'pill' || asked === 'bar') sessionStorage.setItem('navVariant', asked);
      variant = sessionStorage.getItem('navVariant') || variant;
    } catch (e) {}
    document.documentElement.setAttribute('data-nav', variant);

    var nav = document.querySelector('.navbar');
    var row = nav && nav.querySelector('.div-block-10');
    var cta = row && row.querySelector('.g-48-copy');
    var tpl = document.getElementById('nav-menu-tpl');
    if (!row || !cta || !tpl) return;
    var frag = tpl.content.cloneNode(true);
    row.insertBefore(frag.querySelector('.nav-links'), cta);
    row.appendChild(frag.querySelector('.nav-burger'));
    document.body.appendChild(frag.querySelector('.nav-mobile')); // full-screen panel, kept out of the bar so nothing clips it
    nav.insertBefore(frag.querySelector('.nav-backdrop'), nav.firstChild);
    nav.insertBefore(frag.querySelector('.nav-blur'), nav.firstChild);

    // Desktop dropdowns: open on hover and on click (keyboard, touch); Escape or a click elsewhere closes them.
    var items = [].slice.call(row.querySelectorAll('.nav-item')).filter(function (el) { return el.querySelector('.nav-drop, .nav-mega'); });
    // Mega panel (Services): the RH logo is the phone menu's animated one, copied once; the bar's bottom edge
    // sets --mega-row (where the line runs) and the logo sits exactly over the bar's logo.
    var homeLogo = row.querySelector('.link-home-1');
    function prepMega(item) {
      var mega = item.querySelector('.nav-mega');
      if (!mega) return false;
      var rh = mega.querySelector('.nav-mega-rh'), src = document.querySelector('#nav-menu-tpl') && document.getElementById('nav-mobile');
      if (rh && !rh.firstChild && src) { var svg = src.querySelector('.nav-m-logo svg, .nav-m-logo img'); if (svg) rh.appendChild(svg.cloneNode(true)); }
      // the bar never moves vertically (Robin 2026-10-16); the panel is full-screen wide from the window's top edge
      var rr = row.getBoundingClientRect();
      mega.style.setProperty('--mega-row', Math.round(rr.bottom + 20) + 'px'); // line 20px under the bar
      // content edges: the 1128px container centred in the panel, its columns padded 40px
      var pw = document.documentElement.clientWidth, cw = Math.min(1128, pw - 40), pad = parseFloat(getComputedStyle(mega.querySelector('.nav-mega-col')).paddingLeft) || 40, cl = (pw - cw) / 2, inL = cl + pad, inR = cl + cw - pad;
      // only the logo and the contact button slide in to those edges; the links in the middle stay put
      var ctaEl = row.querySelector('.g-48-copy');
      // (measured without their current slide, which may be mid-way)
      var restX = function (el) { var t = getComputedStyle(el).transform; return t && t !== 'none' ? new DOMMatrixReadOnly(t).m41 : 0; };
      if (homeLogo) nav.style.setProperty('--mega-dl', Math.round(inL - (homeLogo.getBoundingClientRect().left - restX(homeLogo))) + 'px');
      if (ctaEl) nav.style.setProperty('--mega-dr', Math.round(inR - (ctaEl.getBoundingClientRect().right - restX(ctaEl))) + 'px');
      if (rh && homeLogo) { var lr = homeLogo.getBoundingClientRect(); rh.style.left = inL + 'px'; rh.style.top = lr.top + 'px'; rh.style.width = lr.width + 'px'; rh.style.height = lr.height + 'px'; }
      return true;
    }
    function set(item, open) {
      var mega = open && prepMega(item);
      item.classList.toggle('is-open', open);
      item.querySelector('button').setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-drop-open', items.some(function (i) { return i.classList.contains('is-open'); }));
      var wasMega = nav.classList.contains('is-mega-open');
      nav.classList.toggle('is-mega-open', items.some(function (i) { return i.classList.contains('is-open') && i.querySelector('.nav-mega'); }));
      var isMega = nav.classList.contains('is-mega-open');
      if (isMega && !wasMega) frozen = nav.classList.contains('scrolled');
      if (!isMega && wasMega) { frozen = null; nav.classList.toggle('scrolled', window.innerWidth > 920 && window.scrollY > 50); }
    }
    // While the big panel is open the bar keeps the state it opened in: the pages' scroll script would otherwise
    // switch it to its scrolled position (higher up) and the panel would jump. Closing hands it back.
    var frozen = null;
    new MutationObserver(function () {
      if (frozen !== null && nav.classList.contains('scrolled') !== frozen) nav.classList.toggle('scrolled', frozen);
    }).observe(nav, { attributes: true, attributeFilter: ['class'] });
    function closeAll(except) { items.forEach(function (i) { if (i !== except) set(i, false); }); }
    items.forEach(function (item) {
      var timer = null;
      item.addEventListener('mouseenter', function () { clearTimeout(timer); closeAll(item); set(item, true); });
      // the big panel stays open while the pointer is anywhere on the bar or the panel (e.g. on the way to
      // Get in touch); the small dropdowns close when it leaves their item
      var zone = item.querySelector('.nav-mega') ? row : item;
      zone.addEventListener('mouseleave', function () { timer = setTimeout(function () { set(item, false); }, 180); });
      if (zone !== item) zone.addEventListener('mouseenter', function () { clearTimeout(timer); });
      item.querySelector('button').addEventListener('click', function () {
        var open = !item.classList.contains('is-open'); closeAll(item); set(item, open);
      });
      item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) set(item, false); });
    });

    // Mobile panel: full-screen; Services unfolds downwards.
    var burger = row.querySelector('.nav-burger'), panel = document.getElementById('nav-mobile');
    var slot = panel.querySelector('.nav-m-logo');
    var closeBtn = panel.querySelector('.nav-m-close'), barLogo = row.querySelector('.link-home-1');
    // Put the panel's logo and close button exactly over the bar's logo and menu button, so nothing jumps.
    function place(el, from) {
      if (!el || !from) return;
      var r = from.getBoundingClientRect();
      if (!r.width) return;
      el.style.top = r.top + 'px'; el.style.left = r.left + 'px'; el.style.right = 'auto';
      el.style.width = r.width + 'px'; el.style.height = r.height + 'px';
    }
    function fold(btn, open) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.nextElementSibling.classList.toggle('is-open', open);
    }
    function setMenu(open) {
      if (open) {
        place(closeBtn, burger); place(slot, barLogo);
        // the links and the contact button share the bar's left and right edges
        var edge = barLogo && barLogo.getBoundingClientRect().left;
        if (edge > 0) panel.style.setProperty('--nav-m-x', Math.round(edge) + 'px');
      }
      nav.classList.toggle('is-menu-open', open);
      panel.classList.toggle('is-open', open);
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.documentElement.style.overflow = open ? 'hidden' : '';
      if (!open) [].forEach.call(panel.querySelectorAll('[data-fold]'), function (b) { fold(b, false); });
    }
    burger.addEventListener('click', function (e) { e.stopPropagation(); setMenu(!panel.classList.contains('is-open')); });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('.nav-m-close')) setMenu(false);
      else if (e.target.closest('[data-fold]')) { var b = e.target.closest('[data-fold]'); fold(b, b.getAttribute('aria-expanded') !== 'true'); }
      else if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeAll(); setMenu(false); } });
    document.addEventListener('click', function (e) { if (!row.contains(e.target) && !panel.contains(e.target)) { closeAll(); setMenu(false); } });
    window.addEventListener('resize', function () { if (window.innerWidth > 920 && panel.classList.contains('is-open')) setMenu(false); });
  })();
})();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #33]', err);
  }
})();

;(function () {
  try {
(function () {
    if (window.__rhWorkReveal) return;
    window.__rhWorkReveal = true;
    var items = [].slice.call(document.querySelectorAll('.item-work-pd'));
    if (!items.length || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Projects the visitor has already scrolled past (page reloaded further down) are shown straight away.
    items.forEach(function (el) { if (el.getBoundingClientRect().top < 0) el.classList.add('is-in'); });
    document.documentElement.classList.add('work-reveal');
    // A project whose image has not loaded yet is only a thin strip, so several would "enter" the screen at once.
    // Such a project waits for its image and is then judged again at its real size.
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, img = el.querySelector('img');
        if (img && !img.complete) {
          if (!el.__waiting) {
            el.__waiting = true;
            var again = function () { el.__waiting = false; io.unobserve(el); io.observe(el); };
            img.addEventListener('load', again, { once: true });
            img.addEventListener('error', again, { once: true });
          }
          return;
        }
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { if (!el.classList.contains('is-in')) io.observe(el); });
  })();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #34]', err);
  }
})();

;(function () {
  try {
(function () {
    if (window.__rhFooterReveal) return;
    window.__rhFooterReveal = true;
    function boot() {
      var footer = document.querySelector('.section-footer-pd');
      // pages with their own reveal script are left alone
      if (!footer || document.querySelector('.hero-pin-pd, .csi')) return;
      var over = footer.previousElementSibling;
      while (over && /^(SCRIPT|STYLE|TEMPLATE)$/.test(over.tagName)) over = over.previousElementSibling;
      if (!over) return;
      // the covering section needs a solid background, or the footer would show through it. It gets the colour the
      // visitor actually sees there: the body colour with every see-through layer above it (Recent work has a 25%
      // grey wrapper over white), so there is no step in colour under the heading.
      var bg = getComputedStyle(over).backgroundColor;
      if (!bg || bg === 'transparent' || /rgba\(.*,\s*0\)$/.test(bg)) {
        var rgba = function (s) { var m = s.match(/[\d.]+/g) || []; return [+m[0] || 0, +m[1] || 0, +m[2] || 0, m.length > 3 ? +m[3] : 1]; };
        var layers = [], el = over.parentElement;
        while (el && el !== document.body) { layers.unshift(rgba(getComputedStyle(el).backgroundColor)); el = el.parentElement; }
        var c = rgba(getComputedStyle(document.body).backgroundColor);
        if (c[3] < 1) c = [255, 255, 255, 1];
        layers.forEach(function (l) { for (var k = 0; k < 3; k++) c[k] = c[k] * (1 - l[3]) + l[k] * l[3]; });
        over.style.backgroundColor = 'rgb(' + c.slice(0, 3).map(Math.round).join(',') + ')';
      }
      over.classList.add('footer-reveal-over');
      footer.classList.add('footer-reveal');

      var SPEED = 0.08;
      var desktop = window.matchMedia('(min-width: 992px) and (hover: hover) and (pointer: fine)');
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
      var doc = document.documentElement, FH = 0, on = false;
      function apply() {
        if (!on) return;
        var r = doc.scrollHeight - window.innerHeight - window.scrollY;
        r = r < 0 ? 0 : r > FH ? FH : r;
        footer.style.transform = r ? 'translate3d(0,' + (-r * (1 - SPEED)).toFixed(2) + 'px,0)' : '';
      }
      function sync() {
        var want = desktop.matches && !reduce.matches;
        if (want) { on = true; FH = footer.offsetHeight; apply(); }
        else if (on) { on = false; footer.style.transform = ''; }
      }
      window.addEventListener('scroll', apply, { passive: true });
      window.addEventListener('resize', sync);
      window.addEventListener('load', sync);
      if (desktop.addEventListener) { desktop.addEventListener('change', sync); reduce.addEventListener('change', sync); }
      sync();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  })();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #35]', err);
  }
})();

;(function () {
  try {
(function () {
    var vids = document.querySelectorAll('video[data-inview-play]');
    if (!vids.length) return;
    if (!('IntersectionObserver' in window)) { vids.forEach(function (v) { v.play().catch(function () {}); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.play().catch(function () {}); else e.target.pause();
      });
    }, { rootMargin: '200px 0px', threshold: 0.01 });
    vids.forEach(function (v) { io.observe(v); });
  })();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #36]', err);
  }
})();

;(function () {
  try {
(function () {
    var chips = document.querySelectorAll('.tlm-chip-mad, .tl-chip-mad');
    if (!chips.length) return;
    chips.forEach(function (chip) {
      if (!chip.querySelector('.tl-info-mad')) return;
      chip.setAttribute('tabindex', '0');
      chip.addEventListener('click', function () {
        var open = chip.classList.contains('is-open');
        chips.forEach(function (c) { c.classList.remove('is-open'); });
        if (!open) chip.classList.add('is-open');
      });
    });
  })();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #37]', err);
  }
})();

;(function () {
  try {
(function () {
    function boot() {
      var cs = document.documentElement.lang === 'cs';
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // ---- 1. Squire card: lime cursor + link to the case study
      var phone = document.querySelector('.card-proof-pd.is-phone-pd');
      if (phone && !phone.__rh) {
        phone.__rh = true;
        var href = '/demos';
        phone.setAttribute('role', 'link'); phone.setAttribute('tabindex', '0');
        phone.setAttribute('aria-label', 'Explore Live Interactive Demos');
        var cur = document.createElement('div');
        cur.className = 'proof-cursor-pd'; cur.setAttribute('aria-hidden', 'true');
        cur.innerHTML = '<span></span><img alt="" src="/rh-exact/assets/6909ed375ee6ef22dffa47c2__6ab80bdb875181062419f2d6_pd-icon-arrow-up-right-dark.svg">';
        cur.firstChild.textContent = 'View Live Demos';
        phone.appendChild(cur);
        var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
        var place = function (e, instant) {
          var r = phone.getBoundingClientRect();
          if (instant) { cur.style.transition = 'none'; void cur.offsetWidth; }
          cur.style.translate = (e.clientX - r.left - 75) + 'px ' + (e.clientY - r.top - 75) + 'px';
          if (instant) { void cur.offsetWidth; cur.style.transition = ''; }
        };
        phone.addEventListener('mouseenter', function (e) { if (!fine.matches) return; place(e, true); cur.classList.add('is-on'); });
        phone.addEventListener('mousemove', function (e) { if (fine.matches) place(e); });
        phone.addEventListener('mouseleave', function () { cur.classList.remove('is-on'); });
        phone.addEventListener('click', function () { window.location.href = href; });
        phone.addEventListener('keydown', function (e) { if (e.key === 'Enter') window.location.href = href; });
      }

      // ---- 2. testimonial card: rotation
      var card = document.querySelector('.card-proof-pd.is-quote-pd');
      var data = [].slice.call(document.querySelectorAll('.data-testi-pd .d-testi-pd'));
      if (!card || card.__rh || data.length < 2) return;
      card.__rh = true;
      var pick = function (el, sel) { var x = el.querySelector(sel); return x ? x.textContent.trim() : ''; };
      var src = function (el, sel) { var x = el.querySelector(sel); return x ? (x.getAttribute('src') || '') : ''; };
      var q = cs ? ['„', '“'] : ['“', '”'];
      var slides = data.map(function (d) {
        return { quote: q[0] + pick(d, '.d-quote-pd') + q[1], name: pick(d, '.d-name-pd'), role: pick(d, '.d-role-pd'),
                 photo: src(d, '.d-photo-pd'), logo: src(d, '.d-logo-pd'), logoAlt: (d.querySelector('.d-logo-pd') || {}).alt || '' };
      });
      slides.forEach(function (s) { [s.photo, s.logo].forEach(function (u) { if (u) { var i = new Image(); i.src = u; } }); });

      var logo = card.querySelector('.proof-logo-pd');
      var quote = card.querySelector('.proof-quote-pd');
      var author = card.querySelector('.proof-author-pd');
      var photo = card.querySelector('.author-img-pd');
      var nameEl = card.querySelector('.author-text-pd .body-base-medium');
      var roleEl = card.querySelector('.author-text-pd .text-color-939393');
      var oldDots = card.querySelector('.proof-dots-pd');
      if (!logo || !quote || !author || !photo || !nameEl || !roleEl) return;
      [logo, quote, author].forEach(function (el) { el.classList.add('proof-rot-pd'); });
      logo.classList.add('is-rot-pd');
      logo.removeAttribute('srcset'); photo.removeAttribute('srcset'); photo.removeAttribute('sizes');

      var dots = document.createElement('div');
      dots.className = 'proof-dots-rot-pd';
      slides.forEach(function (s, k) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', (cs ? 'Reference ' : 'Testimonial ') + (k + 1) + ': ' + s.name);
        b.addEventListener('click', function () { go(k); restart(); });
        dots.appendChild(b);
      });
      if (oldDots) oldDots.replaceWith(dots); else card.insertBefore(dots, card.firstChild);

      function fill(s) {
        logo.src = s.logo; logo.alt = s.logoAlt;
        quote.textContent = s.quote;
        photo.src = s.photo; photo.alt = s.name;
        nameEl.textContent = s.name; roleEl.textContent = s.role;
      }
      function mark(k) { [].forEach.call(dots.children, function (b, j) { b.setAttribute('aria-current', j === k ? 'true' : 'false'); }); }

      // the card keeps the height it needs for the longest quote; logo, quote and author sit at its bottom
      // (margin-top: auto on the logo), so the spare room is between the dots and the logo
      function lock() {
        card.style.minHeight = '';
        var keep = quote.textContent, max = 0;
        slides.forEach(function (s) { quote.textContent = s.quote; max = Math.max(max, card.offsetHeight); });
        quote.textContent = keep;
        card.style.minHeight = max + 'px';
      }

      var i = 0, busy = false;
      fill(slides[0]); mark(0); lock();
      function go(k) {
        if (k === i || busy) return;
        i = k; mark(k);
        var parts = [logo, quote, author];
        if (reduce) { fill(slides[k]); return; }
        busy = true;
        parts.forEach(function (el, j) { el.style.transitionDelay = (j * 40) + 'ms'; el.classList.add('is-out'); });
        setTimeout(function () {
          fill(slides[k]);
          parts.forEach(function (el) { el.style.transitionDelay = ''; el.classList.remove('is-out'); el.classList.add('is-pre'); });
          void card.offsetWidth;
          parts.forEach(function (el, j) { el.style.transitionDelay = (j * 80) + 'ms'; el.classList.remove('is-pre'); });
          setTimeout(function () { parts.forEach(function (el) { el.style.transitionDelay = ''; }); busy = false; }, 900);
        }, 450);
      }

      // auto-rotation: every 6 s while the card is on screen, the tab is visible and nobody is hovering it
      var INTERVAL = 6000, timer = null, hover = false, inView = false;
      function stop() { clearInterval(timer); timer = null; }
      function restart() { stop(); if (!reduce && inView && !hover && !document.hidden) timer = setInterval(function () { go((i + 1) % slides.length); }, INTERVAL); }
      card.addEventListener('mouseenter', function () { hover = true; restart(); });
      card.addEventListener('mouseleave', function () { hover = false; restart(); });
      card.addEventListener('focusin', function () { hover = true; restart(); });
      card.addEventListener('focusout', function () { hover = false; restart(); });
      document.addEventListener('visibilitychange', restart);
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { inView = es[0].isIntersecting; restart(); }, { threshold: .3 }).observe(card);
      var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(lock, 150); });
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(lock);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  })();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #38]', err);
  }
})();

;(function () {
  try {
(function () {
    function boot() {
      document.querySelectorAll('.section-pricing-new').forEach(function (sec) {
        if (sec.__roll) return;
        var rows = [sec.querySelector('.div-1-pricing'), sec.querySelector('.div-2-pricing')];
        var btns = [sec.querySelector('.monthly'), sec.querySelector('._3-monthly')];
        if (!rows[0] || !rows[1] || !btns[0] || !btns[1]) return;
        sec.__roll = true;
        var num = function (row) { return row.querySelector('.number-l'); };
        var texts = rows.map(function (r) { return num(r).textContent.trim(); });
        // only rows whose numbers have the same shape ($5,995 / $5,395) roll; anything else just swaps as before
        var shape = function (t) { return t.replace(/\d/g, '0'); };
        if (shape(texts[0]) !== shape(texts[1])) return;
        var current = 0;
        function build(el, from) {
          var html = '', k = 0, digits = from.replace(/\D/g, '');
          for (var c = 0; c < from.length; c++) {
            if (/\d/.test(from[c])) {
              html += '<span class="pr-odo-d"><span style="transform:translateY(' + (-digits[k] * 10) + '%)"><i>0</i><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i></span></span>';
              k++;
            } else html += '<span>' + from[c] + '</span>';
          }
          el.innerHTML = '<span class="pr-odo" aria-hidden="true">' + html + '</span>';
        }
        function roll(to) {
          if (to === current) return;
          var el = num(rows[to]), from = texts[current], target = texts[to].replace(/\D/g, '');
          current = to;
          el.setAttribute('aria-label', texts[to]);
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = texts[to]; return; }
          build(el, from);
          el.offsetWidth;
          [].forEach.call(el.querySelectorAll('.pr-odo-d > span'), function (strip, n) {
            strip.style.setProperty('--od', (n * 0.06).toFixed(2) + 's');
            strip.style.transform = 'translateY(' + (-target[n] * 10) + '%)';
          });
        }
        // after the block's own handler has swapped the rows
        btns.forEach(function (b, k) { b.addEventListener('click', function () { setTimeout(function () { roll(k); }, 0); }); });
      });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  })();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #39]', err);
  }
})();

;(function () {
  try {
(function () {
  var prefetched = Object.create(null);
  function prefetchUrl(href) {
    if (!href || href.charAt(0) !== '/' || href.indexOf('.') !== -1) return;
    if (prefetched[href]) return;
    prefetched[href] = true;
    var link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  }
  document.addEventListener('pointerenter', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (a) prefetchUrl(a.getAttribute('href'));
  }, true);
  document.addEventListener('touchstart', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (a) prefetchUrl(a.getAttribute('href'));
  }, { passive: true, capture: true });
})();
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #40]', err);
  }
})();

;(function () {
  try {
document.addEventListener('keydown', function(e) {
  if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.getAttribute && e.target.getAttribute('role') === 'button') {
    e.preventDefault();
    e.target.click();
  }
});
  } catch (err) {
    if (window.console) console.error('[saim-home-runtime #41]', err);
  }
})();
