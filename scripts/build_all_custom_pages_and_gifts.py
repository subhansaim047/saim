import os
import json
import re

BASE_DIR = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public\thejacketmaker"
AUDIT_DIR = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit"

# Load products catalog
with open(os.path.join(AUDIT_DIR, "all_store_products_complete.json"), "r", encoding="utf-8") as f:
    ALL_PRODUCTS = json.load(f)

print(f"Loaded {len(ALL_PRODUCTS)} products")

# Load template for custom pages
CUSTOM_TPL_PATH = os.path.join(BASE_DIR, "pages", "custom-leather-jackets", "index.html")
with open(CUSTOM_TPL_PATH, "r", encoding="utf-8") as f:
    CUSTOM_TEMPLATE = f.read()

# Load template for collections
COLLECTION_TPL_PATH = os.path.join(BASE_DIR, "collections", "mens-leather-jackets", "index.html")
with open(COLLECTION_TPL_PATH, "r", encoding="utf-8") as f:
    COLLECTION_TEMPLATE = f.read()

# -------------------------------------------------------------
# 1. HELPER: MAKE PRODUCT CARD FOR COLLECTION PAGES
# -------------------------------------------------------------
def make_collection_card(p):
    handle = p["handle"]
    title = p["title"]
    img_url = p.get("images", [{}])[0].get("src", "")
    price = p.get("variants", [{}])[0].get("price", "0")
    try:
        price_fmt = f"Rs.{float(price):,.2f} PKR"
    except:
        price_fmt = f"Rs.{price} PKR"
    
    prod_url = f"/thejacketmaker/products/{handle}/index.html"
    
    return f"""<li class="grid__item">
  <div class="card-wrapper product-card-wrapper underline-links-hover">
    <div class="card card--standard animate--hover-image has-mobile-layout is-active" tabindex="-1">
      <div class="card__inner color-background-2 ratio" style="--ratio-percent: 100%;">
        <div class="card__media">
          <div class="media media--transparent">
            <a href="{prod_url}" aria-label="{title}" class="full-unstyled-link">
              <img src="{img_url}" alt="{title}" loading="lazy" width="540" height="540" style="object-fit:cover;width:100%;height:100%;">
            </a>
          </div>
        </div>
      </div>
      <div class="card__content">
        <div class="card__information">
          <h3 class="card__heading h5">
            <a href="{prod_url}" class="full-unstyled-link">{title}</a>
          </h3>
          <div class="price">
            <div class="price__container">
              <div class="price__regular">
                <span class="price-item price-item--regular">{price_fmt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>"""

def generate_collection(handle, title, h1, product_filter_fn):
    out_dir = os.path.join(BASE_DIR, "collections", handle)
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "index.html")
    
    matched_products = [p for p in ALL_PRODUCTS if product_filter_fn(p)]
    if len(matched_products) == 0:
        matched_products = ALL_PRODUCTS[:24]
    
    cards_html = "\n".join([make_collection_card(p) for p in matched_products[:48]])
    
    content = COLLECTION_TEMPLATE
    # Replace title
    content = re.sub(r'<title>.*?</title>', f'<title>{title} | HQ Leathercon</title>', content, count=1)
    # Replace H1
    content = re.sub(r'<h1\b[^>]*>.*?</h1>', f'<h1 class="collection-hero__title">{h1}</h1>', content, count=1)
    
    # Replace product grid
    grid_pattern = re.compile(r'(<ul[^>]*id="product-grid"[^>]*>).*?(</ul>)', re.DOTALL)
    if grid_pattern.search(content):
        content = grid_pattern.sub(r'\1\n' + cards_html + r'\n\2', content)
    else:
        # Try generic grid replacement
        generic_grid = re.compile(r'(<ul[^>]*class="[^"]*product-grid[^"]*"[^>]*>).*?(</ul>)', re.DOTALL)
        if generic_grid.search(content):
            content = generic_grid.sub(r'\1\n' + cards_html + r'\n\2', content)
        else:
            list_grid = re.compile(r'(<div[^>]*class="[^"]*product-list[^"]*"[^>]*>).*?(</div>\s*</div>)', re.DOTALL)
            if list_grid.search(content):
                content = list_grid.sub(r'\1\n<ul class="grid product-grid grid--4-col-desktop grid--2-col-tablet-down">\n' + cards_html + r'\n</ul>\n\2', content)
    
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated collection: {handle} ({len(matched_products)} items)")

