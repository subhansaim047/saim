const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (content.includes('Desi Menu Section')) {
        console.log('Desi section already exists.');
        return;
    }
    
    const desiHTML = `
<!-- DESI MENU SECTION (HANDI, KARAHI, BBQ) WITH GSAP -->
<section id="desi-menu-section" class="elementor-section elementor-top-section" style="background-color: #111; padding: 120px 0; overflow: hidden; position: relative;">
    
    <!-- Background Decor (Floating spices/chilis) -->
    <div class="desi-bg-decor" style="position: absolute; top: 10%; left: -5%; width: 200px; height: 200px; background: url('https://images.unsplash.com/photo-1596683701625-728b7e28b80b?w=300&auto=format&fit=crop') center/cover; border-radius: 50%; opacity: 0.15; filter: blur(5px);"></div>
    <div class="desi-bg-decor" style="position: absolute; bottom: 10%; right: -5%; width: 300px; height: 300px; background: url('https://images.unsplash.com/photo-1603048297172-c92544798d5e?w=300&auto=format&fit=crop') center/cover; border-radius: 50%; opacity: 0.15; filter: blur(3px);"></div>

    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column">
            <div class="elementor-widget-wrap">
                
                <!-- Heading -->
                <div class="desi-heading pbmit-heading-subheading" style="text-align: center; margin-bottom: 60px; width: 100%;">
                    <h4 class="pbmit-element-subtitle" style="color: #fcc332; margin-bottom: 10px;">?? Authentic Pakistani Taste</h4>
                    <h2 class="pbmit-element-title" style="font-size: 48px; font-weight: 800; color: #fff; text-transform: uppercase; font-family: 'Luckiest Guy', cursive; letter-spacing: 2px;">Handi, Karahi &amp; BBQ</h2>
                    <p style="color: #aaa; max-width: 600px; margin: 20px auto 0; font-size: 16px;">Savor the rich, traditional spices of Daska with our charcoal-grilled BBQ and slow-cooked Karahis.</p>
                </div>
                
                <!-- Cards Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">
                    
                    <!-- Card 1: Chicken Karahi -->
                    <div class="desi-card" style="background: #1a1a1a; border-radius: 20px; overflow: hidden; border: 1px solid #333; position: relative;">
                        <div style="height: 220px; background: url('https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px; text-align: center;">
                            <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 10px; color: #fff;">Chicken Karahi</h3>
                            <p style="color: #888; font-size: 14px; margin-bottom: 20px; min-height: 40px;">Cooked in traditional wok with tomatoes, ginger, and green chilies.</p>
                            <div style="margin-bottom: 25px;"><span style="font-size: 26px; font-weight: 900; color: #fcc332;">Rs 1499 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ Half</small></span></div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Half%20Chicken%20Karahi" class="elementor-button" style="background-color: #fcc332; color: #111; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Card 2: Chicken Handi -->
                    <div class="desi-card" style="background: #1a1a1a; border-radius: 20px; overflow: hidden; border: 1px solid #333; position: relative;">
                        <div style="height: 220px; background: url('https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px; text-align: center;">
                            <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 10px; color: #fff;">Boneless Handi</h3>
                            <p style="color: #888; font-size: 14px; margin-bottom: 20px; min-height: 40px;">Creamy, rich and mildly spiced boneless chicken served in a clay pot.</p>
                            <div style="margin-bottom: 25px;"><span style="font-size: 26px; font-weight: 900; color: #fcc332;">Rs 1650 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ Half</small></span></div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Half%20Boneless%20Handi" class="elementor-button" style="background-color: #fcc332; color: #111; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Card 3: Seekh Kabab -->
                    <div class="desi-card" style="background: #1a1a1a; border-radius: 20px; overflow: hidden; border: 1px solid #333; position: relative;">
                        <div style="height: 220px; background: url('https://images.unsplash.com/photo-1599487405270-864b51b7376c?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px; text-align: center;">
                            <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 10px; color: #fff;">Beef Seekh Kabab</h3>
                            <p style="color: #888; font-size: 14px; margin-bottom: 20px; min-height: 40px;">Charcoal grilled minced beef kababs seasoned with special house spices.</p>
                            <div style="margin-bottom: 25px;"><span style="font-size: 26px; font-weight: 900; color: #fcc332;">Rs 750 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ 4 Pcs</small></span></div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Beef%20Seekh%20Kabab" class="elementor-button" style="background-color: #fcc332; color: #111; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Card 4: Chicken Tikka -->
                    <div class="desi-card" style="background: #1a1a1a; border-radius: 20px; overflow: hidden; border: 1px solid #333; position: relative;">
                        <div style="height: 220px; background: url('https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=600&auto=format&fit=crop') center/cover;"></div>
                        <div style="padding: 30px 20px; text-align: center;">
                            <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 10px; color: #fff;">Chicken Tikka</h3>
                            <p style="color: #888; font-size: 14px; margin-bottom: 20px; min-height: 40px;">Juicy chicken quarters marinated in yogurt and tikka spices, smoked perfectly.</p>
                            <div style="margin-bottom: 25px;"><span style="font-size: 26px; font-weight: 900; color: #fcc332;">Rs 450 <small style="font-size: 14px; color:#aaa; font-weight: normal;">/ Piece</small></span></div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Chicken%20Tikka" class="elementor-button" style="background-color: #fcc332; color: #111; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<!-- CUSTOM GSAP ANIMATION FOR DESI SECTION -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    // Wait for GSAP and ScrollTrigger to be ready
    let desiInterval = setInterval(function() {
        if (window.gsap && window.ScrollTrigger) {
            clearInterval(desiInterval);
            
            // 1. Heading Animation (Fades in and drops down from top)
            gsap.from(".desi-heading", {
                scrollTrigger: {
                    trigger: "#desi-menu-section",
                    start: "top 80%", // trigger when section is 80% in view
                    toggleActions: "play none none reverse"
                },
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "bounce.out" // Bouncy effect on the heading
            });

            // 2. Cards Animation (Staggered scaling and rotating in from bottom)
            gsap.from(".desi-card", {
                scrollTrigger: {
                    trigger: ".desi-heading",
                    start: "top 60%", // trigger slightly after heading
                    toggleActions: "play none none reverse"
                },
                y: 100,
                scale: 0.8,
                rotation: 5,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2, // Cards animate one after the other (0.2s delay between each)
                ease: "back.out(1.7)" // Overshoot back easing for a premium feel
            });

            // 3. Background Decor Parallax (Moves slowly in opposite directions on scroll)
            gsap.to(".desi-bg-decor", {
                scrollTrigger: {
                    trigger: "#desi-menu-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1 // Links animation directly to scrollbar with a 1s lag
                },
                y: (i, target) => {
                    // Make one move up, the other move down
                    return i % 2 === 0 ? -150 : 150; 
                },
                rotation: 45,
                ease: "none"
            });
            
            // Refresh scroll trigger after setup
            ScrollTrigger.refresh();
        }
    }, 500); // Check every 500ms if GSAP is loaded
});
</script>
<!-- END DESI MENU SECTION -->
    `;
    
    // Insert after the Chicken Broast section
    const marker = '<!-- END CHICKEN BROAST SECTION -->';
    
    if (content.includes(marker)) {
        content = content.replace(marker, marker + '\n\n\t\t\t\t' + desiHTML);
        fs.writeFileSync(file, content);
        console.log(`Successfully added desi section with GSAP to ${file}`);
    } else {
        console.log('Marker not found in the file.');
    }
};

updateFile('public/pizzabox/index.html');
