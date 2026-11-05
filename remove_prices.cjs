const fs = require('fs');
const glob = require('glob'); // Note: we can just use fs.readdirSync if glob isn't available, but node has fast ways. We'll just loop the known files.

const files = [
    'public/burger-garage/index.html',
    'public/burger-garage/cart.html',
    'public/burger-garage/product-detail.html'
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace exact match "$240.00" and "$240" with empty string in price tags
        content = content.replace(/>\$240\.00</g, '><');
        content = content.replace(/>\$240</g, '><');
        fs.writeFileSync(file, content);
        console.log('Cleaned', file);
    }
}
