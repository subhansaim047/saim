const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);
    
    // Find the testimonial widget
    const testimonialWidget = $('[data-id="2f6e40b"]');
    if (testimonialWidget.length > 0) {
        testimonialWidget.replaceWith(`
        <!-- Elfsight Google Reviews | Untitled Google Reviews -->
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-4d09a611-784d-450d-b59c-7627aaa679fd" data-elfsight-app-lazy></div>
        `);
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    } else {
        console.log('Testimonial widget not found');
    }
};

updateFile('public/pizzabox/index.html');
