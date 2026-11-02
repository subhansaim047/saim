import os

# 1. Update app/layout.tsx
layout_path = 'app/layout.tsx'
with open(layout_path, 'r', encoding='utf-8') as f:
    layout_content = f.read()

clarity_snippet = """        {/* Microsoft Clarity Analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "z7342zyo0u");`,
          }}
        />"""

target = "gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied'});`,"

if "clarity.ms/tag" in layout_content:
    print("Clarity already in app/layout.tsx")
elif target in layout_content:
    # insert after the google consent script
    idx = layout_content.find(target)
    close_idx = layout_content.find("/>", idx) + 2
    layout_content = layout_content[:close_idx] + "\n" + clarity_snippet + layout_content[close_idx:]
    with open(layout_path, 'w', encoding='utf-8') as f:
        f.write(layout_content)
    print("Successfully added Clarity to app/layout.tsx")
else:
    print("Target not found in app/layout.tsx")

# 2. Update src/components/CookieBanner.tsx
cookie_path = 'src/components/CookieBanner.tsx'
with open(cookie_path, 'r', encoding='utf-8') as f:
    cookie_content = f.read()

if "clarity" not in cookie_content:
    # update updateGoogleConsent or handleConsent to grant clarity consent on accept
    target_update = 'if (type === "accepted") {\n      updateGoogleConsent("granted");'
    replacement_update = '''if (type === "accepted") {
      updateGoogleConsent("granted");
      if (typeof window !== "undefined" && typeof (window as any).clarity === "function") {
        (window as any).clarity("consent");
      }'''
    
    c_norm = cookie_content.replace('\r\n', '\n')
    if target_update in c_norm:
        c_norm = c_norm.replace(target_update, replacement_update)
        with open(cookie_path, 'w', encoding='utf-8') as f:
            f.write(c_norm)
        print("Updated CookieBanner with Clarity consent handler")
    else:
        print("CookieBanner target not found")

# 3. Update review/tracking-inventory.md
inventory_path = 'review/tracking-inventory.md'
if os.path.exists(inventory_path):
    with open(inventory_path, 'r', encoding='utf-8') as f:
        inv_content = f.read()
    if "Microsoft Clarity" not in inv_content:
        inv_target = "3. **Instagram:** Meta Platforms Inc. (external link in site footer: `@saim_agency`)."
        inv_replacement = """3. **Instagram:** Meta Platforms Inc. (external link in site footer: `@saim_agency`).
4. **Behavioral Analytics & Session Replay:** Microsoft Corporation (Microsoft Clarity tag `z7342zyo0u` used for anonymous UX heatmaps and session recordings with sensitive field masking)."""
        inv_norm = inv_content.replace('\r\n', '\n')
        if inv_target in inv_norm:
            inv_norm = inv_norm.replace(inv_target, inv_replacement)
            with open(inventory_path, 'w', encoding='utf-8') as f:
                f.write(inv_norm)
            print("Updated review/tracking-inventory.md")

# 4. Update src/components/PrivacyPolicy.tsx
privacy_path = 'src/components/PrivacyPolicy.tsx'
if os.path.exists(privacy_path):
    with open(privacy_path, 'r', encoding='utf-8') as f:
        priv_content = f.read()
    if "Microsoft Clarity" not in priv_content:
        priv_target = "<li><strong>Direct Communications:</strong> Meta Platforms Ireland Ltd / WhatsApp LLC (when you message our WhatsApp channel).</li>"
        priv_replacement = """<li><strong>Direct Communications:</strong> Meta Platforms Ireland Ltd / WhatsApp LLC (when you message our WhatsApp channel).</li>
              <li><strong>Behavioral Analytics:</strong> Microsoft Corporation (Microsoft Clarity, providing aggregate anonymous heatmaps and session recordings with sensitive field masking).</li>"""
        priv_norm = priv_content.replace('\r\n', '\n')
        if priv_target in priv_norm:
            priv_norm = priv_norm.replace(priv_target, priv_replacement)
            with open(privacy_path, 'w', encoding='utf-8') as f:
                f.write(priv_norm)
            print("Updated src/components/PrivacyPolicy.tsx")
