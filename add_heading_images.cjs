const fs = require('fs');

const files = ['public/fitbitepizza/index.html', 'public/fitbitepizza/menu.html'];

const catImages = {
  'Starters': 'cat_starters.jpg',
  'Soups': 'cat_soups.jpg',
  'Pasta': 'cat_pasta.jpg'
};

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  for (const [cat, img] of Object.entries(catImages)) {
    const h3Match = new RegExp(`<h3 style="margin-bottom: 25px; color: #f29f05; font-size: 32px; font-weight: 800; border-bottom: 2px solid #e8e2d8; padding-bottom: 12px; text-transform: uppercase;">\\s*${cat}\\s*</h3>`, 'g');
    
    const replacement = `<h3 style="margin-bottom: 25px; color: #f29f05; font-size: 32px; font-weight: 800; border-bottom: 2px solid #e8e2d8; padding-bottom: 12px; text-transform: uppercase; display: flex; align-items: center; gap: 15px;">
  <img src="images/${img}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
  ${cat}
</h3>`;

    content = content.replace(h3Match, replacement);
  }
  
  fs.writeFileSync(file, content, 'utf8');
}
console.log('Images added to headings');
