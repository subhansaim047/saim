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
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burgers" },
    { id: 3, name: "Fried Chicken" },
    { id: 4, name: "Deals & Combos" },
    { id: 5, name: "Wraps & Sides" },
    { id: 6, name: "Kids Corner" }
];

let tabsHtml = `<ul class="nav nav-tabs pbmit-tabs-heading" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 20px; border: none; margin-bottom: 50px; padding: 0;">`;
categories.forEach((cat, index) => {
    let activeClass = index === 0 ? 'pbmit-tab-li-active' : '';
    tabsHtml += `
    <li class="pbmit-tab-link ${activeClass}" data-pbmit-tab="${cat.id}" style="list-style: none; background: #fff; border: 2px solid #ffe3e3; border-radius: 12px; padding: 25px 15px; cursor: pointer; text-align: center; transition: all 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
        <h3 style="font-size: 20px; margin: 0; font-weight: 800; color: #111; font-family: 'Nunito', sans-serif;">${cat.name}</h3>
    </li>`;
});
tabsHtml += `</ul>`;

function genItems(items) {
    return items.map(item => `
        <div class="menu-item-card" style="background: #fff; padding: 20px 25px; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.04); display: flex; justify-content: space-between; align-items: center; border-left: 5px solid #e62222; margin-bottom: 15px; transition: transform 0.3s ease;">
            <div>
                <h4 style="font-size: 20px; font-weight: 800; color: #111; margin: 0 0 5px 0;">${item.name}</h4>
                ${item.desc ? `<p style="font-size: 13px; color: #777; margin: 0;">${item.desc}</p>` : ''}
            </div>
            <div style="font-size: 24px; font-weight: 900; color: #e62222; white-space: nowrap; margin-left: 15px;">${item.price}</div>
        </div>
    `).join('');
}

let pizzaContent = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
        <div class="menu-item-card" style="background: #fff; padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-bottom: 5px solid #e62222; transition: transform 0.3s ease;">
            <h4 style="font-size: 24px; font-weight: 800; color: #111; margin-bottom: 10px; text-transform: uppercase;">Traditional Flavours</h4>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.6;">Chicken Tikka, Chicken Fajita, BBQ, Mexican, Cheese Lovers, Vegetable Lovers</p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; font-weight: 800; color: #e62222;">
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Sm 8" - Rs.690</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Med 11" - Rs.1350</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Lrg 14" - Rs.2150</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">XL 16" - Rs.2650</span>
            </div>
        </div>
        <div class="menu-item-card" style="background: #fff; padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-bottom: 5px solid #e62222; transition: transform 0.3s ease;">
            <h4 style="font-size: 24px; font-weight: 800; color: #111; margin-bottom: 10px; text-transform: uppercase;">Signature Flavours</h4>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.6;">Juicy & Saucy, Creamy Delight, Peri Peri Hot, Home Town Special, Malai Special, Chipotle, Smokey Dynamite</p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; font-weight: 800; color: #e62222;">
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Sm 8" - Rs.750</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Med 11" - Rs.1500</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Lrg 14" - Rs.2500</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">XL 16" - Rs.2900</span>
            </div>
        </div>
        <div class="menu-item-card" style="background: #fff; padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-bottom: 5px solid #e62222; transition: transform 0.3s ease;">
            <h4 style="font-size: 24px; font-weight: 800; color: #111; margin-bottom: 10px; text-transform: uppercase;">Donner Flavours</h4>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.6;">Malai Donner, Classic Donner</p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; font-weight: 800; color: #e62222;">
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Med 11" - Rs.1500</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Lrg 14" - Rs.2500</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">XL 16" - Rs.2900</span>
            </div>
        </div>
        <div class="menu-item-card" style="background: #fff; padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-bottom: 5px solid #e62222; transition: transform 0.3s ease;">
            <h4 style="font-size: 24px; font-weight: 800; color: #111; margin-bottom: 10px; text-transform: uppercase;">Extreme Pizza</h4>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.6;">Jalapeno, Onion, Tomato, Chicken with lot Cheese and special Sauce</p>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; font-weight: 800; color: #e62222;">
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Med 11" - Rs.1600</span>
                <span style="background: #fdf2f2; padding: 8px 12px; border-radius: 6px;">Lrg 14" - Rs.3000</span>
            </div>
        </div>
        <div class="menu-item-card" style="background: #fff; padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-bottom: 5px solid #e62222; transition: transform 0.3s ease;">
            <h4 style="font-size: 24px; font-weight: 800; color: #111; margin-bottom: 10px; text-transform: uppercase;">Taco Pizza</h4>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.6;">Signature Recipe, Cheese, Taco Special Chicken, Onion, Mushroom, Sweet Corn with Extra Malai Topping.</p>
        </div>
        <div class="menu-item-card" style="background: #fff; padding: 25px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-bottom: 5px solid #e62222; transition: transform 0.3s ease;">
            <h4 style="font-size: 24px; font-weight: 800; color: #111; margin-bottom: 10px; text-transform: uppercase;">Crown Crust Malai</h4>
            <p style="font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.6;">Special Chicken, Cheese, Onion, Sauce, Black Olive and Mushroom</p>
        </div>
    </div>
