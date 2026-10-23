"use client";

import React, { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Printer, Award, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  category: string;
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "Temperature Control",
    q: "What is the food temperature 'Danger Zone' defined by the UK Food Standards Agency (FSA)?",
    options: ["0°C to 100°C", "8°C to 63°C", "20°C to 45°C", "-18°C to 0°C"],
    correct: 1,
    explanation: "Between 8°C and 63°C, bacteria multiply most rapidly. Chilled food must be kept at 5°C or below, and hot food above 63°C."
  },
  {
    id: 2,
    category: "Cooking & Thermal CCP",
    q: "What is the legal core temperature required when cooking high-risk meats in the UK?",
    options: ["60°C for 10 minutes", "75°C for at least 30 seconds (or 70°C for 2 mins)", "50°C until browned", "100°C boiling point"],
    correct: 1,
    explanation: "Reaching a core temperature of 75°C for 30 seconds ensures vegetative foodborne pathogens such as Salmonella, E. coli and Campylobacter are eradicated."
  },
  {
    id: 3,
    category: "Cooling Procedures",
    q: "Within what maximum time must cooked foods be cooled down before placing them into chilled refrigeration?",
    options: ["Within 90 minutes (max 2 hours)", "Within 6 hours", "Within 12 hours", "Left out overnight to cool"],
    correct: 0,
    explanation: "Food must be cooled as quickly as possible (ideally within 90 minutes) to prevent bacterial spores like Bacillus cereus from germinating."
  },
  {
    id: 4,
    category: "Storage Standards",
    q: "What is the recommended operating temperature for a commercial catering refrigerator?",
    options: ["Between 10°C and 15°C", "Below 5°C (legal maximum 8°C in England & Wales)", "Exactly 0°C freezing", "Any temp under 20°C"],
    correct: 1,
    explanation: "While the UK legal limit is 8°C, the FSA strongly recommends commercial chillers run between 1°C and 4°C to guarantee compliance."
  },
  {
    id: 5,
    category: "Natasha's Law & Allergens",
    q: "Under UK Natasha's Law (2021), what must Prepacked for Direct Sale (PPDS) food labels display?",
    options: ["Name of the food and a full ingredients list with all 14 allergens emphasized", "Only the price and chef's name", "A general warning saying 'may contain nuts'", "Nutritional calories only"],
    correct: 0,
    explanation: "Natasha's Law mandates the exact food name and a full ingredient list with all 14 major allergens highlighted in bold, italics, or contrasting color."
  },
  {
    id: 6,
    category: "Cross-Contamination",
    q: "In UK commercial kitchens, which chopping board color is designated for Raw Poultry?",
    options: ["Red (Raw Meat)", "Yellow (Raw Poultry)", "Blue (Raw Fish)", "Green (Salad & Fruit)"],
    correct: 1,
    explanation: "Yellow chopping boards are strictly reserved for raw poultry to avoid deadly Campylobacter cross-contamination."
  },
  {
    id: 7,
    category: "Reheating Standards",
    q: "How many times can leftover cooked food be reheated in a commercial catering environment?",
    options: ["Only once, reheated to a core temperature of >= 75°C", "Up to 3 times if kept in the fridge", "Unlimited times as long as it smells fresh", "Never"],
    correct: 0,
    explanation: "Commercial food should only ever be reheated ONCE to a minimum core temperature of 75°C to avoid repeated toxin production."
  },
  {
    id: 8,
    category: "Staff Hygiene & Illness",
    q: "If a food handler experiences vomiting or diarrhea, how long must they remain off work after symptoms stop?",
    options: ["12 hours", "24 hours", "At least 48 hours symptom-free", "They can work if wearing gloves"],
    correct: 2,
    explanation: "The 48-hour rule is an FSA legal standard to prevent Norovirus and other highly contagious viral pathogens from contaminating food."
  },
  {
    id: 9,
    category: "Cleaning & Chemicals",
    q: "What British Standard must commercial kitchen chemical sanitisers and disinfectants meet?",
    options: ["BS EN 1276 or BS EN 13697", "ISO 9001 only", "No standard is required", "CE mark only"],
    correct: 0,
    explanation: "BS EN 1276 and BS EN 13697 guarantee the disinfectant kills 99.999% of bacteria (including E. coli and Salmonella) within the specified contact time."
  },
  {
    id: 10,
    category: "High-Risk Foods",
    q: "Which of the following is considered a 'High-Risk Food' prone to bacterial growth?",
    options: ["Uncooked dry pasta", "Cooked rice, gravies, dairy, and cooked meats", "Table salt and white sugar", "Whole raw apples"],
    correct: 1,
    explanation: "High-protein, high-moisture foods like cooked rice, gravies, poultry, and shellfish provide ideal breeding grounds for pathogenic bacteria."
  }
];

