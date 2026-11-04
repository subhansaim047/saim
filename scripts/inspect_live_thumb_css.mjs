import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded' });
  const styles = await page.evaluate(() => {
    const wv = document.querySelector('.watchvideo');
    const parentSpan = wv ? wv.parentElement : null;
    const thumbVideo = document.querySelector('.thumbnail--media-video');
    const thumbImg = document.querySelector('.thumbnail img');
    return {
      wv: wv ? {
        position: window.getComputedStyle(wv).position,
        background: window.getComputedStyle(wv).backgroundColor,
        color: window.getComputedStyle(wv).color,
        fontSize: window.getComputedStyle(wv).fontSize,
        textDecoration: window.getComputedStyle(wv).textDecoration,
        display: window.getComputedStyle(wv).display,
        width: window.getComputedStyle(wv).width,
        height: window.getComputedStyle(wv).height,
        left: window.getComputedStyle(wv).left,
        top: window.getComputedStyle(wv).top,
        zIndex: window.getComputedStyle(wv).zIndex
      } : null,
      parentSpan: parentSpan ? {
        position: window.getComputedStyle(parentSpan).position,
        display: window.getComputedStyle(parentSpan).display,
      } : null,
      thumbVideo: thumbVideo ? {
        position: window.getComputedStyle(thumbVideo).position,
        outerHTML: thumbVideo.outerHTML.slice(0, 400)
      } : null,
      thumbImg: thumbImg ? {
        src: thumbImg.src,
        currentSrc: thumbImg.currentSrc,
        naturalWidth: thumbImg.naturalWidth,
        alt: thumbImg.alt,
        className: thumbImg.className
      } : null
    };
  });
  console.log(JSON.stringify(styles, null, 2));
  await browser.close();
}

main().catch(console.error);
