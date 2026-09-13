const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const fixCss = `
<style>
@media (max-width: 767px) {
    /* Fix Promo Boxes (The 3 Boxes): The pizzas were absolutely positioned and overflowing/cut off on the right! */
    .pbmit-ihbox-style-3 {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        padding-bottom: 30px !important;
    }
    
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon {
        position: relative !important; /* Force it into document flow */
        right: auto !important;
        top: auto !important;
        bottom: auto !important;
        margin: 20px auto !important;
        transform: none !important;
    }

    .pbmit-ihbox-style-3 .pbmit-ihbox-contents {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
    
    /* Fix Fastest Delivery Boxes (The 3 Dotted Boxes) spacing */
    .pbmit-ihbox-style-8 {
        margin-bottom: 20px !important;
    }
}
</style>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');

    // Fix the broken copyright text in the footer
    html = html.replace(/Ac 2026 FitBite Pizza/g, '&copy; 2026 FitBite Pizza');

    // Fix the Dummy text in the Delivery section
    html = html.replace(/Free Shipping\s*<br>\s*From 75\$/g, 'Free Delivery <br> in Daska');
    html = html.replace(/Free Shipping From 75\$/g, 'Free Delivery in Daska');

    // Add the CSS to fix the Promo boxes positioning
    if (html.indexOf('Fix Promo Boxes (The 3 Boxes)') === -1) {
        html = html.replace('</head>', fixCss + '\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated footer and 3 boxes in ${file}`);
});
