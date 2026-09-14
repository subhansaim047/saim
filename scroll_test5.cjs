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
    
    const pizzaSection = await page.$('.elementor-element-6152e5e');
    if (pizzaSection) {
        await page.evaluate((el) => {
            el.scrollIntoView({ behavior: 'instant', block: 'center' });
        }, pizzaSection);
        
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: `scroll_pizza.png` });
        console.log(`Took screenshot of middle pizza`);
    }

    const burgerSection = await page.$('.elementor-element-f2a4969');
    if (burgerSection) {
        await page.evaluate((el) => {
            el.scrollIntoView({ behavior: 'instant', block: 'center' });
        }, burgerSection);
        
        await new Promise(r => setTimeout(r, 1200));
        await page.screenshot({ path: `scroll_burger.png` });
        console.log(`Took screenshot of burger`);
    }
    
    await browser.close();
})();
