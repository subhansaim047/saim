const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const oldAddress = 'Shop # 31, Bangla Chowk, Model Town, Daska, 51010, Pakistan';
const newAddress = 'Jinnah Chowk, Gaga, Daska, 51010, Pakistan';

const oldPhone = '03041110607';
const newPhone = '03250221111';

// Formatted versions of phone that might exist
const oldPhoneFormatted = '+03041110607';
const newPhoneFormatted = '+923250221111';

const oldPhoneDisplay = '03041110607'; // sometimes it has spaces
const newPhoneDisplay = '03250221111';

const newMapsLink = 'https://www.google.com/maps/place/Pizza+Box+Daska/@32.3384827,74.3639682,17z/data=!3m1!4b1!4m6!3m5!1s0x391edb0018bdeca5:0x1d2b066896cf0295!8m2!3d32.3384827!4d74.3639682!16s%2Fg%2F11x2q9rndp?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace exact text
    content = content.replace(new RegExp(oldAddress.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newAddress);
    
    // Replace phone numbers
    content = content.replace(new RegExp(oldPhone, 'g'), newPhone);
    content = content.replace(new RegExp('\\+92 304 1110607', 'g'), newPhone);
    content = content.replace(new RegExp('\\+923041110607', 'g'), newPhone);
    
    // If there's an iframe google map, replace its src. Or if there's a href to maps, replace it.
    // The current map might be an iframe like <iframe src="...">
    const $ = cheerio.load(content);
    
    // Replace hrefs that go to google maps
    $('a[href*="google.com/maps"]').attr('href', newMapsLink);
    $('a[href*="maps.app.goo.gl"]').attr('href', newMapsLink);
    
    // Check if there are map iframes (like in contact page). We can't use the direct place URL for iframe src.
    // For iframe, they usually use https://www.google.com/maps/embed?pb=...
    // The user provided a standard maps link. To embed it, they need an embed link. 
    // We can extract coordinates: 32.3384827, 74.3639682
    const embedUrl = `https://maps.google.com/maps?q=32.3384827,74.3639682&t=&z=17&ie=UTF8&iwloc=&output=embed`;
    
    $('iframe[src*="google.com/maps/embed"]').attr('src', embedUrl);
    $('iframe[src*="maps.google.com/maps"]').attr('src', embedUrl);
    
    fs.writeFileSync(filePath, $.html());
    console.log(`Updated ${filePath}`);
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.html')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir('public/pizzabox');
