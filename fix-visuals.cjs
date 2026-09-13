const fs = require('fs');
const path = require('path');

const file = 'public/fitbitepizza/index.html';
let html = fs.readFileSync(file, 'utf8');

const cssPatch = `
<style>
@media (max-width: 767px) {
    /* Fix Hero Gap: The hero section stays huge because of the hidden right column, force it to adapt to content */
    .elementor-element-e8a2a75 {
        min-height: auto !important;
        padding-bottom: 50px !important;
    }
    
    /* Fix "FITBITE PIZZA" overlapping with "Best Choice" */
    .elementor-element-73398ea, .elementor-element-14c8f3f {
        margin-top: 15px !important;
    }

    /* Fix Promo Cards Missing Pizzas: Force the icon wrapper to show on mobile */
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon {
        display: flex !important;
        justify-content: center !important;
        margin-bottom: 20px !important;
    }
    
    /* Ensure Promo Pizzas scale properly */
    .pbmit-ihbox-style-3 .pbmit-ihbox-icon img {
        max-width: 150px !important;
        height: auto !important;
    }
    
    /* Fix Fastest Delivery missing red background: Force red on the wrapper section */
    .elementor-element-51de8b5 {
        background-color: #b40a24 !important; /* Red */
        padding: 40px 20px !important;
        border-radius: 20px !important;
        margin-top: 30px !important;
    }
    
    /* Fix "Good Love Burger Tasty" missing burger: We will inject a static burger image using CSS pseudo-element for mobile */
    .elementor-element-64c4d7f::before {
        content: "";
        display: block;
        width: 250px;
        height: 250px;
        background: url('/fitbitepizza/images/burger-01-1.png') no-repeat center center;
        background-size: contain;
        margin: 0 auto 20px auto;
    }
    
    /* Fix Missing Main Pizza Slice in "Why our pizza best" */
    .elementor-element-dc878eb::before {
        content: "";
        display: block;
        width: 200px;
        height: 200px;
        background: url('/fitbitepizza/images/pizza-part-01.png') no-repeat center center;
        background-size: contain;
        margin: 0 auto 30px auto;
    }
}
</style>
`;

if (html.indexOf('Fix Hero Gap') === -1) {
    html = html.replace('</head>', cssPatch + '\n</head>');
    fs.writeFileSync(file, html);
    console.log('Injected visual fixes');
}
