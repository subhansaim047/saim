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
    
    // Wait a bit for initial animations
    await new Promise(r => setTimeout(r, 2000));
    
    let y = 0;
    const maxScroll = 9000;
    const step = 400;
    
    let htmlContent = '<html><body style="margin:0; background:#333; text-align:center;">';
    
    for (let i = 0; y <= maxScroll; i++) {
        await page.evaluate((scrollY) => {
            window.scrollTo(0, scrollY);
        }, y);
        
        // Wait for smooth scroll and GSAP ScrollTrigger to react
        await new Promise(r => setTimeout(r, 600));
        
        const fileName = `trace_${i.toString().padStart(2, '0')}.png`;
        await page.screenshot({ path: fileName });
        htmlContent += `<div style="margin-bottom: 20px;">
            <h3 style="color:white; font-family:sans-serif;">Scroll Y = ${y}</h3>
            <img src="${fileName}" style="border: 2px solid red;" />
        </div>`;
        
        console.log(`Captured ${fileName} at Y=${y}`);
        y += step;
    }
    
    htmlContent += '</body></html>';
    fs.writeFileSync('scroll_trace_viewer.html', htmlContent);
    
    await browser.close();
})();
