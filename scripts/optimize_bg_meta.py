import os

old_desc = "Live takeaway web design demo of Burger Garage built by Saim Dev. High-performance online ordering, interactive menu, and zero aggregator commissions for UK takeaways."
new_desc = "Live takeaway web design demo of Burger Garage by Saim Dev. High-speed online ordering, interactive menu, and 0% commission for UK takeaways."

bg_dir = 'public/burger-garage'
for f in os.listdir(bg_dir):
    if f.endswith('.html'):
        p = os.path.join(bg_dir, f)
        with open(p, 'r', encoding='utf-8') as fp:
            content = fp.read()
        if old_desc in content:
            content = content.replace(old_desc, new_desc)
            with open(p, 'w', encoding='utf-8') as fp:
                fp.write(content)
            print(f"Optimized meta description in {p}")
