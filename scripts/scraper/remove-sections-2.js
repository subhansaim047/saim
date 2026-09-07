const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = path.join(__dirname, '../../public/demos/dilicious-pizza/');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
    const p = path.join(dir, f);
    let html = fs.readFileSync(p, 'utf8');
    
    // We must pass decodeEntities: false
    const $ = cheerio.load(html, { decodeEntities: false });
    
    if (f === 'index.html') {
        let removedNews = false;
        let removedVideo = false;
        
        // Latest News
        $('.pbmit-element-subtitle').each(function() {
            if ($(this).text().includes('Latest News')) {
                let section = $(this).closest('section.elementor-top-section');
                if (section.length) {
                    section.remove();
                    removedNews = true;
                }
            }
        });
        
        // Video
        $('.pbmit-lightbox-video').each(function() {
            let section = $(this).closest('section.elementor-top-section');
            if (section.length) {
                section.remove();
                removedVideo = true;
            }
        });
        
        console.log('Removed News:', removedNews, 'Removed Video:', removedVideo);
    }
    
    fs.writeFileSync(p, $.html());
});
