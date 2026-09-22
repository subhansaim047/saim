const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('public/fitbitepizza/about-us.html', 'utf8');
const $ = cheerio.load(html);

// Find the section that holds the two images
// The inner section is elementor-element-909d932
const innerSection = $('.elementor-element-909d932');

if (innerSection.length) {
    const newHtml = `
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-inner-column pbmit-bg-color-over-image">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-widget-image active pbmit-animation-style1">
                    <div class="elementor-widget-container">
                        <img fetchpriority="high" decoding="async" src="images/about-anzaar-hero.jpg" alt="About Anzaar" style="width: 100%; border-radius: 20px; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    innerSection.html(newHtml);
    
    fs.writeFileSync('public/fitbitepizza/about-us.html', $.html(), 'utf8');
    console.log("Successfully replaced the two images with one.");
} else {
    console.log("Could not find the inner section.");
}
