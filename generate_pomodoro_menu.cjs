const fs = require('fs');

const tabs = [
  {
    id: 1,
    title: "Classic Pizzas",
    icon: "pbmit-dilicious-icon-pizza",
    items: [
      { name: "The Margherita", desc: "House marinara, fresh mozzarella, basil and parmesan", price: "9\" Rs. 1860 | 12\" Rs. 2610 | 15\" Rs. 4200" },
      { name: "The Plain Pepperoni", desc: "Imported pepperoni, onions and fresh mozzarella", price: "9\" Rs. 1890 | 12\" Rs. 2610 | 15\" Rs. 4200" },
      { name: "The Pepperoni Chicken Melt", desc: "Grilled chicken, imported pepperoni, onions, olives and fresh mozzarella", price: "9\" Rs. 1860 | 12\" Rs. 2430 | 15\" Rs. 3850" },
      { name: "The Chicken And Tomato", desc: "Grilled chicken, cherry tomatoes, sun dried tomatoes, mozzarella", price: "9\" Rs. 1690 | 12\" Rs. 2320 | 15\" Rs. 3220" },
      { name: "The Tuscan Meatball", desc: "Italian sausage, cherry tomatoes, onions, fennel, mozzarella", price: "9\" Rs. 1790 | 12\" Rs. 2390 | 15\" Rs. 3850" },
      { name: "The Fiery Chicken", desc: "Spicy chicken pizza", price: "9\" Rs. 1650 | 12\" Rs. 2320 | 15\" Rs. 3220" },
      { name: "The Flaming Fajita", desc: "Fajita style chicken with veggies", price: "9\" Rs. 1760 | 12\" Rs. 2370 | 15\" Rs. 3650" }
    ]
  },
  {
    id: 2,
    title: "White Pies & Specials",
    icon: "pbmit-dilicious-icon-pizza-slice",
    items: [
      { name: "The Beef And Mushroom", desc: "Roast beef, shitake mushrooms, onions, mozzarella", price: "9\" Rs. 2190 | 12\" Rs. 2850" },
      { name: "The Spinach And Artichoke", desc: "Spinach, artichoke hearts, olives, mozzarella", price: "9\" Rs. 2390 | 12\" Rs. 2950" },
      { name: "The Anchovy Caper", desc: "Anchovies, Capers, Olives, Burrata", price: "9\" Rs. 2470 | 12\" Rs. 3820" },
      { name: "The Four Cheese", desc: "Cheddar, Red Leicester, Parmesan, Mozzarella", price: "9\" Rs. 2750 | 12\" Rs. 4050" },
      { name: "The Truffle Mushroom", desc: "Four cheese + Truffle mushroom cream", price: "9\" Rs. 2570 | 12\" Rs. 4050" },
      { name: "The Roasted Egg Plant", desc: "Smoked eggplant mash, Roasted eggplant and fresh Mozzarella", price: "9\" Rs. 1750 | 12\" Rs. 2550" },
      { name: "The Almighty Veg", desc: "Your favorite veggies and fresh mozzarella", price: "9\" Rs. 1750 | 12\" Rs. 2550" },
      { name: "The Barbarian Feast", desc: "Grilled chicken breast, fajita chicken, Tuscan meat balls, roast beef, onions, mozzarella", price: "9\" Rs. 2650 | 12\" Rs. 3550" }
    ]
  },
  {
    id: 3,
    title: "Pastas",
    icon: "pbmit-dilicious-icon-food",
    items: [
      { name: "Spaghetti Bolognese", desc: "Classic beef ragù simmered with tomato, garlic, and herbs, served over al dente spaghetti.", price: "Rs. 2200" },
      { name: "Truffle Mushroom Ravioli", desc: "Porcini and hand rolled ricotta ravioli in a cherry tomato and wild mushroom truffle sauce.", price: "Rs. 2850" },
      { name: "Fettuccine Con Pollo E Crema", desc: "Handcut fettuccine tossed with chicken breast in cheese, cream and parsley", price: "Rs. 2500" },
      { name: "Spaghetti Puttanesca", desc: "Olives, capers, garlic, and tomatoes - a bold Neapolitan classic.", price: "Rs. 2000" },
      { name: "Smoked Salmon Fettuccine", desc: "Smoked salmon in herbed lemon cream sauce tossed in hand cut fettuccine.", price: "Rs. 3250" }
    ]
  },
  {
    id: 4,
    title: "Main Plates",
    icon: "pbmit-dilicious-icon-restaurant",
    items: [
      { name: "Chicken De La Casa", desc: "Pan seared chicken with a rosemary and mustard cream reduction, served with seasonal vegetables and roasted potatoes.", price: "Rs. 2450" },
      { name: "Chicken Piccata", desc: "Pan-seared chicken in lemon-caper butter, served with seasonal vegetables and roasted potatoes.", price: "Rs. 2450" },
      { name: "Chicken Parmigiana", desc: "Breaded chicken cutlet topped with marinara, mozzarella, and basil served with Chef's selection of pasta.", price: "Rs. 2250" },
      { name: "Chicken Bruschetta", desc: "Breaded chicken cutlet topped with fresh mozzarella, tomatoes, and balsamic glaze.", price: "Rs. 2150" },
      { name: "Prawns Fra Diavolo", desc: "Prawns sautéed in fiery tomato-chili sauce served with garlic bread.", price: "Rs. 3450" },
      { name: "Lemon Butter Sea Bass", desc: "Pan-seared sea bass with a lemon-butter sauce served over wilted spinach and roasted mushrooms and a side of roasted potatoes.", price: "Rs. 3250" },
      { name: "Filet Mignon", desc: "Grilled then baked succulent veal tenderloin steak served with a side of vegetables and choice of fried potato wedges or roasted potatoes.", price: "Rs. 3050" }
    ]
  },
  {
    id: 5,
    title: "On The Side",
    icon: "pbmit-dilicious-icon-french-fries",
    items: [
      { name: "Classic Wings", desc: "Crispy fried wings, served plain with ranch sauce", price: "6 pcs Rs. 800 | 12 pcs Rs. 1250" },
      { name: "Buffalo Wings", desc: "Crispy fried wings tossed in a spicy, tangy buffalo sauce", price: "6 pcs Rs. 950 | 12 pcs Rs. 1390" },
      { name: "Honey Hot Wings", desc: "Crispy fried wings, coated in a tangy hot sauce and drizzled with hot honey", price: "6 pcs Rs. 1250 | 12 pcs Rs. 2150" },
      { name: "Baked Garlic Parmesan Wings", desc: "Seasoned baked wings coated in our house garlic and parmesan rub", price: "6 pcs Rs. 950 | 12 pcs Rs. 1390" },
      { name: "Cajun Dry Wings", desc: "Crispy fried wings, tossed in our special cajun rub", price: "6 pcs Rs. 800 | 12 pcs Rs. 1250" },
      { name: "Herbed Potato Wedges", desc: "Dips & Chips", price: "Rs. 800" },
      { name: "House Ranch / Marinara Dip", desc: "Dips & Chips", price: "Rs. 300" }
    ]
  }
];

