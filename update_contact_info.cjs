const fs = require('fs');
const path = require('path');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldPhone1 = /0301-1337766/g;
const oldPhone2 = /03011337766/g;
const newPhone = '03314333355';

const oldAddress = /Ramzan Center, Sambrial Rd, Mohalla Thathyaran, Daska, 51010, Pakistan/g;
const newAddress = 'College Rd, Jalalpur Ghumman Daska, 51010, Pakistan';

const oldMapHref = /https:\/\/maps\.app\.goo\.gl\/kFmcAnKRcsX2MogU9/g;
const newMapHref = 'https://www.google.com/maps/place/Anzaar+Restaurant/@32.3355372,74.3645814,17z/data=!3m1!4b1!4m6!3m5!1s0x391edb72887ec857:0xf61b269dde03a6ad!8m2!3d32.3355372!4d74.3645814!16s%2Fg%2F11mr_xdsl1?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D';

const oldIframeSrc = /https:\/\/maps\.google\.com\/maps\?q=Ramzan.*?(?=")/g;
const newIframeSrc = 'https://maps.google.com/maps?q=Anzaar%20Restaurant%2C%20College%20Rd%2C%20Jalalpur%20Ghumman%20Daska&t=m&z=15&output=embed&iwloc=near';

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(oldPhone1, newPhone);
    content = content.replace(oldPhone2, newPhone);
    content = content.replace(oldAddress, newAddress);
    content = content.replace(oldMapHref, newMapHref);
    content = content.replace(oldIframeSrc, newIframeSrc);

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated contact info in ${file}`);
    }
});
console.log('Done replacing contact information!');
