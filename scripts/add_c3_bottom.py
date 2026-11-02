with open('src/components/BlogPost3Page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = '        </motion.div>\n      </div>\n    </div>\n  );\n};'
replacement = """        </motion.div>

        {/* ── Back ── */}
        <div className="text-center mt-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
};"""

if target in text:
    text = text.replace(target, replacement)
    with open('src/components/BlogPost3Page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated BlogPost3Page bottom back link successfully.")
else:
    print("Target not found in BlogPost3Page")
