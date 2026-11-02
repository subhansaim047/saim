import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3017', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(600);

  // Scroll to SVG chart in PerformanceSection
  await page.evaluate(() => {
    const svg = document.querySelector('svg line');
    const section = svg ? svg.closest('section') : null;
    if (section) {
      if (window.__lenis) {
        window.__lenis.scrollTo(section, { immediate: true });
      } else {
        section.scrollIntoView();
      }
    }
  });
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/transparent_performance_verified.png' });
  console.log('Saved transparent_performance_verified.png');

  await browser.close();
})();
