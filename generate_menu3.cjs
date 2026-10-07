const fs = require('fs');
const data = require('./menu_data.json');
const cheerio = require('cheerio');

let validCategories = data.filter(c => c.items && c.items.length > 0);
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

let tabsHtml = `
<style>
  .pbmit-tab-content { display: none; }
  .pbmit-tab-content.pbmit-tab-active { display: block; animation: fadeIn 0.5s; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .pbmit-tabs-heading::-webkit-scrollbar { width: 6px; }
  .pbmit-tabs-heading::-webkit-scrollbar-thumb { background: #e62222; border-radius: 10px; }
  .pbmit-tabs-heading::-webkit-scrollbar-track { background: #f5f5f5; border-radius: 10px; }
</style>
<ul class="pbmit-tabs-heading" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; list-style: none; padding: 15px; margin: 0 0 40px 0; max-height: 400px; overflow-y: auto; overflow-x: hidden; border: 1px solid #f0f0f0; border-radius: 12px; box-shadow: inset 0 0 10px rgba(0,0,0,0.02);">
`;
let contentHtml = '';

validCategories.forEach((cat, index) => {
    const tabId = index + 1;
    const isActive = index === 0 ? 'pbmit-tab-li-active' : '';
    const isActiveContent = index === 0 ? 'pbmit-tab-active' : '';
    const icon = icons[index % icons.length];

    tabsHtml += `
    <li class="pbmit-tab-link ${isActive}" data-pbmit-tab="${tabId}" style="width: calc(20% - 12px); min-width: 130px; margin: 0; padding: 15px; border: 1px solid #ffe3e3; border-radius: 10px; background: #fff; cursor: pointer; transition: all 0.3s ease;">
        <div class="pbmit-tabmenu-icon" style="margin-bottom: 10px;">
            <div class="pbmit-tabmenu-icon-wrapper">
                <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                    <i class="pbmit-dilicious-icon ${icon}" style="font-size: 32px; color: #e62222;"></i>
                </div>
            </div>
        </div>
        <span><h3 class="pbminfotech-tabmenu-heading" style="font-size: 14px; margin: 0; color: #333; line-height: 1.2;">${cat.name}</h3></span>
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
        <div class="col-md-6 pbminfotech-menuitem" style="margin-bottom: 25px;">
            <div class="pbmit-ele-menuitem pbmit-menu-style-1">
                <div class="pbminfotech-box-content">
                    <div class="pbminfotech-menuitem-head" style="display: flex; align-items: baseline;">
                        <h4 class="pbminfotech-menuitem-title" style="flex: 0 1 auto; white-space: normal; font-size: 18px; color: #000; font-weight: 700;">${title}</h4>
                        <div class="pbminfotech-menuitem-leader" style="flex: 1 1 auto; border-bottom: 2px dotted #ccc; margin: 0 10px;"></div>
                        <div class="pbminfotech-menuitem-price" style="flex: 0 1 auto; font-size: 20px; font-weight: 900; color: #e62222; white-space: nowrap;">${price}</div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });

    contentHtml += `
    <div class="pbmit-tab-content pbmit-tab-content-${tabId} ${isActiveContent}" data-pbmit-tab="${tabId}">
        <div class="row">
            ${itemsHtml}
        </div>
    </div>
    `;
});

tabsHtml += '</ul>';

const updateFile = (file) => {
    let html = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(html);
    if ($('.pbmit-tabs').length > 0) {
        $('.pbmit-tabs').html(tabsHtml + '\n' + contentHtml);
        fs.writeFileSync(file, $.html());
        console.log(`Updated ${file}`);
    }
};

updateFile('public/pizzabox/menu.html');
updateFile('public/pizzabox/index.html');
