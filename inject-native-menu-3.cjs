const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html);

const menuData = [
  [
    { name: "FitBite Special", price: "S: 800 | M: 1199 | L: 1399", desc: "Special marinated chicken, cheesy dough, signature sauce, olives" },
    { name: "Kebab Crust Pizza", price: "S: 950 | M: 1350 | L: 1650", desc: "Juicy seekh kebabs baked into the crust with premium chicken" },
    { name: "Donar Pizza", price: "M: 1350 | L: 1650", desc: "Turkish style seasoned donar meat slices, secret sauce, cheese" },
    { name: "Chicken Tikka", price: "S: 650 | M: 950 | L: 1199", desc: "Chicken, Onion, Tasty Sauce, Black Olive, Tomato, Chilli, Cheese" },
    { name: "Chicken Fajita", price: "S: 650 | M: 950 | L: 1199", desc: "Chicken, Onion, Special Sauce, Capsicum, Tomato, Chilli, Cheese" },
    { name: "Chicken Supreme", price: "S: 650 | M: 950 | L: 1199", desc: "Chicken, Onion, Special Sauce, Capsicum, Tomato, Chilli, Cheese" },
    { name: "Tandoori Pizza", price: "S: 650 | M: 950 | L: 1199", desc: "Tandoori Special Chicken, Sauce, Olive, Tomato, Chilli, Cheese" },
    { name: "Hot - N - Spicy", price: "S: 650 | M: 950 | L: 1199", desc: "Spicy Chicken, Onion, Capsicum, Black Olive, Tomato, Chilli" },
    { name: "Italian Pizza", price: "S: 650 | M: 950 | L: 1199", desc: "Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano" },
    { name: "Chicken Mexican", price: "S: 650 | M: 950 | L: 1199", desc: "Special Chicken, Sauce, Corn, Tomato, Chilli, Cheese, Oregano" },
    { name: "Malai Special", price: "S: 650 | M: 950 | L: 1199", desc: "Malai Special Chicken, Sauce, Tomato, Cheese, Oregano" },
    { name: "Chicken Lover", price: "S: 650 | M: 950 | L: 1199", desc: "Extra Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano" },
    { name: "Achari Special", price: "S: 650 | M: 950 | L: 1199", desc: "Achari Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano" },
    { name: "Vegetable Pizza", price: "S: 650 | M: 950 | L: 1199", desc: "Fresh Onion, Capsicum, Tomatoes, Corn, Olives & Cheese" }
  ],
  [
    { name: "Crispo Thigh Zinger", price: "Rs. 380", desc: "Crispy golden deep-fried chicken thigh fillet with fresh lettuce" },
    { name: "Crispo Thigh Zinger Cheese", price: "Rs. 450", desc: "Crunchy thigh zinger fillet topped with melted cheese" },
    { name: "Crispo Thigh Zinger Large", price: "Rs. 450", desc: "Super-sized crispy zinger thigh fillet in toasted sesame bun" },
    { name: "Chicken Burger", price: "Rs. 350", desc: "Tender flavorful chicken patty with crisp onions and lettuce" },
    { name: "Chicken Cheese Burger", price: "Rs. 420", desc: "Juicy grilled chicken patty loaded with melted American cheese" },
    { name: "Double Decker Burger", price: "Rs. 599", desc: "Twin crispy patties stacked high with double cheese & sauce" }
  ],
  [
    { name: "Tikka Paratha", price: "Rs. 380", desc: "Spicy marinated tikka chicken chunks rolled in flaky paratha" },
    { name: "BBQ Tikka Paratha", price: "Rs. 430", desc: "Smoky BBQ grilled chicken cubes drizzled with sauce" },
    { name: "Kebab Paratha", price: "Rs. 430", desc: "Delicious tender seekh kebab wrapped in a butter-toasted paratha" },
    { name: "Twister Paratha", price: "Rs. 430", desc: "Crispy fried chicken strip rolled with crunchy iceberg lettuce" },
    { name: "Pizza Paratha", price: "Rs. 750", desc: "Stuffed with pizza chicken, cheese, olives, and herbs" },
    { name: "Chicken Shawarma", price: "Rs. 250", desc: "Classic shredded chicken shawarma in authentic garlic sauce" },
    { name: "Chicken Cheese Shawarma", price: "Rs. 320", desc: "Juicy chicken shawarma filled with melted liquid cheese" },
    { name: "Special Chicken Shawarma", price: "Rs. 320", desc: "Extra meat portion with chef's special spice blend" },
    { name: "Zinger Shawarma", price: "Rs. 380", desc: "Crunchy zinger chicken strip wrapped with garlic sauce" }
  ],
  [
    { name: "Loaded Fries", price: "Rs. 799", desc: "Crispy golden fries loaded with grilled chicken, cheese sauce" },
    { name: "Small Loaded Fries", price: "Rs. 499", desc: "Small portion crispy golden fries loaded with grilled chicken" },
    { name: "Reg Fries", price: "Rs. 200", desc: "Classic salted crispy fries" },
    { name: "Large Fries", price: "Rs. 250", desc: "Large classic salted crispy fries" },
    { name: "Family Fries", price: "Rs. 300", desc: "Family pack classic salted crispy fries" },
    { name: "Small Cheese Stick", price: "Rs. 800", desc: "Oven-baked freshly rolled dough stuffed with mozzarella" },
    { name: "Medium Crown Cheese Stick", price: "Rs. 1200", desc: "Crown-shaped breadsticks stuffed with double mozzarella" },
    { name: "Special Large Crown Cheese Stick", price: "Rs. 1400", desc: "Large crown crust stuffed with strings of pure mozzarella" },
    { name: "Kebabish Cheese Stick", price: "Rs. 950", desc: "Flavorsome seekh kebab pieces embedded within cheese sticks" },
    { name: "BBQ Cheese Stick", price: "Rs. 850", desc: "Smoky chicken BBQ chunks layered inside gooey mozzarella" },
    { name: "250 ml Drink", price: "Chilled", desc: "Chilled personal soft drink" },
    { name: "1 Liter Drink", price: "Chilled", desc: "Family sized soft drink" }
  ]
];

