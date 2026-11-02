import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:3017...');
  await page.goto('http://localhost:3017', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);

  // Scroll to #benefits
  console.log('Scrolling to #benefits...');
  await page.evaluate(() => {
    const el = document.querySelector('#benefits');
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { immediate: true });
      } else {
        el.scrollIntoView();
      }
    }
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/transparent_benefits_verified.png' });
  console.log('Saved transparent_benefits_verified.png');

  // Scroll to PerformanceSection (Benchmark Engine)
  console.log('Scrolling to PerformanceSection...');
  await page.evaluate(() => {
    const el = document.querySelector('text=Benchmark Engine') || document.querySelector('h2:has-text("Performance")') || document.querySelector('svg');
    const target = el ? el.closest('section') : null;
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { immediate: true });
      } else {
        target.scrollIntoView();
      }
    } else {
      window.scrollTo(0, window.innerHeight * 2.5);
    }
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/transparent_performance_verified.png' });
  console.log('Saved transparent_performance_verified.png');

  await browser.close();
  console.log('Done verifying transparent sections!');
})();
