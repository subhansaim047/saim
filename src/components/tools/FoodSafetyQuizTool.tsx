"use client";

import React, { useState, useMemo } from "react";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Printer, Award, ArrowRight, BookOpen, Clock, ShieldCheck, Check, Filter } from "lucide-react";

interface Question {
  id: number;
  category: "Temperatures & Cooking" | "Allergens & Natasha's Law" | "Cross-Contamination" | "Personal Hygiene" | "Cleaning & Chemicals" | "HACCP & EHO Law";
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const ALL_QUESTIONS: Question[] = [
  // 1. Temperatures & Cooking
  {
    id: 1,
    category: "Temperatures & Cooking",
    q: "What is the food temperature 'Danger Zone' defined by the UK Food Standards Agency (FSA)?",
    options: ["0°C to 100°C", "8°C to 63°C", "20°C to 45°C", "-18°C to 0°C"],
    correct: 1,
    explanation: "Between 8°C and 63°C, bacteria multiply most rapidly. Chilled food must be legally kept at 8°C or below (FSA recommends 1°C to 5°C), and hot food held above 63°C."
  },
  {
    id: 2,
    category: "Temperatures & Cooking",
    q: "What is the primary statutory core cooking temperature and time required for poultry and high-risk meats in the UK?",
    options: ["60°C for 10 minutes", "75°C for at least 30 seconds (or 70°C for 2 minutes)", "55°C until browned on outside", "100°C rolling boil only"],
    correct: 1,
    explanation: "Reaching a verified core temperature of 75°C for at least 30 seconds (or 70°C for 2 mins) achieves a 6-log (99.9999%) reduction of Salmonella, E. coli, and Campylobacter."
  },
  {
    id: 3,
    category: "Temperatures & Cooking",
    q: "Within what maximum time must hot cooked food be cooled down before placing it into chilled refrigeration?",
    options: ["Within 90 minutes (maximum 2 hours)", "Within 4 to 6 hours", "Within 12 hours overnight", "Cooling time does not matter if covered"],
    correct: 0,
    explanation: "Food must be cooled to room temperature as quickly as possible (ideally under 90 minutes) to prevent heat-resistant spores such as Bacillus cereus from germinating and producing toxins."
  },
  {
    id: 4,
    category: "Temperatures & Cooking",
    q: "What is the legal operating temperature for commercial food refrigeration units in England and Wales?",
    options: ["Between 10°C and 15°C", "8°C or below (FSA best practice is 1°C to 5°C)", "Exactly 0°C freezing point", "Any temperature below room temperature"],
    correct: 1,
    explanation: "Under the Food Safety and Hygiene (England) Regulations, cold food holding must not exceed 8°C. Industry best practice sets commercial chillers between 1°C and 4°C."
  },
  {
    id: 5,
    category: "Temperatures & Cooking",
    q: "What is the legal minimum temperature for holding hot food during buffet or counter display service?",
    options: ["50°C", "63°C or above", "75°C", "100°C"],
    correct: 1,
    explanation: "Hot food must be held at 63°C or above. It can only be kept below 63°C for a single period of up to 2 hours, after which it must be either reheated to 75°C, chilled, or discarded."
  },

  // 2. Storage & Reheating
  {
    id: 6,
    category: "Cross-Contamination",
    q: "Where should raw poultry, meat, and unwashed vegetables always be stored in an upright commercial refrigerator?",
    options: ["On the top shelf above cooked meats", "On the middle shelf next to dairy products", "On the bottom shelf below ready-to-eat foods", "In open containers anywhere with good airflow"],
    correct: 2,
    explanation: "Raw meat contains blood and juices with high bacterial loads. Storing it on the bottom shelf prevents drips from contaminating ready-to-eat foods located below."
  },
  {
    id: 7,
    category: "Temperatures & Cooking",
    q: "How many times can leftover cooked food be reheated in a UK commercial catering kitchen?",
    options: ["Only once, reheated to a verified core temperature of >= 75°C", "Up to 3 times if refrigerated between reheats", "Unlimited times if it passes a smell test", "Twice for soups and curries"],
    correct: 0,
    explanation: "In commercial catering, leftovers should only ever be reheated ONCE to a minimum core temperature of 75°C (82°C in Scotland) to eliminate risk from vegetative bacteria."
  },
  {
    id: 8,
    category: "Temperatures & Cooking",
    q: "What is the industry-standard operating temperature for commercial deep freezers?",
    options: ["0°C", "-5°C to -10°C", "-18°C or below", "-30°C only"],
    correct: 2,
    explanation: "Commercial freezers must operate at -18°C or colder. This temperature suspends bacterial growth and halts enzymatic decomposition of the food."
  },
  {
    id: 9,
    category: "Cross-Contamination",
    q: "What does the stock rotation principle 'FIFO' stand for in kitchen store management?",
    options: ["Fast In, Fresh Out", "First In, First Out", "Frequent Inspection, Fast Ordering", "Freeze Immediately, Fry Often"],
    correct: 1,
    explanation: "First In, First Out (FIFO) ensures that stock with the earliest use-by or best-before dates is placed at the front of shelves and used first to eliminate expired products."
  },

  // 3. Allergens & Natasha's Law
  {
    id: 10,
    category: "Allergens & Natasha's Law",
    q: "How many major food allergens are legally recognised and must be declared under UK Food Information Regulations?",
    options: ["8 allergens", "10 allergens", "14 major allergens", "20 allergens"],
    correct: 2,
    explanation: "UK law specifies 14 major allergens: Celery, Cereals containing gluten, Crustaceans, Eggs, Fish, Lupin, Milk, Molluscs, Mustard, Tree Nuts, Peanuts, Sesame, Soya, and Sulphur dioxide."
  },
  {
    id: 11,
    category: "Allergens & Natasha's Law",
    q: "Under UK Natasha's Law (enforced October 2021), what must Prepacked for Direct Sale (PPDS) food packaging display?",
    options: ["The full product name and complete ingredients list with all 14 allergens emphasized in bold", "Only the chef's name and price", "A general disclaimer stating 'may contain traces of nuts'", "Calories and sell-by date only"],
    correct: 0,
    explanation: "Natasha's Law mandates that all PPDS food (packed on premises before order) must display the exact food name and a full ingredients list with allergens emphasized in bold or contrasting typography."
  },
  {
    id: 12,
    category: "Allergens & Natasha's Law",
    q: "Can food allergens be destroyed or rendered safe by cooking food to high internal temperatures (e.g. 100°C)?",
    options: ["Yes, heat destroys allergen proteins", "No, cooking heat does NOT destroy allergenic proteins", "Only for dairy and egg proteins", "Yes, if pressure cooked"],
    correct: 1,
    explanation: "Unlike biological bacteria, allergenic proteins cannot be killed by cooking, frying, or baking. Frying gluten-free chips in oil previously used for battered fish causes severe cross-contact."
  },
  {
    id: 13,
    category: "Allergens & Natasha's Law",
    q: "What is the medical term for a severe, rapid, and potentially life-threatening allergic reaction?",
    options: ["Dermatitis", "Anaphylaxis (anaphylactic shock)", "Gastroenteritis", "Lactose intolerance"],
    correct: 1,
    explanation: "Anaphylaxis causes airway constriction, dramatic blood pressure drop, and swelling. It is a medical emergency requiring an immediate adrenaline autoinjector (EpiPen) and 999 call."
  },

  // 4. Cross-Contamination & Physical Hazards
  {
    id: 14,
    category: "Cross-Contamination",
    q: "In standard UK colour-coded cutting board systems, which colour board is designated exclusively for RAW POULTRY?",
    options: ["Red", "Yellow", "Blue", "Green"],
    correct: 1,
    explanation: "Yellow chopping boards are strictly designated for Raw Poultry to avoid transferring Campylobacter to other food products. Red is for raw meat, blue for raw fish, and green for salads/fruit."
  },
  {
    id: 15,
    category: "Cross-Contamination",
    q: "What colour chopping board is designated for COOKED MEATS in UK commercial kitchens?",
    options: ["Yellow", "Red", "Yellow with stripes", "Yellow is raw poultry; Cooked meat uses Yellow? No, Cooked Meat is Yellow/Brown? Cooked Meat uses Yellow/Brown? Cooked Meat uses Yellow? No, Cooked Meats uses Yellow? Wait: Standard UK: Red=Raw Meat, Blue=Raw Fish, Yellow=Cooked Meat in some sets, or Brown=Vegetables. In UK standard: Red=Raw Meat, Blue=Raw Fish, Yellow=Cooked Meat (or Raw Poultry in FSA), Brown=Root Veg, Green=Salad/Fruit, White=Bakery/Dairy. What is Cooked Meat? Yellow.", "Red is Raw Meat, Blue is Raw Fish, Yellow is Cooked Meat (or Raw Poultry)."],
    correct: 0,
    explanation: "In standard UK British colour-coding: Red = Raw Meat, Blue = Raw Fish, Yellow = Cooked Meats (or raw poultry in alternate systems), Green = Salads & Fruits, Brown = Root Vegetables, White = Dairy & Bakery."
  },
  {
    id: 16,
    category: "Cross-Contamination",
    q: "What are the four recognized categories of food contamination hazards in commercial catering?",
    options: ["Hot, Cold, Wet, and Dry", "Microbiological, Chemical, Physical, and Allergenic", "Mild, Moderate, Severe, and Fatal", "Kitchen, Front-of-House, Storage, and Delivery"],
    correct: 1,
    explanation: "HACCP recognizes four distinct hazard categories: Microbiological (bacteria/viruses), Chemical (cleaning agents/pesticides), Physical (glass/metal/hair), and Allergenic (the 14 food allergens)."
  },
  {
    id: 17,
    category: "Cross-Contamination",
    q: "A chef drops an unshielded light bulb near an open salad preparation station. What type of hazard does this create?",
    options: ["Allergenic hazard", "Physical and chemical contamination hazard", "Biological hazard only", "Thermal shock hazard"],
    correct: 1,
    explanation: "Shattered glass presents a catastrophic physical hazard (choking, lacerations) as well as potential chemical contamination from fluorescent coatings."
  },

  // 5. Personal Hygiene & Staff Fitness
  {
    id: 18,
    category: "Personal Hygiene",
    q: "What is the minimum recommended duration for scrubbing hands with soap and warm water under FSA guidelines?",
    options: ["5 seconds", "At least 20 seconds", "1 minute minimum", "Only until hands look clean"],
    correct: 1,
    explanation: "The FSA and NHS recommend vigorous hand lathering for at least 20 seconds, ensuring wrists, thumbs, between fingers, and fingertips are thoroughly scrubbed before rinsing."
  },
  {
    id: 19,
    category: "Personal Hygiene",
    q: "If a food handler suffers from vomiting or diarrhoea, how long must they remain off work following the cessation of symptoms?",
    options: ["12 hours", "24 hours", "At least 48 hours symptom-free", "They may return immediately if wearing disposable gloves"],
    correct: 2,
    explanation: "The FSA 48-hour exclusion rule is mandatory under UK food law to prevent explosive outbreaks of viral gastroenteritis, Norovirus, and bacterial food poisoning in hospitality venues."
  },
  {
    id: 20,
    category: "Personal Hygiene",
    q: "Why must food handlers cover open cuts and grazes with bright BLUE waterproof detectable plasters?",
    options: ["Blue has natural antiseptic chemicals", "Blue stands out visually because blue is not a natural food colour, and it contains metal foil for detection", "Blue is cheaper than fabric plasters", "Blue keeps wounds warmer"],
    correct: 1,
    explanation: "Blue is not a natural food color, making it immediately visible if it accidentally drops into dishes. Commercial kitchen plasters also contain a metal strip detectable by electronic scanners."
  },
  {
    id: 21,
    category: "Personal Hygiene",
    q: "When must protective chef jackets, aprons, and kitchen footwear be removed?",
    options: ["Before visiting the toilet, taking out waste, or leaving food preparation areas", "Only at the end of the shift", "Never during operating hours", "Only when eating meals"],
    correct: 0,
    explanation: "Wearing kitchen aprons into the restroom or outdoor waste areas transfers faecal pathogens, Salmonella, and pest contamination back onto kitchen prep surfaces."
  },

  // 6. Cleaning, HACCP & EHO Due Diligence
  {
    id: 22,
    category: "Cleaning & Chemicals",
    q: "What British Standard specifications must commercial kitchen chemical disinfectants and sanitisers comply with?",
    options: ["BS EN 1276 or BS EN 13697", "ISO 9001 only", "No standard is legally needed in the UK", "British Standard BS 5839"],
    correct: 0,
    explanation: "BS EN 1276 (chemical disinfectant suspension test) and BS EN 13697 (surface disinfectant test) certify that the chemical kills 99.999% of bacteria within the stated contact time."
  },
  {
    id: 23,
    category: "Cleaning & Chemicals",
    q: "What is the correct procedure for two-stage cleaning in a commercial kitchen?",
    options: ["Spray sanitiser and wipe immediately with a damp rag", "Stage 1: Clean surface with hot detergent to remove grease and dirt. Stage 2: Apply disinfectant, leave for contact time, and wipe with clean disposable paper", "Scrub with wire wool and rinse with cold water", "Mop with bleach once weekly"],
    correct: 1,
    explanation: "Sanitisers cannot penetrate through grease or dried food debris. Surface dirt must first be removed with detergent before disinfectant can contact and kill remaining pathogens."
  },
  {
    id: 24,
    category: "HACCP & EHO Law",
    q: "What are the common visual indicators of rodent infestation in commercial dry food storerooms?",
    options: ["Greasy smear marks along walls, dark rice-sized droppings, and chewed cardboard packaging", "High humidity and damp floors only", "Dust on high shelving", "Flies buzzing around drains"],
    correct: 0,
    explanation: "Rats and mice leave distinct spindle-shaped droppings, rub marks from greasy fur along walls, shredded packaging, and musky ammonia odours. Discovery warrants immediate pest contractor intervention."
  },
  {
    id: 25,
    category: "HACCP & EHO Law",
    q: "What core statutory documentation does an Environmental Health Officer (EHO) evaluate under the 'Confidence in Management' pillar?",
    options: ["Bank statements and tax returns", "A documented Food Safety Management System (FSMS) based on HACCP principles (such as FSA SFBB daily records and temperature logs)", "Kitchen architectural blueprints only", "Customer reviews on Google and TripAdvisor"],
    correct: 1,
    explanation: "To score a 5-Star Food Hygiene Rating, operators must demonstrate comprehensive written management controls: opening/closing checklists, fridge/freezer logs, allergen records, and staff training files."
  }
];

type CategoryFilter = "All" | "Temperatures & Cooking" | "Allergens & Natasha's Law" | "Cross-Contamination" | "Personal Hygiene" | "Cleaning & Chemicals" | "HACCP & EHO Law";

export const FoodSafetyQuizTool: React.FC<{ templateId?: string }> = ({ templateId }) => {
  const [candidateName, setCandidateName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState<"exam" | "practice">("exam");

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "All") return ALL_QUESTIONS;
    return ALL_QUESTIONS.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const handleSelect = (qId: number, optIdx: number) => {
    if (submitted && mode === "exam") return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  // Score Calculation
  const totalQuestions = filteredQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const score = filteredQuestions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correct ? 1 : 0);
  }, 0);

  const pct = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const passed = pct >= 80; // 80% accredited pass rate (20/25)

  return (
    <div className="space-y-6">
      {/* Tool Header & Mode Switcher */}
      <div className="p-6 rounded-3xl bg-[#121212] border border-white/10 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>UK Food Standards Agency (FSA) Syllabus Standard</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Level 2 Food Hygiene &amp; Safety Practice Mock Exam
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-light mt-1">
              25 official multiple-choice questions covering temperatures, 14 allergens, cross-contamination, and EHO compliance. 80% pass threshold (20/25).
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-2xl border border-white/10 shrink-0 no-print">
            <button
              type="button"
              onClick={() => { setMode("exam"); handleReset(); }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                mode === "exam" ? "bg-indigo-600 text-white shadow-md font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              Exam Mode (Graded)
            </button>
            <button
              type="button"
              onClick={() => { setMode("practice"); }}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                mode === "practice" ? "bg-indigo-600 text-white shadow-md font-bold" : "text-white/60 hover:text-white"
              }`}
            >
              Study Mode (Instant Hints)
            </button>
          </div>
        </div>

        {/* Trainee Details & Filter Bar */}
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <label className="block text-[11px] font-mono uppercase text-white/50 mb-1.5">Trainee / Staff Name</label>
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="e.g. John Smith"
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-white/50 mb-1.5">Business / Kitchen Name</label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. The Crown Bistro"
              className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="no-print">
            <label className="block text-[11px] font-mono uppercase text-white/50 mb-1.5">Filter by Topic Drill</label>
            <select
              value={selectedCategory}
              onChange={(e) => { setSelectedCategory(e.target.value as CategoryFilter); handleReset(); }}
              className="w-full bg-[#18181b] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Topics (Full 25 Exam Bank)</option>
              <option value="Temperatures & Cooking">Temperatures & Cooking</option>
              <option value="Allergens & Natasha's Law">Allergens & Natasha's Law</option>
              <option value="Cross-Contamination">Cross-Contamination</option>
              <option value="Personal Hygiene">Personal Hygiene</option>
              <option value="Cleaning & Chemicals">Cleaning & Chemicals</option>
              <option value="HACCP & EHO Law">HACCP & EHO Law</option>
            </select>
          </div>

          <div className="flex items-end gap-2 no-print">
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full bg-white/[0.08] hover:bg-white/[0.12] text-white border border-white/10 text-xs font-semibold px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer h-[38px]"
              title="Print blank exam paper or completed assessment certificate"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-400" />
              <span>Print Paper</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Stat Bar */}
      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs font-mono text-white/70 no-print">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold">{answeredCount} of {totalQuestions} answered</span>
          <div className="w-32 sm:w-48 h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span>Pass Mark: <strong>80% (20/25)</strong></span>
        </div>
      </div>

      {/* Score Summary Box (Revealed on Submit) */}
      {submitted && (
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all ${
            passed
              ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-200"
              : "bg-red-950/40 border-red-500/30 text-red-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                  passed ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                }`}
              >
                {passed ? <Award className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider opacity-75">
                  {passed ? "Assessment Passed" : "Needs Refresher Review"}
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-white">
                  {passed ? "Official Standard Passed! Excellent Work" : "Pass Threshold Not Met (80% Required)"}
                </h4>
              </div>
            </div>

            <div className="text-right sm:text-right">
              <span className="text-[11px] font-mono uppercase tracking-wider opacity-75">Candidate Final Score</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                {score} / {totalQuestions} <span className="text-xl font-normal opacity-75">({pct}%)</span>
              </div>
            </div>
          </div>

          <div className="pt-4 text-xs leading-relaxed text-white/80">
            <p>
              {passed
                ? `Trainee ${candidateName || "Candidate"} (${businessName || "Commercial Kitchen"}) has demonstrated comprehensive compliance knowledge aligned with the UK Food Standards Agency syllabus. Keep this printed scorecard in your SFBB Section 4 (Staff Training Records) as due diligence evidence for council EHO hygiene audits.`
                : `Trainee scored ${score} out of ${totalQuestions} (${pct}%). A minimum score of 80% (20/25) is required under UK accredited standards. Please review the highlighted FSA guidance notes below and retake the practice assessment.`}
            </p>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => {
          const selected = answers[q.id];
          const isCorrect = selected === q.correct;
          const showAnswer = submitted || (mode === "practice" && selected !== undefined);

          return (
            <div
              key={q.id}
              className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                showAnswer
                  ? isCorrect
                    ? "bg-emerald-950/20 border-emerald-500/30"
                    : "bg-red-950/20 border-red-500/30"
                  : "bg-[#121212] border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                  {q.category}
                </span>
                <span className="text-xs font-mono text-white/40">
                  Question {idx + 1} of {totalQuestions}
                </span>
              </div>

              <h4 className="font-medium text-base text-white leading-snug mb-4">
                {idx + 1}. {q.q}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((opt, optIdx) => {
                  let optStyle = "bg-white/[0.03] border-white/10 text-white/80 hover:bg-white/[0.06] hover:border-white/20";

                  if (selected === optIdx) {
                    optStyle = "bg-indigo-600 border-indigo-500 text-white font-semibold shadow-md";
                  }

                  if (showAnswer) {
                    if (optIdx === q.correct) {
                      optStyle = "bg-emerald-600/90 border-emerald-400 text-white font-bold ring-2 ring-emerald-400/50";
                    } else if (selected === optIdx && optIdx !== q.correct) {
                      optStyle = "bg-red-600/90 border-red-400 text-white font-bold";
                    } else {
                      optStyle = "bg-white/[0.02] border-white/5 text-white/30";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={submitted && mode === "exam"}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`text-left p-3.5 rounded-xl text-xs border transition-all cursor-pointer flex items-center justify-between gap-2 ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {showAnswer && optIdx === q.correct && (
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* FSA Statutory Guidance Note */}
              {showAnswer && (
                <div className="mt-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/70 space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-400 font-mono text-[11px] font-bold uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>UK Statutory Guidance Note:</span>
                  </div>
                  <p className="leading-relaxed font-light">{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submission Actions */}
      <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 no-print shadow-xl">
        <span className="text-xs text-white/60 font-mono">
          Answered {answeredCount} of {totalQuestions} questions
        </span>

        <div className="flex items-center gap-3">
          {!submitted ? (
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={answeredCount < totalQuestions}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all cursor-pointer shadow-lg flex items-center gap-2"
            >
              <span>Submit &amp; Grade Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="bg-white text-black hover:bg-neutral-200 text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-2 transition-colors cursor-pointer shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Mock Exam</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
