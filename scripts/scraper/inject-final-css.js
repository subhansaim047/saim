const fs = require('fs');
const https = require('https');
const path = require('path');
const cheerio = require('cheerio');

let css = fs.readFileSync('burger-final.css', 'utf8');

const imagesDir = path.join(__dirname, '../../public/demos/dilicious-pizza/images/');
const imagesToDownload = new Set();

const matches = css.matchAll(/url\(['"]?(.*?)['"]?\)/g);
for (const match of matches) {
    if (match[1] && match[1].includes('pbminfotech.com')) {
        imagesToDownload.add(match[1]);
    }
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            resolve();
            return;
        }
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function processCss() {
    for (const url of imagesToDownload) {
        const filename = path.basename(url.split('?')[0]);
        const dest = path.join(imagesDir, filename);
        console.log(`Downloading ${filename}...`);
        await downloadImage(url, dest);
        
        css = css.split(url).join(`/demos/dilicious-pizza/images/${filename}`);
    }
    
    // Inject into index.html
    const indexHtmlPath = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    const $i = cheerio.load(indexHtml, { decodeEntities: false });
    
    if ($i('#burger-custom-css').length === 0) {
        $i('head').append(`\n<style id="burger-custom-css">\n${css}\n</style>\n`);
    } else {
        $i('#burger-custom-css').html('\n' + css + '\n');
    }
    
    fs.writeFileSync(indexHtmlPath, $i.html());
    console.log('CSS injected successfully!');
}

processCss().catch(console.error);
