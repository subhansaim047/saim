import { chromium } from 'playwright';
import fs from 'fs';

async function testBoth() {
  const browser = await chromium.launch({ headless: true });
  
  // Test Desktop
  const liveContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const livePage = await liveContext.newPage();
  console.log("Navigating to live page...");
  try {
    await livePage.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await livePage.waitForTimeout(3000);
  } catch (e) {
    console.log("Live load error:", e.message);
  }

  const localContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const localPage = await localContext.newPage();
  console.log("Navigating to local page...");
  await localPage.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await localPage.waitForTimeout(3000);

  // Compare 1: Header & Nav structure
  const liveNav = await livePage.evaluate(() => {
    return Array.from(document.querySelectorAll('header li, .site-nav li, .nav-item')).map(el => ({
      text: el.innerText.trim().split('\n')[0],
      hasChildren: el.querySelectorAll('ul, .sub-menu, .megamenu, .dropdown').length > 0
    })).filter(x => x.text);
  });

  const localNav = await localPage.evaluate(() => {
    return Array.from(document.querySelectorAll('header li, .site-nav li, .nav-item')).map(el => ({
      text: el.innerText.trim().split('\n')[0],
      hasChildren: el.querySelectorAll('ul, .sub-menu, .megamenu, .dropdown').length > 0
    })).filter(x => x.text);
  });

  console.log("\n--- Navigation comparison ---");
  console.log("Live nav count:", liveNav.length, "Sample:", liveNav.slice(0, 8));
  console.log("Local nav count:", localNav.length, "Sample:", localNav.slice(0, 8));

  // Compare 2: Hover on navigation items (Men, Women, Custom)
  for (const item of ['Men', 'Women', 'Custom', 'Bags & Accessories']) {
    console.log(`\nTesting hover on nav item: "${item}"`);
    const liveEl = await livePage.$(`header a:text-is("${item}"), nav a:text-is("${item}"), header a:has-text("${item}")`);
    if (liveEl) {
      await liveEl.hover();
      await livePage.waitForTimeout(500);
      await livePage.screenshot({ path: `audit/hover_live_${item.toLowerCase().replace(/[^a-z]/g, '_')}.png` });
    }

    const localEl = await localPage.$(`header a:text-is("${item}"), nav a:text-is("${item}"), header a:has-text("${item}")`);
    if (localEl) {
      await localEl.hover();
      await localPage.waitForTimeout(500);
      await localPage.screenshot({ path: `audit/hover_local_${item.toLowerCase().replace(/[^a-z]/g, '_')}.png` });
    }
  }

  // Compare 3: Sliders and Slick carousels
  const liveSlick = await livePage.evaluate(() => {
    return Array.from(document.querySelectorAll('.slick-slider, [data-slick]')).map(el => ({
      classes: el.className,
      slides: el.querySelectorAll('.slick-slide').length,
      visibleSlides: el.querySelectorAll('.slick-active').length
    }));
  });

  const localSlick = await localPage.evaluate(() => {
    return Array.from(document.querySelectorAll('.slick-slider, [data-slick]')).map(el => ({
      classes: el.className,
      slides: el.querySelectorAll('.slick-slide').length,
      visibleSlides: el.querySelectorAll('.slick-active').length
    }));
  });

  console.log("\n--- Sliders comparison ---");
  console.log("Live slick sliders count:", liveSlick.length, liveSlick);
  console.log("Local slick sliders count:", localSlick.length, localSlick);

  // Compare 4: Sections visual slices (Top 0-1000px, 1000-2000px, 2000-3000px, 3000-4000px, 4000-5000px, 5000-6000px, 6000-7900px)
  console.log("\nCapturing viewport slices for side-by-side visual inspection...");
  for (let y = 0; y < 8000; y += 1200) {
    await livePage.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await localPage.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await new Promise(r => setTimeout(r, 600));

    await livePage.screenshot({ path: `audit/slice_live_${y}.png` });
    await localPage.screenshot({ path: `audit/slice_local_${y}.png` });
  }

  // Compare 5: Mobile Drawer Menu
  console.log("\nTesting mobile drawer menu...");
  const liveMobContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const liveMob = await liveMobContext.newPage();
  try {
    await liveMob.goto('https://www.thejacketmaker.pk/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await liveMob.waitForTimeout(2000);
    // Find hamburger button
    const liveBurger = await liveMob.$('.menu-icon, .mobile-nav-trigger, [aria-label*="menu" i], .header-mobile__menu, .js-drawer-open-left, .mobile-menu-btn, button.icon-fallback-text');
    if (liveBurger) {
      await liveBurger.click();
      await liveMob.waitForTimeout(600);
      await liveMob.screenshot({ path: 'audit/mobile_drawer_live.png' });
    }
  } catch (e) {
    console.log("Live mobile error:", e.message);
  }

  const localMobContext = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true });
  const localMob = await localMobContext.newPage();
  await localMob.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  await localMob.waitForTimeout(2000);
  const localBurger = await localMob.$('.menu-icon, .mobile-nav-trigger, [aria-label*="menu" i], .header-mobile__menu, .js-drawer-open-left, .mobile-menu-btn, button.icon-fallback-text');
  if (localBurger) {
    await localBurger.click();
    await localMob.waitForTimeout(600);
    await localMob.screenshot({ path: 'audit/mobile_drawer_local.png' });
  }

  await browser.close();
  console.log("Deep comparison completed!");
}

testBoth().catch(console.error);
