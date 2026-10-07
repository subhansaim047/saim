const fs = require('fs');
let content = fs.readFileSync('public/eats-n-bites/index.html', 'utf8');

const htmlToInsert = `
<!-- START CUSTOM FISH SECTION -->
<section class="elementor-section elementor-top-section elementor-section-stretched elementor-section-boxed" style="padding: 0; display: flex; flex-wrap: wrap;">
    <div class="elementor-container elementor-column-gap-no" style="width: 100%; max-width: 100%; display: flex; flex-wrap: wrap; margin: 0; padding: 0;">
        
        <!-- Left Column: Fresh Fish Burgers -->
        <div class="elementor-column elementor-col-50" style="background-color: #436436; padding: 80px 5%; display: flex; align-items: center; justify-content: center; text-align: center;">
            <div class="elementor-widget-wrap" style="width: 100%; max-width: 500px;">
                
                <h2 style="font-family: 'Luckiest Guy', cursive; font-size: 80px; color: #fcc93b; line-height: 1; text-transform: uppercase; margin-bottom: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">FRESH FISH</h2>
                <h3 style="font-family: 'Nunito', sans-serif; font-size: 26px; font-weight: 900; color: #ffffff; letter-spacing: 3px; text-transform: uppercase; margin-top: 10px;">Burgers & Combos</h3>
                
                <div style="margin: 40px 0;">
                    <div style="display: inline-block; background-color: #d32f2f; color: #fff; padding: 15px 30px; border-radius: 50px; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 24px; box-shadow: 0 10px 20px rgba(211,47,47,0.4);">
                        Fish Burger Meal: Rs 1100
                    </div>
                </div>

                <div class="elementor-element pbmit-btn-color-white pbmit-btn-shape-rounded pbmit-btn-hover-color-blackish pbmit-btn-style-flat pbmit-btn-magnatic-yes elementor-widget elementor-widget-button" style="margin-top: 20px;">
                    <div class="elementor-widget-container" style="display: flex; justify-content: center;">
                        <div class="elementor-button-wrapper">
                            <a class="elementor-button elementor-button-link elementor-size-lg" href="tel:03330365959">
                                <span class="elementor-button-content-wrapper">
                                    <span class="elementor-button-text">Order Burger Combo</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Right Column: Fish n Chips -->
        <div class="elementor-column elementor-col-50" style="background-color: #3e2723; padding: 80px 5%; display: flex; align-items: center; justify-content: center; text-align: center;">
            <div class="elementor-widget-wrap" style="width: 100%; max-width: 500px;">
                
                <h2 style="font-family: 'Luckiest Guy', cursive; font-size: 80px; color: #fcc93b; line-height: 1; text-transform: uppercase; margin-bottom: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">FISH 'N CHIPS</h2>
                
                <div style="display: flex; justify-content: space-between; gap: 20px; margin: 40px 0; text-align: left;">
                    
                    <!-- Combo 1 -->
                    <div style="background-color: rgba(255,255,255,0.05); padding: 25px; border-radius: 20px; border: 2px dashed rgba(255,255,255,0.2); width: 48%;">
                        <h4 style="color: #fcc93b; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 20px; margin-bottom: 10px;">COMBO: 3 FILLET</h4>
                        <p style="color: #fff; font-family: 'Nunito', sans-serif; font-size: 14px; margin-bottom: 15px; line-height: 1.4;">Meal Fries + 2 Dips + 1 Bun</p>
                        <div style="color: #fff; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 22px;">RS 1450</div>
                    </div>

                    <!-- Combo 2 -->
                    <div style="background-color: rgba(255,255,255,0.05); padding: 25px; border-radius: 20px; border: 2px dashed rgba(255,255,255,0.2); width: 48%;">
                        <h4 style="color: #fcc93b; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 20px; margin-bottom: 10px;">REGULAR: 2 FILLET</h4>
                        <p style="color: #fff; font-family: 'Nunito', sans-serif; font-size: 14px; margin-bottom: 15px; line-height: 1.4;">Meal Fries + 1 Dip + 1 Bun</p>
                        <div style="color: #fff; font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 22px;">RS 1000</div>
                    </div>

                </div>

                <div class="elementor-element pbmit-btn-color-globalcolor pbmit-btn-shape-rounded pbmit-btn-hover-color-blackish pbmit-btn-style-flat pbmit-btn-magnatic-yes elementor-widget elementor-widget-button" style="margin-top: 20px;">
                    <div class="elementor-widget-container" style="display: flex; justify-content: center;">
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
</section>
<!-- END CUSTOM FISH SECTION -->
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
