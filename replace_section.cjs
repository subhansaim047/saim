const fs = require('fs');
let content = fs.readFileSync('public/burger-garage/index.html', 'utf8');

const startTag = '<!-- Popular Items Section Start -->';
const endTag = '<!-- Popular Items Section End -->';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const beforeSection = content.substring(0, startIndex);
    const afterSection = content.substring(endIndex + endTag.length);
    
    const newSection = `<!-- Our Burger Section Start -->
                    <section class="py-80" style="background-color: #f7f3ec; overflow: hidden;">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <!-- Left Column: Exploding Burger -->
                                <div class="col-lg-6 mb-5 mb-lg-0">
                                    <div class="burger-exploding-wrapper">
                                        <div class="burger-yellow-circle"></div>
                                        <div class="burger-red-accents"></div>
                                        <img src="assets/media/products/parts/burger-part-01.png" alt="Burger Bottom Bun" class="burger-part burger-part-1">
                                        <img src="assets/media/products/parts/burger-part-02.png" alt="Burger Patty" class="burger-part burger-part-2">
                                        <img src="assets/media/products/parts/burger-part-03.png" alt="Burger Cheese" class="burger-part burger-part-3">
                                        <img src="assets/media/products/parts/burger-part-04.png" alt="Burger Tomatoes" class="burger-part burger-part-4">
                                        <img src="assets/media/products/parts/burger-part-05.png" alt="Burger Lettuce" class="burger-part burger-part-5">
                                        <img src="assets/media/products/parts/burger-part-06.png" alt="Burger Sauce" class="burger-part burger-part-6">
                                        <img src="assets/media/products/parts/burger-part-07.png" alt="Burger Pickles" class="burger-part burger-part-7">
                                        <img src="assets/media/products/parts/burger-part-08.png" alt="Burger Top Bun" class="burger-part burger-part-8">
                                    </div>
                                </div>
                                
                                <!-- Right Column: Content -->
                                <div class="col-lg-6 position-relative">
                                    <div class="heading mb-4">
                                        <p class="eyebrow" style="color: #ffb800; text-transform: none; font-family: 'Great Vibes', cursive; font-size: 28px; font-weight: normal; margin-bottom: 10px;">Made with Love</p>
                                        <h2 class="title" style="color: #2c3238; font-size: 56px; line-height: 1.1; margin-bottom: 20px;">Our Burger Do The <br>Talking</h2>
                                        <p style="color: #555; font-size: 16px; margin-bottom: 24px;">We provide you with complete meal prep which includes the prepackaged necessary ingredients.</p>
                                    </div>
                                    
                                    <ul class="list-unstyled mb-4" style="color: #444; font-size: 16px; font-weight: 600; line-height: 2;">
                                        <li><i class="fas fa-circle" style="color: #e62b2b; font-size: 10px; margin-right: 10px;"></i> Delicious & Healthy Foods</li>
                                        <li><i class="fas fa-circle" style="color: #e62b2b; font-size: 10px; margin-right: 10px;"></i> Specific Family & Kids Zone</li>
                                        <li><i class="fas fa-circle" style="color: #e62b2b; font-size: 10px; margin-right: 10px;"></i> Best Price & Offers</li>
                                        <li><i class="fas fa-circle" style="color: #e62b2b; font-size: 10px; margin-right: 10px;"></i> Made By Fresh Ingredients</li>
                                    </ul>
                                    
                                    <!-- Circular Badge -->
                                    <img src="assets/media/products/parts/pattern-shap-01.png" alt="Testy Burger" class="position-absolute badge-rotate" style="right: 50px; top: 150px; width: 140px;">
                                    
                                    <div class="d-flex align-items-center mt-5 gap-4">
                                        <a href="menu.html" class="cus-btn dark" style="background-color: #2c3238; color: white; padding: 15px 30px; border-radius: 30px; font-weight: bold; text-transform: uppercase;">
                                            Discover More
                                        </a>
                                        <div class="d-flex align-items-center gap-3">
                                            <div style="color: #2c3238;">
                                                <p class="mb-0" style="font-size: 14px; font-weight: 600;">Get online order now</p>
                                                <a href="tel:03041110607" style="color: #e62b2b; font-size: 20px; font-weight: bold;">03041110607</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Our Burger Section End -->`;
    
    fs.writeFileSync('public/burger-garage/index.html', beforeSection + newSection + afterSection);
    console.log('Section replaced successfully.');
} else {
    console.log('Section not found.');
}
