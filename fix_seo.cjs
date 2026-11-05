const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    // Burger Garage
    'public/burger-garage/about.html',
    'public/burger-garage/blog-detail.html',
    'public/burger-garage/blog-details.html',
    'public/burger-garage/blog-grid.html',
    'public/burger-garage/blog.html',
    'public/burger-garage/contact-us.html',
    'public/burger-garage/contact.html',
    'public/burger-garage/index.html',
    'public/burger-garage/menu.html',
    // Frenchyse
    'public/frenchyse/about-us.html',
    'public/frenchyse/contact-us.html',
    'public/frenchyse/index.html',
    'public/frenchyse/menu.html',
    'public/frenchyse/our-services.html',
    'public/frenchyse/transparent.html'
];

for (const file of filesToUpdate) {
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');

    // 1. Meta Tags Update
    if (file.includes('burger-garage')) {
        // Fix title
        content = content.replace(/<title>.*?<\/title>/gi, '<title>Burger Garage | Premium Burgers & Fast Food</title>');
        
        // Fix description
        if (content.includes('<meta name="description"')) {
            content = content.replace(/<meta name="description" content="[^"]*">/gi, '<meta name="description" content="Welcome to Burger Garage. Experience the best premium burgers, loaded fries, and shakes in town. Fast food done right.">');
        } else {
            // Add if missing
            content = content.replace(/<head>/i, '<head>\n    <meta name="description" content="Welcome to Burger Garage. Experience the best premium burgers, loaded fries, and shakes in town. Fast food done right.">');
        }
        
        // Remove RoyalFare references completely
        content = content.replace(/RoyalFare/gi, 'Burger Garage');
        
    } else if (file.includes('frenchyse')) {
        // Fix title
        content = content.replace(/<title>.*?<\/title>/gi, '<title>Frenchyse | Luxury Dining & French Cuisine</title>');
        
        // Fix description
        if (content.includes('<meta name="description"')) {
            content = content.replace(/<meta name="description" content="[^"]*">/gi, '<meta name="description" content="Experience Frenchyse. An exquisite luxury dining restaurant offering authentic French cuisine, premium wines, and an unforgettable atmosphere.">');
        } else {
            content = content.replace(/<head>/i, '<head>\n    <meta name="description" content="Experience Frenchyse. An exquisite luxury dining restaurant offering authentic French cuisine, premium wines, and an unforgettable atmosphere.">');
        }
    }

    // 2. Fix Empty Alt Tags
    // A simple regex to replace alt="" with alt="Restaurant Food Image"
    content = content.replace(/alt=""/g, 'alt="Delicious food and restaurant view"');
    
    // 3. Remove/Replace Dummy Text (Lorem Ipsum)
    // Replace standard long lorem ipsums
    content = content.replace(/Lorem ipsum dolor sit amet.*?(\.|\?|!)/gi, 'Experience the finest taste with our hand-crafted meals prepared fresh daily.');
    content = content.replace(/There are many variations of passages.*?(\.|\?|!)/gi, 'We pride ourselves on using only the freshest ingredients and secret recipes.');
    content = content.replace(/consectetur adipiscing elit.*?(\.|\?|!)/gi, 'bringing you the best flavors in every single bite.');
    content = content.replace(/It is a long established fact that a reader will be distracted.*?(\.|\?|!)/gi, 'Our customers love the unique vibe and exceptional taste that keep them coming back.');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
}
