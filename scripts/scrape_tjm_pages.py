import os
import subprocess
import time
from concurrent.futures import ThreadPoolExecutor

USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"

URLS = {
    # Homepage
    "home": ("/", "home.html"),

    # Pages
    "page_our_story": ("/pages/our-story", "pages/our-story.html"),
    "page_bespoke": ("/pages/bespoke", "pages/bespoke.html"),
    "page_hangontoit": ("/pages/hangontoit", "pages/hangontoit.html"),
    "page_help": ("/pages/help", "pages/help.html"),
    "page_contact_us": ("/pages/contact-us", "pages/contact-us.html"),
    "page_men_jackets": ("/pages/men-jackets", "pages/men-jackets.html"),
    "page_women_jackets": ("/pages/women-jackets", "pages/women-jackets.html"),
    "page_trucarry": ("/pages/trucarry", "pages/trucarry.html"),
    "page_eviternity": ("/pages/eviternity", "pages/eviternity.html"),
    "page_custom_leather_jackets": ("/pages/custom-leather-jackets", "pages/custom-leather-jackets.html"),
    "page_custom_bomber_jackets": ("/pages/custom-bomber-jackets", "pages/custom-bomber-jackets.html"),
    "page_custom_trench_coats": ("/pages/custom-trench-coats", "pages/custom-trench-coats.html"),
    "page_custom_motorcycle_jackets": ("/pages/custom-motorcycle-jackets", "pages/custom-motorcycle-jackets.html"),
    "page_custom_varsity_letterman_jackets": ("/pages/custom-varsity-letterman-jackets", "pages/custom-varsity-letterman-jackets.html"),
    "page_custom_leather_bags": ("/pages/custom-leather-bags", "pages/custom-leather-bags.html"),
    "page_affiliate_program": ("/pages/affiliate-program", "pages/affiliate-program.html"),
    "page_brand_ambassador_program": ("/pages/brand-ambassador-program", "pages/brand-ambassador-program.html"),

    # Collections
    "col_mens_leather_jackets": ("/collections/mens-leather-jackets", "collections/mens-leather-jackets.html"),
    "col_womens_leather_jackets": ("/collections/womens-leather-jackets", "collections/womens-leather-jackets.html"),
    "col_mens_bomber_jackets": ("/collections/mens-bomber-jackets", "collections/mens-bomber-jackets.html"),
    "col_mens_biker_leather_jackets": ("/collections/mens-biker-leather-jackets", "collections/mens-biker-leather-jackets.html"),
    "col_mens_fur_shearling_jackets": ("/collections/mens-fur-shearling-jackets", "collections/mens-fur-shearling-jackets.html"),
    "col_mens_winter_jackets": ("/collections/mens-winter-jackets", "collections/mens-winter-jackets.html"),
    "col_mens_suede_jackets": ("/collections/mens-suede-jackets", "collections/mens-suede-jackets.html"),
    "col_mens_cafe_racer_jackets": ("/collections/mens-cafe-racer-jackets", "collections/mens-cafe-racer-jackets.html"),
    "col_mens_aviator_jackets": ("/collections/mens-aviator-jackets", "collections/mens-aviator-jackets.html"),
    "col_mens_leather_coats": ("/collections/mens-leather-coats", "collections/mens-leather-coats.html"),
    "col_mens_best_sellers": ("/collections/mens-best-sellers", "collections/mens-best-sellers.html"),
    "col_mens_new_arrival": ("/collections/mens-new-arrival", "collections/mens-new-arrival.html"),
    "col_mens_leather_vests": ("/collections/mens-leather-vests", "collections/mens-leather-vests.html"),
    "col_mens_blazers": ("/collections/mens-blazers", "collections/mens-blazers.html"),
    "col_mens_wool_coats_jackets": ("/collections/mens-wool-coats-jackets", "collections/mens-wool-coats-jackets.html"),
    "col_prime": ("/collections/prime", "collections/prime.html"),
    "col_pre_order": ("/collections/pre-order", "collections/pre-order.html"),
    "col_trucarry": ("/collections/trucarry", "collections/trucarry.html"),
    "col_gifts_for_him": ("/collections/gifts-for-him", "collections/gifts-for-him.html"),
    "col_all": ("/collections/all", "collections/all.html"),

    # Products
    "prod_ionic_black": ("/products/ionic-black-leather-jacket", "products/ionic-black-leather-jacket.html"),
    "prod_dean_brown": ("/products/dean-brown-leather-biker-jacket", "products/dean-brown-leather-biker-jacket.html"),
    "prod_bliss_black": ("/products/bliss-black-leather-bomber-jacket", "products/bliss-black-leather-bomber-jacket.html"),
    "prod_legacy_black": ("/products/legacy-black-leather-biker-jacket", "products/legacy-black-leather-biker-jacket.html"),
    "prod_mystical_black": ("/products/mystical-black-leather-jacket", "products/mystical-black-leather-jacket.html"),
    "prod_rustic_black": ("/products/rustic-black-leather-biker-jacket", "products/rustic-black-leather-biker-jacket.html"),
    "prod_rustic_brown": ("/products/rustic-brown-leather-biker-jacket", "products/rustic-brown-leather-biker-jacket.html"),
    "prod_allaric_alley": ("/products/allaric-alley-black-leather-biker-jacket", "products/allaric-alley-black-leather-biker-jacket.html"),
    "prod_vincent_black": ("/products/vincent-black-leather-biker-jacket", "products/vincent-black-leather-biker-jacket.html"),
    "prod_dan_frost": ("/products/dan-frost-tan-shearling-jacket", "products/dan-frost-tan-shearling-jacket.html"),
    "prod_bouncer_biz": ("/products/bouncer-biz-black-leather-bomber-jacket", "products/bouncer-biz-black-leather-bomber-jacket.html"),
    "prod_agent_shadow": ("/products/agent-shadow-black-leather-bomber-jacket", "products/agent-shadow-black-leather-bomber-jacket.html"),
    "prod_hank_black": ("/products/hank-black-leather-biker-jacket", "products/hank-black-leather-biker-jacket.html"),
    "prod_armstrong_black": ("/products/armstrong-black-leather-biker-jacket", "products/armstrong-black-leather-biker-jacket.html"),
    "prod_alyson_black": ("/products/alyson-black-leather-blazer", "products/alyson-black-leather-blazer.html"),
    "prod_dolf_black": ("/products/dolf-black-leather-jacket", "products/dolf-black-leather-jacket.html"),
    "prod_professor_oxford": ("/products/professor-oxford-brown-leather-shoes", "products/professor-oxford-brown-leather-shoes.html"),
    "prod_classmith_black": ("/products/classmith-black-leather-coat", "products/classmith-black-leather-coat.html"),
    "prod_classmith_brown": ("/products/classmith-brown-leather-coat", "products/classmith-brown-leather-coat.html"),
    "prod_maurice_black": ("/products/maurice-black-leather-jacket", "products/maurice-black-leather-jacket.html"),
    "prod_youngster_black": ("/products/youngster-black-leather-jacket", "products/youngster-black-leather-jacket.html"),
    "prod_glen_street": ("/products/glen-street-black-leather-bomber-jacket", "products/glen-street-black-leather-bomber-jacket.html"),
    "prod_don_long": ("/products/don-long-black-leather-coat", "products/don-long-black-leather-coat.html"),

    # Policies
    "pol_terms": ("/policies/terms-of-service", "policies/terms-of-service.html"),
    "pol_privacy": ("/policies/privacy-policy", "policies/privacy-policy.html"),
    "pol_refund": ("/policies/refund-policy", "policies/refund-policy.html"),
    "pol_shipping": ("/policies/shipping-policy", "policies/shipping-policy.html")
}

BASE_URL = "https://www.thejacketmaker.pk"
OUTPUT_DIR = "audit/raw_tjm"

def fetch_url(item):
    key, (path, rel_dest) = item
    dest_path = os.path.join(OUTPUT_DIR, rel_dest)
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    
    full_url = BASE_URL + path
    cmd = [
        "curl.exe", "-s", "-L",
        "-A", USER_AGENT,
        full_url,
        "-o", dest_path
    ]
    try:
        subprocess.run(cmd, check=True)
        size = os.path.getsize(dest_path) if os.path.exists(dest_path) else 0
        print(f"[{key}] -> {dest_path} ({size} bytes)")
        return (key, size, True)
    except Exception as e:
        print(f"FAILED [{key}] -> {e}")
        return (key, 0, False)

def main():
    print(f"Total targets to scrape: {len(URLS)}")
    start = time.time()
    with ThreadPoolExecutor(max_workers=5) as executor:
        results = list(executor.map(fetch_url, URLS.items()))
    
    success = sum(1 for _, _, ok in results if ok)
    print(f"\nFinished in {time.time() - start:.2f}s! Successfully scraped {success}/{len(URLS)} pages.")

if __name__ == "__main__":
    main()
