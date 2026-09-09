const fs = require('fs');
const https = require('https');
const path = require('path');
const cheerio = require('cheerio');

const imagesDir = path.join(__dirname, '../../public/demos/dilicious-pizza/images/');
const bgUrl = 'https://dilicious-demo.pbminfotech.com/burger/wp-content/uploads/sites/3/2023/03/burger-bg-img-02.png';
const dest = path.join(imagesDir, 'burger-bg-img-02.png');

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

async function fixLayout() {
    await downloadImage(bgUrl, dest);
    
    const indexHtmlPath = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    const $i = cheerio.load(indexHtml, { decodeEntities: false });
    
    // Add the huge yellow circle
    if ($i('#huge-yellow-circle').length === 0) {
        // We will insert it as the first child of the elementor-container in f3401e1
        $i('.elementor-element-f3401e1 > .elementor-container').prepend(`
            <div id="huge-yellow-circle" style="position: absolute; top: -100px; left: -150px; width: 1000px; height: 1000px; background-image: url('images/burger-bg-img-02.png'); background-repeat: no-repeat; background-size: contain; z-index: 0; pointer-events: none;"></div>
        `);
        // Make container position relative if it's not
        $i('.elementor-element-f3401e1 > .elementor-container').css('position', 'relative');
    }
    
    // Check if gsap scroll triggers are initialized for the burger parts
    // In original demo, there is a script that initializes .pbmit-tween-effect
    // We already have scripts/gsap-animation.js which should do it.
    
    fs.writeFileSync(indexHtmlPath, $i.html());
    console.log('Fixed yellow circle!');
}

fixLayout().catch(console.error);
