with open('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    h1 = f.read()

print("Around 731000:")
print(h1[730500:731500])
print("="*60)
print("Around 794000:")
print(h1[793500:794800])
