import path from 'path';
import { chromium } from 'playwright';

const URL = 'http://localhost:8080/hotbite/index.html';
const artifactDir = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4';

async function run() {
  const browser = await chromium.launch({ channel: 'msedge' });
  
  // 1. Desktop Test
  console.log('Testing Desktop Viewport (1440x900)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto(URL, { waitUntil: 'domcontentloaded' });
  await desktopPage.waitForTimeout(3500);

  // Initial transforms at top of page (resting assembled burger)
  const initialTransforms = await desktopPage.evaluate(() => {
    const layers = Array.from(document.querySelectorAll('#oresto-burger-talking .pbmit-tween-effect'));
    return layers.map((el, i) => ({
      layer: i + 1,
      yPercent: (el._gsap && el._gsap.yPercent) || 0,
      transform: window.getComputedStyle(el).transform
    }));
  });
  console.log('Initial Transforms (Resting):', initialTransforms);

  // Scroll so the section top enters 75% of viewport
  await desktopPage.evaluate(() => {
    const sec = document.getElementById('oresto-burger-talking');
    if (sec) {
      const rect = sec.getBoundingClientRect();
      const targetScroll = window.scrollY + rect.top - window.innerHeight * 0.75;
      window.scrollTo(0, targetScroll);
    }
  });
  await desktopPage.waitForTimeout(1000);

  // Capture resting desktop screenshot
  await desktopPage.locator('#oresto-burger-talking').first().screenshot({ path: path.join(artifactDir, 'burger_resting_desktop.png') });
  console.log('Captured burger_resting_desktop.png');

  // Scroll further down to trigger the exploded GSAP physics scrub
  await desktopPage.evaluate(() => {
    const sec = document.getElementById('oresto-burger-talking');
    if (sec) {
      const rect = sec.getBoundingClientRect();
      window.scrollBy(0, rect.top + 300);
    }
  });
  await desktopPage.waitForTimeout(1000);

  const explodedTransforms = await desktopPage.evaluate(() => {
    const layers = Array.from(document.querySelectorAll('#oresto-burger-talking .pbmit-tween-effect'));
    return layers.map((el, i) => ({
      layer: i + 1,
      yPercent: (el._gsap && el._gsap.yPercent) || 0,
      transform: window.getComputedStyle(el).transform
    }));
  });
  console.log('Exploded Transforms (Scrolled):', explodedTransforms);

  await desktopPage.locator('#oresto-burger-talking').first().screenshot({ path: path.join(artifactDir, 'burger_exploded_desktop.png') });
  console.log('Captured burger_exploded_desktop.png');

  // 2. Mobile Test
  console.log('Testing Mobile Viewport (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(URL, { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(4000);

  // Scroll into view using browser evaluate
  await mobilePage.evaluate(() => {
    const sec = document.getElementById('oresto-burger-talking');
    if (sec) {
      sec.scrollIntoView({ behavior: 'instant', block: 'center' });
    }
  });
  await mobilePage.waitForTimeout(1500);

  await mobilePage.locator('#oresto-burger-talking').first().screenshot({ path: path.join(artifactDir, 'burger_mobile.png') });
  console.log('Captured burger_mobile.png');

  // Check for horizontal overflow on mobile
  const scrollWidth = await mobilePage.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await mobilePage.evaluate(() => document.documentElement.clientWidth);
  console.log(`Mobile dimensions - scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}`);
  if (scrollWidth <= clientWidth) {
    console.log('PASS: Zero horizontal overflow on mobile!');
  } else {
    console.warn(`WARNING: Horizontal overflow detected: ${scrollWidth} > ${clientWidth}`);
  }

  await browser.close();
  console.log('All visual verification tests completed successfully!');
}

run().catch(err => {
  console.error('Test error:', err);
  process.exitCode = 1;
});