let html = '<div class="pbmit-menu-tab-element">\n<ul class="pbmit-tabs-heading">\n';

tabs.forEach(tab => {
    html += `    <li class="pbmit-tab-link ${tab.id === 1 ? 'pbmit-tab-li-active' : ''}" data-pbmit-tab="${tab.id}" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 120px; padding: 15px 5px; border: 1px solid #ffe3e3; border-radius: 10px; background: #fff; cursor: pointer; transition: all 0.3s ease; text-align: center; box-sizing: border-box;">
        <div class="pbmit-tabmenu-icon" style="margin-bottom: 8px;">
            <div class="pbmit-tabmenu-icon-wrapper">
                <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                    <i class="pbmit-dilicious-icon ${tab.icon}" style="font-size: 28px; color: #e62222;"></i>
                </div>
            </div>
        </div>
        <span style="width: 100%; display: block;"><h3 class="pbminfotech-tabmenu-heading" style="font-size: 13px; margin: 0; color: #333; line-height: 1.3; width: 100%;">${tab.title}</h3></span>
    </li>\n`;
});

html += '</ul>\n<div class="pbmit-tab-content-wrapper">\n';

tabs.forEach(tab => {
    html += `    <div class="pbmit-tab-content pbmit-tab-content-${tab.id} ${tab.id === 1 ? 'pbmit-tab-active' : ''}" data-pbmit-tab="${tab.id}">\n        <div class="row">\n`;
    
    tab.items.forEach(item => {
        html += `        <div class="col-md-6 pbminfotech-menuitem" style="margin-bottom: 25px;">
            <div class="pbmit-ele-menuitem pbmit-menu-style-1">
                <div class="pbminfotech-box-content">
                    <div class="pbminfotech-menuitem-head" style="display: flex; align-items: baseline;">
                        <h4 class="pbminfotech-menuitem-title" style="flex: 0 1 auto; white-space: normal; font-size: 18px; color: #000; font-weight: 700;">${item.name}</h4>
                        <div class="pbminfotech-menuitem-leader" style="flex: 1 1 auto; border-bottom: 2px dotted #ccc; margin: 0 10px;"></div>
                        <div class="pbminfotech-menuitem-price" style="flex: 0 1 auto; font-size: 20px; font-weight: 900; color: #e62222; white-space: nowrap;">${item.price}</div>
                    </div>
                    <div class="pbminfotech-menuitem-desc" style="font-size: 13px; color: #666; margin-top: 8px; line-height: 1.4;">${item.desc}</div>
                </div>
            </div>
        </div>\n`;
    });
    
    html += `        </div>\n    </div>\n`;
});

html += '</div>\n</div>';

let content = fs.readFileSync('public/pomodoro/index.html', 'utf8');
const startIndex = content.indexOf('<div class="pbmit-menu-tab-element">');
const afterIndex = content.indexOf('elementor-element-2e9539b');

if (startIndex !== -1 && afterIndex !== -1) {
    const part1 = content.slice(0, startIndex);
    
    // Search backward from afterIndex for </section>
    let endOfSection = content.lastIndexOf('</section>', afterIndex);
    
    const part3 = `
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
` + content.slice(endOfSection + 10);

    fs.writeFileSync('public/pomodoro/index.html', part1 + html + part3);
    console.log("Pomodoro menu successfully generated and injected.");
} else {
    console.log("Could not find boundaries in pomodoro/index.html");
}
