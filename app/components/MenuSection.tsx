import React from 'react';

export default function MenuSection() {
  const items = [
  {
    "title": "FitBite Special",
    "prices": "S: 800 | M: 1199 | L: 1399",
    "desc": "Special marinated chicken, cheesy dough, signature sauce, olives"
  },
  {
    "title": "Kebab Crust Pizza",
    "prices": "S: 950 | M: 1350 | L: 1650",
    "desc": "Juicy seekh kebabs baked into the crust with premium chicken"
  },
  {
    "title": "Donar Pizza",
    "prices": "M: 1350 | L: 1650",
    "desc": "Turkish style seasoned donar meat slices, secret sauce, cheese"
  },
  {
    "title": "Chicken Tikka",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Chicken, Onion, Tasty Sauce, Black Olive, Tomato, Chilli, Cheese"
  },
  {
    "title": "Chicken Fajita",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Chicken, Onion, Special Sauce, Capsicum, Tomato, Chilli, Cheese"
  },
  {
    "title": "Chicken Supreme",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Chicken, Onion, Special Sauce, Capsicum, Tomato, Chilli, Cheese"
  },
  {
    "title": "Tandoori Pizza",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Tandoori Special Chicken, Sauce, Olive, Tomato, Chilli, Cheese"
  },
  {
    "title": "Hot - N - Spicy",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Spicy Chicken, Onion, Capsicum, Black Olive, Tomato, Chilli"
  },
  {
    "title": "Italian Pizza",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano"
  },
  {
    "title": "Chicken Mexican",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Special Chicken, Sauce, Corn, Tomato, Chilli, Cheese, Oregano"
  },
  {
    "title": "Malai Special",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Malai Special Chicken, Sauce, Tomato, Cheese, Oregano"
  },
  {
    "title": "Chicken Lover",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Extra Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano"
  },
  {
    "title": "Achari Special",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Achari Special Chicken, Sauce, Tomato, Chilli, Cheese, Oregano"
  },
  {
    "title": "Vegetable Pizza",
    "prices": "S: 650 | M: 950 | L: 1199",
    "desc": "Fresh Onion, Capsicum, Tomatoes, Corn, Olives &amp; Cheese"
  },
  {
    "title": "Crispo Thigh Zinger",
    "prices": "Rs. 380",
    "desc": "Crispy golden deep-fried chicken thigh fillet with fresh lettuce"
  },
  {
    "title": "Crispo Thigh Zinger Cheese",
    "prices": "Rs. 450",
    "desc": "Crunchy thigh zinger fillet topped with melted cheese"
  },
  {
    "title": "Crispo Thigh Zinger Large",
    "prices": "Rs. 450",
    "desc": "Super-sized crispy zinger thigh fillet in toasted sesame bun"
  },
  {
    "title": "Chicken Burger",
    "prices": "Rs. 350",
    "desc": "Tender flavorful chicken patty with crisp onions and lettuce"
  },
  {
    "title": "Chicken Cheese Burger",
    "prices": "Rs. 420",
    "desc": "Juicy grilled chicken patty loaded with melted American cheese"
  },
  {
    "title": "Double Decker Burger",
    "prices": "Rs. 599",
    "desc": "Twin crispy patties stacked high with double cheese &amp; sauce"
  },
  {
    "title": "Tikka Paratha",
    "prices": "Rs. 380",
    "desc": "Spicy marinated tikka chicken chunks rolled in flaky paratha"
  },
  {
    "title": "BBQ Tikka Paratha",
    "prices": "Rs. 430",
    "desc": "Smoky BBQ grilled chicken cubes drizzled with sauce"
  },
  {
    "title": "Kebab Paratha",
    "prices": "Rs. 430",
    "desc": "Delicious tender seekh kebab wrapped in a butter-toasted paratha"
  },
  {
    "title": "Twister Paratha",
    "prices": "Rs. 430",
    "desc": "Crispy fried chicken strip rolled with crunchy iceberg lettuce"
  },
  {
    "title": "Pizza Paratha",
    "prices": "Rs. 750",
    "desc": "Stuffed with pizza chicken, cheese, olives, and herbs"
  },
  {
    "title": "Chicken Shawarma",
    "prices": "Rs. 250",
    "desc": "Classic shredded chicken shawarma in authentic garlic sauce"
  },
  {
    "title": "Chicken Cheese Shawarma",
    "prices": "Rs. 320",
    "desc": "Juicy chicken shawarma filled with melted liquid cheese"
  },
  {
    "title": "Special Chicken Shawarma",
    "prices": "Rs. 320",
    "desc": "Extra meat portion with chef's special spice blend"
  },
  {
    "title": "Zinger Shawarma",
    "prices": "Rs. 380",
    "desc": "Crunchy zinger chicken strip wrapped with garlic sauce"
  },
  {
    "title": "Loaded Fries",
    "prices": "Rs. 799",
    "desc": "Crispy golden fries loaded with grilled chicken, cheese sauce"
  },
  {
    "title": "Small Loaded Fries",
    "prices": "Rs. 499",
    "desc": "Small portion crispy golden fries loaded with grilled chicken"
  },
  {
    "title": "Reg Fries",
    "prices": "Rs. 200",
    "desc": "Classic salted crispy fries"
  },
  {
    "title": "Large Fries",
    "prices": "Rs. 250",
    "desc": "Large classic salted crispy fries"
  },
  {
    "title": "Family Fries",
    "prices": "Rs. 300",
    "desc": "Family pack classic salted crispy fries"
  },
  {
    "title": "Small Cheese Stick",
    "prices": "Rs. 800",
    "desc": "Oven-baked freshly rolled dough stuffed with mozzarella"
  },
  {
    "title": "Medium Crown Cheese Stick",
    "prices": "Rs. 1200",
    "desc": "Crown-shaped breadsticks stuffed with double mozzarella"
  },
  {
    "title": "Special Large Crown Cheese Stick",
    "prices": "Rs. 1400",
    "desc": "Large crown crust stuffed with strings of pure mozzarella"
  },
  {
    "title": "Kebabish Cheese Stick",
    "prices": "Rs. 950",
    "desc": "Flavorsome seekh kebab pieces embedded within cheese sticks"
  },
  {
    "title": "BBQ Cheese Stick",
    "prices": "Rs. 850",
    "desc": "Smoky chicken BBQ chunks layered inside gooey mozzarella"
  },
  {
    "title": "250 ml Drink",
    "prices": "Chilled",
    "desc": "Chilled personal soft drink"
  },
  {
    "title": "1 Liter Drink",
    "prices": "Chilled",
    "desc": "Family sized soft drink"
  }
];

  return (
    <section className="w-full py-20 bg-[#F8F6EF]">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-[#f29f05] text-4xl font-extrabold uppercase mb-12 pb-4 border-b-2 border-[#e8e2d8]">Pizzas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-[#282932]">{item.title}</h2>
                <span className="text-sm font-semibold text-[#f29f05] whitespace-nowrap">{item.prices}</span>
              </div>
              <p className="text-[#666]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
