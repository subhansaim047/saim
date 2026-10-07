const fs = require('fs');
let content = fs.readFileSync('public/eats-n-bites/index.html', 'utf8');

const htmlToInsert = `
<!-- START FISH PROMO SECTION -->
<section class="elementor-section elementor-top-section pbmit-bg-color-yes elementor-section-stretched pbmit-col-stretched-none pbmit-cursor-color-blackish-color elementor-section-boxed" style="padding: 100px 0; background-color: #3b582b; border-bottom: 5px solid #283e1c;">
    <div class="elementor-container elementor-column-gap-no" style="display: flex; align-items: center; flex-wrap: wrap; max-width: 1200px; margin: 0 auto;">
        
        <div class="elementor-column elementor-col-50 elementor-top-column" style="padding: 20px;">
            <div class="elementor-widget-wrap">
                <div class="elementor-element elementor-widget elementor-widget-pbmit_custom_heading">
                    <div class="elementor-widget-container">
                        <div class="pbmit-custom-heading -align animation-style1" style="text-align: left;">
                            <h2 class="pbmit-element-title" style="font-family: 'Luckiest Guy', cursive; font-weight: normal; font-size: 80px; line-height: 1; color: #fcc93b; text-transform: uppercase; margin-bottom: 0;">Fresh Fish</h2>
                            <h3 style="font-family: 'Nunito', sans-serif; font-size: 32px; font-weight: 900; color: #fff; margin-top: 15px; text-transform: uppercase; letter-spacing: 2px;">Burgers & Combos</h3>
                            <p style="color: #fff; font-size: 18px; margin-top: 25px; line-height: 1.6; font-family: 'Nunito', sans-serif;">Try our best-selling Fish Burgers with a meal, or dive into our crispy Fish 'N Chips available in Regular and Combo deals. A perfect treat for seafood lovers!</p>
                        </div>
                    </div>
                </div>

                <div style="display: flex; gap: 30px; margin-top: 30px;">
                    <div style="background-color: #bb1717; color: #fff; padding: 10px 25px; border-radius: 50px; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">Fish Burger Meal: Rs 1100</div>
                </div>

                <div class="elementor-element elementor-widget" style="margin-top: 40px; display: flex; gap: 20px; justify-content: flex-start; flex-wrap: wrap;">
                    
                    <div class="elementor-element pbmit-btn-color-white pbmit-btn-shape-rounded pbmit-btn-hover-color-blackish pbmit-btn-style-flat pbmit-btn-magnatic-yes elementor-widget elementor-widget-button">
                        <div class="elementor-widget-container">
                            <div class="elementor-button-wrapper">
                                <a class="elementor-button elementor-button-link elementor-size-lg" href="tel:03330365959">
                                    <span class="elementor-button-content-wrapper">
                                        <span class="elementor-button-text">Order Fish Burger</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="elementor-element pbmit-btn-color-globalcolor pbmit-btn-shape-rounded pbmit-btn-hover-color-blackish pbmit-btn-style-flat pbmit-btn-magnatic-yes elementor-widget elementor-widget-button">
                        <div class="elementor-widget-container">
                            <div class="elementor-button-wrapper">
                                <a class="elementor-button elementor-button-link elementor-size-lg" href="tel:03330365959">
                                    <span class="elementor-button-content-wrapper">
                                        <span class="elementor-button-text">Order Fish 'N Chips</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="elementor-column elementor-col-50 elementor-top-column" style="padding: 20px;">
            <div class="elementor-widget-wrap">
                <div class="elementor-element elementor-widget elementor-widget-image">
                    <div class="elementor-widget-container" style="text-align: center;">
                        <img src="/eats-n-bites/images/fish-promo.jpg" alt="Fresh Fish Promo" style="max-width: 100%; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.4);">
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<!-- END FISH PROMO SECTION -->
`;

const lines = content.split('\n');
const insertIndex = lines.findIndex(line => line.includes('elementor-element-85d9e25'));

if (insertIndex > -1) {
    lines.splice(insertIndex - 1, 0, htmlToInsert);
    fs.writeFileSync('public/eats-n-bites/index.html', lines.join('\n'));
    console.log('Inserted section successfully');
} else {
    console.log('Target section not found');
}
