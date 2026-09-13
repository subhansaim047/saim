const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const finalFixCss = `
<style>
@media (max-width: 767px) {
    /* 1. Fix Hero Gap: Remove huge empty space below buttons */
    .elementor-element-e8a2a75 {
        min-height: auto !important;
        padding-bottom: 50px !important;
    }
    
    /* 2. Fix Overlap: Prevent FITBITE PIZZA from colliding with Best Choice */
    .elementor-element-73398ea, .elementor-element-14c8f3f {
        margin-top: 25px !important;
    }

    /* 3. Fix Promo Cards: Force correct colors based on exact IDs, not :has() */
    .elementor-element-a228308 .pbmit-ihbox-style-3 { background-color: #830051 !important; } /* Cheesy Pizza: Purple/Magenta */
    .elementor-element-2b5f382 .pbmit-ihbox-style-3 { background-color: #659a16 !important; } /* Italian Food: Green */
    .elementor-element-6a03461 .pbmit-ihbox-style-3 { background-color: #d1122a !important; } /* Hottest Pizza: Red */

    /* 4. Fix Promo Pizzas: Show the missing pizza images inside the cards */
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon {
        display: flex !important;
        justify-content: center !important;
        margin-bottom: 20px !important;
    }
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon img {
        max-width: 150px !important;
        height: auto !important;
        display: block !important;
    }
    
    /* 5. Fix Missing Burger: Inject static burger image below "Good Love Burger Tasty" badge */
    .elementor-element-64c4d7f::after {
        content: "";
        display: block;
        width: 100%;
        height: 250px;
        background: url('/fitbitepizza/images/burger-01-1.png') no-repeat center center;
        background-size: contain;
        margin: 20px auto;
    }
    
    /* 6. Fix Missing Main Pizza Slice in "Why our pizza best" */
    .elementor-element-dc878eb::before {
        content: "";
        display: block;
        width: 100%;
        height: 250px;
        background: url('/fitbitepizza/images/pizza-part-01.png') no-repeat center center;
        background-size: contain;
        margin: 0 auto 30px auto;
    }
    
    /* 7. Fix Missing Scooter/Delivery Background */
    .elementor-element-51de8b5 {
        background-color: #b40a24 !important; /* Red */
        padding: 40px 20px !important;
        border-radius: 20px !important;
        margin-top: 30px !important;
    }
    
    /* Optional: Hide the broken parallax pieces completely just in case they peek out */
    .elementor-element-8a3f06d,
    .elementor-element-1bced7d,
    .pbmit-tween-effect-style-1 {
        display: none !important;
    }
}
</style>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Clean up previous patches
    html = html.replace(/<style>\s*\/\* Fix promo cards losing background colors[\s\S]*?<\/style>/, '');
    html = html.replace(/<style>\s*@media \(max-width: 767px\) \{\s*\/\* Fix Hero Gap[\s\S]*?<\/style>/, '');

    // Add the final bulletproof patch
    if (html.indexOf('Fix Hero Gap: Remove huge empty space') === -1) {
        html = html.replace('</head>', finalFixCss + '\n</head>');
    }

    fs.writeFileSync(path.join(dir, file), html);
    console.log(`Updated final visuals in ${file}`);
});
