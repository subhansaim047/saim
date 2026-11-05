const fs = require('fs');
const path = require('path');

const dir = 'public/burger-garage';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = {
    'href="signup.html"': 'href="#"',
    'href="cart.html"': 'href="#"',
    'href="shop-grid-right-sidebar.html"': 'href="menu.html"',
    'href="shop-grid.html"': 'href="menu.html"',
    'href="team.html"': 'href="about.html"',
    'href="team-detail.html"': 'href="about.html"',
    'href="product-detail.html"': 'href="menu.html"',
    'href="checkout.html"': 'href="#"'
};

for (const file of files) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let changed = false;
    for (const [oldStr, newStr] of Object.entries(replacements)) {
        // We will replace globally
        const regex = new RegExp(oldStr.replace(/\./g, '\\.'), 'g');
        if (regex.test(content)) {
            content = content.replace(regex, newStr);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log('Fixed broken links in', file);
    }
}
