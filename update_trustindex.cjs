const fs = require('fs');

const files = ['public/frenchyse/index.html'];

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace('ef0b09f82c160016b4069c27687', 'c9e53e082bbe37394996ba29931');
    fs.writeFileSync(file, html, 'utf8');
});
console.log("Updated trustindex script id");
