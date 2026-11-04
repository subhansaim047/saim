import os
import re

BASE_DIR = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public\thejacketmaker"

REPLACEMENTS = [
    # Custom items
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Embroidered Jackets', 'href="/thejacketmaker/pages/custom-embroidered-jackets/index.html">Custom Embroidered Jackets'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Denim Jackets', 'href="/thejacketmaker/pages/custom-denim-jackets/index.html">Custom Denim Jackets'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Windbreaker Jackets', 'href="/thejacketmaker/pages/custom-windbreaker-jackets/index.html">Custom Windbreaker Jackets'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Parka Jackets', 'href="/thejacketmaker/pages/custom-parka-jackets/index.html">Custom Parka Jackets'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Satin Jackets', 'href="/thejacketmaker/pages/custom-satin-jackets/index.html">Custom Satin Jackets'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Suits', 'href="/thejacketmaker/pages/custom-suits/index.html">Custom Suits'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Handbags', 'href="/thejacketmaker/pages/custom-handbags/index.html">Custom Handbags'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Briefcases', 'href="/thejacketmaker/pages/custom-briefcases/index.html">Custom Briefcases'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Tote Bags', 'href="/thejacketmaker/pages/custom-tote-bags/index.html">Custom Tote Bags'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Backpacks', 'href="/thejacketmaker/pages/custom-backpacks/index.html">Custom Backpacks'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Messenger Bags', 'href="/thejacketmaker/pages/custom-messenger-laptop-bags/index.html">Custom Messenger Bags'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Weekender &amp; Duffel Bags', 'href="/thejacketmaker/pages/custom-duffel-weekender-bags/index.html">Custom Weekender &amp; Duffel Bags'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Portfolio Bags', 'href="/thejacketmaker/pages/custom-portfolio-bags/index.html">Custom Portfolio Bags'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Clutch Purses', 'href="/thejacketmaker/pages/custom-clutch-purses/index.html">Custom Clutch Purses'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Shoes', 'href="/thejacketmaker/pages/custom-leather-shoes/index.html">Custom Shoes'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Boots', 'href="/thejacketmaker/pages/custom-boots/index.html">Custom Boots'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Dress Shoes', 'href="/thejacketmaker/pages/custom-dress-shoes/index.html">Custom Dress Shoes'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Leather Shoes', 'href="/thejacketmaker/pages/custom-leather-shoes/index.html">Custom Leather Shoes'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Loafers', 'href="/thejacketmaker/pages/custom-loafers/index.html">Custom Loafers'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Moccasins', 'href="/thejacketmaker/pages/custom-moccasins/index.html">Custom Moccasins'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Oxford Shoes', 'href="/thejacketmaker/pages/custom-oxford-shoes/index.html">Custom Oxford Shoes'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Leather Goods', 'href="/thejacketmaker/pages/custom-leather-goods/index.html">Custom Leather Goods'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Leather Wallets', 'href="/thejacketmaker/pages/custom-leather-wallets/index.html">Custom Leather Wallets'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Passport Holders', 'href="/thejacketmaker/pages/custom-passport-holders/index.html">Custom Passport Holders'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Personalized Luggage Tags', 'href="/thejacketmaker/pages/personalized-luggage-tags/index.html">Personalized Luggage Tags'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Leather Belts', 'href="/thejacketmaker/pages/custom-leather-belts/index.html">Custom Leather Belts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Apparel', 'href="/thejacketmaker/pages/custom-apparel/index.html">Custom Apparel'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Jerseys', 'href="/thejacketmaker/pages/custom-jerseys/index.html">Custom Jerseys'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom T-Shirts', 'href="/thejacketmaker/pages/custom-tshirts/index.html">Custom T-Shirts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Hoodies', 'href="/thejacketmaker/pages/custom-hoodies/index.html">Custom Hoodies'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Sweatshirts', 'href="/thejacketmaker/pages/custom-sweatshirts/index.html">Custom Sweatshirts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Custom Polos', 'href="/thejacketmaker/pages/custom-polo-shirts/index.html">Custom Polos'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Corporate Gifts', 'href="/thejacketmaker/pages/corporate-gifts/index.html">Corporate Gifts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">CORPORATE GIFTS', 'href="/thejacketmaker/pages/corporate-gifts/index.html">CORPORATE GIFTS'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Luxury Corporate Gifts', 'href="/thejacketmaker/pages/luxury-corporate-gifts/index.html">Luxury Corporate Gifts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Employee Gifts', 'href="/thejacketmaker/pages/employee-gift/index.html">Employee Gifts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Client Gifts', 'href="/thejacketmaker/pages/gifts-for-clients/index.html">Client Gifts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Event Gifts', 'href="/thejacketmaker/pages/gifts-for-conferences-events/index.html">Event Gifts'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Customer Reviews', 'href="/thejacketmaker/pages/happy-customers/index.html">Customer Reviews'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Press &amp; Mentions', 'href="/thejacketmaker/pages/our-story/index.html">Press &amp; Mentions'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Celebrity Style', 'href="/thejacketmaker/pages/our-story/index.html">Celebrity Style'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Customers\' Gallery', 'href="/thejacketmaker/pages/happy-customers/index.html">Customers\' Gallery'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">#MadeForMe', 'href="/thejacketmaker/pages/happy-customers/index.html">#MadeForMe'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">File A Return', 'href="/thejacketmaker/pages/help/index.html">File A Return'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">File a Return', 'href="/thejacketmaker/pages/help/index.html">File a Return'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Track Order', 'href="/thejacketmaker/pages/help/index.html">Track Order'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Returns &amp; Refunds', 'href="/thejacketmaker/pages/help/index.html">Returns &amp; Refunds'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Delivery Policy', 'href="/thejacketmaker/pages/help/index.html">Delivery Policy'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Size Guide', 'href="/thejacketmaker/pages/help/index.html">Size Guide'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Privacy Policy', 'href="/thejacketmaker/policies/privacy-policy/index.html">Privacy Policy'),
    ('href="/thejacketmaker/pages/custom-leather-jackets/index.html">Terms of Service', 'href="/thejacketmaker/policies/terms-of-service/index.html">Terms of Service'),

    # Gifts items
    ('href="/thejacketmaker/products/ionic-black-leather-jacket/index.html">Gift Card', 'href="/thejacketmaker/products/gift-cards/index.html">Gift Card'),
    ('href="/thejacketmaker/products/ionic-black-leather-jacket/index.html">Gift Cards', 'href="/thejacketmaker/products/gift-cards/index.html">Gift Cards'),
    ('href="/thejacketmaker/products/ionic-black-leather-jacket/index.html">GIFTING', 'href="/thejacketmaker/collections/gift-set/index.html">GIFTING'),
    ('href="/thejacketmaker/collections/gifts-for-him/index.html">Gift Set', 'href="/thejacketmaker/collections/gift-set/index.html">Gift Set'),
    ('href="/thejacketmaker/collections/gifts-for-her/index.html">Gift Set', 'href="/thejacketmaker/collections/gift-set/index.html">Gift Set'),
    ('href="/thejacketmaker/collections/all/index.html">Gifts For Her', 'href="/thejacketmaker/collections/gifts-for-her/index.html">Gifts For Her'),
    ('href="/thejacketmaker/collections/full-full-grain-leather-wallets/index.html">Leather Gifts', 'href="/thejacketmaker/collections/leather-gifts/index.html">Leather Gifts'),
    ('href="/thejacketmaker/collections/all/index.html">Leather Gifts', 'href="/thejacketmaker/collections/leather-gifts/index.html">Leather Gifts'),
    ('href="/thejacketmaker/collections/all/index.html">Gifts', 'href="/thejacketmaker/collections/gift-set/index.html">Gifts'),
]

# Process all HTML files
modified_count = 0
total_files = 0

for root, dirs, files in os.walk(BASE_DIR):
    for f in files:
        if f.lower() == 'index.html':
            total_files += 1
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8', errors='replace') as fp:
                content = fp.read()
            
            changed = False
            for old, new in REPLACEMENTS:
                if old in content:
                    content = content.replace(old, new)
                    changed = True
            
            if changed:
                with open(path, 'w', encoding='utf-8') as fp:
                    fp.write(content)
                modified_count += 1

print(f"Processed {total_files} HTML files. Modified: {modified_count}")
