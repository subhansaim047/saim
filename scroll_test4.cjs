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
    
    // Find the burger section explicitly
    const burgerSection = await page.$('.elementor-element-8074c0d');
    if (burgerSection) {
        await page.evaluate((el) => {
            el.scrollIntoView({ behavior: 'instant', block: 'start' });
        }, burgerSection);
        
        await new Promise(r => setTimeout(r, 2000));
        await page.screenshot({ path: `scroll_burger.png` });
        console.log(`Took screenshot of burger section`);
    }
    
    await browser.close();
})();
