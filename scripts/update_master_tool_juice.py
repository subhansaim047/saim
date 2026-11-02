import re

file_path = 'src/components/tools/MasterFoodTemperatureChartTool.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add Juice / HTST preset
old_preset = '{ label: "Hot Holding", temp: 63, icon: Flame },'
new_preset = '{ label: "Hot Holding", temp: 63, icon: Flame },\n    { label: "Juice / HTST", temp: 71, icon: Flame },'

if '{ label: "Juice / HTST"' not in content:
    content = content.replace(old_preset, new_preset)
    print("Added Juice / HTST preset")

# 2. Add Juice pasteurisation matrix section
juice_section = '''
          {/* Commercial Juice & Liquid Pasteurisation Reference Matrix */}
          <div className="p-4 sm:p-5 rounded-xl border border-sky-200 bg-sky-50/70 space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-sky-200 pb-2">
              <span className="font-extrabold text-sky-950 uppercase tracking-wide flex items-center gap-1.5 text-sm">
                <Flame className="w-4 h-4 text-sky-600" />
                Commercial Juice & Liquid Pasteurisation Standards (5-Log Pathogen Lethality)
              </span>
              <span className="text-[11px] font-bold text-sky-800 bg-white px-2 py-0.5 rounded border border-sky-300">
                FDA 21 CFR 120 / UK FSA Compliant
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              Continuous-flow (HTST) and batch thermal destruction parameters required to achieve a verified 5-log (100,000-fold) reduction of <em>E. coli</em> O157:H7, <em>Salmonella enterica</em>, and <em>Cryptosporidium parvum</em> in commercial juice processing.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs bg-white rounded-lg border border-sky-200 overflow-hidden">
                <thead className="bg-sky-100/70 text-sky-900 font-bold border-b border-sky-200">
                  <tr>
                    <th className="py-2 px-3">Juice Classification</th>
                    <th className="py-2 px-3">Typical pH</th>
                    <th className="py-2 px-3">HTST Continuous Flow</th>
                    <th className="py-2 px-3">Batch / Vat Dwell</th>
                    <th className="py-2 px-3">Hot-Fill & Invert</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100 text-slate-700">
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Apple Cider & Orchard Juices</td>
                    <td className="py-2 px-3">pH 3.3 - 3.8</td>
                    <td className="py-2 px-3 font-medium text-emerald-800">71.1°C (160°F) for 6.0 sec</td>
                    <td className="py-2 px-3">63°C for 30.0 min</td>
                    <td className="py-2 px-3">85°C for 15 sec</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Citrus Juices (Orange, Grapefruit)</td>
                    <td className="py-2 px-3">pH 3.2 - 3.8</td>
                    <td className="py-2 px-3 font-medium text-emerald-800">73.9°C (165°F) for 2.8 sec</td>
                    <td className="py-2 px-3">65°C for 30.0 min</td>
                    <td className="py-2 px-3">88°C for 20 sec</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">Tomato & Blended Vegetable Juices</td>
                    <td className="py-2 px-3">pH 4.1 - 4.5</td>
                    <td className="py-2 px-3 font-medium text-emerald-800">76.7°C (170°F) for 1.3 sec</td>
                    <td className="py-2 px-3">68°C for 30.0 min</td>
                    <td className="py-2 px-3">90°C for 30 sec</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-semibold text-slate-900">High-pH / Melon Blends (Low-Acid)</td>
                    <td className="py-2 px-3">&gt; pH 4.5</td>
                    <td className="py-2 px-3 font-medium text-emerald-800">82.2°C (180°F) for 0.3 sec</td>
                    <td className="py-2 px-3">Acidification required</td>
                    <td className="py-2 px-3">93°C for 45 sec</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
'''

target_div = '{/* Calibration Test Note for EHO Audit Trail */}'
if 'Commercial Juice & Liquid Pasteurisation Standards' not in content:
    content = content.replace(target_div, juice_section + '\n          ' + target_div)
    print("Added Juice Pasteurisation matrix section")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved MasterFoodTemperatureChartTool.tsx successfully")
