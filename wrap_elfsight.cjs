const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);
    
    // Find the elfsight div
    const elfsightDiv = $('.elfsight-app-4d09a611-784d-450d-b59c-7627aaa679fd');
    if (elfsightDiv.length > 0) {
        // Wrap it properly
        const scriptTag = elfsightDiv.prev('script');
        
        const wrapperHtml = `
        <div class="elementor-element elementor-widget elementor-widget-html" style="width: 100%; display: block;">
            <div class="elementor-widget-container" style="width: 100%;">
                <script src="https://elfsightcdn.com/platform.js" async=""></script>
                <div class="elfsight-app-4d09a611-784d-450d-b59c-7627aaa679fd" data-elfsight-app-lazy="" style="width: 100%;"></div>
            </div>
        </div>
        `;
        
        scriptTag.remove();
        elfsightDiv.replaceWith(wrapperHtml);
        
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    } else {
        console.log('Elfsight div not found');
    }
};

updateFile('public/pizzabox/index.html');