export const FoodSafetyQuizTool: React.FC<{ templateId?: string }> = ({ templateId }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [candidateName, setCandidateName] = useState("Staff Member / Food Handler");

  const handleSelect = (qId: number, optIdx: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const score = QUESTIONS.reduce((sum, q) => (answers[q.id] === q.correct ? sum + 1 : sum), 0);
  const pct = Math.round((score / QUESTIONS.length) * 100);
  const passed = pct >= 80;

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-8 printable-doc">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <span className="text-xs font-bold text-indigo-800 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Award className="w-4 h-4 text-indigo-600" />
            Official UK Food Hygiene Level 2 Training Standard
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1">
            Food Safety &amp; Hygiene Knowledge Exam
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            10 practical questions based on UK FSA, Natasha&apos;s Law, and EHO inspection guidelines.
          </p>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border border-gray-200"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Certificate / Results</span>
          </button>
        </div>
      </div>

      {/* Candidate Banner */}
      <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <label className="font-bold text-gray-700">Candidate / Trainee Name:</label>
          <input
            type="text"
            value={candidateName}
            onChange={e => setCandidateName(e.target.value)}
            className="bg-white border border-gray-300 rounded-lg px-3 py-1 font-bold text-gray-900"
          />
        </div>
        <div className="text-gray-500 font-mono">
          Pass Mark: 80% (8/10) • Time: Untimed
        </div>
      </div>

      {/* Result Card if Submitted */}
      {submitted && (
        <div className={`p-6 rounded-3xl border ${
          passed ? "bg-emerald-50 border-emerald-300 text-emerald-950" : "bg-red-50 border-red-300 text-red-950"
        } space-y-3`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {passed ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600" />
              )}
              <h3 className="text-xl font-black">
                {passed ? "Congratulations, You Passed!" : "Assessment Needs Review"}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs uppercase font-mono font-bold">Total Score</span>
              <div className="text-3xl font-black">{score} / {QUESTIONS.length} ({pct}%)</div>
            </div>
          </div>
          <p className="text-xs leading-relaxed">
            {passed
              ? `Trainee ${candidateName} has demonstrated thorough knowledge of UK FSA critical food safety standards, temperature control, and allergen awareness.`
              : `Trainee scored below the 80% pass threshold. Please review the highlighted explanations below and retake the test.`}
          </p>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {QUESTIONS.map((q, idx) => {
          const selected = answers[q.id];
          const isCorrect = selected === q.correct;

          return (
            <div
              key={q.id}
              className={`p-5 rounded-2xl border transition-colors ${
                submitted
                  ? isCorrect
                    ? "bg-emerald-50/40 border-emerald-200"
                    : "bg-red-50/40 border-red-200"
                  : "bg-gray-50/60 border-gray-200"
              } space-y-3`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-md">
                  {q.category}
                </span>
                <span className="text-xs font-mono text-gray-400">Question {idx + 1} of 10</span>
              </div>

              <h4 className="font-bold text-sm text-gray-900 leading-snug">
                {idx + 1}. {q.q}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {q.options.map((opt, optIdx) => {
                  let optStyle = "bg-white border-gray-200 text-gray-800 hover:border-gray-400";

                  if (selected === optIdx) {
                    optStyle = "bg-indigo-600 border-indigo-600 text-white font-bold";
                  }

                  if (submitted) {
                    if (optIdx === q.correct) {
                      optStyle = "bg-emerald-600 border-emerald-600 text-white font-bold ring-2 ring-emerald-300";
                    } else if (selected === optIdx && optIdx !== q.correct) {
                      optStyle = "bg-red-500 border-red-500 text-white font-bold";
                    } else {
                      optStyle = "bg-gray-100 border-gray-200 text-gray-400";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={submitted}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`text-left p-3 rounded-xl text-xs border transition-all cursor-pointer flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correct && (
                        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="p-3 rounded-xl bg-white border border-gray-200 text-xs text-gray-700 space-y-1">
                  <span className="font-bold font-mono text-[10px] text-gray-500 uppercase">FSA Guidance Note:</span>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Submission Actions */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between no-print">
        <span className="text-xs text-gray-500 font-mono">
          Answered {Object.keys(answers).length} of {QUESTIONS.length}
        </span>

        {!submitted ? (
          <button
            type="button"
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < QUESTIONS.length}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all cursor-pointer shadow flex items-center gap-1.5"
          >
            <span>Submit Exam &amp; Reveal Answers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-900 hover:bg-black text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Exam</span>
          </button>
        )}
      </div>
    </div>
  );
};
