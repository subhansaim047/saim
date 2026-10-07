const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Change minmax(300px, 1fr) to minmax(260px, 1fr) to guarantee 4 cards per row on typical laptop screens
    content = content.replace(
        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">',
        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">'
    );
    
    content = content.replace(
        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">',
        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">'
    );
    
    // Make sure Desi menu is also 260px for exact consistency
    content = content.replace(
        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">',
        '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">'
    );

    // Inject the Premium GSAP Animation for all three sections!
    const gsapCode = `
<!-- PREMIUM GSAP STAGGER REVEAL ANIMATION -->
<script>
document.addEventListener("DOMContentLoaded", function() {
    let checkGsap = setInterval(function() {
        if (window.gsap && window.ScrollTrigger) {
            clearInterval(checkGsap);
            
            const sections = ['#exclusive-deals-section', '#chicken-broast-section', '#desi-menu-section'];

            sections.forEach(section => {
                // Check if section exists
                if(document.querySelector(section)) {
                    // Heading Reveal
                    gsap.from(section + ' .pbmit-heading-subheading', {
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        },
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out"
                    });

                    // 3D Staggered Cards Reveal
                    gsap.from(section + ' .pbmit-deal-card', {
                        scrollTrigger: {
                            trigger: section + ' .pbmit-heading-subheading',
                            start: "top 60%",
                            toggleActions: "play none none reverse"
                        },
                        y: 80,
                        opacity: 0,
                        rotationX: -15, // Subtle 3D tilt
                        transformOrigin: "bottom center",
                        duration: 0.8,
                        stagger: 0.15, // 0.15s between cards
                        ease: "back.out(1.2)"
                    });
                }
            });
            
            // Add a subtle hover zoom effect via GSAP
            document.querySelectorAll('.pbmit-deal-card').forEach(card => {
                const imgDiv = card.querySelector('div:first-child');
                
                card.addEventListener('mouseenter', () => {
                    gsap.to(imgDiv, { scale: 1.05, duration: 0.5, ease: "power2.out" });
                    gsap.to(card, { y: -10, boxShadow: "0 15px 40px rgba(0,0,0,0.12)", duration: 0.4, ease: "power2.out" });
                });
                
                card.addEventListener('mouseleave', () => {
                    gsap.to(imgDiv, { scale: 1, duration: 0.5, ease: "power2.out" });
                    gsap.to(card, { y: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", duration: 0.4, ease: "power2.out" });
                });
            });

            setTimeout(() => ScrollTrigger.refresh(), 500);
        }
    }, 500);
});
</script>
`;
    
    // Add the GSAP script right before the closing body tag
    if(!content.includes('PREMIUM GSAP STAGGER REVEAL ANIMATION')) {
        content = content.replace('</body>', gsapCode + '\n</body>');
    }

    fs.writeFileSync(file, content);
    console.log('Successfully updated grids and injected premium GSAP animation.');
};

updateFile('public/pizzabox/index.html');
