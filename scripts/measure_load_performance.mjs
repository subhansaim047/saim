import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const start = Date.now();
  await page.goto('http://localhost:3017', { waitUntil: 'load' });
  const duration = Date.now() - start;

  console.log(`PAGE LOAD EVENT FIRED IN: ${duration}ms`);

  // Check if frame 0 is rendered to canvas
  const canvasDetails = await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return { found: false };
    const ctx = canvas.getContext('2d');
    const pixel = ctx ? ctx.getImageData(canvas.width / 2, canvas.height / 2, 1, 1).data : null;
    return {
      found: true,
      width: canvas.width,
      height: canvas.height,
      centerPixel: pixel ? Array.from(pixel) : null
    };
  });

  console.log('Canvas state:', canvasDetails);

  // Take screenshot of instant load
  await page.screenshot({ path: 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/instant_subsecond_load.png' });
  console.log('Saved instant_subsecond_load.png');

  await browser.close();
})();
