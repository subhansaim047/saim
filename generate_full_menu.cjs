const fs = require('fs');

const tabs = [
  {
    id: 1,
    title: "Deals & Combos",
    icon: "pbmit-dilicious-icon-food",
    items: [
      { name: "Baki Sub Free Spring Feast", desc: "Large Kabab Crust Pizza + 1L Cola NEXT + Small Alfredo Pasta + Single Spin Roll + 4 Chicken Stripes", price: "Rs. 2599" },
      { name: "The Cravings Combo Feast", desc: "1x Zinger Burger + 1x Zee Wrap + 1x 300ml Drink", price: "Rs. 599" },
      { name: "Fresh Fish Combo", desc: "3 Fillet + Meal Fries + 2 Dips + 1 Bun", price: "Rs. 1450" },
      { name: "Zinger + Fries + Regular Drink", desc: "Hey. What's Up! Combo", price: "Rs. 740" },
      { name: "Lava Bite + Fries + Drink", desc: "Hey. What's Up! Combo", price: "Rs. 880" },
      { name: "Small Pizza + 345ml Drink", desc: "Hey. What's Up! Combo", price: "Rs. 740" },
      { name: "Medium Kabab Crown + 500ml Drink", desc: "Hey. What's Up! Combo", price: "Rs. 1530" },
      { name: "Large Kabab Crown + 1.5 LTR Drink", desc: "Hey. What's Up! Combo", price: "Rs. 2050" },
      { name: "Family Pizza + 1.5 LTR Drink", desc: "Choose any flavour", price: "Rs. 2730" }
    ]
  },
  {
    id: 2,
    title: "Pizza",
    icon: "pbmit-dilicious-icon-pizza",
    items: [
      { name: "Behari Kabab / Kabab Crown", desc: "Special Pizza (M: 1530, L: 2050, F: 3100)", price: "From Rs. 1530" },
      { name: "ENB Signature Peri Peri / Malaiboti", desc: "Special Pizza (S: 720, M: 1370, L: 1890, F: 2940)", price: "From Rs. 720" },
      { name: "Kabab Stuff Edge / Cheese Stuff Edge", desc: "Special Pizza (M: 1680, L: 2260, F: 3260)", price: "From Rs. 1680" },
      { name: "CH Tikka / CH Fajita / CH Supreme", desc: "Regular Pizza (S: 650, M: 1250, L: 1700, F: 2600)", price: "From Rs. 650" },
      { name: "Lemon Chunks Pizza", desc: "New on Menu (S: 850, M: 1530, L: 2050, F: 3100)", price: "From Rs. 850" },
      { name: "Chicken n Cheese Stuffed Pizza", desc: "Large. Introducing: The New Lahori Standard", price: "Rs. 1900" }
    ]
  },
  {
    id: 3,
    title: "Burgers",
    icon: "pbmit-dilicious-icon-burger",
    items: [
      { name: "Lava Bite", desc: "Grill Burger", price: "Rs. 720" },
      { name: "Molten Cheese Lava", desc: "Grill Burger", price: "Rs. 840" },
      { name: "Molten Cheese Lava Pro", desc: "Grill Burger", price: "Rs. 930" },
      { name: "Mexican BBQ", desc: "Grill Burger", price: "Rs. 720" },
      { name: "Jumbo Patty", desc: "Crunch Burger", price: "Rs. 410" },
      { name: "Jumbo Zinger", desc: "Crunch Burger", price: "Rs. 510" },
      { name: "Chipotle Zinger", desc: "Crunch Burger", price: "Rs. 560" },
      { name: "Cheesy Zinger", desc: "Crunch Burger", price: "Rs. 550" },
      { name: "Mighty Zinger", desc: "Crunch Burger", price: "Rs. 790" },
      { name: "Double Fillet Fish Burger", desc: "Seafood Burger", price: "Rs. 900" },
      { name: "Fish Burger with meal", desc: "Fresh Fish Promo", price: "Rs. 1100" }
    ]
  },
  {
    id: 4,
    title: "Wraps & Sandwiches",
    icon: "pbmit-dilicious-icon-hot-dog",
    items: [
      { name: "Crunch Wrap", desc: "Wraps", price: "Rs. 790" },
      { name: "ENB Special Wrap", desc: "Wraps", price: "Rs. 790" },
      { name: "Peri Peri Wrap", desc: "Wraps", price: "Rs. 790" },
      { name: "Euro Sandwich", desc: "Sandwiches", price: "Rs. 900" },
      { name: "Mexican Sandwich", desc: "Sandwiches", price: "Rs. 900" },
      { name: "Spin Rolls", desc: "Sides", price: "Rs. 790" },
      { name: "Cheese Stick", desc: "Sides", price: "Rs. 690" }
    ]
  },
  {
    id: 5,
    title: "Chicken & Pasta",
    icon: "pbmit-dilicious-icon-fried-chicken",
    items: [
      { name: "Flaming Wings", desc: "Chicken Corner (06pcs: 560, 12pcs: 1030)", price: "From Rs. 560" },
      { name: "Crispy Wings", desc: "Chicken Corner (06pcs: 510, 12pcs: 1030)", price: "From Rs. 510" },
      { name: "Oven Baked Wings", desc: "Chicken Corner (06pcs: 510, 12pcs: 950)", price: "From Rs. 510" },
      { name: "Fettuccine Alfredo", desc: "Pasta", price: "Rs. 1000" },
      { name: "Alfredo Cheese", desc: "Pasta", price: "Rs. 870" },
      { name: "Crunchy Pasta", desc: "Pasta", price: "Rs. 870" },
      { name: "Fish 'N Chips Regular", desc: "2 Fillet + Meal Fries + 1 Dip + 1 Bun", price: "Rs. 1000" }
    ]
  },
  {
    id: 6,
    title: "Fries",
    icon: "pbmit-dilicious-icon-french-fries",
    items: [
      { name: "Small Fries", desc: "Fries", price: "Rs. 240" },
      { name: "Large Fries", desc: "Fries", price: "Rs. 420" },
      { name: "Loaded Fries", desc: "Fries", price: "Rs. 760" }
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
    const displayStyle = tab.id === 1 ? '' : 'style="display: none;"';
    html += `    <div class="pbmit-tab-content pbmit-tab-content-${tab.id} ${tab.id === 1 ? 'pbmit-tab-active' : ''}" data-pbmit-tab="${tab.id}" ${displayStyle}>\n        <div class="row">\n`;
    
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

let content = fs.readFileSync('public/eats-n-bites/index.html', 'utf8');
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

    fs.writeFileSync('public/eats-n-bites/index.html', part1 + html + part3);
    console.log("Menu successfully generated and injected.");
} else {
    console.log("Could not find boundaries.");
}
