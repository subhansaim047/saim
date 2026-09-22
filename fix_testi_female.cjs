const fs = require('fs');
const files = ['public/fitbitepizza/about-us.html', 'public/fitbitepizza/index.html', 'public/fitbitepizza/our-services.html'];

const replacements = [
    { oldImg: /testi-pak-0\.jpg/g, newImg: 'testi-fem-1.jpg', oldName: 'Ali Raza', newName: 'Ayesha Khan' },
    { oldImg: /testi-pak-1\.jpg/g, newImg: 'testi-fem-2.jpg', oldName: 'Usman Tariq', newName: 'Sana Tariq' },
    { oldImg: /testi-pak-2\.jpg/g, newImg: 'testi-fem-3.jpg', oldName: 'Fatima Noor', newName: 'Fatima Noor' },
    { oldImg: /testi-pak-3\.jpg/g, newImg: 'testi-fem-4.jpg', oldName: 'Bilal Ahmed', newName: 'Maryam Ali' },
    { oldImg: /testi-pak-4\.jpg/g, newImg: 'testi-fem-5.jpg', oldName: 'Zainab Ali', newName: 'Zainab Ali' },
    { oldImg: /testi-pak-5\.jpg/g, newImg: 'testi-fem-6.jpg', oldName: 'Hassan Jamil', newName: 'Hira Jamil' }
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    replacements.forEach(r => {
        content = content.replace(r.oldImg, r.newImg);
        content = content.replace(new RegExp(r.oldName, 'g'), r.newName);
    });
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Successfully updated testimonials to use female images and names.');
