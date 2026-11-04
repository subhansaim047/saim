import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const info = await page.evaluate(() => {
    const thumbImg = document.querySelector('.thumbnail img');
    const thumbA = document.querySelector('.thumbnail');
    const wv = document.querySelector('.watchvideo');
    
    function getRules(el) {
      if (!el) return [];
      const matched = [];
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules || []) {
            if (rule.selectorText && el.matches(rule.selectorText)) {
              matched.push({ selector: rule.selectorText, cssText: rule.cssText });
            }
          }
        } catch (e) {}
      }
      return matched;
    }

    return {
      imgSrc: thumbImg ? thumbImg.src : null,
      imgCurrentSrc: thumbImg ? thumbImg.currentSrc : null,
      imgNaturalWidth: thumbImg ? thumbImg.naturalWidth : null,
      imgStyle: thumbImg ? thumbImg.getAttribute('style') : null,
      imgClasses: thumbImg ? thumbImg.className : null,
      imgRules: getRules(thumbImg),
      aRules: getRules(thumbA),
      wvRules: getRules(wv)
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}

main().catch(console.error);
