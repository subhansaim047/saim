import { motion } from "framer-motion";
import { Plus, ChevronDown, Sparkles, Image as ImageIcon, FileText, MoreHorizontal } from "lucide-react";

export const BackendSection = () => {
  return (
    <section className="bg-black text-[#E1E0CC] px-6 sm:px-12 md:px-20 lg:px-28 py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* LEFT: Heading (Same font as My Process) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight"
            style={{ maxWidth: "12ch" }}
          >
            Efficient backend development
          </h2>
        </motion.div>

        {/* RIGHT: Description + Crisp 4K CMS UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 w-full"
        >
          <p style={{ color: "rgba(225,224,204,0.65)", fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", lineHeight: 1.75 }}>
            Whether it&apos;s multilingual support, fast page building, easy asset management
            or interface integration — we take care of the heart of your website: The Backend.
          </p>

          {/* 4K Vector CMS Component (Zero blur, infinite crispness) */}
          <div className="relative w-full bg-[#050505] rounded-2xl p-4 sm:p-6 border border-white/5 shadow-2xl flex flex-col gap-3">
            
            {/* Top Dashed Area with Add Content Button */}
            <div className="relative w-full border border-dashed border-white/15 rounded-xl p-3 flex justify-center bg-[#0a0a0a]">
              <button className="flex items-center gap-1.5 bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 text-white/80 text-xs px-3 py-1.5 rounded-lg transition-colors">
                <Plus className="w-3.5 h-3.5" />
                <span>Add content</span>
                <ChevronDown className="w-3 h-3 text-white/40" />
              </button>

              {/* Floating Dropdown Menu (Exact recreation) */}
              <div
                className="absolute z-20 bg-[#121214] border border-white/15 rounded-xl p-3 shadow-2xl flex flex-col gap-1.5"
                style={{
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  width: "190px",
                }}
              >
                <span className="text-[11px] text-white/40 font-medium px-1.5">Add existing content</span>
                <span className="text-[10px] text-white/25 font-mono uppercase px-1.5 pt-1">New content</span>
                
                <div className="flex flex-col gap-1 mt-0.5">
                  {[
                    { label: "Slideshow", icon: Sparkles },
                    { label: "Products", icon: Sparkles },
                    { label: "Teaser", icon: Sparkles },
                    { label: "Call to action", icon: Sparkles },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-white/80 hover:text-white text-xs transition-colors cursor-pointer"
                      >
                        <Icon className="w-3 h-3 text-white/40" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* List Item 1: Text */}
            <div className="bg-[#0c0c0e] border border-white/10 rounded-xl p-3 sm:p-4 flex flex-col gap-1.5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-0.5 opacity-30">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-white/50" />
                  <span className="text-xs text-white/70 font-medium">Text</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#3b185f] text-[#c084fc]">
                    PUBLISHED
                  </span>
                  <MoreHorizontal className="w-4 h-4 text-white/30" />
                </div>
              </div>
              <div className="pl-5 pt-1">
                <h4 className="text-xs sm:text-sm font-semibold text-white">What we do</h4>
                <p className="text-[11px] sm:text-xs text-white/40 mt-0.5">Our interdisciplinary expertise...</p>
              </div>
            </div>

            {/* List Item 2: Media */}
            <div className="bg-[#0c0c0e] border border-white/10 rounded-xl p-3 sm:p-4 flex flex-col gap-1.5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-0.5 opacity-30">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                  </div>
                  <ImageIcon className="w-3.5 h-3.5 text-white/50" />
                  <span className="text-xs text-white/70 font-medium">Media</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#3b185f] text-[#c084fc]">
                    PUBLISHED
                  </span>
                  <MoreHorizontal className="w-4 h-4 text-white/30" />
                </div>
              </div>
              <div className="pl-5 pt-1 flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-semibold text-white">Functn: Viki Coding</h4>
                <div className="w-10 h-8 rounded bg-white/10 border border-white/10 overflow-hidden flex items-center justify-center">
                  <span className="text-[9px] text-white/40 font-mono">DEV</span>
                </div>
              </div>
            </div>

            {/* List Item 3: Teaser */}
            <div className="bg-[#0c0c0e] border border-white/10 rounded-xl p-3 sm:p-4 flex flex-col gap-1.5 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-0.5 opacity-30">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-white/50" />
                  <span className="text-xs text-white/70 font-medium">Teaser</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#3b185f] text-[#c084fc]">
                    PUBLISHED
                  </span>
                  <MoreHorizontal className="w-4 h-4 text-white/30" />
                </div>
              </div>
              <div className="pl-5 pt-1">
                <h4 className="text-xs sm:text-sm font-semibold text-white">How we work</h4>
                <p className="text-[11px] sm:text-xs text-white/40 mt-0.5">Our employees are as diverse...</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
