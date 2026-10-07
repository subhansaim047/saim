const fs = require('fs');

const lines = fs.readFileSync('ocr_menu.txt', 'utf8').split('\n').map(l => l.trim()).filter(l => l);

const menu = [];
let currentCategory = null;

// Categories without prices, lines with prices are items.
for (let line of lines) {
    if (line.match(/Rs\.?\s*\d+/i)) {
        // It's an item
        if (currentCategory) {
            currentCategory.items.push(line);
        }
    } else {
        // It's a category
        currentCategory = { name: line, items: [] };
        menu.push(currentCategory);
    }
}

fs.writeFileSync('menu_data.json', JSON.stringify(menu, null, 2));
console.log('Parsed ' + menu.length + ' categories');
