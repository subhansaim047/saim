const fs = require('fs');
const data = require('./grouped_menu_data.json');
const cheerio = require('cheerio');

const getIcon = (name) => {
    name = name.toLowerCase();
    if (name.includes('starter')) return 'pbmit-dilicious-icon-food';
    if (name.includes('side')) return 'pbmit-dilicious-icon-nachos';
    if (name.includes('fries')) return 'pbmit-dilicious-icon-french-fries';
    if (name.includes('pizza')) return 'pbmit-dilicious-icon-pizza';
    if (name.includes('burger')) return 'pbmit-dilicious-icon-hamburger';
    if (name.includes('chef')) return 'pbmit-dilicious-icon-food-and-restaurant';
    if (name.includes('broast')) return 'pbmit-dilicious-icon-fast-food-1';
    if (name.includes('chinese')) return 'pbmit-dilicious-icon-sushi-1';
    if (name.includes('handi')) return 'pbmit-dilicious-icon-food-1';
    if (name.includes('bbq')) return 'pbmit-dilicious-icon-sausage';
    if (name.includes('tandoor')) return 'pbmit-dilicious-icon-broccoli';
    if (name.includes('deals')) return 'pbmit-dilicious-icon-discount';
    if (name.includes('dessert')) return 'pbmit-dilicious-icon-ice-cream-1';
    if (name.includes('shake')) return 'pbmit-dilicious-icon-soda-1';
    if (name.includes('coffee')) return 'pbmit-dilicious-icon-soda';
    if (name.includes('tea')) return 'pbmit-dilicious-icon-soda';
    if (name.includes('mocktail')) return 'pbmit-dilicious-icon-soda';
    if (name.includes('beverage')) return 'pbmit-dilicious-icon-soda';
    return 'pbmit-dilicious-icon-food';
};

let tabsHtml = `
<style>
  .pbmit-tab-content { display: none; }
  .pbmit-tab-content.pbmit-tab-active { display: block; animation: fadeIn 0.5s; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .pbmit-tabs-heading::-webkit-scrollbar { width: 6px; }
  .pbmit-tabs-heading::-webkit-scrollbar-thumb { background: #e62222; border-radius: 10px; }
  .pbmit-tabs-heading::-webkit-scrollbar-track { background: #f5f5f5; border-radius: 10px; }
  
  /* Fix the truncation of text completely */
  .pbmit-tabs-heading li.pbmit-tab-link {
      margin: 0 !important; /* Remove any theme margins causing gaps */
  }
  .pbmit-tabs-heading li.pbmit-tab-link span, 
  .pbmit-tabs-heading li.pbmit-tab-link h3 { 
      white-space: normal !important; 
      word-wrap: break-word !important; 
      word-break: break-word !important;
      overflow: visible !important; 
      text-overflow: unset !important;
      display: block !important;
      -webkit-line-clamp: unset !important;
      height: auto !important;
      max-height: none !important;
      text-align: center;
  }
</style>
<ul class="pbmit-tabs-heading" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 15px; list-style: none; padding: 15px; margin: 0 0 40px 0; max-height: 480px; overflow-y: auto; overflow-x: hidden; border: 1px solid #f0f0f0; border-radius: 12px; box-shadow: inset 0 0 10px rgba(0,0,0,0.02);">
`;
let contentHtml = '';

data.forEach((cat, index) => {
    const tabId = index + 1;
    const isActive = index === 0 ? 'pbmit-tab-li-active' : '';
    const isActiveContent = index === 0 ? 'pbmit-tab-active' : '';
    let icon = getIcon(cat.name);

    tabsHtml += `
    <li class="pbmit-tab-link ${isActive}" data-pbmit-tab="${tabId}" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; min-height: 120px; padding: 15px 5px; border: 1px solid #ffe3e3; border-radius: 10px; background: #fff; cursor: pointer; transition: all 0.3s ease; text-align: center; box-sizing: border-box;">
        <div class="pbmit-tabmenu-icon" style="margin-bottom: 8px;">
            <div class="pbmit-tabmenu-icon-wrapper">
                <div class="pbmit-icon-wrapper pbmit-icon-type-icon">
                    <i class="pbmit-dilicious-icon ${icon}" style="font-size: 28px; color: #e62222;"></i>
                </div>
            </div>
        </div>
        <span style="width: 100%; display: block;"><h3 class="pbminfotech-tabmenu-heading" style="font-size: 13px; margin: 0; color: #333; line-height: 1.3; width: 100%;">${cat.name}</h3></span>
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
