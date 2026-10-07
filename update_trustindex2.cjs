const fs = require('fs');
const glob = require('glob');

const files = glob.sync('public/frenchyse/*.html');

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    if (html.includes('ef0b09f82c160016b4069c27687')) {
        html = html.replace(/ef0b09f82c160016b4069c27687/g, 'c9e53e082bbe37394996ba29931');
        fs.writeFileSync(file, html, 'utf8');
        console.log("Updated", file);
    }
});
