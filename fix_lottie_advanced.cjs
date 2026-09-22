const fs = require('fs');
const files = ['public/fitbitepizza/index.html', 'public/fitbitepizza/our-services.html'];

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    
    // Replace the old IntersectionObserver logic with the new one
    html = html.replace(/const observer = new IntersectionObserver[\s\S]*?observer\.observe\(player\);/, `const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    player.seek(0);
                    player.play();
                } else {
                    player.stop();
                }
            }, { threshold: 0.5 });
            observer.observe(player);`);
            
    fs.writeFileSync(file, html, 'utf8');
});
console.log('Fixed lottie observer threshold and seek');
