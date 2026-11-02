with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

marker = 'Maintain neat, inspection-ready records that demonstrate confidence in management to local Environmental Health Officers.</p>\n              </div>\n            </div>\n          </div>'
marker_crlf = marker.replace('\n', '\r\n')

comparison_block = '''

          {/* Section: Saim Dev Free Kitchen Hub vs Paid Software & Paper Books */}
          <div className="space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md font-bold inline-block mb-1">
                Hospitality Cost Comparison
              </span>
              <h2 className="text-2xl font-bold text-[#1D1D1F]">
                Saim Dev Free Hub vs Paid Food Safety Software (£35–£90/mo) vs Paper Books
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">
                Independent UK takeaways and cafes spend hundreds of pounds annually on complex SaaS subscriptions or paper log books. Here is how our browser-based kitchen utility compares to paid market alternatives:
              </p>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-mono text-[10px] uppercase tracking-wider">
                    <th className="p-3 border-b border-gray-700" style={{ width: "30%" }}>Feature / Workflow</th>
                    <th className="p-3 border-b border-gray-700 bg-amber-600/30 text-amber-300 font-bold" style={{ width: "26%" }}>Saim Dev Free Hub</th>
                    <th className="p-3 border-b border-gray-700" style={{ width: "22%" }}>Paid SaaS (FoodDocs/Trail)</th>
                    <th className="p-3 border-b border-gray-700" style={{ width: "22%" }}>Paper Log Books</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/80">
                    <td className="p-3 font-semibold text-gray-900">Subscription &amp; Software Cost</td>
                    <td className="p-3 font-bold text-emerald-700 bg-emerald-50/50">£0 Free Forever</td>
                    <td className="p-3 text-red-600">£420 to £1,080 / year</td>
                    <td className="p-3 text-gray-600">£15 to £30 per book</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80">
                    <td className="p-3 font-semibold text-gray-900">Account / Sign-Up Requirement</td>
                    <td className="p-3 font-bold text-emerald-700 bg-emerald-50/50">Zero (Instant browser use)</td>
                    <td className="p-3 text-gray-600">Mandatory login &amp; email gate</td>
                    <td className="p-3 text-gray-600">None (Paper)</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80">
                    <td className="p-3 font-semibold text-gray-900">UK 20% VAT Stripping Mode</td>
                    <td className="p-3 font-bold text-emerald-700 bg-emerald-50/50">Included (One-click)</td>
                    <td className="p-3 text-gray-400">Generic / US focus</td>
                    <td className="p-3 text-gray-400">Manual calculation</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80">
                    <td className="p-3 font-semibold text-gray-900">Delivery App Commission Buffer</td>
                    <td className="p-3 font-bold text-emerald-700 bg-emerald-50/50">Included (Deliveroo, Just Eat)</td>
                    <td className="p-3 text-gray-400">Not supported</td>
                    <td className="p-3 text-gray-400">Not supported</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80">
                    <td className="p-3 font-semibold text-gray-900">14 Allergen Auto-Detector</td>
                    <td className="p-3 font-bold text-emerald-700 bg-emerald-50/50">Automated keyword scan</td>
                    <td className="p-3 text-gray-600">Manual data entry</td>
                    <td className="p-3 text-gray-400">Manual pen entry</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80">
                    <td className="p-3 font-semibold text-gray-900">Natasha&apos;s Law PPDS Labels</td>
                    <td className="p-3 font-bold text-emerald-700 bg-emerald-50/50">Auto-scaled 1.2mm x-height</td>
                    <td className="p-3 text-gray-600">Paid add-on module</td>
                    <td className="p-3 text-gray-400">Not supported</td>
                  </tr>
                  <tr className="hover:bg-gray-50/80">
                    <td className="p-3 font-semibold text-gray-900">A4 Kitchen Print / Export</td>
                    <td className="p-3 font-bold text-emerald-700 bg-emerald-50/50">1-Click High-Res PDF/Print</td>
                    <td className="p-3 text-gray-600">Requires dedicated tablet app</td>
                    <td className="p-3 text-gray-600">Physical pages only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>'''

if marker in text:
    new_text = text.replace(marker, marker + comparison_block, 1)
    with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Successfully inserted comparison table (LF)")
elif marker_crlf in text:
    new_text = text.replace(marker_crlf, marker_crlf + comparison_block.replace('\n', '\r\n'), 1)
    with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Successfully inserted comparison table (CRLF)")
else:
    print("Marker not found in text!")
