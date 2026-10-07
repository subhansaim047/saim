const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    const initScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        new Swiper('.ak-slider-hero', {
            loop: true,
            effect: 'fade',
            speed: 1000,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.ak-swiper-button-next',
                prevEl: '.ak-swiper-button-prev',
            },
        });
    }
});
</script>
</body>`;

    content = content.replace('</body>', initScript);
    fs.writeFileSync(file, content);
};

updateFile('public/pizzabox/index.html');
