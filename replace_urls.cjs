const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Broast Replacements
    content = content.replace(
        "url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop')",
        "url('/pizzabox/images/quarter-broast.jpg')"
    );
    content = content.replace(
        "url('https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop')",
        "url('/pizzabox/images/half-broast.jpg')"
    );
    content = content.replace(
        "url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop')",
        "url('/pizzabox/images/full-broast.jpg')"
    );

    // Desi Replacements
    content = content.replace(
        "url('https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?q=80&w=600&auto=format&fit=crop')",
        "url('/pizzabox/images/chicken-karahi.jpg')"
    );
    content = content.replace(
        "url('https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=600&auto=format&fit=crop')",
        "url('/pizzabox/images/chicken-handi.jpg')"
    );
    content = content.replace(
        "url('https://images.unsplash.com/photo-1599487405270-864b51b7376c?q=80&w=600&auto=format&fit=crop')",
        "url('/pizzabox/images/beef-seekh-kabab.jpg')"
    );
    content = content.replace(
        "url('https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=600&auto=format&fit=crop')",
        "url('/pizzabox/images/chicken-tikka.jpg')"
    );

    fs.writeFileSync(file, content);
    console.log('Successfully updated Unsplash URLs to local AI images.');
};

updateFile('public/pizzabox/index.html');
