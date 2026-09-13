const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('public/demos/dilicious-pizza/index.html', 'utf8');
const $ = cheerio.load(html);

const menuData = [
  // Col 1 items (Pizzas + Burgers)
  [
    { name: "FitBite Special", price: "S: 800 | M: 1199 | L: 1399", desc: "Special marinated chicken, cheesy dough, signature sauce, olives", img: "burger-img-01.jpg" },
    { name: "Kebab Crust Pizza", price: "S: 950 | M: 1350 | L: 1650", desc: "Juicy seekh kebabs baked into the crust with premium chicken", img: "burger-img-02.jpg" },
    { name: "Donar Pizza", price: "M: 1350 | L: 1650", desc: "Turkish style seasoned donar meat slices, secret sauce, cheese", img: "burger-img-03.jpg" },
    { name: "Chicken Tikka", price: "S: 650 | M: 950 | L: 1199", desc: "Chicken, Onion, Tasty Sauce, Black Olive, Tomato, Chilli, Cheese", img: "burger-img-04.jpg" },
    { name: "Chicken Fajita", price: "S: 650 | M: 950 | L: 1199", desc: "Chicken, Onion, Special Sauce, Capsicum, Tomato, Chilli, Cheese", img: "burger-img-01.jpg" },
    { name: "Chicken Supreme", price: "S: 650 | M: 950 | L: 1199", desc: "Chicken, Onion, Special Sauce, Capsicum, Tomato, Chilli, Cheese", img: "burger-img-02.jpg" },
    { name: "Tandoori Pizza", price: "S: 650 | M: 950 | L: 1199", desc: "Tandoori Special Chicken, Sauce, Olive, Tomato, Chilli, Cheese", img: "burger-img-03.jpg" },
    { name: "Hot - N - Spicy", price: "S: 650 | M: 950 | L: 1199", desc: "Spicy Chicken, Onion, Capsicum, Black Olive, Tomato, Chilli", img: "burger-img-04.jpg" },
    { name: "Italian Pizza", price: "S: 650 | M: 950 | L: 1199", desc: "Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano", img: "burger-img-01.jpg" },
    { name: "Chicken Mexican", price: "S: 650 | M: 950 | L: 1199", desc: "Special Chicken, Sauce, Corn, Tomato, Chilli, Cheese, Oregano", img: "burger-img-02.jpg" },
    { name: "Malai Special", price: "S: 650 | M: 950 | L: 1199", desc: "Malai Special Chicken, Sauce, Tomato, Cheese, Oregano", img: "burger-img-03.jpg" },
    { name: "Chicken Lover", price: "S: 650 | M: 950 | L: 1199", desc: "Extra Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano", img: "burger-img-04.jpg" },
    { name: "Achari Special", price: "S: 650 | M: 950 | L: 1199", desc: "Achari Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano", img: "burger-img-01.jpg" },
    { name: "Vegetable Pizza", price: "S: 650 | M: 950 | L: 1199", desc: "Fresh Onion, Capsicum, Tomatoes, Corn, Olives & Cheese", img: "burger-img-02.jpg" },
    { name: "Crispo Thigh Zinger", price: "Rs. 380", desc: "Crispy golden deep-fried chicken thigh fillet with fresh lettuce", img: "burger-img-03.jpg" },
    { name: "Crispo Thigh Zinger Cheese", price: "Rs. 450", desc: "Crunchy thigh zinger fillet topped with melted cheese", img: "burger-img-04.jpg" },
    { name: "Crispo Thigh Zinger Large", price: "Rs. 450", desc: "Super-sized crispy zinger thigh fillet in toasted sesame bun", img: "burger-img-01.jpg" },
    { name: "Chicken Burger", price: "Rs. 350", desc: "Tender flavorful chicken patty with crisp onions and lettuce", img: "burger-img-02.jpg" },
    { name: "Chicken Cheese Burger", price: "Rs. 420", desc: "Juicy grilled chicken patty loaded with melted American cheese", img: "burger-img-03.jpg" },
    { name: "Double Decker Burger", price: "Rs. 599", desc: "Twin crispy patties stacked high with double cheese & sauce", img: "burger-img-04.jpg" }
  ],
  // Col 2 items (Rolls, Fries, Cheese Sticks, Beverages)
  [
    { name: "Tikka Paratha", price: "Rs. 380", desc: "Spicy marinated tikka chicken chunks rolled in flaky paratha", img: "pizza-img-01.jpg" },
    { name: "BBQ Tikka Paratha", price: "Rs. 430", desc: "Smoky BBQ grilled chicken cubes drizzled with sauce", img: "pizza-img-02.jpg" },
    { name: "Kebab Paratha", price: "Rs. 430", desc: "Delicious tender seekh kebab wrapped in a butter-toasted paratha", img: "pizza-img-03.jpg" },
    { name: "Twister Paratha", price: "Rs. 430", desc: "Crispy fried chicken strip rolled with crunchy iceberg lettuce", img: "pizza-img-04.jpg" },
    { name: "Pizza Paratha", price: "Rs. 750", desc: "Stuffed with pizza chicken, cheese, olives, and herbs", img: "pizza-img-01.jpg" },
    { name: "Chicken Shawarma", price: "Rs. 250", desc: "Classic shredded chicken shawarma in authentic garlic sauce", img: "pizza-img-02.jpg" },
    { name: "Chicken Cheese Shawarma", price: "Rs. 320", desc: "Juicy chicken shawarma filled with melted liquid cheese", img: "pizza-img-03.jpg" },
    { name: "Special Chicken Shawarma", price: "Rs. 320", desc: "Extra meat portion with chef's special spice blend", img: "pizza-img-04.jpg" },
    { name: "Zinger Shawarma", price: "Rs. 380", desc: "Crunchy zinger chicken strip wrapped with garlic sauce", img: "pizza-img-01.jpg" },
    { name: "Loaded Fries", price: "Rs. 799", desc: "Crispy golden fries loaded with grilled chicken, cheese sauce", img: "pizza-img-02.jpg" },
    { name: "Small Loaded Fries", price: "Rs. 499", desc: "Small portion crispy golden fries loaded with grilled chicken", img: "pizza-img-03.jpg" },
    { name: "Reg Fries", price: "Rs. 200", desc: "Classic salted crispy fries", img: "pizza-img-04.jpg" },
    { name: "Large Fries", price: "Rs. 250", desc: "Large classic salted crispy fries", img: "pizza-img-01.jpg" },
    { name: "Family Fries", price: "Rs. 300", desc: "Family pack classic salted crispy fries", img: "pizza-img-02.jpg" },
    { name: "Small Cheese Stick", price: "Rs. 800", desc: "Oven-baked freshly rolled dough stuffed with mozzarella", img: "pizza-img-03.jpg" },
    { name: "Medium Crown Cheese Stick", price: "Rs. 1200", desc: "Crown-shaped breadsticks stuffed with double mozzarella", img: "pizza-img-04.jpg" },
    { name: "Special Large Crown Cheese Stick", price: "Rs. 1400", desc: "Large crown crust stuffed with strings of pure mozzarella", img: "pizza-img-01.jpg" },
    { name: "Kebabish Cheese Stick", price: "Rs. 950", desc: "Flavorsome seekh kebab pieces embedded within cheese sticks", img: "pizza-img-02.jpg" },
    { name: "BBQ Cheese Stick", price: "Rs. 850", desc: "Smoky chicken BBQ chunks layered inside gooey mozzarella", img: "pizza-img-03.jpg" },
    { name: "250 ml Drink", price: "Chilled", desc: "Chilled personal soft drink", img: "pizza-img-04.jpg" },
    { name: "1 Liter Drink", price: "Chilled", desc: "Family sized soft drink", img: "pizza-img-01.jpg" }
  ]
];

function buildNativeItems(items) {
  let out = '';
  items.forEach((item) => {
    out += `
    <article class="pbmit-ele pbmit-ele-miconheading pbmit-miconheading-style-6 col-md-12   ">
        <div class="pbmit-ihbox pbmit-ihbox-style-6">
            <div class="pbmit-ihbox-icon">
                <div class="pbmit-ihbox-icon-wrapper pbmit-ihbox-icon-type-image">
                    <img decoding="async" src="/demos/dilicious-pizza/images/${item.img}" alt="${item.name}" width="300" height="300">
                </div>
            </div>
            <div class="pbmit-ihbox-contents">
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

const col1Wrapper = $('.elementor-element-94957df .pbmit-element-posts-wrapper');
const col2Wrapper = $('.elementor-element-63305ef .pbmit-element-posts-wrapper');

if(col1Wrapper.length && col2Wrapper.length) {
    col1Wrapper.html(buildNativeItems(menuData[0]));
    col2Wrapper.html(buildNativeItems(menuData[1]));
    
    fs.writeFileSync('public/demos/dilicious-pizza/index.html', $.html());
    console.log("Successfully injected native layout menu.");
} else {
    console.log("Could not find columns!");
}
