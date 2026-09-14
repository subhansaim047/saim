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
    await page.goto('http://localhost:8080/fitbitepizza/index.html', { waitUntil: 'networkidle0' });
    
    // We will scroll 500px at a time and take a screenshot
    for (let i = 0; i <= 6; i++) {
        await page.evaluate((y) => {
            window.scrollTo(0, y);
        }, i * 600);
        
        // Wait for GSAP to finish animating
        await new Promise(r => setTimeout(r, 800));
        
        await page.screenshot({ path: `scroll_${i}.png` });
        console.log(`Took screenshot at Y=${i*600}`);
    }
    
    await browser.close();
})();