# -------------------------------------------------------------
# 2. GENERATE MISSING GIFT COLLECTIONS
# -------------------------------------------------------------
# Gift Set Collection
generate_collection(
    "gift-set",
    "Leather Gift Sets",
    "LEATHER GIFT SETS",
    lambda p: "gift" in p.get("title", "").lower() or "gift" in " ".join(p.get("tags", [])).lower() or p.get("product_type") == "Gift Set"
)

# Leather Gifts Collection
generate_collection(
    "leather-gifts",
    "Luxury Leather Gifts",
    "LUXURY LEATHER GIFTS",
    lambda p: any(k in p.get("title", "").lower() for k in ["gift", "wallet", "keychain", "folio", "sleeve", "organizer", "card"])
)

# Gifts for Him
generate_collection(
    "gifts-for-him",
    "Gifts For Him",
    "GIFTS FOR HIM",
    lambda p: any(k in p.get("title", "").lower() for k in ["marvin", "voltor", "timeless taylen", "gift set", "wallet", "biker", "bomber", "shoes"])
)

# Gifts for Her
generate_collection(
    "gifts-for-her",
    "Gifts For Her",
    "GIFTS FOR HER",
    lambda p: any(k in p.get("title", "").lower() for k in ["leather gift", "gift set", "tote", "handbag", "wallet", "bliss", "clutch", "women"])
)

# -------------------------------------------------------------
# 3. HELPER: GENERATE CUSTOM PAGE
# -------------------------------------------------------------
def generate_custom_page(handle, title, h1, subtitle, product_keywords):
    out_dir = os.path.join(BASE_DIR, "pages", handle)
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "index.html")
    
    content = CUSTOM_TEMPLATE
    
    # 1. Update Title tag
    content = re.sub(r'<title>.*?</title>', f'<title>{title} | HQ Leathercon</title>', content, count=1)
    
    # 2. Update H1
    content = re.sub(r'<h1\b[^>]*>.*?</h1>', f'<h1 class="heading h1">{h1}</h1>', content, count=1)
    
    # 3. Update main hero subheadings and paragraphs
    content = re.sub(
        r'<p class="subheading[^"]*">.*?</p>',
        f'<p class="subheading">{subtitle}</p>',
        content,
        count=1
    )
    
    # 4. Filter relevant product showcase cards
    matched = [p for p in ALL_PRODUCTS if any(k in p.get("title", "").lower() for k in product_keywords)]
    if len(matched) < 4:
        matched = ALL_PRODUCTS[:8]
    
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Generated custom page: {handle}")

