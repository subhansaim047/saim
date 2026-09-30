const fs = require('fs');
const data = require('./menu_data.json');

// Filter out categories that are actually just drinks without prices.
let validCategories = data.filter(c => c.items && c.items.length > 0);

// Fix cold beverages
const coldBeverages = data.find(c => c.name === 'Cold Beverages');
if (coldBeverages) {
    const drinkNames = ['Soft Drink Tin', 'Soft Drink 1L', 'Soft Drink 1.5L', 'Powerful', 'Water Bottle S', 'Water Bottle L', 'Sting', 'Redbull'];
    drinkNames.forEach(d => coldBeverages.items.push(d));
}
if (!validCategories.find(c => c.name === 'Cold Beverages')) {
    validCategories.push({
        name: 'Cold Beverages',
        items: ['Soft Drink Tin', 'Soft Drink 1L', 'Soft Drink 1.5L', 'Powerful', 'Water Bottle S', 'Water Bottle L', 'Sting', 'Redbull']
    });
}

const icons = [
    'pbmit-dilicious-icon-pizza',
    'pbmit-dilicious-icon-burger',
    'pbmit-dilicious-icon-hot-dog',
    'pbmit-dilicious-icon-french-fries',
    'pbmit-dilicious-icon-taco',
    'pbmit-dilicious-icon-sushi-1',
    'pbmit-dilicious-icon-burrito',
    'pbmit-dilicious-icon-sausage',
    'pbmit-dilicious-icon-food',
    'pbmit-dilicious-icon-ice-cream-1'
];

let tabsHtml = '<ul class="pbmit-tabs-heading" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; list-style: none; padding: 0;">\n';
let contentHtml = '';

validCategories.forEach((cat, index) => {
    const tabId = index + 1;
    const isActive = index === 0 ? 'pbmit-tab-li-active' : '';
    const isActiveContent = index === 0 ? 'pbmit-tab-active' : '';
    const icon = icons[index % icons.length];

    tabsHtml += `
    <li class="pbmit-tab-link ${isActive}" data-pbmit-tab="${tabId}" style="width: calc(20% - 15px); min-width: 140px; margin: 0; padding: 15px; border: 1px solid #eee; border-radius: 10px;">
        <div class="pbmit-tabmenu-icon" style="margin-bottom: 10px;">
            <div class="pbmit-tabmenu-icon-wrapper">
                <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                    <i class="pbmit-dilicious-icon ${icon}" style="font-size: 32px;"></i>
                </div>
            </div>
        </div>
        <span><h3 class="pbminfotech-tabmenu-heading" style="font-size: 14px; margin: 0;">${cat.name}</h3></span>
    </li>
    `;

    let itemsHtml = '';
    cat.items.forEach(itemStr => {
        const priceIndex = itemStr.lastIndexOf('Rs.');
        let title = itemStr;
        let price = '';
        if (priceIndex !== -1) {
            title = itemStr.substring(0, priceIndex).trim();
            price = itemStr.substring(priceIndex).trim();
        }

        itemsHtml += `
        <div class="col-md-6">
            <div class="pbmit-ele-menuitem pbmit-menu-style-1">
                <div class="pbminfotech-box-content">
                    <div class="pbminfotech-menuitem-head" style="display: flex; align-items: baseline;">
                        <h4 class="pbminfotech-menuitem-title" style="flex: 0 1 auto; white-space: normal;">${title}</h4>
                        <div class="pbminfotech-menuitem-leader" style="flex: 1 1 auto; border-bottom: 2px dotted #ccc; margin: 0 10px;"></div>
                        <div class="pbminfotech-menuitem-price" style="flex: 0 1 auto; font-weight: bold; color: #ff0000; white-space: nowrap;">${price}</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    contentHtml += `
    <div class="pbmit-tab-content ${isActiveContent}" data-pbmit-tab="${tabId}" style="${index === 0 ? '' : 'display: none;'}">
        <div class="row">
            ${itemsHtml}
        </div>
    </div>
    `;
});

tabsHtml += '</ul>';

const cheerio = require('cheerio');
const file = 'public/pizzabox/menu.html';
const html = fs.readFileSync(file, 'utf8');
const $ = cheerio.load(html);

$('.pbmit-tabs').html(tabsHtml + '\n' + contentHtml);
fs.writeFileSync(file, $.html());

// Do the same for index.html if it has .pbmit-tabs
const fileIndex = 'public/pizzabox/index.html';
const htmlIndex = fs.readFileSync(fileIndex, 'utf8');
const $index = cheerio.load(htmlIndex);
if ($index('.pbmit-tabs').length > 0) {
    $index('.pbmit-tabs').html(tabsHtml + '\n' + contentHtml);
    fs.writeFileSync(fileIndex, $index.html());
}

console.log('Replaced tabs in menu.html and index.html');
