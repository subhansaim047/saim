import os

def insert_figures():
    # 1. BlogPostNatashasLaw.tsx
    path1 = "src/components/blog/BlogPostNatashasLaw.tsx"
    with open(path1, "r", encoding="utf-8") as f:
        c1 = f.read()
    
    target1 = '*Official guidance allows flexibility in physical label layout (such as printed adhesive labels or wrappers), provided required elements remain prominent and legible.\n            </p>\n          </section>'
    fig1 = '''*Official guidance allows flexibility in physical label layout (such as printed adhesive labels or wrappers), provided required elements remain prominent and legible.
            </p>

            <figure className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#141414] p-4 text-center">
              <img
                src="/templates/posters/template-121.webp"
                alt="UK PPDS Food Allergen Chart and Packaging Reference Guide"
                width={800}
                height={1131}
                loading="lazy"
                decoding="async"
                className="mx-auto rounded-xl max-h-[460px] w-auto object-contain shadow-lg"
              />
              <figcaption className="mt-3 text-xs text-white/50">
                Figure 1: Statutory allergen identification and PPDS packaging label reference layout for UK caterers.
              </figcaption>
            </figure>
          </section>'''
    
    if target1 in c1:
        c1 = c1.replace(target1, fig1)
        with open(path1, "w", encoding="utf-8", newline="") as f:
            f.write(c1)
        print(f"INSERTED FIGURE: {path1}")
    else:
        print(f"TARGET NOT FOUND: {path1}")

    # 2. BlogPostCoolingGuide.tsx
    path2 = "src/components/blog/BlogPostCoolingGuide.tsx"
    with open(path2, "r", encoding="utf-8") as f:
        c2 = f.read()
    
    target2 = 'Re-evaluate cooling in your <Link href="/food-safety-templates/haccp-plan-builder" className="text-primary hover:underline font-medium">HACCP plan builder</Link> whenever recipes or equipment change.</li>\n            </ol>\n          </section>'
    fig2 = '''Re-evaluate cooling in your <Link href="/food-safety-templates/haccp-plan-builder" className="text-primary hover:underline font-medium">HACCP plan builder</Link> whenever recipes or equipment change.</li>
            </ol>

            <figure className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#141414] p-4 text-center">
              <img
                src="/templates/charts/template-128.webp"
                alt="Commercial Kitchen Food Cooling Time and Temperature Curve Chart"
                width={800}
                height={1131}
                loading="lazy"
                decoding="async"
                className="mx-auto rounded-xl max-h-[460px] w-auto object-contain shadow-lg"
              />
              <figcaption className="mt-3 text-xs text-white/50">
                Figure 1: Safe food cooling temperature progression curve (from 63°C down to 8°C or below within 90 minutes).
              </figcaption>
            </figure>
          </section>'''
    
    if target2 in c2:
        c2 = c2.replace(target2, fig2)
        with open(path2, "w", encoding="utf-8", newline="") as f:
            f.write(c2)
        print(f"INSERTED FIGURE: {path2}")
    else:
        print(f"TARGET NOT FOUND: {path2}")

    # 3. BlogPostAllergenMatrix.tsx
    path3 = "src/components/blog/BlogPostAllergenMatrix.tsx"
    with open(path3, "r", encoding="utf-8") as f:
        c3 = f.read()
    
    target3 = '4. Step-by-Step Blueprint: Building Your Allergen Matrix\n          </h2>'
    fig3 = '''4. Step-by-Step Blueprint: Building Your Allergen Matrix
          </h2>

          <figure className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#141414] p-4 text-center">
            <img
              src="/templates/posters/template-146.webp"
              alt="14 Statutory Food Allergens Reference Chart for UK Food Businesses"
              width={800}
              height={1131}
              loading="lazy"
              decoding="async"
              className="mx-auto rounded-xl max-h-[460px] w-auto object-contain shadow-lg"
            />
            <figcaption className="mt-3 text-xs text-white/50">
              Figure 1: Statutory 14 allergens checklist layout for UK commercial kitchens and takeaways.
            </figcaption>
          </figure>'''
    
    if target3 in c3:
        c3 = c3.replace(target3, fig3)
        with open(path3, "w", encoding="utf-8", newline="") as f:
            f.write(c3)
        print(f"INSERTED FIGURE: {path3}")
    else:
        print(f"TARGET NOT FOUND: {path3}")

if __name__ == "__main__":
    insert_figures()
