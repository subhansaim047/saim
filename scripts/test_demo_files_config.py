import glob
import os
import re

files = [
    # burger-garage
    ("public/burger-garage/index.html", "Burger Garage | Live Takeaway Web Design Demo | Saim Dev", "Live takeaway web design demo of Burger Garage built by Saim Dev. High-performance online ordering, interactive menu, and zero aggregator commissions for UK takeaways."),
    ("public/burger-garage/about.html", "About Burger Garage | Takeaway Showcase Demo | Saim Dev", "About page demonstration for Burger Garage takeaway demo. Built by Saim Dev showcasing story-driven restaurant branding and mobile-first speed."),
    ("public/burger-garage/menu.html", "Burger Garage Menu | Online Ordering Showcase | Saim Dev", "Digital takeaway menu demonstration with categories, burgers, and sides. Engineered by Saim Dev with fast load speeds and clean customer UI."),
    ("public/burger-garage/contact-us.html", "Contact Burger Garage | Restaurant Demo Page | Saim Dev", "Restaurant contact and location demonstration page built by Saim Dev featuring interactive maps, opening hours, and fast contact forms."),
    ("public/burger-garage/contact.html", "Contact Burger Garage | Takeaway Showcase | Saim Dev", "Customer contact showcase page for Burger Garage demo website, designed by Saim Dev for UK fast casual takeaway businesses."),
    ("public/burger-garage/blog.html", "Burger Garage Culinary Journal | Demo Blog | Saim Dev", "Food culture and culinary blog demonstration page built by Saim Dev for restaurant and takeaway content marketing."),
    ("public/burger-garage/blog-grid.html", "Burger Garage Articles & News | Demo Grid | Saim Dev", "Responsive blog grid showcase for takeaway and restaurant websites, developed with modern HTML5 and CSS by Saim Dev."),
    ("public/burger-garage/blog-detail.html", "Burger Garage Article Detail | Demo Post | Saim Dev", "Editorial restaurant blog post demonstration page crafted by Saim Dev with readable typography and social engagement layout."),
    ("public/burger-garage/blog-details.html", "Burger Garage Recipe Stories | Demo Post | Saim Dev", "Culinary storytelling and recipe blog post showcase, demonstrating editorial restaurant content architecture by Saim Dev."),
    
    # frenchyse
    ("public/frenchyse/index.html", "Frenchyse Fine Dining | Luxury Restaurant Website Demo | Saim Dev", "Live luxury restaurant web design demo of Frenchyse by Saim Dev. Elegant dining layouts, table reservation UI, and bespoke visual architecture."),
    ("public/frenchyse/about-us.html", "About Frenchyse | Haute Cuisine Restaurant Showcase | Saim Dev", "Heritage and culinary philosophy showcase page for Frenchyse luxury restaurant demo, designed and engineered by Saim Dev."),
    ("public/frenchyse/menu.html", "Frenchyse À La Carte Menu | Fine Dining Showcase | Saim Dev", "Interactive luxury restaurant menu demonstration featuring chef specials, wine pairings, and elegant culinary formatting by Saim Dev."),
    ("public/frenchyse/contact-us.html", "Contact & Reservations | Frenchyse Showcase | Saim Dev", "Table booking and VIP dining contact demonstration page for luxury restaurants, built with premium aesthetics by Saim Dev."),
    ("public/frenchyse/our-services.html", "Private Dining & Events | Frenchyse Demo | Saim Dev", "Private catering and luxury event hosting showcase page, demonstrating premium hospitality website design by Saim Dev."),
    ("public/frenchyse/transparent.html", "Frenchyse Experience | Restaurant Showcase | Saim Dev", "Interactive dining visual showcase for Frenchyse fine dining website demonstration, crafted by Saim Dev."),

    # anzaar
    ("public/anzaar/index.html", "Anzaar Rooftop Dining | Restaurant Web Design Demo | Saim Dev", "Live rooftop restaurant web design demo of ANZAAR by Saim Dev. Panoramic culinary layouts, evening ambiance UI, and table reservations."),
    ("public/anzaar/about-us.html", "About Anzaar Rooftop | Restaurant Showcase Demo | Saim Dev", "Rooftop dining experience and story showcase page for ANZAAR demo, engineered by Saim Dev for premium hospitality brands."),
    ("public/anzaar/menu.html", "Anzaar Dining Menu | Gourmet Cuisine Showcase | Saim Dev", "Interactive gourmet rooftop menu demonstration featuring signature cocktails, charcoal grill dishes, and modern typography by Saim Dev."),
    ("public/anzaar/contact-us.html", "Reservations & Contact | Anzaar Rooftop Demo | Saim Dev", "Rooftop dining reservations and venue contact page demonstration, built with seamless mobile UX by Saim Dev."),
    ("public/anzaar/our-services.html", "Private Events & Lounges | Anzaar Showcase | Saim Dev", "Exclusive events, celebrations, and corporate dining showcase page for rooftop restaurants, designed by Saim Dev."),
    ("public/anzaar/transparent.html", "Anzaar Rooftop Experience | Hospitality Showcase | Saim Dev", "Atmospheric visual demonstration page for ANZAAR rooftop restaurant, engineered by Saim Dev."),

    # hotbite
    ("public/hotbite/index.html", "O'Resto Pizza & Street Food | Takeaway Ordering Demo | Saim Dev", "Live high-energy street food and pizza takeaway website demo. Interactive pizza sliders, dynamic combos, and 0% commission direct ordering by Saim Dev."),
    ("public/hotbite/privacy-policy.html", "Privacy Policy Demo | O'Resto Takeaway Showcase | Saim Dev", "Standard customer privacy policy demonstration page for food takeaway ordering websites, structured by Saim Dev."),
    ("public/hotbite/privacy-policy/index.html", "Privacy Policy Demo | O'Resto Pizza Showcase | Saim Dev", "Compliance and customer privacy showcase page for modern takeaway ordering platforms by Saim Dev.")
]

print(f"Configured {len(files)} demo files for upgrade.")
for f, t, d in files:
    if not os.path.exists(f):
        print(f"WARNING: File does not exist: {f}")
    else:
        print(f"OK: {f} (Title: {t[:40]}...)")
