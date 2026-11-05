const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
  await page.goto('http://127.0.0.1:8080/hotbite/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(2000);

  // Click hamburger
  await page.locator('.framer-1vrddk6-container').click();
  await page.waitForTimeout(1000);

  const navState = await page.evaluate(() => {
    const nav = document.querySelector('nav[data-framer-name*="Mobile"]');
    const menuBlock = document.querySelector('.framer-bu10d4');
    const menuItems = document.querySelector('.framer-ye4oxr');
    const contactBtn = document.querySelector('.framer-bk51yv-container');
    const links = Array.from(document.querySelectorAll('nav a')).map(a => {
      const r = a.getBoundingClientRect();
      const s = window.getComputedStyle(a);
      return {
        text: a.innerText.trim(),
        rect: { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.round(r.height) },
        style: {
          position: s.position,
          display: s.display,
          color: s.color,
          backgroundColor: s.backgroundColor
        }
      };
    });

    return {
      navClass: nav ? nav.className : null,
      menuBlockRect: menuBlock ? menuBlock.getBoundingClientRect() : null,
      menuBlockStyle: menuBlock ? {
        position: window.getComputedStyle(menuBlock).position,
        height: window.getComputedStyle(menuBlock).height,
        padding: window.getComputedStyle(menuBlock).padding,
        background: window.getComputedStyle(menuBlock).backgroundColor,
        overflow: window.getComputedStyle(menuBlock).overflow
      } : null,
      menuItemsRect: menuItems ? menuItems.getBoundingClientRect() : null,
      menuItemsStyle: menuItems ? {
        position: window.getComputedStyle(menuItems).position,
        top: window.getComputedStyle(menuItems).top,
        bottom: window.getComputedStyle(menuItems).bottom,
        left: window.getComputedStyle(menuItems).left,
        transform: window.getComputedStyle(menuItems).transform,
        display: window.getComputedStyle(menuItems).display,
        flexDirection: window.getComputedStyle(menuItems).flexDirection
      } : null,
      contactBtnRect: contactBtn ? contactBtn.getBoundingClientRect() : null,
      links
    };
  });

  console.log('Mobile nav state when open:', JSON.stringify(navState, null, 2));
  await browser.close();
})();
