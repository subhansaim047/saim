const fs=require('fs'); 
const cheerio=require('cheerio'); 
const $=cheerio.load(fs.readFileSync('public/demos/dilicious-pizza/index.html')); 

let foundHtml = null;
$('section.elementor-top-section').each((i, el) => {
    const text = $(el).text().toLowerCase();
    if (text.includes("pizzas") && text.includes("burgers") && text.includes("fries")) {
        console.log("Found menu section! ID: " + $(el).attr('data-id'));
        foundHtml = $.html(el);
    }
});

if (foundHtml) {
    const menuHtml = fs.readFileSync('public/demos/dilicious-pizza/menu.html', 'utf8');
    let $m = cheerio.load(menuHtml, { decodeEntities: false });
    
    // Check if elementor-1144 exists
    if ($m('.elementor-1144').length) {
        $m('.elementor-1144').empty();
        $m('.elementor-1144').append(foundHtml);
    } else {
        // If no elementor-1144, just replace the page-content inner html
        const $mainContent = $m('div.page-content');
        if ($mainContent.length) {
            $mainContent.empty();
            $mainContent.append(foundHtml);
        } else {
            console.log("Could not find a container in menu.html!");
        }
    }

    fs.writeFileSync('public/demos/dilicious-pizza/menu.html', $m.html());
    console.log("Successfully injected menu into menu.html!");
} else {
    console.log("Could not find menu section in index.html :(");
}
