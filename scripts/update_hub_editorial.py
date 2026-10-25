with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = '''          {/* Section: Food safety posters */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Food safety posters: visual reminders for best practices
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Visual aids like our Kitchen Safety Poster and Hand Washing Poster are crucial in reinforcing proper food handling practices. 
              Placed strategically in food preparation and dining areas, these posters serve as constant reminders of personal hygiene, 
              proper handwashing techniques, and essential safety rules.
            </p>
          </div>

          {/* Section: Customizable templates */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Customizable food safety templates: streamline your safety processes
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our customizable templates are essential tools for comprehensive food safety management, allowing you to manage food safety hazards 
              and maintain compliance effortlessly. Whether you are running a restaurant, food manufacturing facility, or catering company, 
              these templates adapt to your unique operational workflow.
            </p>
          </div>

          {/* Section: Comprehensive checklists */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Food safety checklists for daily kitchen routines
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Checklists are essential tools for maintaining consistency and compliance in daily operations. Use the Restaurant Cleaning Checklist 
              and Kitchen Opening and Closing Checklist to maintain a spotless environment every shift. The Health Inspection Checklist ensures 
              your team is prepared for inspections.
            </p>
          </div>

          {/* Section: 5 Benefits */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              5 Benefits of using these food safety resources in your food business
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">1. Organised documentation</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Keep kitchen records structured and accessible for staff and supervisors.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">2. Improved efficiency and consistency</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Standardize food preparation and hygiene routines across all staff shifts.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">3. Increased staff accountability</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Sign-off sheets ensure tasks are completed and verified daily.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">4. Consistent team routines</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Provide clear visual guidance and daily logs for kitchen staff.</p>
              </div>
            </div>
          </div>'''

replacement = '''          {/* Section: Kitchen Wall SOPs */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              UK Kitchen Wall SOPs: Visual Standards for Food Handlers &amp; Prep Lines
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Laminated kitchen posters—such as the UK Colour-Coded Chopping Board Guide, Hand Hygiene SOP, and 90-Minute Rapid Food Cooling Protocol—serve as immediate visual reminders for commis chefs and kitchen porters. Positioned directly at hand-wash basins, raw meat prep stations, and pass lines, these visual standards reinforce cross-contamination barriers and support Food Standards Agency (FSA) hygiene practices during rush services.
            </p>
          </div>

          {/* Section: Printable Takeaway Records */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Printable Takeaway Due Diligence Sheets: Practical Daily Records
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              These operational record sheets are engineered specifically for independent British takeaways, pubs, cafes, and dark kitchens. Instead of cumbersome generic paperwork, our digital and printable sheets allow supervisors to log dual-shift fridge temperatures, hot-holding readings, and Natasha\'s Law allergen matrices with zero unnecessary clutter. Every template can be filled in your browser and printed directly for your kitchen compliance folder.
            </p>
          </div>

          {/* Section: Opening & Closing Checklists */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              Opening, Closing &amp; Sanitisation Checklists for Busy Shifts
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Daily operational checklists provide kitchen teams with an unambiguous routine before morning prep starts and after the night cleanup finishes. Following the structure of the FSA Safer Food, Better Business (SFBB) diary pack, completing our daily opening, closing, and deep-cleaning logs provides contemporaneous proof of due diligence for unannounced local council Environmental Health Officer (EHO) visits.
            </p>
          </div>

          {/* Section: 4 Key Advantages */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1D1D1F]">
              4 Key Operational Advantages for UK Food Businesses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">1. Structured Due Diligence Records</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Organize essential temperature logs and cleaning sheets to support statutory defense under Section 21 of the Food Safety Act 1990.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">2. Consistent Shift Standards</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Standardize food preparation and hygiene routines across daytime prep crews and evening service brigades.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">3. Transparent Staff Sign-Offs</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Named supervisor signatures ensure that morning checks and shutdown tasks are actually verified every day.</p>
              </div>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">4. Stress-Free Council Inspections</h4>
                <p className="text-xs text-gray-600 leading-relaxed">Maintain neat, inspection-ready records that demonstrate confidence in management to local Environmental Health Officers.</p>
              </div>
            </div>
          </div>'''

target_crlf = target.replace('\n', '\r\n')
target_lf = target.replace('\r\n', '\n')

if target_crlf in c:
    c = c.replace(target_crlf, replacement.replace('\n', '\r\n'))
    print("Replaced CRLF in FoodSafetyTemplatesPage.tsx")
elif target_lf in c:
    c = c.replace(target_lf, replacement.replace('\r\n', '\n'))
    print("Replaced LF in FoodSafetyTemplatesPage.tsx")
else:
    import re
    c = re.sub(r'\{\/\* Section: Food safety posters \*\/\}[\s\S]*?\{\/\* ═══════════════════════════════════════════════════════════════\s+HIGH-TICKET AGENCY CONVERSION OFFER', replacement + '\n\n          {/* ═══════════════════════════════════════════════════════════════\n              HIGH-TICKET AGENCY CONVERSION OFFER', c)
    print("Replaced regex in FoodSafetyTemplatesPage.tsx")

with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c)
