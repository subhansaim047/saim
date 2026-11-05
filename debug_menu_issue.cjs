const { chromium } = require('playwright');
const path = require('path');

const brainDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4';

async function diagnose() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  for (const w of [1280, 375]) {
    const isMobile = w < 768;
    const context = await browser.newContext({
      viewport: { width: w, height: 800 },
      isMobile,
      hasTouch: isMobile
    });
    const page = await context.newPage();

    const consoleMessages = [];
    const pageErrors = [];
    page.on('console', msg => consoleMessages.push({ type: msg.type(), text: msg.text() }));
    page.on('pageerror', err => pageErrors.push(err.message));

    await page.goto('http://127.0.0.1:8080/hotbite/index.html', { waitUntil: 'load' });
    await page.waitForTimeout(3000);

    const diagnostics = await page.evaluate(() => {
      // 1. Food Menu section (#Menu)
      const menuSection = document.querySelector('#Menu');
      const menuSectionRect = menuSection ? menuSection.getBoundingClientRect() : null;
      const menuSectionStyle = menuSection ? window.getComputedStyle(menuSection) : null;
      const menuCards = document.querySelectorAll('.hb-menu-card');
      const menuItems = document.querySelectorAll('.hb-item-row');
      const categoryBlocks = document.querySelectorAll('.hb-category-block');
      const tabs = document.querySelectorAll('.hb-tab-btn');

      // 2. Navigation Menu in Header
      const navDesktop = document.querySelector('nav[data-framer-name="Desktop"]');
      const navMobile = document.querySelector('nav[data-framer-name*="Mobile"]');
      const navMenuBlock = document.querySelector('.framer-bu10d4');
      const navLinks = Array.from(document.querySelectorAll('nav a')).map(a => ({
        text: a.innerText.trim(),
        href: a.getAttribute('href'),
        visible: window.getComputedStyle(a).display !== 'none' && window.getComputedStyle(a).opacity !== '0'
      }));

      // Check all main sections
      const sections = ['#About', '#oresto-pizza-why-best', '#Menu', '#oresto-burger-talking', '#Featured', '#Testimonials', '#Contact', 'footer'].map(sel => {
        const el = document.querySelector(sel);
        if (!el) return { selector: sel, exists: false };
        const r = el.getBoundingClientRect();
        const s = window.getComputedStyle(el);
        return {
          selector: sel,
          exists: true,
          display: s.display,
          visibility: s.visibility,
          opacity: s.opacity,
          height: Math.round(r.height),
          width: Math.round(r.width),
          top: Math.round(r.top)
        };
      });

      return {
        menuSection: {
          exists: !!menuSection,
          height: menuSectionRect ? menuSectionRect.height : 0,
          display: menuSectionStyle ? menuSectionStyle.display : null,
          visibility: menuSectionStyle ? menuSectionStyle.visibility : null,
          opacity: menuSectionStyle ? menuSectionStyle.opacity : null,
          tabsCount: tabs.length,
          categoryBlocksCount: categoryBlocks.length,
          menuCardsCount: menuCards.length,
          menuItemsCount: menuItems.length
        },
        nav: {
          desktopExists: !!navDesktop,
          mobileExists: !!navMobile,
          navLinks
        },
        sections
      };
    });

    console.log('=== DIAGNOSTICS FOR WIDTH ' + w + 'px ===');
    console.log('Console Messages:', consoleMessages);
    console.log('Page Errors:', pageErrors);
    console.log('Diagnostics:', JSON.stringify(diagnostics, null, 2));

    await page.screenshot({ path: path.join(brainDir, `check_view_${w}.png`), fullPage: true });

    // Also screenshot the #Menu section specifically if it exists
    const menuEl = await page.$('#Menu');
    if (menuEl) {
      await menuEl.screenshot({ path: path.join(brainDir, `check_menu_el_${w}.png`) });
    }

    await context.close();
  }

  await browser.close();
}

diagnose().catch(err => {
  console.error('Diagnosis error:', err);
  process.exit(1);
});