const categoryNames = ["Pizzas", "Burgers", "Paratha & Shawarma", "Fries & Cheese Sticks"];

function buildNativeItemsNoImages(items) {
  let out = '';
  items.forEach((item) => {
    out += `
    <article class="pbmit-ele pbmit-ele-miconheading pbmit-miconheading-style-6 col-md-12   ">
        <div class="pbmit-ihbox pbmit-ihbox-style-6">
            <!-- Removed the pbmit-ihbox-icon completely -->
            <div class="pbmit-ihbox-contents" style="padding-left: 0; margin-left: 0;">
                <div class="pbmit-content-inner">
                    <h2 class="pbmit-element-title">${item.name}</h2>
                    <h4 class="pbmit-element-subtitle" style="font-size: 15px; margin-top: 5px;">${item.price}</h4>
                </div>
                <div class="pbmit-heading-desc">${item.desc}</div>
            </div> 
        </div>
    </article>
    `;
  });
  return out;
}

function buildCategoryHTML(catName, itemsHTML) {
  return `
  <div style="margin-bottom: 50px;">
    <h3 style="margin-bottom: 25px; color: #f29f05; font-size: 32px; font-weight: 800; border-bottom: 2px solid #e8e2d8; padding-bottom: 12px; text-transform: uppercase;">
      ${catName}
    </h3>
    <div class="pbmit-element-posts-wrapper row multi-columns-row">
      ${itemsHTML}
    </div>
  </div>
  `;
}

// Col 1: Pizzas + Burgers
let col1HTML = buildCategoryHTML(categoryNames[0], buildNativeItemsNoImages(menuData[0])) + 
               buildCategoryHTML(categoryNames[1], buildNativeItemsNoImages(menuData[1]));

// Col 2: Paratha & Shawarma + Fries & Cheese Sticks
let col2HTML = buildCategoryHTML(categoryNames[2], buildNativeItemsNoImages(menuData[2])) + 
               buildCategoryHTML(categoryNames[3], buildNativeItemsNoImages(menuData[3]));

const col1Wrapper = $('.elementor-element-94957df .pbmit-element-posts-wrapper');
const col2Wrapper = $('.elementor-element-63305ef .pbmit-element-posts-wrapper');

// Let's replace the content at a higher level so the category headings wrap properly
// In the current layout, the .pbmit-element-posts-wrapper is the container, but we have multiple categories now.
// It's safer to overwrite the inner of .elementor-widget-container to host our new structure cleanly.

$('.elementor-element-94957df .elementor-widget-container').first().html(col1HTML);
$('.elementor-element-63305ef .elementor-widget-container').first().html(col2HTML);

fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
console.log("Successfully injected native layout menu without images.");
