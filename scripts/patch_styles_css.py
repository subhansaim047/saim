with open('public/thejacketmaker/css/styles.css', 'r', encoding='utf-8', errors='ignore') as f:
    css = f.read()

patch = '''
/* Fix Clearance Sale Hero background & video container */
.ai-media-placeholder-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh,
.ai-media-content-akznqrwvkzhirl2yzvaigenblocked980c2h3mqjh {
  background-image: url('/thejacketmaker/images/clearance-sale-poster.jpg') !important;
  background-size: cover !important;
  background-position: center !important;
}

/* Fix Rebuy Cart flyout sticking out under footer */
#rebuy-cart,
.rebuy-cart,
[data-rebuy-component="cart"],
.rebuy-cart__flyout {
  display: none !important;
}

#rebuy-cart.is-visible,
.rebuy-cart.is-visible {
  display: block !important;
}

/* Ensure footer has clean boundary with zero leaks */
.shopify-section-footer,
#shopify-section-footer {
  position: relative !important;
  z-index: 10 !important;
  overflow: hidden !important;
}
'''

if '/* Fix Rebuy Cart flyout' not in css:
    css += '\n' + patch
    with open('public/thejacketmaker/css/styles.css', 'w', encoding='utf-8') as f:
        f.write(css)
    print("styles.css patched successfully")
else:
    print("styles.css already patched")
