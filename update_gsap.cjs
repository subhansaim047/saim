const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if the section exists
    if (!content.includes('id="desi-menu-section"')) {
        console.log('Section not found.');
        return;
    }
    
    // We will inject floating ingredients HTML right after the opening section tag
    const floatingIngredientsHTML = `
    <!-- COMPLEX GSAP FLOATING INGREDIENTS -->
    <img src="/pizzabox/images/red-chilli.png" class="desi-ingredient" id="desi-ing-1" style="position: absolute; top: 10%; left: 5%; width: 150px; z-index: 0; opacity: 0;" />
    <img src="/pizzabox/images/garlic.png" class="desi-ingredient" id="desi-ing-2" style="position: absolute; top: 40%; right: 5%; width: 120px; z-index: 0; opacity: 0;" />
    <img src="/pizzabox/images/leaf-vegetable.png" class="desi-ingredient" id="desi-ing-3" style="position: absolute; bottom: 15%; left: 10%; width: 100px; z-index: 0; opacity: 0;" />
    <img src="/pizzabox/images/veg-img-01.png" class="desi-ingredient" id="desi-ing-4" style="position: absolute; bottom: 30%; right: 15%; width: 140px; z-index: 0; opacity: 0;" />
    <img src="/pizzabox/images/red-chilli.png" class="desi-ingredient" id="desi-ing-5" style="position: absolute; top: 5%; right: 25%; width: 90px; transform: scaleX(-1); z-index: 0; opacity: 0;" />
    <img src="/pizzabox/images/garlic-2.png" class="desi-ingredient" id="desi-ing-6" style="position: absolute; bottom: 5%; left: 40%; width: 80px; z-index: 0; opacity: 0;" />
    `;
    
    // Replace the simple GSAP script with a complex timeline
    const complexGSAPScript = `
<!-- ADVANCED GSAP SCROLL ANIMATION (THE CHALLENGE) -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    let desiInterval = setInterval(function() {
        if (window.gsap && window.ScrollTrigger) {
            clearInterval(desiInterval);
            
            // 1. Heading Animation
            gsap.from(".desi-heading", {
                scrollTrigger: {
                    trigger: "#desi-menu-section",
                    start: "top 75%", 
                    toggleActions: "play none none reverse"
                },
                y: -100,
                opacity: 0,
                duration: 1.2,
                ease: "elastic.out(1, 0.5)"
            });

            // 2. Cards Animation with complex stagger
            gsap.from(".desi-card", {
                scrollTrigger: {
                    trigger: ".desi-heading",
                    start: "top 50%", 
                    toggleActions: "play none none reverse"
                },
                y: 150,
                rotationX: 45,
                scale: 0.7,
                opacity: 0,
                duration: 1,
                stagger: {
                    each: 0.2,
                    from: "center" // Animates from center cards outwards!
                },
                ease: "back.out(2)"
            });

            // 3. THE COMPLEX INGREDIENTS ASSEMBLY (Burger-style Parallax & Scrub)
            // We use scrub so the animation plays backwards/forwards perfectly with the scroll bar
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#desi-menu-section",
                    start: "top bottom", // Start when section enters viewport
                    end: "center center", // End when section is in middle
                    scrub: 1.5 // Smooth scrubbing
                }
            });
            
            // Bring elements in from extreme positions to assemble the scene
            tl.fromTo("#desi-ing-1", { y: -500, x: -300, rotation: -180, opacity: 0 }, { y: 0, x: 0, rotation: 25, opacity: 1 }, 0)
              .fromTo("#desi-ing-2", { y: 500, x: 400, rotation: 200, opacity: 0 }, { y: 0, x: 0, rotation: -15, opacity: 1 }, 0.1)
              .fromTo("#desi-ing-3", { y: 600, x: -200, rotation: -90, opacity: 0 }, { y: 0, x: 0, rotation: 45, opacity: 1 }, 0.2)
              .fromTo("#desi-ing-4", { y: -400, x: 500, rotation: 180, opacity: 0 }, { y: 0, x: 0, rotation: -30, opacity: 1 }, 0)
              .fromTo("#desi-ing-5", { y: -300, x: 0, scale: 0.2, opacity: 0 }, { y: 0, x: 0, scale: 1, rotation: 40, opacity: 1 }, 0.3)
              .fromTo("#desi-ing-6", { y: 400, x: 100, scale: 0.1, opacity: 0 }, { y: 0, x: 0, scale: 1, rotation: -50, opacity: 1 }, 0.1);
              
            // 4. Continuous floating effect after assembly
            gsap.to(".desi-ingredient", {
                y: "random(-20, 20)",
                x: "random(-10, 10)",
                rotation: "random(-10, 10)",
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.5
            });

            ScrollTrigger.refresh();
        }
    }, 500);
});
</script>
<!-- END DESI MENU SECTION -->
    `;
    
    // Inject floating ingredients HTML
    if (!content.includes('class="desi-ingredient"')) {
        content = content.replace('<section id="desi-menu-section" class="elementor-section elementor-top-section" style="background-color: #111; padding: 120px 0; overflow: hidden; position: relative;">', 
                                  '<section id="desi-menu-section" class="elementor-section elementor-top-section" style="background-color: #111; padding: 120px 0; overflow: hidden; position: relative;">\n' + floatingIngredientsHTML);
    }
    
    // Replace script
    const scriptStart = '<!-- CUSTOM GSAP ANIMATION FOR DESI SECTION -->';
    const scriptEnd = '<!-- END DESI MENU SECTION -->';
    const regex = new RegExp(scriptStart + '[\\s\\S]*?' + scriptEnd);
    
    content = content.replace(regex, complexGSAPScript);
    
    fs.writeFileSync(file, content);
    console.log('Successfully added complex GSAP animation.');
};

updateFile('public/pizzabox/index.html');
