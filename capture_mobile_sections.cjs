const { chromium } = require('playwright');
const path = require('path');

const brainDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\4f746af2-8096-428b-a0e5-b7e16c0031b4';

async function captureAllSections() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    hasTouch: true
  });
  const page = await context.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.message));

  const url = 'http://127.0.0.1:8080/hotbite/index.html';
  console.log('Navigating to:', url);

  await page.goto(url, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(3000);

  const sections = [
    { name: 'section_mobile_header_nav', selector: 'nav.framer-C1Gca' },
    { name: 'section_mobile_hero', selector: 'section.framer-xtZn2' },
    { name: 'section_mobile_about', selector: '#About' },
    { name: 'section_mobile_pizza', selector: '#oresto-pizza-why-best' },
    { name: 'section_mobile_menu', selector: '#Menu' },
    { name: 'section_mobile_burger', selector: '#oresto-burger-section' },
    { name: 'section_mobile_specials', selector: '#Featured' },
    { name: 'section_mobile_testimonials', selector: '#Testimonials' },
    { name: 'section_mobile_contact', selector: '#Contact' },
    { name: 'section_mobile_footer', selector: 'footer' }
  ];

  for (const sec of sections) {
    try {
      const el = await page.$(sec.selector);
      if (el) {
        const outPath = path.join(brainDir, `${sec.name}.png`);
        await el.screenshot({ path: outPath });
        console.log(`Saved screenshot: ${sec.name}.png`);
      } else {
        console.log(`Selector not found: ${sec.selector}`);
      }
    } catch (e) {
      console.error(`Error capturing ${sec.name}:`, e.message);
    }
  }

  // Also full page screenshot
  await page.screenshot({ path: path.join(brainDir, 'full_page_mobile_375.png'), fullPage: true });
  console.log('Saved full_page_mobile_375.png');

  // Check horizontal overflow
  const overflow = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const bodyWidth = document.body.scrollWidth;
    const winWidth = window.innerWidth;
    const overflowingElements = [];

    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > winWidth + 5) {
        overflowingElements.push({
          tag: el.tagName,
          id: el.id,
          class: (el.className || '').toString().slice(0, 50),
          right: Math.round(rect.right),
          width: Math.round(rect.width)
        });
      }
    });

    return {
      docWidth,
      bodyWidth,
      winWidth,
      hasOverflow: docWidth > winWidth || bodyWidth > winWidth,
      overflowingCount: overflowingElements.length,
      sampleOverflow: overflowingElements.slice(0, 15)
    };
  });

  console.log('Mobile Check Results (width 375px):');
  console.log('Doc Width:', overflow.docWidth, 'Body Width:', overflow.bodyWidth, 'Win Width:', overflow.winWidth, 'Has Overflow:', overflow.hasOverflow);
  if (overflow.hasOverflow) {
    console.log('Elements causing overflow count:', overflow.overflowingCount);
    overflow.sampleOverflow.forEach(el => {
      console.log(` - <${el.tag} id="${el.id}" class="${el.class}"> right=${el.right}px width=${el.width}px`);
    });
  }

  await browser.close();
}

captureAllSections().catch(console.error);
