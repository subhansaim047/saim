const { chromium } = require('playwright');
const path = require('path');

const brainDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4';

async function audit() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  for (const width of [1280, 768, 375, 320]) {
    const isMobile = width < 768;
    const context = await browser.newContext({
      viewport: { width, height: 800 },
      isMobile,
      hasTouch: isMobile
    });
    const page = await context.newPage();

    const consoleErrors = [];
    const networkErrors = [];

    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    page.on('response', res => {
      if (res.status() >= 400) {
        networkErrors.push({ url: res.url(), status: res.status() });
      }
    });

    await page.goto('http://127.0.0.1:8080/hotbite/index.html', { waitUntil: 'load' });
    await page.waitForTimeout(2000);

    const auditResults = await page.evaluate((width) => {
      // 1. Broken images
      const imgs = Array.from(document.querySelectorAll('img'));
      const brokenImages = imgs
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => ({ src: img.src, alt: img.alt, class: img.className }));

      // 2. Horizontal overflow
      const docWidth = document.documentElement.scrollWidth;
      const windowWidth = window.innerWidth;
      const hasHorizontalOverflow = docWidth > windowWidth;

      // 3. Sections check
      const sections = ['Hero', 'About', 'oresto-pizza-why-best', 'Menu', 'oresto-burger-talking', 'Featured', 'Ticker', 'Testimonials', 'Gallery', 'Benefits', 'Order', 'Contact'];
      const sectionStatuses = sections.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, exists: false };
        const r = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return {
          id,
          exists: true,
          height: Math.round(r.height),
          display: style.display,
          visibility: style.visibility,
          opacity: style.opacity,
          top: Math.round(r.top)
        };
      });

      // 4. Menu Items count and Tabs count
      const tabs = Array.from(document.querySelectorAll('.hb-tab-btn')).map(t => t.innerText.trim());
      const menuItems = document.querySelectorAll('.hb-item-row').length;
      const menuBlock = document.querySelector('.framer-28kurd');
      const menuBlockStyle = menuBlock ? window.getComputedStyle(menuBlock) : null;

      // 5. Check if drawer or nav is visible
      const mobileNav = document.querySelector('nav[data-framer-name*="Mobile"]');
      const desktopNav = document.querySelector('nav[data-framer-name="Desktop"]');

      return {
        viewportWidth: width,
        hasHorizontalOverflow,
        docWidth,
        windowWidth,
        brokenImagesCount: brokenImages.length,
        brokenImages,
        tabs,
        menuItemsCount: menuItems,
        menuBlockOpacity: menuBlockStyle ? menuBlockStyle.opacity : null,
        menuBlockVisibility: menuBlockStyle ? menuBlockStyle.visibility : null,
        sections: sectionStatuses,
        mobileNavPresent: !!mobileNav,
        desktopNavPresent: !!desktopNav
      };
    }, width);

    console.log(`\n================== AUDIT FOR ${width}px ==================`);
    console.log('Console Errors:', consoleErrors);
    console.log('Network 4xx/5xx Errors:', networkErrors);
    console.log('Results:', JSON.stringify(auditResults, null, 2));

    await context.close();
  }

  await browser.close();
}

audit().catch(console.error);