`;

let burgersContent = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">${genItems([
    { name: "Chicken Steak Burger", price: "Rs. 300" },
    { name: "Cottage Crispy Burger", price: "Rs. 400" },
    { name: "Crispy Tower Burger", price: "Rs. 750" },
    { name: "Chicken Grilled Burger (Single)", price: "Rs. 500" },
    { name: "Chicken Grilled Burger (Double)", price: "Rs. 650" },
    { name: "Beef Burger (Single)", price: "Rs. 600" },
    { name: "Beef Burger (Double)", price: "Rs. 700" }
])}</div>`;

let chickenContent = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">${genItems([
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

let dealsContent = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px;">${genItems([
    { name: "Dine-in Deal", desc: "2 Medium Pizzas (Signature & Donner not included)", price: "Rs. 2400 <span style='font-size:12px; font-weight:normal;'>+Tax</span>" },
    { name: "Pizza Deal 01", desc: "1 Small 10\\\" Pizza, 1 NR Drink 345ml", price: "Rs. 780" },
    { name: "Pizza Deal 02", desc: "1 Medium 11\\\" Pizza, 2 NR Drink 345ml", price: "Rs. 1550" },
    { name: "Pizza Deal 03", desc: "1 Large 14\\\" Pizza, 1 Litre Drink", price: "Rs. 2350" },
    { name: "Pizza Deal 04", desc: "2 Medium 11\\\" Pizzas, 1.5 Ltr Drink", price: "Rs. 2750" },
    { name: "Pizza Deal 05", desc: "2 Large 14\\\" Pizzas, 1.5 Ltr Drink", price: "Rs. 4350" },
    { name: "Pizza Deal 06", desc: "1 Extra Large 16\\\" Pizza, 10 Pcs Hot Wings, 1.5 Ltr Drink", price: "Rs. 3400" },
    { name: "Burger Deal 01", desc: "1 Crispy Burger, 1 Reg Fries, 1 NR Drink", price: "Rs. 650" },
    { name: "Burger Deal 02", desc: "2 Crispy Burgers, 1 Reg Fries, 2 NR Drinks", price: "Rs. 1120" },
    { name: "Chicken Combo 01", desc: "2 Pcs Fried Chicken, 1 Reg Fries, 1 NR Drink", price: "Rs. 790" },
    { name: "Chicken Combo 02", desc: "3 Pcs Fried Chicken, 1 Reg Fries, 1 NR Drink", price: "Rs. 1020" }
])}</div>`;

let wrapsContent = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">${genItems([
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

let kidsContent = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">${genItems([
    { name: "Happy Meal 01", desc: "4 Pcs Chicken Nuggets, 1 Reg Fries, 1 NR Drink", price: "Rs. 550" },
    { name: "Happy Meal 02", desc: "1 Pc Fried Chicken, 1 Reg Fries, 1 NR Drink", price: "Rs. 550" },
    { name: "Happy Meal 03", desc: "1 Steak Burger, 1 Reg Fries, 1 NR Drink", price: "Rs. 550" }
])}</div>`;

let contents = [pizzaContent, burgersContent, chickenContent, dealsContent, wrapsContent, kidsContent];

let contentsHtml = `<div class="tab-content pbmit-tab-content-wrapper" style="margin-top: 40px; min-height: 400px;">`;
categories.forEach((cat, index) => {
    let activeClass = index === 0 ? 'pbmit-tab-active' : '';
    let displayStyle = index === 0 ? 'display: block;' : 'display: none;';
    contentsHtml += `
    <div class="pbmit-tab-content pbmit-tab-content-${cat.id} ${activeClass}" data-pbmit-tab="${cat.id}" style="${displayStyle} animation: fadeIn 0.5s ease;">
        ${contents[index]}
    </div>`;
});
contentsHtml += `</div>`;

let finalHtml = `
<section class="elementor-section elementor-top-section pbmit-menu-tab2 pbmit-bg-color-over-image" style="background-color: #fcfcfc; padding: 100px 0;">
    <style>
        .pbmit-tab-link.pbmit-tab-li-active { background: #e62222 !important; border-color: #e62222 !important; color: #fff !important; }
        .pbmit-tab-link.pbmit-tab-li-active h3 { color: #fff !important; }
        .pbmit-tab-link:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(230, 34, 34, 0.2) !important; }
        .menu-item-card:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    </style>
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 15px;">
        <div class="pbmit-heading-subheading text-center" style="margin-bottom: 50px;">
            <h4 class="pbmit-element-subtitle" style="color: #e62222; font-weight: 700; margin-bottom: 10px; display: inline-block; padding: 5px 15px; background: #fdf2f2; border-radius: 30px;">Discover Our Menu</h4>
            <h2 class="pbmit-element-title" style="font-size: 56px; font-weight: 800; color: #111; text-transform: uppercase; font-family: 'Luckiest Guy', cursive; letter-spacing: 2px; margin-top: 10px;">Cottage Specialties</h2>
        </div>
        ${tabsHtml}
        ${contentsHtml}
    </div>
</section>
`;

let newContent = content.substring(0, startIndex) + finalHtml + content.substring(endIndex);
fs.writeFileSync('public/cottage/index.html', newContent);
console.log("Menu generated successfully!");
