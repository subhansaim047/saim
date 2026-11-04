import { chromium } from 'playwright';

async function testInteractions() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  console.log("=== Testing Local Storefront Interactions ===");

  // 1. Hero slider arrows
  const heroNext = await page.$('.slideshow .slick-next, .slideshow button.next, .slideshow .slick-arrow');
  console.log("Hero slider arrow found:", !!heroNext);
  if (heroNext) {
    await heroNext.click();
    await page.waitForTimeout(600);
    console.log("Hero arrow clicked successfully.");
  }

  // 2. Best Sellers tabs / switcher
  const tabs = await page.$$('.tab-title, [data-tab], .collection-slider [role="tab"], .collection-slider a.tab');
  console.log("Best Sellers tabs found:", tabs.length);

  // 3. Review / quote slider arrows
  const quoteNext = await page.$('.quotes-carousel .slick-next, .quotes-carousel .slick-arrow');
  console.log("Quote carousel arrow found:", !!quoteNext);

  // 4. Color Swatches on product cards
  const swatches = await page.$$('.swatch, .swatch-view, .product-block [data-swatch]');
  console.log("Product swatches found:", swatches.length);

  // 5. Mobile Drawer
  const mobContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const mobPage = await mobContext.newPage();
  await mobPage.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await mobPage.waitForTimeout(2000);

  const burgerBtn = await mobPage.$('.mobile-nav-trigger, [aria-label*="menu" i], .js-drawer-open-left, .menu-icon');
  console.log("Mobile hamburger button found:", !!burgerBtn);
  if (burgerBtn) {
    await burgerBtn.click();
    await mobPage.waitForTimeout(800);
    const drawerOpen = await mobPage.evaluate(() => {
      const drawer = document.querySelector('.mobile-navigation-drawer, #NavDrawer, .drawer--left');
      if (!drawer) return false;
      const style = window.getComputedStyle(drawer);
      return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    });
    console.log("Mobile drawer opened:", drawerOpen);

    // Test expanding a submenu (e.g. MEN)
    const menAccordion = await mobPage.$('.mobile-navigation-drawer .navigation__children-toggle');
    console.log("Accordion toggle found in drawer:", !!menAccordion);
    if (menAccordion) {
      await menAccordion.click();
      await mobPage.waitForTimeout(500);
      await mobPage.screenshot({ path: 'audit/test_mobile_drawer_expanded.png' });
      console.log("Captured expanded mobile drawer screenshot.");
    }
  }

  await browser.close();
}

testInteractions().catch(console.error);
