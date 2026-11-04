import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const info = await page.evaluate(() => {
    const $ = window.jQuery;
    const $slideshow = $('.product-slideshow');
    const slick = $slideshow.data('slick') || ($slideshow.slick ? $slideshow.slick('getSlick') : null);
    return {
      slickOptions: slick ? {
        fade: slick.options.fade,
        infinite: slick.options.infinite,
        slidesToShow: slick.options.slidesToShow,
        dots: slick.options.dots,
        arrows: slick.options.arrows,
        adaptiveHeight: slick.options.adaptiveHeight
      } : null,
      slideCount: document.querySelectorAll('.product-slideshow .slide').length,
      videoCount: document.querySelectorAll('video').length,
      videoOuter: document.querySelector('video')?.outerHTML?.slice(0, 300)
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
}

main().catch(console.error);
