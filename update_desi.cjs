const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Use string split to completely rip out that section
    const startMarker = '<!-- DESI MENU SECTION (HANDI, KARAHI, BBQ) WITH GSAP -->';
    const endMarker = '<!-- END DESI MENU SECTION -->';
    
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker) + endMarker.length;
    
    if (startIndex !== -1 && endIndex !== -1) {
        const cleanHTML = `
<!-- DESI MENU SECTION -->
<section id="desi-menu-section" class="elementor-section elementor-top-section pbmit-bg-color-over-image" style="background-color: #fcfcfc; padding: 100px 0 80px 0;">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column">
            <div class="elementor-widget-wrap">
                
                <!-- Heading -->
                <div class="pbmit-heading-subheading" style="text-align: center; margin-bottom: 50px; width: 100%;">
                    <h4 class="pbmit-element-subtitle" style="color: #e62222; margin-bottom: 10px;">?? Authentic Pakistani Taste</h4>
                    <h2 class="pbmit-element-title" style="font-size: 48px; font-weight: 800; color: #111; text-transform: uppercase; font-family: 'Luckiest Guy', cursive; letter-spacing: 2px;">Handi, Karahi &amp; BBQ</h2>
                </div>
                
                <!-- Deals Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">
                    
                    <!-- Card 1: Chicken Karahi -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Chicken Karahi</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">Cooked in traditional wok with tomatoes, ginger, and green chilies.</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 1499 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ Half</small></span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Half%20Chicken%20Karahi" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Card 2: Chicken Handi -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 3px solid #fcc332; position: relative;">
                        <span style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: #fcc332; color: #111; padding: 5px 25px; border-radius: 0 0 10px 10px; font-weight: bold; font-size: 14px; z-index: 10; text-transform: uppercase;">Chef's Special</span>
                        <div style="height: 240px; background: url('https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Boneless Handi</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">Creamy, rich and mildly spiced boneless chicken served in a clay pot.</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 1650 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ Half</small></span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Half%20Boneless%20Handi" class="elementor-button elementor-size-md" style="background-color: #fcc332; color: #111; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Card 3: Seekh Kabab -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('https://images.unsplash.com/photo-1599487405270-864b51b7376c?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Beef Seekh Kabab</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">Charcoal grilled minced beef kababs seasoned with special house spices.</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 750 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ 4 Pcs</small></span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Beef%20Seekh%20Kabab" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Card 4: Chicken Tikka -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Chicken Tikka</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">Juicy chicken quarters marinated in yogurt and tikka spices, smoked perfectly.</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 450 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ Piece</small></span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Chicken%20Tikka" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- END DESI MENU SECTION -->
        `;
        
        const before = content.substring(0, startIndex);
        const after = content.substring(endIndex);
        
        fs.writeFileSync(file, before + cleanHTML + after);
        console.log('Successfully reverted desi section.');
    } else {
        console.log('Could not find the section to replace.');
    }
};

updateFile('public/pizzabox/index.html');
