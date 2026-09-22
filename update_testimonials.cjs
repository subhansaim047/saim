const fs = require('fs');
const file = 'public/fitbitepizza/index.html';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
    { oldImg: /img-03-3(?:-\d+x\d+)?\.jpg/g, newImg: 'testi-pak-0.jpg', oldName: 'Courtney Henry', newName: 'Ali Raza' },
    { oldImg: /img-01-3(?:-\d+x\d+)?\.jpg/g, newImg: 'testi-pak-1.jpg', oldName: 'Simon Pierro', newName: 'Usman Tariq' },
    { oldImg: /img-05-2(?:-\d+x\d+)?\.jpg/g, newImg: 'testi-pak-2.jpg', oldName: 'Garrison Lewis', newName: 'Fatima Noor' },
    { oldImg: /img-06-2(?:-\d+x\d+)?\.jpg/g, newImg: 'testi-pak-3.jpg', oldName: 'Arden Burton', newName: 'Bilal Ahmed' },
    { oldImg: /img-02-3(?:-\d+x\d+)?\.jpg/g, newImg: 'testi-pak-4.jpg', oldName: 'Darrell Steward', newName: 'Zainab Ali' },
    { oldImg: /img-07-2(?:-\d+x\d+)?\.jpg/g, newImg: 'testi-pak-5.jpg', oldName: 'Guy Hawckins', newName: 'Hassan Jamil' }
];

replacements.forEach(r => {
    content = content.replace(r.oldImg, r.newImg);
    content = content.replace(new RegExp(r.oldName, 'g'), r.newName);
});

// Remove designations
content = content.replace(/<div class="pbminfotech-testimonial-detail">.*?<\/div>/g, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Testimonials updated!');