# -------------------------------------------------------------
# 4. GENERATE ALL CUSTOM PAGES
# -------------------------------------------------------------
CUSTOM_PAGES_DEFS = [
    ("custom-denim-jackets", "Custom Denim Jackets | Bespoke Jackets", "CUSTOM DENIM JACKETS", "Handcrafted denim & leather fusion outerwear tailored to your measurements.", ["denim", "jacket", "leather"]),
    ("custom-embroidered-jackets", "Custom Embroidered Jackets | Bespoke Patches & Embroidery", "CUSTOM EMBROIDERED JACKETS", "Personalized custom embroidery, logos, insignias and precision stitchwork.", ["varsity", "jacket", "bomber"]),
    ("custom-windbreaker-jackets", "Custom Windbreaker Jackets | Tailored Weatherproof Outerwear", "CUSTOM WINDBREAKER JACKETS", "Custom weatherproof technical jackets built with bespoke styling.", ["wesley", "windbreaker", "jacket"]),
    ("custom-parka-jackets", "Custom Parka Jackets | Handcrafted Winter Outerwear", "CUSTOM PARKA JACKETS", "Bespoke shearling-lined winter parkas engineered for sub-zero temperatures.", ["parka", "winter", "jacket"]),
    ("custom-satin-jackets", "Custom Satin Jackets | Vintage & Modern Satin Outerwear", "CUSTOM SATIN JACKETS", "Retro and luxury satin jackets featuring custom ribbing, cuffs, and embroidery.", ["varsity", "bomber", "jacket"]),
    ("custom-leather-vests", "Custom Leather Vests | Motorcycle & Fashion Vests", "CUSTOM LEATHER VESTS", "Handcrafted full-grain leather vests tailored for riders and lifestyle.", ["vest", "leather", "biker"]),
    ("custom-suits", "Custom Suits & Tailoring | Bespoke Formal Wear", "CUSTOM SUITS & TAILORING", "Master-tailored single & double breasted suits and bespoke formal leather tailoring.", ["suit", "blazer", "leather"]),
    ("custom-handbags", "Custom Handbags | Luxury Handcrafted Leather", "CUSTOM HANDBAGS", "Exquisite full-grain leather handbags customized to your personal specifications.", ["bag", "tote", "handbag"]),
    ("custom-briefcases", "Custom Briefcases | Executive Leather Work Bags", "CUSTOM BRIEFCASES", "Handcrafted leather briefcases, workbags, and laptop folios for professionals.", ["bag", "briefcase", "laptop"]),
    ("custom-tote-bags", "Custom Tote Bags | Everyday Full-Grain Leather Totes", "CUSTOM TOTE BAGS", "Spacious, minimalist leather tote bags personalized with custom compartments.", ["tote", "bag", "leather"]),
    ("custom-backpacks", "Custom Backpacks | Handcrafted Leather Travel Packs", "CUSTOM BACKPACKS", "Full-grain leather backpacks engineered for ergonomics, durability, and luxury.", ["backpack", "bag", "leather"]),
    ("custom-messenger-laptop-bags", "Custom Messenger & Laptop Bags | Bespoke Leather Satchels", "CUSTOM MESSENGER & LAPTOP BAGS", "Ergonomic leather messenger bags tailored for laptops, tablets, and daily carry.", ["messenger", "laptop", "bag"]),
    ("custom-duffel-weekender-bags", "Custom Duffel & Weekender Bags | Luxury Leather Travel", "CUSTOM DUFFEL & WEEKENDER BAGS", "Premium leather travel bags and gym duffels handcrafted for a lifetime of journeys.", ["duffle", "duffel", "bag", "weekender"]),
    ("custom-portfolio-bags", "Custom Portfolio Bags | Document Organizers & Folios", "CUSTOM PORTFOLIO BAGS", "Sleek document folios, organizers, and legal portfolios in genuine leather.", ["folio", "organizer", "bag"]),
    ("custom-clutch-purses", "Custom Clutch Purses | Evening Leather Accessories", "CUSTOM CLUTCH PURSES", "Bespoke evening clutches and minimalist leather wristlets for special occasions.", ["clutch", "purse", "wallet"]),
    ("corporate-gifts", "Corporate Leather Gifts | Bespoke Executive Merchandise", "CORPORATE LEATHER GIFTS", "Elevate your brand with custom logo-embossed leather merchandise and executive gifts.", ["gift", "wallet", "set"]),
    ("employee-gift", "Employee Recognition Gifts | Custom Branded Leather", "EMPLOYEE GIFTS", "Celebrate achievements and milestones with handcrafted personalized leather gifts.", ["gift", "wallet", "keychain"]),
    ("gifts-for-clients", "Gifts For Clients | Luxury Corporate Relationships", "GIFTS FOR CLIENTS", "Unforgettable full-grain leather gifts tailored for high-value client relationships.", ["gift", "set", "wallet"]),
    ("gifts-for-conferences-events", "Conference & Event Gifts | Custom Event Packs", "CONFERENCE & EVENT GIFTS", "Premium customized leather swag and executive gifts for conferences and summits.", ["gift", "set", "keychain"]),
    ("luxury-corporate-gifts", "Luxury Corporate Gifts | Executive VIP Leather Sets", "LUXURY CORPORATE GIFTS", "Bespoke VIP executive gift boxes handcrafted from the finest Pakistani leather.", ["gift", "set", "wallet"]),
    ("custom-boots", "Custom Leather Boots | Goodyear Welted Handmade Boots", "CUSTOM LEATHER BOOTS", "Rugged, handcrafted full-grain leather boots built with heritage Goodyear welt construction.", ["boots", "shoes", "leather"]),
    ("custom-dress-shoes", "Custom Dress Shoes | Artisanal Handcrafted Footwear", "CUSTOM DRESS SHOES", "Bespoke leather Oxfords, Derbies, and double monk straps tailored to your feet.", ["shoes", "derby", "oxford"]),
    ("custom-leather-shoes", "Custom Leather Shoes | Handcrafted Luxury Footwear", "CUSTOM LEATHER SHOES", "Artisanal leather shoes made with hand-selected calfskin and ergonomic footbeds.", ["shoes", "loafer", "derby"]),
    ("custom-loafers", "Custom Loafers | Hand-Stitched Leather Penny Loafers", "CUSTOM LOAFERS", "Timeless penny loafers and driving shoes crafted from buttery soft full-grain leather.", ["loafer", "loafers", "shoes"]),
    ("custom-moccasins", "Custom Moccasins | Handcrafted Casual Driving Shoes", "CUSTOM MOCCASINS", "Supreme comfort moccasins and loafers tailored with flexible rubber grip soles.", ["shoes", "loafer", "boots"]),
    ("custom-oxford-shoes", "Custom Oxford Shoes | Quintessential Bespoke Formal Shoes", "CUSTOM OXFORD SHOES", "Classic cap-toe and wholecut leather Oxford shoes handcrafted for formal excellence.", ["oxford", "shoes", "derby"]),
    ("custom-leather-wallets", "Custom Leather Wallets | Monogrammed Bi-Fold & Cardholders", "CUSTOM LEATHER WALLETS", "Full-grain leather wallets personalized with name initials and RFID blocking.", ["wallet", "bi-fold", "card"]),
    ("custom-passport-holders", "Custom Passport Holders | Personalized Travel Document Covers", "CUSTOM PASSPORT HOLDERS", "Handcrafted leather passport covers with card slots, currency dividers, and personalization.", ["wallet", "travel", "leather"]),
    ("personalized-luggage-tags", "Personalized Luggage Tags | Engraved Leather Travel Accessories", "PERSONALIZED LUGGAGE TAGS", "Distinguishable full-grain leather luggage tags engraved with your credentials.", ["bag", "keychain", "leather"]),
    ("custom-leather-belts", "Custom Leather Belts | Full-Grain Hand-Stitched Belts", "CUSTOM LEATHER BELTS", "Heirloom-grade full-grain leather belts with solid brass and stainless steel buckles.", ["belt", "leather", "casual"]),
    ("custom-leather-goods", "Custom Leather Goods | Bespoke Artisanal Accessories", "CUSTOM LEATHER GOODS", "Desk accessories, catchalls, folios, and specialty items handcrafted to order.", ["wallet", "organizer", "leather"]),
    ("custom-apparel", "Custom Apparel | Made-to-Measure Outerwear & Clothing", "CUSTOM APPAREL", "Complete custom tailoring for leather jackets, denim, sportswear, and casual apparel.", ["jacket", "bomber", "hoodie"]),
    ("custom-jerseys", "Custom Jerseys | Custom Sublimated & Stitched Sports Teamwear", "CUSTOM JERSEYS", "Professional grade custom team jerseys for baseball, basketball, soccer and esports.", ["jersey", "jacket", "varsity"]),
    ("custom-tshirts", "Custom T-Shirts | Heavyweight Premium Custom Tees", "CUSTOM T-SHIRTS", "Heavyweight 240+ GSM luxury cotton t-shirts with bespoke embroidery and print.", ["tshirt", "jacket", "apparel"]),
    ("custom-hoodies", "Custom Hoodies | Tailored Fleece Pullovers & Zip-Ups", "CUSTOM HOODIES", "French terry and brushed fleece custom hoodies customized with custom embroidery.", ["hoodie", "pullover", "jacket"]),
    ("custom-sweatshirts", "Custom Sweatshirts | Premium Embroidered Crewnecks", "CUSTOM SWEATSHIRTS", "Classic heavyweight crewneck sweatshirts tailored with custom branding and logos.", ["sweatshirt", "hoodie", "pullover"]),
    ("custom-polo-shirts", "Custom Polo Shirts | Classic Tailored Pique Polos", "CUSTOM POLO SHIRTS", "Bespoke pique cotton polo shirts customized with corporate embroidery or initials.", ["polo", "shirt", "jacket"]),
    ("happy-customers", "Happy Customers & Reviews | 50,000+ Satisfied Clients", "HAPPY CUSTOMERS & REVIEWS", "Real customer photos, verified reviews, and stories from our worldwide community.", ["jacket", "biker", "bomber"]),
]

for handle, title, h1, subtitle, kw in CUSTOM_PAGES_DEFS:
    generate_custom_page(handle, title, h1, subtitle, kw)

print(f"\nAll {len(CUSTOM_PAGES_DEFS)} custom pages generated successfully!")
