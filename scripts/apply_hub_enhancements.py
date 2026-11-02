import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add isOffAudience import
old_import = 'import { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";'
new_import = 'import { FoodSafetyDisclaimer } from "./FoodSafetyDisclaimer";\nimport { isOffAudience } from "@/lib/off-audience";'

if old_import in text:
    text = text.replace(old_import, new_import)
    print("1. Added isOffAudience import.")
else:
    print("1. Could not match old_import")

# 2. Update H1 and Intro Copy
old_h1_block = """            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1]">
              UK Restaurant &amp; Takeaway Kitchen Tools: Daily Checklists, Logs &amp; Allergen Matrices
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
              Practical due diligence systems built specifically for independent UK takeaways, restaurants, pubs, and catering operations. Aligned with Food Standards Agency (FSA) and Safer Food, Better Business (SFBB) standards.
            </p>"""

new_h1_block = """            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.1]">
              Free Food Safety Templates UK: Kitchen Checklists, Logs &amp; Allergen Matrices
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mt-1">
              Practical food hygiene management and due diligence systems built specifically for independent UK takeaways, restaurants, pubs, and commercial caterers. Under the Food Safety Act 1990 and Regulation (EC) No 852/2004, UK food businesses must maintain documented food safety procedures based on HACCP principles. These free templates and interactive tools align with Food Standards Agency (FSA) <em>Safer Food, Better Business (SFBB)</em> and Food Standards Scotland <em>CookSafe</em> guidance to support your 5-star Food Hygiene Rating.
            </p>"""

if old_h1_block in text:
    text = text.replace(old_h1_block, new_h1_block)
    print("2. Updated H1 and intro copy.")
else:
    print("2. Could not match old_h1_block")

# 3. Add coreTemplates and offAudienceTemplates splitting
old_filter_end = """      return true;
    });
  }, [selectedType, selectedActivity, selectedPurpose, searchTerm]);"""

new_filter_end = """      return true;
    });
  }, [selectedType, selectedActivity, selectedPurpose, searchTerm]);

  const { coreTemplates, offAudienceTemplates } = useMemo(() => {
    const core: FoodSafetyTemplate[] = [];
    const off: FoodSafetyTemplate[] = [];
    filteredTemplates.forEach(item => {
      if (isOffAudience(item.slug)) {
        off.push(item);
      } else {
        core.push(item);
      }
    });
    return { coreTemplates: core, offAudienceTemplates: off };
  }, [filteredTemplates]);"""

if old_filter_end in text:
    text = text.replace(old_filter_end, new_filter_end)
    print("3. Added coreTemplates / offAudienceTemplates partitioning.")
else:
    print("3. Could not match old_filter_end")

# 4. Update template counter & grid rendering to use coreTemplates
old_count = """              <span>Showing <strong>{filteredTemplates.length}</strong> food safety templates</span>"""
new_count = """              <span>Showing <strong>{coreTemplates.length}</strong> food safety templates</span>"""

if old_count in text:
    text = text.replace(old_count, new_count)
    print("4. Updated counter to coreTemplates.length.")
else:
    print("4. Could not match old_count")

old_grid_map = """            {/* 4-COLUMN RESPONSIVE GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredTemplates.map((template, idx) => ("""

new_grid_map = """            {/* 4-COLUMN RESPONSIVE GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {coreTemplates.map((template, idx) => ("""

if old_grid_map in text:
    text = text.replace(old_grid_map, new_grid_map)
    print("5. Updated grid map to coreTemplates.")
else:
    print("5. Could not match old_grid_map")

# 5. Add collapsible drawer right before </main>
old_no_results = """            {filteredTemplates.length === 0 && (
              <div className="p-12 text-center rounded-3xl bg-white border border-gray-200">
                <Search className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-bold text-gray-800 text-base">No templates match your filters</h4>
                <p className="text-xs text-gray-500 mt-1">Try selecting different filter options or clearing the search box.</p>
                <button
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedActivity("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>"""

new_no_results_and_drawer = """            {coreTemplates.length === 0 && (
              <div className="p-12 text-center rounded-3xl bg-white border border-gray-200">
                <Search className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <h4 className="font-bold text-gray-800 text-base">No templates match your filters</h4>
                <p className="text-xs text-gray-500 mt-1">Try selecting different filter options or clearing the search box.</p>
                <button
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedActivity("all");
                    setSearchTerm("");
                  }}
                  className="mt-4 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Collapsible Drawer for Specialist & International Standards */}
            {offAudienceTemplates.length > 0 && (
              <details className="mt-10 rounded-2xl border border-gray-200 bg-gray-50/80 p-5 group no-print">
                <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-bold text-gray-700 select-none">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span>More resources ({offAudienceTemplates.length} Specialist &amp; International Standards)</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-xs text-gray-500 mt-2 mb-4 leading-relaxed">
                  Specialist industrial manufacturing checklists, US FDA reference charts, and export compliance templates for non-catering operations.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 pt-1">
                  {offAudienceTemplates.map((template) => (
                    <Link
                      key={template.id}
                      href={`/food-safety-templates/${template.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-gray-200 hover:border-gray-400 flex flex-col justify-between shadow-2xs group/card"
                    >
                      <span className="text-xs font-semibold text-gray-900 group-hover/card:text-amber-800 line-clamp-2">
                        {template.title}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono mt-1.5 uppercase">
                        {template.type}
                      </span>
                    </Link>
                  ))}
                </div>
              </details>
            )}
          </main>"""

if old_no_results in text:
    text = text.replace(old_no_results, new_no_results_and_drawer)
    print("6. Added collapsible drawer for off-audience templates.")
else:
    print("6. Could not match old_no_results")

# 7. Add takeaway website with allergen filter link in conversion footer
old_hub_cta = """              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20website%20with%20allergen%20filtering"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("hub_footer")}
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow"
              >
                <span>Discuss with Lead Architect on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>"""

new_hub_cta = """              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20website%20with%20allergen%20filtering"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("hub_footer")}
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow"
              >
                <span>Discuss with Lead Architect on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services/takeaway-web-design"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-full flex items-center gap-1.5 transition-all border border-white/15"
              >
                <span>takeaway website with allergen filter</span>
              </Link>"""

if old_hub_cta in text:
    text = text.replace(old_hub_cta, new_hub_cta)
    print("7. Added takeaway website with allergen filter link to hub footer.")
else:
    print("7. Could not match old_hub_cta")

with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated src/components/FoodSafetyTemplatesPage.tsx successfully.")
