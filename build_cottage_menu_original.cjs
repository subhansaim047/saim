const fs = require('fs');

let content = fs.readFileSync('public/cottage/index.html', 'utf8');
const startToken = '<section class="elementor-section elementor-top-section elementor-element elementor-element-695454c';
let startIndex = content.indexOf(startToken);

let depth = 1;
let currentIndex = startIndex + 8;
while (currentIndex < content.length) {
    let nextOpen = content.indexOf('<section', currentIndex);
    let nextClose = content.indexOf('</section>', currentIndex);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
        depth++;
        currentIndex = nextOpen + 8;
    } else {
        depth--;
        currentIndex = nextClose + 10;
        if (depth === 0) {
            break;
        }
    }
}
let endIndex = currentIndex;

const categories = [
    { id: 1, name: "Pizza", icon: "pbmit-dilicious-icon-pizza" },
    { id: 2, name: "Burgers", icon: "pbmit-dilicious-icon-burger" },
    { id: 3, name: "Fried Chicken", icon: "pbmit-dilicious-icon-food" },
    { id: 4, name: "Deals & Combos", icon: "pbmit-dilicious-icon-fast-food" },
    { id: 5, name: "Wraps & Sides", icon: "pbmit-dilicious-icon-burrito" },
    { id: 6, name: "Kids Corner", icon: "pbmit-dilicious-icon-ice-cream" }
];

let tabsHtml = `<ul class="pbmit-tabs-heading">`;
categories.forEach((cat, index) => {
    let activeClass = index === 0 ? 'pbmit-tab-li-active' : '';
    tabsHtml += `
    <li class="pbmit-tab-link ${activeClass}" data-pbmit-tab="${cat.id}" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 120px; padding: 15px 5px; border: 1px solid #ffe3e3; border-radius: 10px; background: #fff; cursor: pointer; transition: all 0.3s ease; text-align: center; box-sizing: border-box;">
        <div class="pbmit-tabmenu-icon" style="margin-bottom: 8px;">
            <div class="pbmit-tabmenu-icon-wrapper">
                <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                    <i class="pbmit-dilicious-icon ${cat.icon}" style="font-size: 28px; color: #e62222;"></i>
                </div>
            </div>
        </div>
        <span style="width: 100%; display: block;"><h3 class="pbminfotech-tabmenu-heading" style="font-size: 13px; margin: 0; color: #333; line-height: 1.3; width: 100%;">${cat.name}</h3></span>
    </li>`;
});
tabsHtml += `</ul>`;

