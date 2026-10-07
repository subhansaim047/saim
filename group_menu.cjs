const fs = require('fs');
const data = require('./menu_data.json');

// Fix cold beverages first if not fixed in JSON
let validCategories = data.filter(c => c.items && c.items.length > 0);
const coldBeverages = validCategories.find(c => c.name === 'Cold Beverages');
if (coldBeverages && coldBeverages.items.length === 0) {
    const drinkNames = ['Soft Drink Tin', 'Soft Drink 1L', 'Soft Drink 1.5L', 'Powerful', 'Water Bottle S', 'Water Bottle L', 'Sting', 'Redbull'];
    drinkNames.forEach(d => coldBeverages.items.push(d));
} else if (!coldBeverages) {
    validCategories.push({
        name: 'Cold Beverages',
        items: ['Soft Drink Tin', 'Soft Drink 1L', 'Soft Drink 1.5L', 'Powerful', 'Water Bottle S', 'Water Bottle L', 'Sting', 'Redbull']
    });
}

const groups = [
    {
        name: "Starter & Wings",
        keys: ["Starter", "Wings"]
    },
    {
        name: "Side Orders & Dips",
        keys: ["Side Orders", "Dip"]
    },
    {
        name: "Fries, Pasta & Cheese Stick",
        keys: ["Loaded Fries & Pasta", "Cheese Stick"]
    },
    {
        name: "Classic & Special Pizzas",
        keys: ["Pizza", "Pizza Box Special"]
    },
    {
        name: "Burgers & Sandwiches",
        keys: ["Burgers", "Pizza Box Special Burgers", "Grilled Burgers", "Grilled Sandwich"]
    },
    {
        name: "Chef Special & Steaks",
        keys: ["Chef Recommendation", "Beef & Chicken Steaks"]
    },
    {
        name: "Chicken Broast",
        keys: ["Chicken Broast"]
    },
    {
        name: "Chinese & Rice",
        keys: ["Chinese", "Rice"]
    },
    {
        name: "Handi & Karahi",
        keys: ["Handi/Karahi"]
    },
    {
        name: "BBQ & Kabab",
        keys: ["Chicken Barbeque", "Chicken Kabab", "Mutton Barbeque"]
    },
    {
        name: "BBQ Platters & Lamb",
        keys: ["Barbeque Platters", "Whole Lamb"]
    },
    {
        name: "Tandoor, Salad & Raita",
        keys: ["Tandoor", "Salad/Raita"]
    },
    {
        name: "Exclusive Deals",
        keys: ["Pizza Deals", "Burger Deals", "Chicken Deals", "Kids Deal"]
    },
    {
        name: "Desserts & Ice Cream",
        keys: ["Dessert", "Ice-Cream"]
    },
    {
        name: "Shakes & Smoothies",
        keys: ["Seasonal Fresh Shakes", "Chocolate Shakes", "Ice Shakes", "All Natural Smoothies"]
    },
    {
        name: "Coffee & Frappe",
        keys: ["Hot Coffee", "Cold Coffee", "Ice Latte", "Frape Flavour"]
    },
    {
        name: "Tea & Bubble Tea",
        keys: ["Tea", "Ice Tea", "Bubble Tea"]
    },
    {
        name: "Mocktails & Slush",
        keys: ["Mocktail", "Mix Majitos", "Slush", "On The Rocks", "Chiller Mania"]
    },
    {
        name: "Cold Beverages & Soda",
        keys: ["Cold Beverages", "Soda Drink"]
    }
];

let groupedCategories = [];

groups.forEach(group => {
    let items = [];
    group.keys.forEach(key => {
        let cat = validCategories.find(c => c.name === key);
        if (cat) {
            // Optional: insert a sub-header or just combine
            items = items.concat(cat.items);
        }
    });
    if (items.length > 0) {
        groupedCategories.push({ name: group.name, items: items });
    }
});

// Find any leftovers that weren't mapped
let mappedKeys = groups.reduce((acc, curr) => acc.concat(curr.keys), []);
validCategories.forEach(cat => {
    if (!mappedKeys.includes(cat.name)) {
        console.log("Leftover category: " + cat.name);
        groupedCategories.push(cat);
    }
});

fs.writeFileSync('grouped_menu_data.json', JSON.stringify(groupedCategories, null, 2));
console.log('Grouped into ' + groupedCategories.length + ' categories.');

