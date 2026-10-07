const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if we already added it
    if (content.includes('Mega Value Combos')) {
        console.log('Deals section already exists.');
        return;
    }
    
    const dealsHTML = `
<!-- EXCLUSIVE DEALS SECTION -->
<style>
.pbmit-deal-card:hover { transform: translateY(-10px); }
.pbmit-deal-card .elementor-button:hover { opacity: 0.9; }
.pbmit-btn-outline:hover { background-color: #111; color: #fff !important; }
</style>
<section class="elementor-section elementor-top-section pbmit-bg-color-over-image" style="background-color: #fcfcfc; padding: 100px 0 80px 0;">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column">
            <div class="elementor-widget-wrap">
                <!-- Heading -->
                <div class="pbmit-heading-subheading" style="text-align: center; margin-bottom: 50px; width: 100%;">
                    <h4 class="pbmit-element-subtitle" style="color: #e62222; margin-bottom: 10px;">?? Mega Value Combos</h4>
                    <h2 class="pbmit-element-title" style="font-size: 48px; font-weight: 800; color: #111; text-transform: uppercase; font-family: 'Luckiest Guy', cursive; letter-spacing: 2px;">Exclusive Deals</h2>
                </div>
                
                <!-- Deals Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">
                    
                    <!-- Deal 1 -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('/pizzabox/images/pizza-04.webp') center/cover; position: relative;">
                            <span style="position: absolute; top: 15px; right: 15px; background: #e62222; color: #fff; padding: 5px 15px; border-radius: 30px; font-weight: bold; font-size: 14px;">Save 15%</span>
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Midnight Craving</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">1 Medium Pizza, 1 Regular Fries &amp; 2 Cans</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="text-decoration: line-through; color: #999; font-size: 16px;">Rs 1500</span>
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 1299</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Midnight%20Craving%20Deal%20for%20Rs%201299" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Deal 2 -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: transform 0.3s; text-align: center; border: 3px solid #fcc332; position: relative;">
                        <span style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: #fcc332; color: #111; padding: 5px 25px; border-radius: 0 0 10px 10px; font-weight: bold; font-size: 14px; z-index: 10; text-transform: uppercase;">Best Seller</span>
                        <div style="height: 240px; background: url('/pizzabox/images/pizza_05.webp') center/cover; position: relative;">
                            <span style="position: absolute; top: 15px; right: 15px; background: #e62222; color: #fff; padding: 5px 15px; border-radius: 30px; font-weight: bold; font-size: 14px;">Save 20%</span>
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Family Fiesta</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">2 Large Pizzas, 10 Hot Wings &amp; 1.5 Ltr Drink</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="text-decoration: line-through; color: #999; font-size: 16px;">Rs 3800</span>
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 3099</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Family%20Fiesta%20Deal%20for%20Rs%203099" class="elementor-button elementor-size-md" style="background-color: #fcc332; color: #111; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Deal 3 -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('/pizzabox/images/pizza_06.webp') center/cover; position: relative;">
                            <span style="position: absolute; top: 15px; right: 15px; background: #e62222; color: #fff; padding: 5px 15px; border-radius: 30px; font-weight: bold; font-size: 14px;">Save 10%</span>
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Double Treat</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">2 Medium Pizzas &amp; 1 Ltr Drink</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="text-decoration: line-through; color: #999; font-size: 16px;">Rs 2200</span>
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 1999</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Double%20Treat%20Deal%20for%20Rs%201999" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                </div>

                <!-- Call to Action Buttons -->
                <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 50px; flex-wrap: wrap; width: 100%;">
                    <a href="/pizzabox/menu.html" class="pbmit-btn pbmit-btn-outline" style="border: 2px solid #111; color: #111; padding: 15px 40px; border-radius: 30px; font-weight: bold; text-transform: uppercase; text-decoration: none; transition: 0.3s; display: inline-flex; align-items: center; gap: 10px;"><i class="pbmit-base-icon-menu"></i> View Full Menu</a>
                    <a href="https://wa.me/923250221111" class="pbmit-btn" style="background-color: #25D366; color: #fff; padding: 15px 40px; border-radius: 30px; font-weight: bold; text-transform: uppercase; text-decoration: none; transition: 0.3s; display: inline-flex; align-items: center; gap: 10px;"><i class="pbmit-base-icon-phone-call"></i> Order Custom Deal</a>
                </div>

            </div>
        </div>
    </div>
</section>
<!-- END EXCLUSIVE DEALS SECTION -->
    `;
    
    // Find the marker: <section class="elementor-section elementor-top-section elementor-element elementor-element-695454c
    const marker = '<section class="elementor-section elementor-top-section elementor-element elementor-element-695454c';
    
    if (content.includes(marker)) {
        content = content.replace(marker, dealsHTML + '\n\t\t\t\t' + marker);
        fs.writeFileSync(file, content);
        console.log(`Successfully added deals section to ${file}`);
    } else {
        console.log('Marker not found in the file.');
    }
};

updateFile('public/pizzabox/index.html');
