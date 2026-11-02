file_path = 'src/components/TemplateDetailPage.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

sources_box = '''        {/* Verified Statutory Sources & Last Reviewed Date (E-E-A-T) */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-700 space-y-3 no-print">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-extrabold text-slate-900 uppercase tracking-wide">
                Verified Statutory Standards &amp; Source Register
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
              Last reviewed: 02 November 2026
            </span>
          </div>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            All temperatures, microbial lethality pairs, and critical limits on this page have been verified against primary statutory documents issued by the UK Food Standards Agency (FSA), Food Standards Scotland (FSS), Regulation (EC) No 852/2004, and US FDA/USDA guidelines.
          </p>
          <div className="flex flex-wrap gap-2 text-[11px] pt-1">
            <a
              href="https://www.food.gov.uk/business-guidance/cooking-your-food"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition"
            >
              <ExternalLink className="w-3 h-3 text-slate-400" />
              FSA Safe Methods (UK)
            </a>
            <a
              href="https://www.legislation.gov.uk/ssi/2006/3/schedule/4/made"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition"
            >
              <ExternalLink className="w-3 h-3 text-slate-400" />
              FSS Schedule 4 (82°C Rule)
            </a>
            <a
              href="https://www.legislation.gov.uk/uksi/2019/706/made"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition"
            >
              <ExternalLink className="w-3 h-3 text-slate-400" />
              Natasha's Law (PPDS)
            </a>
            <a
              href="https://www.fda.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition"
            >
              <ExternalLink className="w-3 h-3 text-slate-400" />
              FDA / USDA FSIS Guidelines
            </a>
          </div>
        </div>

'''

target = '        {/* Shared Regulatory Disclaimer on all resource pages */}'
if 'Verified Statutory Standards &amp; Source Register' not in content:
    content = content.replace(target, sources_box + target)
    print("Added Sources Box to TemplateDetailPage.tsx")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved TemplateDetailPage.tsx successfully!")
