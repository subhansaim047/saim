const fs = require('fs');
let html = fs.readFileSync('public/fitbitepizza/our-services.html', 'utf8');

html = html.replace(
    '<lottie-player src="https://lottie.host/979f5334-1bec-4298-8d85-cbf7a9b92be5/oiPJGPUM28.json" background="transparent.html" speed="1" style="width: 100%;height: 100%" loop="" autoplay=""></lottie-player>',
    `<lottie-player id="bike-lottie-services" src="https://lottie.host/979f5334-1bec-4298-8d85-cbf7a9b92be5/oiPJGPUM28.json" background="transparent" speed="1" style="width: 100%;height: 100%" loop=""></lottie-player>
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        const player = document.getElementById("bike-lottie-services");
        if(player) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    player.play();
                } else {
                    player.pause();
                }
            }, { threshold: 0.2 });
            observer.observe(player);
        }
      });
    </script>`
);
fs.writeFileSync('public/fitbitepizza/our-services.html', html, 'utf8');
console.log('Fixed lottie autoplay on our services page');
