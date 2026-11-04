import re

with open('audit/master_product_template.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect where ionic-black-leather-jacket occurs
handles = re.findall(r'ionic-black-leather-jacket', text)
print(f"Handle occurrences: {len(handles)}")

# Check title tag
print("Title tag:", re.findall(r'<title>.*?</title>', text))

# Check H1
print("H1 tag:", re.findall(r'<h1[^>]*>.*?</h1>', text))

# Check price amount
print("Price amounts:", re.findall(r'class="product-price__amount"[^>]*>.*?</span>', text, re.DOTALL)[:3])
