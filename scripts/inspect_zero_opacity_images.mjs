import { chromium } from 'playwright';

async function check() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3891/thejacketmaker/index.html');
  await page.waitForTimeout(1000);

  const zeroOpacityDetails = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).filter(img => {
      const style = window.getComputedStyle(img);
      return style.opacity === '0' || style.visibility === 'hidden' || style.display === 'none';
    }).map(img => ({
      outerHTML: img.outerHTML.slice(0, 300),
      parentElement: img.parentElement ? img.parentElement.className : '',
      computedOpacity: window.getComputedStyle(img).opacity,
      parentOpacity: img.parentElement ? window.getComputedStyle(img.parentElement).opacity : '',
      src: img.src,
      dataSrc: img.getAttribute('data-src')
    }));
  });

  console.log('Zero opacity images count:', zeroOpacityDetails.length);
  zeroOpacityDetails.slice(0, 10).forEach((d, i) => {
    console.log(`\n[${i}] parent: "${d.parentElement}" | opacity: ${d.computedOpacity}`);
    console.log('HTML:', d.outerHTML);
  });

  await browser.close();
}

check().catch(console.error);
