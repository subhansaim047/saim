const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const cssPatch = `
<style>
/* Fix promo cards losing background colors on mobile */
.pbmit-ihbox-style-3 { position: relative; overflow: hidden; }
.pbmit-ihbox-style-3 .pbmit-ihbox-overlay-image { display: block !important; }
@media (max-width: 767px) {
    .elementor-element-2b5f382, .elementor-element-6a03461 {
        background-color: transparent !important;
    }
    .pbmit-ihbox-style-3 {
        background-color: #222 !important; /* Fallback dark */
    }
    .pbmit-ihbox-style-3:has(img[src*="bg-01"]) { background-color: #791198 !important; } /* Purple */
    .pbmit-ihbox-style-3:has(img[src*="bg-02"]) { background-color: #d1122a !important; } /* Red */
    .pbmit-ihbox-style-3:has(img[src*="bg-03"]) { background-color: #659a16 !important; } /* Green */
}
</style>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // 1. Text Replacements
    html = html.replace(/Objectively pontificate quality models before intuitive information\./g, 
        'Hum FitBite Pizza mein behtareen quality aur fresh ingredients ke sath aapko lazeez tareen khana faraham karte hain.');
    
    html = html.replace(/We are provide you with the complete meal which includes the prepackaged necessary ingredients for a divine dinner as well as easy to recipe\. Seamlessly conceptualize sticky functionalities after prospective customized\./g, 
        'At FitBite Pizza, we believe in serving happiness in every slice. Our passion for authentic flavors and commitment to quality ensures that every meal you order from us is unforgettable.');
    
    html = html.replace(/From signature delights such beef tartare and the best mashed in Paris Town,/g, 
        'Enjoy our signature fast food, hot pizzas, and delicious meals delivered fresh and fast.');
    
    html = html.replace(/From signature delights such as beef tartare and the best mashed potato in Paris, all the way to unique specialities\./g, 
        'Enjoy our signature fast food, hot pizzas, and delicious meals delivered fresh and fast right to your doorstep in Daska.');
    
    html = html.replace(/pbminfotech@mail\.com/g, 'fitbitepizza@gmail.com');
    html = html.replace(/diliciousinfo@mail\.com/g, 'info@fitbitepizza.com');

    // Remove empty "Why Choose Us" from Menu page which is broken on mobile
    // Wait, the heading "Why Choose Us" is elementor-element-3c66f44
    if (file === 'menu.html') {
        html = html.replace(/<div class="elementor-element elementor-element-[a-z0-9]+ elementor-widget elementor-widget-pbmit_custom_heading"[^>]*>[\s\S]*?Why Choose Us[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '');
    }

    // 2. Add CSS patch for mobile promo boxes
    if (html.indexOf('Fix promo cards losing background colors') === -1) {
        html = html.replace('</head>', cssPatch + '\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated ${file}`);
});
