const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
  await page.goto('http://127.0.0.1:8080/hotbite/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const p = Array.from(document.querySelectorAll('#Contact p')).find(el => el.innerText.includes('Punjab college'));
    if (!p) return null;
    const lineage = [];
    let cur = p;
    while (cur && cur.id !== 'Contact') {
      const rect = cur.getBoundingClientRect();
      const style = window.getComputedStyle(cur);
      lineage.push({
        tag: cur.tagName,
        className: (cur.className || '').slice(0, 40),
        rect: { width: Math.round(rect.width), height: Math.round(rect.height), left: Math.round(rect.left), right: Math.round(rect.right) },
        style: {
          display: style.display,
          width: style.width,
          maxWidth: style.maxWidth,
          flex: style.flex,
          overflow: style.overflow
        }
      });
      cur = cur.parentElement;
    }
    return lineage;
  });

  console.log('Contact lineage:', JSON.stringify(data, null, 2));
  await browser.close();
})();
