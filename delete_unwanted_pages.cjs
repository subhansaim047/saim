const fs = require('fs');
const path = require('path');

const dir = 'public/burger-garage';
const keepFiles = [
    'index.html',
    'menu.html',
    'about.html',
    'contact.html',
    'contact-us.html', // keeping both just in case
    'blog.html',
    'blog-grid.html',
    'blog-detail.html',
    'blog-details.html'
];

const allFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let deletedCount = 0;
for (const file of allFiles) {
    if (!keepFiles.includes(file)) {
        fs.unlinkSync(path.join(dir, file));
        console.log('Deleted', file);
        deletedCount++;
    }
}
console.log(`Deleted ${deletedCount} unwanted HTML pages.`);
