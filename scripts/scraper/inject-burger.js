const fs = require('fs');
const https = require('https');
const path = require('path');
const cheerio = require('cheerio');

const imagesDir = path.join(__dirname, '../../public/demos/dilicious-pizza/images/');
const indexHtmlPath = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');

// 1. Load burger.html and find section
const burgerHtml = fs.readFileSync('burger.html', 'utf8');
const $b = cheerio.load(burgerHtml);
const section = $b('*:contains("Our Pizza Do The Talking")').last().closest('.elementor-top-section');

if (!section.length) {
    console.error('Section not found!');
    process.exit(1);
}

// 2. Extract and download images
const imagesToDownload = new Set();
const urlMap = {};

section.find('img').each((i, el) => {
    const src = $b(el).attr('src');
    if (src && src.includes('pbminfotech.com')) imagesToDownload.add(src);
    
    const srcset = $b(el).attr('srcset');
    if (srcset) {
        srcset.split(',').forEach(part => {
            const url = part.trim().split(' ')[0];
            if (url && url.includes('pbminfotech.com')) imagesToDownload.add(url);
        });
    }
});

// Also check background images
section.find('*').each((i, el) => {
    const style = $b(el).attr('style');
    if (style && style.includes('url(')) {
        const match = style.match(/url\(['"]?(.*?)['"]?\)/);
        if (match && match[1] && match[1].includes('pbminfotech.com')) {
            imagesToDownload.add(match[1]);
        }
    }
});

console.log(`Found ${imagesToDownload.size} images to download.`);

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

async function processSection() {
    // Download all images
    for (const url of imagesToDownload) {
        const filename = path.basename(url.split('?')[0]);
        const dest = path.join(imagesDir, filename);
        urlMap[url] = `/demos/dilicious-pizza/images/${filename}`;
        console.log(`Downloading ${filename}...`);
        await downloadImage(url, dest);
    }
    
    // Replace URLs in section HTML
    let sectionHtml = $b.html(section);
    for (const [original, local] of Object.entries(urlMap)) {
        sectionHtml = sectionHtml.split(original).join(local);
    }
    
    // 3. Inject into index.html
    let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    const $i = cheerio.load(indexHtml, { decodeEntities: false });
    
    // Find the Fastest Delivery section (has the scooter boy image)
    const fastestDeliverySection = $i('.elementor-top-section:contains("Fastest Delivery")').last();
    if (fastestDeliverySection.length) {
        fastestDeliverySection.before(sectionHtml);
        console.log('Inserted section before Fastest Delivery');
    } else {
        // Fallback: append to elementor-section-wrap
        $i('div[data-elementor-type="wp-page"] > .elementor-section-wrap').append(sectionHtml);
        console.log('Appended section to the end of elementor wrapper');
    }
    
    fs.writeFileSync(indexHtmlPath, $i.html());
    console.log('Done!');
}

processSection().catch(console.error);
