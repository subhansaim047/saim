const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: {
            width: 390,
            height: 844,
            isMobile: true,
            hasTouch: true
        }
    });
    
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/fitbitepizza/index.html', { waitUntil: 'load' });
    
    for (let i = 7; i <= 10; i++) {
        await page.evaluate((y) => {
            window.scrollTo(0, y);
        }, i * 600);
        
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: `scroll_${i}.png` });
        console.log(`Took screenshot at Y=${i*600}`);
    }
    
    await browser.close();
})();
