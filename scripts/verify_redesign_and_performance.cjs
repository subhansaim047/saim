const { chromium } = require('playwright');
const path = require('path');

async function verifyRedesign() {
  console.log('Verifying UI redesign and speed optimization...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const startTime = Date.now();
  await page.goto('http://localhost:3000/food-safety-templates', { waitUntil: 'networkidle' });
  const loadDuration = Date.now() - startTime;
  console.log(`Page fully loaded in ${loadDuration}ms`);

  // 1. Verify No Sparkles / No Tacky AI Emojis in Quick Launch
  const heroText = await page.textContent('section.bg-white');
  const hasEmoji = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(heroText);
  if (hasEmoji) {
    console.error('FAILED: Emojis still found in hero section!');
  } else {
    console.log('PASSED: No emojis found in hero / quick launch section.');
  }

  // 2. Verify Lucide icons are used in quick launch
  const svgIconsCount = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const quickLaunchBtns = btns.filter(b => b.textContent.includes('Allergen') || b.textContent.includes('Calculator'));
    return quickLaunchBtns.map(b => ({
      text: b.textContent.trim(),
      hasSvg: !!b.querySelector('svg')
    }));
  });
  console.log('Quick launch buttons:', svgIconsCount);

  // 3. Verify thumbnails load as .webp
  const cardImages = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img[src*="/templates/"]'));
    return {
      total: imgs.length,
      allComplete: imgs.every(img => img.complete && img.naturalWidth > 0),
      webpCount: imgs.filter(img => img.src.includes('.webp')).length,
      sampleSrcs: imgs.slice(0, 5).map(img => img.src)
    };
  });
  console.log('Card images summary:', cardImages);

  if (cardImages.allComplete) {
    console.log('PASSED: All card images loaded with full natural dimensions!');
  } else {
    console.error('FAILED: Some card images are not complete!');
  }

  // Take screenshot of the hero section
  const heroScreenshotPath = path.resolve(__dirname, 'redesigned_hero_banner.png');
  const heroElem = await page.$('section.bg-white');
  if (heroElem) {
    await heroElem.screenshot({ path: heroScreenshotPath });
    console.log(`Saved redesigned hero screenshot to ${heroScreenshotPath}`);
  }

  await browser.close();
  console.log('\nVERIFICATION COMPLETE!');
}

verifyRedesign().catch(err => {
  console.error(err);
  process.exit(1);
});
