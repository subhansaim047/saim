const scrape = require('website-scraper').default;
const path = require('path');
const fs = require('fs');

const options = {
    urls: [
        'https://uiparadox.co.uk/templates/royalfare/v3/index.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/about.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/menu.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/blog.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/contact.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/booking.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/blog-details.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/checkout.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/cart.html',
        'https://uiparadox.co.uk/templates/royalfare/v3/services.html'
    ],
    directory: path.join(__dirname, 'public/burger-garage'),
    recursive: true,
    maxDepth: 2,
    filenameGenerator: 'bySiteStructure',
    urlFilter: (url) => {
        return url.startsWith('https://uiparadox.co.uk/templates/royalfare/v3/');
    },
    ignoreErrors: true,
};

fs.rmSync(path.join(__dirname, 'public/burger-garage'), { recursive: true, force: true });

scrape(options).then((result) => {
    console.log("Website successfully scraped with bySiteStructure!");
}).catch((err) => {
    console.error("An error occurred", err);
});
