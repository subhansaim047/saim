import os
import re
from bs4 import BeautifulSoup

def update_anzaar_images(soup):
    updated = 0
    for img in soup.find_all('img'):
        src = img.get('src', '')
        # Logo
        if 'anzaar-logo.png' in src:
            img['alt'] = "Anzaar Restaurant & Takeaway Brand Logo - Saim Dev Showcase"
            updated += 1
        # Pizzas
        elif 'pizza-01.webp' in src:
            img['alt'] = "Stone-Baked Margherita Pizza with Fresh Basil - Anzaar UK Takeaway"
            updated += 1
        elif 'pizza_02.webp' in src:
            img['alt'] = "Pepperoni & Spicy Jalapeno Stone-Baked Pizza - Anzaar UK Menu"
            updated += 1
        elif 'pizza-03.webp' in src:
            img['alt'] = "BBQ Chicken & Red Onion Feast Pizza - Anzaar Takeaway"
            updated += 1
        elif 'pizza-04.webp' in src:
            img['alt'] = "Vegetarian Supreme Garden Pizza - Anzaar Takeaway Showcase"
            updated += 1
        elif 'pizza_05.webp' in src:
            img['alt'] = "Loaded Meat Lovers Rustic Pizza - Anzaar Takeaway UK"
            updated += 1
        elif 'pizza_06.webp' in src:
            img['alt'] = "Rustic Four Cheese & Garlic Pizza - Anzaar Demo"
            updated += 1
        # Categories / Items
        elif 'cat_starters.jpg' in src:
            img['alt'] = "Crispy Appetizers, Samosas & Finger Food - Anzaar Menu"
            updated += 1
        elif 'cat_soups.jpg' in src:
            img['alt'] = "Freshly Prepared Chef Hot Soups - Anzaar Takeaway"
            updated += 1
        elif 'veg-img-01.png' in src:
            img['alt'] = "Fresh Organic Salad & Vegetarian Sides - Anzaar UK"
            updated += 1
        elif 'cat_pasta.jpg' in src:
            img['alt'] = "Creamy Italian Pasta & Lasagne - Anzaar Restaurant"
            updated += 1
        elif 'burger-img-01.jpg' in src:
            img['alt'] = "Gourmet Double Beef Cheeseburger - Anzaar Takeaway"
            updated += 1
        elif 'sandwich-img-01.jpg' in src:
            img['alt'] = "Toasted Club Deli Sandwiches - Anzaar Menu"
            updated += 1
        elif 'tacos-img-01.jpg' in src:
            img['alt'] = "Spicy Street Food Tacos with Salsa - Anzaar Takeaway"
            updated += 1
        elif 'pizza-delivery.png' in src:
            img['alt'] = "Fast UK Food Delivery & Online Ordering Service - Anzaar Showcase"
            updated += 1
        elif 'burger.png' in src and 'burger-part' not in src:
            img['alt'] = "Gourmet Smash Cheeseburger with Crisp Lettuce - Anzaar Menu"
            updated += 1
        elif '404.png' in src:
            img['alt'] = "404 Page Not Found Illustration - Anzaar Showcase"
            updated += 1
        elif 'contact-icon' in src:
            img['alt'] = "Customer Support & Contact Info - Anzaar Takeaway"
            updated += 1
        elif any(pattern in src for pattern in ['pattern-shap', 'dot-img', 'vector-img', 'tiltle-dot', 'burger-part']):
            img['alt'] = ""
            img['aria-hidden'] = "true"
            updated += 1
    return updated

def update_frenchyse_images(soup):
    updated = 0
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if 'frenchys-logo.png' in src or 'frenchyse-logo.png' in src:
            img['alt'] = "Frenchyse Cafe & Bistro Brand Logo - Saim Dev Portfolio Showcase"
            updated += 1
        elif '404.png' in src:
            img['alt'] = "404 Page Not Found Illustration - Frenchyse Demo"
            updated += 1
    return updated

def update_burger_garage_images(soup):
    updated = 0
    for img in soup.find_all('img'):
        src = img.get('src', '')
        alt = img.get('alt', '')
        if 'barger-logo.png' in src or alt == 'Logo':
            img['alt'] = "Burger Garage Gourmet Takeaway Brand Logo - Saim Dev Showcase"
            updated += 1
        elif 'cat_wrap.jpg' in src or alt == 'Wraps':
            img['alt'] = "Crispy Grilled Chicken & Fresh Salad Wrap - Burger Garage Menu"
            updated += 1
    return updated

def update_hotbite_images(soup):
    updated = 0
    for img in soup.find_all('img'):
        src = img.get('src', '')
        alt = img.get('alt', '')
        if 'oresto-logo.png' in src or 'O\'Resto' in alt:
            img['alt'] = "Hotbite Takeaway Online Ordering Brand Logo - Saim Dev Showcase"
            updated += 1
        elif alt == 'Pizza':
            img['alt'] = "Stone-Baked Gourmet Pepperoni Pizza - Hotbite Takeaway Showcase"
            updated += 1
        elif alt == 'Burger':
            img['alt'] = "Crispy Chicken & Beef Burger - Hotbite Menu Demo"
            updated += 1
        elif alt == 'Hotdog':
            img['alt'] = "Loaded American Style Hotdog - Hotbite Takeaway"
            updated += 1
        elif alt == 'Emoji':
            img['alt'] = ""
            img['aria-hidden'] = "true"
            updated += 1
        elif any(pattern in src for pattern in ['pattern-shap', 'dot-img']):
            img['alt'] = ""
            img['aria-hidden'] = "true"
            updated += 1
    return updated

# Process all folders
folders = {
    'public/anzaar': update_anzaar_images,
    'public/frenchyse': update_frenchyse_images,
    'public/burger-garage': update_burger_garage_images,
    'public/hotbite': update_hotbite_images
}

total_updated = 0
for folder, updater in folders.items():
    for root, _, files in os.walk(folder):
        for f in files:
            if f.endswith('.html'):
                p = os.path.join(root, f)
                with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
                    html_content = fp.read()
                soup = BeautifulSoup(html_content, 'html.parser')
                count = updater(soup)
                if count > 0:
                    with open(p, 'w', encoding='utf-8') as fp:
                        fp.write(str(soup))
                    total_updated += count
                    print(f"Updated {count} images in {p}")

print(f"\nFinished! Total image tags optimized across demos: {total_updated}")
