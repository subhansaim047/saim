import { chromium } from 'playwright';

async function testOpacityFix() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'domcontentloaded' });
  
  // Scroll to Sec 10
  await page.evaluate(() => {
    const sec10 = document.querySelectorAll('div[id^="shopify-section-"]')[10];
    if (sec10) sec10.scrollIntoView();
  });
  await page.waitForTimeout(1000);

  // Apply opacity 1 to all images
  await page.evaluate(() => {
    document.querySelectorAll('.rimage__image').forEach(img => {
      img.style.opacity = '1';
      img.classList.add('lazyloaded');
    });
  });
  await page.waitForTimeout(1000);

  const sec10 = (await page.$$('div[id^="shopify-section-"]'))[10];
  await sec10.screenshot({ path: 'audit/test_sec10_scrolled_opacity1.png' });

  const fs = await import('fs');
  const size = fs.statSync('audit/test_sec10_scrolled_opacity1.png').size / 1024;
  console.log("Screenshot size of Sec 10 scrolled with opacity 1:", size.toFixed(1), "KB");

  await browser.close();
}

testOpacityFix().catch(console.error);