function genItems(items) {
    return items.map(item => `
        <div class="col-md-6 pbminfotech-menuitem" style="margin-bottom: 25px;">
            <div class="pbmit-ele-menuitem pbmit-menu-style-1">
                <div class="pbminfotech-box-content">
                    <div class="pbminfotech-menuitem-head" style="display: flex; align-items: baseline;">
                        <h4 class="pbminfotech-menuitem-title" style="flex: 0 1 auto; white-space: normal; font-size: 18px; color: #000; font-weight: 700;">${item.name}</h4>
                        <div class="pbminfotech-menuitem-leader" style="flex: 1 1 auto; border-bottom: 2px dotted #ccc; margin: 0 10px;"></div>
                        <div class="pbminfotech-menuitem-price" style="flex: 0 1 auto; font-size: 20px; font-weight: 900; color: #e62222; white-space: nowrap;">${item.price}</div>
                    </div>
                    ${item.desc ? `<div class="pbminfotech-menuitem-desc" style="font-size: 13px; color: #666; margin-top: 8px; line-height: 1.4;">${item.desc}</div>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

let pizzaContent = `<div class="row">${genItems([
    { name: "Traditional Flavours", desc: "<strong>Sizes:</strong> Sm 8\" (Rs. 690) | Med 11\" (Rs. 1350) | Lrg 14\" (Rs. 2150) | XL 16\" (Rs. 2650)<br><strong>Flavours:</strong> Chicken Tikka, Chicken Fajita, BBQ, Mexican, Cheese Lovers, Vegetable Lovers", price: "From Rs. 690" },
    { name: "Signature Flavours", desc: "<strong>Sizes:</strong> Sm 8\" (Rs. 750) | Med 11\" (Rs. 1500) | Lrg 14\" (Rs. 2500) | XL 16\" (Rs. 2900)<br><strong>Flavours:</strong> Juicy & Saucy, Creamy Delight, Peri Peri Hot, Home Town Special, Malai Special, Chipotle, Smokey Dynamite", price: "From Rs. 750" },
    { name: "Donner Flavours", desc: "<strong>Sizes:</strong> Med 11\" (Rs. 1500) | Lrg 14\" (Rs. 2500) | XL 16\" (Rs. 2900)<br><strong>Flavours:</strong> Malai Donner, Classic Donner", price: "From Rs. 1500" },
    { name: "Extreme Pizza", desc: "<strong>Sizes:</strong> Med 11\" (Rs. 1600) | Lrg 14\" (Rs. 3000)<br><strong>Flavours:</strong> Jalapeno, Onion, Tomato, Chicken with lot Cheese and special Sauce", price: "From Rs. 1600" },
    { name: "Taco Pizza", desc: "Signature Recipe, Cheese, Taco Special Chicken, Onion, Mushroom, Sweet Corn with Extra Malai Topping.", price: "Special" },
    { name: "Crown Crust Malai", desc: "Special Chicken, Cheese, Onion, Sauce, Black Olive and Mushroom.", price: "Special" }
])}</div>`;

let burgersContent = `<div class="row">${genItems([
    { name: "Chicken Steak Burger", price: "Rs. 300" },
    { name: "Cottage Crispy Burger", price: "Rs. 400" },
    { name: "Crispy Tower Burger", price: "Rs. 750" },
    { name: "Chicken Grilled Burger (Single)", price: "Rs. 500" },
    { name: "Chicken Grilled Burger (Double)", price: "Rs. 650" },
    { name: "Beef Burger (Single)", price: "Rs. 600" },
    { name: "Beef Burger (Double)", price: "Rs. 700" }
])}</div>`;

let chickenContent = `<div class="row">${genItems([
    { name: "Crispy Fried Chicken (1 Pc)", price: "Rs. 250" },
    { name: "Crispy Fried Chicken (3 Pcs)", price: "Rs. 720" },
    { name: "Crispy Fried Chicken (5 Pcs)", price: "Rs. 1200" },
    { name: "Crispy Hot Wings (5 Pcs)", price: "Rs. 350" },
    { name: "Crispy Hot Wings (10 Pcs)", price: "Rs. 680" },
    { name: "Chicken Nuggets (5 Pcs)", price: "Rs. 320" },
    { name: "Chicken Nuggets (10 Pcs)", price: "Rs. 620" },
    { name: "Peri Peri Grilled Wings (5 Pcs)", price: "Rs. 450" },
    { name: "Peri Peri Grilled Wings (10 Pcs)", price: "Rs. 850" },
    { name: "Peri Peri Sauce Dip", price: "Rs. 150" }
])}</div>`;

let dealsContent = `<div class="row">${genItems([
    { name: "Dine-in Deal", desc: "2 Medium Pizzas (Signature & Donner not included)", price: "Rs. 2400 +Tax" },
    { name: "Pizza Deal 01", desc: "1 Small 10\" Pizza, 1 NR Drink 345ml", price: "Rs. 780" },
    { name: "Pizza Deal 02", desc: "1 Medium 11\" Pizza, 2 NR Drink 345ml", price: "Rs. 1550" },
    { name: "Pizza Deal 03", desc: "1 Large 14\" Pizza, 1 Litre Drink", price: "Rs. 2350" },
    { name: "Pizza Deal 04", desc: "2 Medium 11\" Pizzas, 1.5 Ltr Drink", price: "Rs. 2750" },
    { name: "Pizza Deal 05", desc: "2 Large 14\" Pizzas, 1.5 Ltr Drink", price: "Rs. 4350" },
    { name: "Pizza Deal 06", desc: "1 Extra Large 16\" Pizza, 10 Pcs Hot Wings, 1.5 Ltr Drink", price: "Rs. 3400" },
    { name: "Burger Deal 01", desc: "1 Crispy Burger, 1 Reg Fries, 1 NR Drink", price: "Rs. 650" },
    { name: "Burger Deal 02", desc: "2 Crispy Burgers, 1 Reg Fries, 2 NR Drinks", price: "Rs. 1120" },
    { name: "Chicken Combo 01", desc: "2 Pcs Fried Chicken, 1 Reg Fries, 1 NR Drink", price: "Rs. 790" },
    { name: "Chicken Combo 02", desc: "3 Pcs Fried Chicken, 1 Reg Fries, 1 NR Drink", price: "Rs. 1020" }
])}</div>`;

let wrapsContent = `<div class="row">${genItems([
    { name: "Loaded Fries", price: "Rs. 699" },
    { name: "Pasta Lazeezo", price: "Rs. 650" },
    { name: "Chicken Cheese Stick", price: "Rs. 690" },
    { name: "Crispy Wrap", price: "Rs. 420" },
    { name: "Grilled Wrap", price: "Rs. 520" },
    { name: "Kabab Wrap", price: "Rs. 400" },
    { name: "BBQ Wrap", price: "Rs. 400" },
    { name: "French Fries Large", price: "Rs. 250" },
    { name: "French Fries Family", price: "Rs. 450" },
    { name: "Masala Fries with Mayo Dips", price: "Rs. 500" },
    { name: "Mayo Fries", price: "Rs. 500" },
    { name: "Dinner Roll", price: "Rs. 50" },
    { name: "Ice Cream Single Scoop", price: "Rs. 150" },
    { name: "Ice Cream Double Scoop", price: "Rs. 220" }
])}</div>`;

let kidsContent = `<div class="row">${genItems([
    { name: "Happy Meal 01", desc: "4 Pcs Chicken Nuggets, 1 Reg Fries, 1 NR Drink", price: "Rs. 550" },
    { name: "Happy Meal 02", desc: "1 Pc Fried Chicken, 1 Reg Fries, 1 NR Drink", price: "Rs. 550" },
    { name: "Happy Meal 03", desc: "1 Steak Burger, 1 Reg Fries, 1 NR Drink", price: "Rs. 550" }
])}</div>`;

let contents = [pizzaContent, burgersContent, chickenContent, dealsContent, wrapsContent, kidsContent];

let contentsHtml = ``;
categories.forEach((cat, index) => {
    let activeClass = index === 0 ? 'pbmit-tab-active' : '';
    contentsHtml += `
    <div class="pbmit-tab-content pbmit-tab-content-${cat.id} ${activeClass}" data-pbmit-tab="${cat.id}">
        ${contents[index]}
    </div>`;
});

let finalHtml = `
<section class="elementor-section elementor-top-section elementor-element elementor-element-695454c elementor-section-stretched pbmit-menu-tab2 pbmit-col-stretched-none pbmit-cursor-color-blackish-color pbmit-bg-color-over-image elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="695454c" data-element_type="section" data-e-type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
    <style class="pbmit-custom-tabs-grid">
        .elementor-element-695454c ul.pbmit-tabs-heading {
            display: grid !important;
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 15px;
        }
        @media (max-width: 991px) {
            .elementor-element-695454c ul.pbmit-tabs-heading {
                grid-template-columns: repeat(3, 1fr) !important;
            }
        }
        @media (max-width: 767px) {
            .elementor-element-695454c ul.pbmit-tabs-heading {
                grid-template-columns: repeat(2, 1fr) !important;
            }
        }
        .pbmit-tab-link.pbmit-tab-li-active {
            background: #e62222 !important;
            border-color: #e62222 !important;
        }
        .pbmit-tab-link.pbmit-tab-li-active h3,
        .pbmit-tab-link.pbmit-tab-li-active i {
            color: #fff !important;
        }
        .pbmit-tab-content { display: none; animation: fadeIn 0.5s ease; }
        .pbmit-tab-content.pbmit-tab-active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-eb20a67" data-id="eb20a67" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-6fdfdfb pbmit-menu-tab-style-1 elementor-widget elementor-widget-pbmit_menu_tab" data-id="6fdfdfb" data-element_type="widget" data-widget_type="pbmit_menu_tab.default">
                    <div class="elementor-widget-container">
                        <div class="pbmit-menu-tab-element">
                            ${tabsHtml}
                            <div class="pbmit-tab-content-wrapper">
                                ${contentsHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

let newContent = content.substring(0, startIndex) + finalHtml + content.substring(endIndex);
fs.writeFileSync('public/cottage/index.html', newContent);
console.log("Menu generated successfully with original layout!");
