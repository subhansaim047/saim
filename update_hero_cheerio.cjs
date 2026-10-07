const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove old hero section
    // Instead of using cheerio which can re-format the entire huge Elementor HTML, 
    // it's safer to use regex to remove the specific section and its surrounding div.
    
    // The old hero section is wrapped in <div data-elementor-type="wp-page" data-elementor-id="1124" class="elementor elementor-1124">
    // Wait, the WHOLE page might be inside that div! Let's check with cheerio.
    const $ = cheerio.load(content, { decodeEntities: false });
    
    const oldHero = $('section[data-id="e8a2a75"]');
    if (oldHero.length) {
        // Insert new hero BEFORE the old hero, then remove the old hero.
        
        const newHeroHtml = `
<section id="custom-elegancia-hero">
    <div class="ak-hero ak-style1">
        <div class="swiper ak-slider-hero">
            <div class="swiper-wrapper">
                
                <!-- Slide 1 -->
                <div class="swiper-slide">
                    <div class="ak-hero-bg" style="background-image: url('/pizzabox/images/hero-bg-custom.jpg');"></div>
                    <div class="slider-info">
                        <div class="hero-title">
                            <h1 class="hero-main-title">Pizza Box</h1>
                            <h1 class="hero-main-title-1">Luxury Dining</h1>
                        </div>
                        <p class="hero-sub-text">Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. We strive to create a gastronomic haven that tantalizes your taste buds.</p>
                        <a class="hero-btn" href="/pizzabox/menu.html">View Menu</a>
                    </div>
                </div>
                
                <!-- Slide 2 -->
                <div class="swiper-slide">
                    <div class="ak-hero-bg" style="background-image: url('/pizzabox/images/deal-1.jpg');"></div>
                    <div class="slider-info">
                        <div class="hero-title">
                            <h1 class="hero-main-title">Exclusive</h1>
                            <h1 class="hero-main-title-1">Deals</h1>
                        </div>
                        <p class="hero-sub-text">Experience our handcrafted combos designed for families and friends. Taste the premium difference today.</p>
                        <a class="hero-btn" href="/pizzabox/menu.html">Order Now</a>
                    </div>
                </div>

            </div>
            
            <!-- Navigation -->
            <div class="ak-swiper-navigation-wrap">
                <div class="ak-swiper-button-prev">
                    <svg width="40" height="55" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6309 25.4001L25.1406 16.8902C25.4463 16.5333 25.9835 16.4917 26.3405 16.7974C26.6974 17.1031 26.739 17.6403 26.4333 17.9973C26.4048 18.0306 26.3738 18.0617 26.3405 18.0901L19.2859 25.1532H52.9762C53.4461 25.1532 53.8271 25.5343 53.8271 26.0043C53.8271 26.4743 53.4461 26.8552 52.9762 26.8552H19.2859L26.3405 33.9098C26.6974 34.2155 26.739 34.7527 26.4333 35.1097C26.1275 35.4666 25.5904 35.5082 25.2334 35.2025C25.2001 35.174 25.1691 35.1429 25.1406 35.1097L16.6308 26.5999C16.3009 26.2681 16.3009 25.732 16.6309 25.4001Z" fill="#FFD28D"></path></svg>
                </div>
                <div class="ak-swiper-button-next">
                    <svg width="40" height="55" viewBox="0 0 55 52" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.0234 25.4001L29.5137 16.8902C29.208 16.5333 28.6708 16.4917 28.3138 16.7974C27.9569 17.1031 27.9153 17.6403 28.221 17.9973C28.2495 18.0306 28.2805 18.0617 28.3138 18.0901L35.3684 25.1532H1.6781C1.20816 25.1532 0.827148 25.5343 0.827148 26.0043C0.827148 26.4743 1.20816 26.8552 1.6781 26.8552H35.3684L28.3138 33.9098C27.9569 34.2155 27.9153 34.7527 28.221 35.1097C28.5268 35.4666 29.0639 35.5082 29.4209 35.2025C29.4542 35.174 29.4852 35.1429 29.5137 35.1097L38.0235 26.5999C38.3534 26.2681 38.3534 25.732 38.0234 25.4001Z" fill="#FFD28D"></path></svg>
                </div>
            </div>
        </div>
    </div>
</section>
        `;
        
        oldHero.before(newHeroHtml);
        oldHero.remove();
        console.log('Replaced hero section.');
    } else {
        console.log('Could not find old hero section.');
    }

    // Add Google Font for Playfair Display
    if (!content.includes('Playfair+Display')) {
        $('head').append(`<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">`);
    }

    fs.writeFileSync(file, $.html());
};

updateFile('public/pizzabox/index.html');
