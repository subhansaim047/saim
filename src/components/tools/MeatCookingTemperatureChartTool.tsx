"use client";

import React, { useState, useEffect } from "react";
import {
  Printer,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Flame,
  Snowflake,
  Thermometer,
  Clock,
  Sparkles,
  Layers,
  Scale
} from "lucide-react";

export type MeatCategory = "chicken" | "beef" | "lamb" | "duck" | "venison" | "ham" | "pork" | "fish" | "burger" | "turkey";

export interface MeatCutOption {
  id: string;
  name: string;
  cutType: string;
  recommendedOvenTemp: string;
  cookMinsPerKg: number;
  restMins: number;
  targetCoreUK: number;
  targetCoreScotland: number;
  probeProtocol: string;
  pathogenRisk: string;
}

export interface MeatProfile {
  id: MeatCategory;
  name: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  accentBg: string;
  accentBorder: string;
  fsaGuidance: string;
  cuts: MeatCutOption[];
}

const MEAT_PROFILES: Record<MeatCategory, MeatProfile> = {
  chicken: {
    id: "chicken",
    name: "Commercial Poultry & Chicken",
    subtitle: "Campylobacter & Salmonella Eradication Standard",
    badge: "High Pathogen Risk",
    badgeColor: "bg-rose-600 text-white",
    accentBg: "bg-rose-50/70",
    accentBorder: "border-rose-300",
    fsaGuidance: "Poultry must ALWAYS be cooked thoroughly throughout. Never serve pink poultry. Probing is a mandatory Critical Control Point (CCP 1).",
    cuts: [
      {
        id: "whole-chicken",
        name: "Whole Roasting Chicken",
        cutType: "Whole Carcass",
        recommendedOvenTemp: "180°C – 190°C (Fan)",
        cookMinsPerKg: 45,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe thickest part of the inner thigh between leg and breast, avoiding contact with the bone.",
        pathogenRisk: "Campylobacter and Salmonella reside in cavity and muscle junctions. Juices must run clear."
      },
      {
        id: "chicken-thighs",
        name: "Bone-In Chicken Thighs & Drumsticks",
        cutType: "Dark Meat Cut",
        recommendedOvenTemp: "190°C – 200°C (Fan)",
        cookMinsPerKg: 40,
        restMins: 10,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe into thickest meat section without touching leg bone.",
        pathogenRisk: "High fat content requires thorough thermal penetration to eliminate spore-formers."
      },
      {
        id: "chicken-breast",
        name: "Boneless Skinless Chicken Breasts",
        cutType: "White Meat Cut",
        recommendedOvenTemp: "180°C – 190°C (Fan)",
        cookMinsPerKg: 35,
        restMins: 8,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe horizontally into the deepest center of the breast fillet.",
        pathogenRisk: "Must reach 75°C for 30 seconds (or 70°C for 2 minutes). Never wash raw breast fillets."
      },
      {
        id: "chicken-liver",
        name: "Chicken Livers & Pâté Preparation",
        cutType: "Offal / Pâté",
        recommendedOvenTemp: "Pan-sear / Oven bake",
        cookMinsPerKg: 20,
        restMins: 5,
        targetCoreUK: 70.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe the center of largest liver piece; must hold at ≥ 70°C for at least 2 full minutes.",
        pathogenRisk: "Campylobacter can be internalised in liver tissue. Pink liver pâté has caused major UK outbreaks."
      }
    ]
  },
  burger: {
    id: "burger",
    name: "Commercial Burgers & Minced Meat Patties",
    subtitle: "STEC & E. coli O157 Thermal Inactivation Protocol",
    badge: "Strict CCP Control",
    badgeColor: "bg-red-600 text-white",
    accentBg: "bg-red-50/70",
    accentBorder: "border-red-300",
    fsaGuidance: "Because surface bacteria are mixed throughout ground meat during mincing, burgers must be cooked to 75°C core for 30s (70°C for 2 min). Serving rare burgers requires strict FSA validated source controls and local council approval.",
    cuts: [
      {
        id: "classic-beef-burger",
        name: "Standard Commercial Beef Burger Patty (6oz)",
        cutType: "Minced Patty",
        recommendedOvenTemp: "Griddle / Chargrill: 190°C – 210°C",
        cookMinsPerKg: 12,
        restMins: 2,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe horizontally into the geometric center of the patty while on griddle.",
        pathogenRisk: "E. coli O157 (STEC) and Salmonella. Minced meat has bacteria distributed throughout the entire product."
      },
      {
        id: "smashed-beef-patty",
        name: "Smashed Beef Burger (3oz - 4oz Crispy Sear)",
        cutType: "Smashed Patty",
        recommendedOvenTemp: "Flat-Top Plancha: 220°C – 240°C",
        cookMinsPerKg: 8,
        restMins: 1,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Verify rapid crust formation and probe thickest edge before assembling.",
        pathogenRisk: "High heat flash sear must achieve full thermal lethality across the center."
      },
      {
        id: "gourmet-pink-burger",
        name: "FSA-Validated Rare/Pink Gourmet Burger (Strict Protocol)",
        cutType: "Validated Mince",
        recommendedOvenTemp: "Sous-vide / Seared: 60°C water bath + hard sear",
        cookMinsPerKg: 25,
        restMins: 3,
        targetCoreUK: 70.0,
        targetCoreScotland: 70.0,
        probeProtocol: "Time/temperature logging mandatory: 70°C for 2 min or 65°C for 10 min under validated HACCP.",
        pathogenRisk: "Strictly prohibited unless operating with accredited supplier, surface searing prior to mincing, and local authority approval."
      },
      {
        id: "lamb-burger",
        name: "Lamb & Kofta Burger Patty",
        cutType: "Minced Lamb",
        recommendedOvenTemp: "Chargrill: 200°C – 210°C",
        cookMinsPerKg: 14,
        restMins: 3,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe center of patty; internal fat must render and juices run completely clear.",
        pathogenRisk: "Campylobacter and Toxoplasma gondii risks in undercooked minced ovine products."
      },
      {
        id: "poultry-burger",
        name: "Chicken / Turkey Breast Patty",
        cutType: "Minced Poultry",
        recommendedOvenTemp: "Grill / Oven: 180°C – 200°C",
        cookMinsPerKg: 15,
        restMins: 2,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Never serve rare or pink. Core temperature must strictly reach 75°C (82°C in Scotland).",
        pathogenRisk: "Extreme risk of Campylobacter and Salmonella infection from undercooked minced poultry."
      }
    ]
  },
  beef: {
    id: "beef",
    name: "Commercial British Beef",
    subtitle: "Whole Muscle vs Minced Beef Critical Boundaries",
    badge: "Surface E. coli Protocol",
    badgeColor: "bg-amber-600 text-white",
    accentBg: "bg-amber-50/70",
    accentBorder: "border-amber-300",
    fsaGuidance: "Intact whole muscle beef cuts may be served rare if surfaces are fully seared. Minced beef, burgers, and rolled joints must reach 75°C core.",
    cuts: [
      {
        id: "beef-rare-roast",
        name: "Whole Ribeye / Sirloin Joint (Medium-Rare)",
        cutType: "Intact Whole Muscle",
        recommendedOvenTemp: "220°C high sear (20m), then 160°C",
        cookMinsPerKg: 30,
        restMins: 20,
        targetCoreUK: 54.0,
        targetCoreScotland: 54.0,
        probeProtocol: "Probe thermal center of joint after full searing of all external surfaces.",
        pathogenRisk: "Pathogens (E. coli O157) are on the surface only. Internal meat is sterile in intact joints."
      },
      {
        id: "beef-medium-roast",
        name: "Whole Topside / Striploin Joint (Medium)",
        cutType: "Intact Whole Muscle",
        recommendedOvenTemp: "170°C – 180°C (Fan)",
        cookMinsPerKg: 38,
        restMins: 20,
        targetCoreUK: 60.0,
        targetCoreScotland: 60.0,
        probeProtocol: "Center of thickest muscle mass.",
        pathogenRisk: "Safe provided exterior is thoroughly browned and sealed."
      },
      {
        id: "beef-rolled-brisket",
        name: "Rolled & Tied Beef Brisket / Rib Joint",
        cutType: "Rolled / Non-Intact",
        recommendedOvenTemp: "150°C – 160°C Low & Slow",
        cookMinsPerKg: 50,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe geometrical core of the roll.",
        pathogenRisk: "CRITICAL: Rolling moves surface bacteria to the center. Must be cooked as minced meat (75°C)."
      },
      {
        id: "beef-minced-burger",
        name: "Minced Beef Burgers & Patties",
        cutType: "Minced Meat",
        recommendedOvenTemp: "Griddle / Char-grill 200°C",
        cookMinsPerKg: 15,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe core of burger patty horizontally; verify reading holds for 30 seconds.",
        pathogenRisk: "Shiga-toxin producing E. coli (STEC). Rare burgers require strict council EHO approval."
      }
    ]
  },
  lamb: {
    id: "lamb",
    name: "Commercial British & Welsh Lamb",
    subtitle: "Toxoplasma & Spore Control in Roasting Cuts",
    badge: "Culinary & Hygiene Matrix",
    badgeColor: "bg-emerald-700 text-white",
    accentBg: "bg-emerald-50/70",
    accentBorder: "border-emerald-300",
    fsaGuidance: "Whole lamb cuts may be served pink if exterior is thoroughly browned. Rolled shoulders and minced kebabs must achieve 75°C core.",
    cuts: [
      {
        id: "lamb-bone-in-leg",
        name: "Whole Bone-In Leg of Lamb (Medium)",
        cutType: "Bone-In Joint",
        recommendedOvenTemp: "180°C (Fan)",
        cookMinsPerKg: 40,
        restMins: 20,
        targetCoreUK: 65.0,
        targetCoreScotland: 65.0,
        probeProtocol: "Insert probe into thickest part of leg muscle without touching bone.",
        pathogenRisk: "External browning eliminates surface bacteria; resting equalises internal thermal juices."
      },
      {
        id: "lamb-rack",
        name: "French Trimmed Rack of Lamb (Medium-Rare)",
        cutType: "Prime Bone-In Cut",
        recommendedOvenTemp: "200°C (Fan)",
        cookMinsPerKg: 25,
        restMins: 10,
        targetCoreUK: 58.0,
        targetCoreScotland: 58.0,
        probeProtocol: "Probe the center of eye muscle.",
        pathogenRisk: "Intact cut; sear fat cap thoroughly before roasting."
      },
      {
        id: "lamb-rolled-shoulder",
        name: "Slow-Roasted Rolled Shoulder of Lamb",
        cutType: "Rolled Joint",
        recommendedOvenTemp: "150°C – 160°C (Fan)",
        cookMinsPerKg: 55,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Deep central cylinder of the rolled joint.",
        pathogenRisk: "Must reach 75°C core because interior was exposed to surface handling during de-boning."
      },
      {
        id: "lamb-minced-kebab",
        name: "Minced Lamb Kebabs, Koftas & Burgers",
        cutType: "Minced Meat",
        recommendedOvenTemp: "Grill / Tandoor / Oven",
        cookMinsPerKg: 20,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Geometric center of kebab skewer or patty.",
        pathogenRisk: "High fat content carries bacterial risk; mandatory 75°C core lethality."
      }
    ]
  },
  duck: {
    id: "duck",
    name: "Commercial Duck & Game Waterfowl",
    subtitle: "Fat Rendering & Pink Breast Serving Standards",
    badge: "Specialised Game Poultry",
    badgeColor: "bg-indigo-700 text-white",
    accentBg: "bg-indigo-50/70",
    accentBorder: "border-indigo-300",
    fsaGuidance: "Whole roast duck and legs must be cooked to 75°C core. Duck breast served pink requires verified HACCP supplier controls.",
    cuts: [
      {
        id: "duck-whole",
        name: "Whole Roasting Duck",
        cutType: "Whole Poultry",
        recommendedOvenTemp: "180°C – 190°C (Fan)",
        cookMinsPerKg: 50,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Thickest part of the thigh near breast carcass.",
        pathogenRisk: "High internal fat layer requires prolonged thermal penetration to eliminate Salmonella."
      },
      {
        id: "duck-breast-pink",
        name: "Pan-Seared Duck Breast (Pink Centre)",
        cutType: "Poultry Breast Fillet",
        recommendedOvenTemp: "Pan sear skin (8m), oven finish 180°C (6m)",
        cookMinsPerKg: 25,
        restMins: 10,
        targetCoreUK: 62.0,
        targetCoreScotland: 62.0,
        probeProtocol: "Horizontal insertion into the thickest center of the breast.",
        pathogenRisk: "If served pink (< 75°C), business must operate strict supplier assurance and validated HACCP."
      },
      {
        id: "duck-confit-leg",
        name: "Confit Duck Legs (Slow Rendered)",
        cutType: "Confit / Cured",
        recommendedOvenTemp: "140°C in duck fat bath",
        cookMinsPerKg: 75,
        restMins: 15,
        targetCoreUK: 82.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Deep meat along leg bone.",
        pathogenRisk: "Prolonged fat subversion achieves complete bacterial pasteurisation."
      }
    ]
  },
  venison: {
    id: "venison",
    name: "Commercial British Wild & Farmed Venison",
    subtitle: "Wild Game Parasite & Lean Roasting Standards",
    badge: "Wild Game HACCP",
    badgeColor: "bg-stone-800 text-white",
    accentBg: "bg-stone-100",
    accentBorder: "border-stone-400",
    fsaGuidance: "Wild venison carries Toxoplasma and lead shot risks. Intact loins may be served medium-rare (55°C); wild mince must reach 75°C.",
    cuts: [
      {
        id: "venison-haunch",
        name: "Whole Roasting Haunch of Venison",
        cutType: "Bone-In or Seamed Joint",
        recommendedOvenTemp: "170°C – 180°C (Fan)",
        cookMinsPerKg: 35,
        restMins: 20,
        targetCoreUK: 60.0,
        targetCoreScotland: 65.0,
        probeProtocol: "Deep center of haunch muscle.",
        pathogenRisk: "Extremely lean game meat dries out if overcooked; sear surfaces well and rest under foil."
      },
      {
        id: "venison-loin",
        name: "Venison Loin / Saddle Medallions",
        cutType: "Prime Intact Cut",
        recommendedOvenTemp: "High sear pan, oven finish 200°C",
        cookMinsPerKg: 20,
        restMins: 10,
        targetCoreUK: 55.0,
        targetCoreScotland: 55.0,
        probeProtocol: "Geometrical core of loin.",
        pathogenRisk: "Safe to serve medium-rare if sourced from licensed approved game handling establishment (AGHE)."
      },
      {
        id: "venison-mince-burgers",
        name: "Minced Venison Burgers & Sausages",
        cutType: "Minced Wild Game",
        recommendedOvenTemp: "Griddle / Oven 190°C",
        cookMinsPerKg: 20,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Center of patty.",
        pathogenRisk: "Wild game mince has high cross-contamination risk; mandatory thorough cooking to 75°C."
      }
    ]
  },
  ham: {
    id: "ham",
    name: "Commercial Ham & Cured Gammon",
    subtitle: "Cured Nitrite & Carvery Holding Standard",
    badge: "Carvery & Roast",
    badgeColor: "bg-rose-700 text-white",
    accentBg: "bg-rose-50/70",
    accentBorder: "border-rose-300",
    fsaGuidance: "Ham joints must reach at least 75°C core (82°C in Scotland). Hot-holding carvery decks must maintain ≥ 63°C continuously.",
    cuts: [
      {
        id: "ham-bone-in",
        name: "Traditional Bone-In Gammon Joint",
        cutType: "Bone-In Joint",
        recommendedOvenTemp: "160°C – 170°C (Fan)",
        cookMinsPerKg: 45,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Thickest muscle away from the bone.",
        pathogenRisk: "Bone conducts heat artificially; probe thick meat to ensure Salmonella eradication."
      },
      {
        id: "ham-boneless-rolled",
        name: "Rolled & Tied Boneless Gammon",
        cutType: "Rolled Joint",
        recommendedOvenTemp: "160°C – 180°C (Fan)",
        cookMinsPerKg: 40,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Geometric center of the rolled cylinder.",
        pathogenRisk: "Rolling carries surface pathogens into center; full 75°C thermal lethality mandatory."
      },
      {
        id: "ham-glazed",
        name: "Carvery Glazed Ham (Pre-Boiled & Roasted)",
        cutType: "Glazed Roast",
        recommendedOvenTemp: "180°C – 190°C (Glaze finishing)",
        cookMinsPerKg: 20,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Core center before applying glaze.",
        pathogenRisk: "Sugar crust browns rapidly while core may remain cold."
      }
    ]
  },
  pork: {
    id: "pork",
    name: "Commercial Pork & Swine Cuts",
    subtitle: "Salmonella, Trichinella & Yersinia Thermal Safety Standard",
    badge: "FSA Safe Cooking Benchmark",
    badgeColor: "bg-emerald-700 text-white",
    accentBg: "bg-emerald-50/70",
    accentBorder: "border-emerald-300",
    fsaGuidance: "Minced pork, rolled joints, and sausages must reach at least 75°C core for 30 seconds (82°C in Scotland) to eliminate Salmonella and Yersinia enterocolitica. Whole intact pork loins and chops can be served with a slight blush if surface-seared thoroughly and core reaches 70°C for 2 minutes (or 75°C instant).",
    cuts: [
      {
        id: "pork-loin-roast",
        name: "Whole Loin of Pork Roast",
        cutType: "Whole Joint",
        recommendedOvenTemp: "180°C – 190°C (Fan)",
        cookMinsPerKg: 50,
        restMins: 15,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe into the thickest center part of the eye muscle away from fat cap.",
        pathogenRisk: "Surface bacteria eliminated by high heat roasting; core must hit 75°C (82°C Scotland) for statutory due diligence."
      },
      {
        id: "pork-chops",
        name: "Bone-In Pork Chops & Steaks",
        cutType: "Portion Cut",
        recommendedOvenTemp: "Pan-sear / Oven finish 190°C",
        cookMinsPerKg: 35,
        restMins: 8,
        targetCoreUK: 71.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe horizontally into the deepest center of the meat without touching bone.",
        pathogenRisk: "Intact cutlet: 70°C for 2 minutes or 75°C instant. Never serve undercooked minced or tenderised pork."
      },
      {
        id: "pork-belly-rolled",
        name: "Rolled & Tied Pork Belly (Porchetta)",
        cutType: "Rolled Joint",
        recommendedOvenTemp: "160°C slow roast / 220°C crackling",
        cookMinsPerKg: 60,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe into the dead center of the rolled cylinder.",
        pathogenRisk: "Rolling transfers surface contaminants into the cold core; thorough 75°C lethality mandatory."
      },
      {
        id: "pork-sausages-minced",
        name: "Pork Sausages & Minced Pork Burgers",
        cutType: "Minced / Comminuted",
        recommendedOvenTemp: "Grill / Oven 180°C",
        cookMinsPerKg: 30,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe center of the thickest sausage or center patty.",
        pathogenRisk: "Critical risk: Grinding distributes surface bacteria throughout the meat. Zero pink meat permitted."
      },
      {
        id: "pork-pulled-shoulder",
        name: "Slow-Braised Pulled Pork Shoulder",
        cutType: "Slow Cook / Braise",
        recommendedOvenTemp: "140°C – 150°C (Low & Slow)",
        cookMinsPerKg: 90,
        restMins: 30,
        targetCoreUK: 88.0,
        targetCoreScotland: 88.0,
        probeProtocol: "Multiple probe points across the shoulder joint before shredding.",
        pathogenRisk: "Requires 88°C–93°C core to break down tough collagen; well beyond food safety minimums."
      }
    ]
  },
  fish: {
    id: "fish",
    name: "Commercial Fish & Seafood Fillets",
    subtitle: "Anisakis Parasite Inactivation & Flaking Standard",
    badge: "Seafood Safety Benchmark",
    badgeColor: "bg-cyan-700 text-white",
    accentBg: "bg-cyan-50/70",
    accentBorder: "border-cyan-300",
    fsaGuidance: "FSA statutory standard: Fish cooked to order must reach opaque flaking consistency with core temp of 63°C for 2 minutes (or 70°C for 2 min / 75°C instant; Scotland 82°C). Raw/sushi fish requires parasite freeze-treatment (-20°C for 24h or -35°C for 15h) under Regulation (EC) No 853/2004.",
    cuts: [
      {
        id: "fish-salmon",
        name: "Scottish Salmon Fillet / Supreme",
        cutType: "Oily Fish Fillet",
        recommendedOvenTemp: "Pan-sear / Oven 180°C",
        cookMinsPerKg: 25,
        restMins: 5,
        targetCoreUK: 63.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe horizontally into the thickest center part of the fillet.",
        pathogenRisk: "Flesh becomes opaque and flakes easily. Parasite freezing certification required if served raw or cured."
      },
      {
        id: "fish-white-fillet",
        name: "White Fish Fillets (Cod, Haddock, Sea Bass)",
        cutType: "Lean White Fish",
        recommendedOvenTemp: "190°C – 200°C (Bake / Fry)",
        cookMinsPerKg: 20,
        restMins: 3,
        targetCoreUK: 63.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Center of the thickest portion near the shoulder.",
        pathogenRisk: "Lethality reached at 63°C for 2 min. Ensure batter does not create cold internal pocket."
      },
      {
        id: "fish-tuna-steak",
        name: "Fresh Yellowfin Tuna Loin Steak",
        cutType: "Pelagic Loin Steak",
        recommendedOvenTemp: "High-heat sear (Griddle / Pan)",
        cookMinsPerKg: 15,
        restMins: 5,
        targetCoreUK: 50.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Surface sear verification (≥75°C surface) with 50°C rare center.",
        pathogenRisk: "Intact muscle surface must be seared. Histamine (scombroid) control requires continuous cold chain ≤4°C."
      },
      {
        id: "fish-whole-round",
        name: "Whole Roasted Sea Bream / Trout",
        cutType: "Whole Fish",
        recommendedOvenTemp: "190°C (Fan)",
        cookMinsPerKg: 35,
        restMins: 8,
        targetCoreUK: 70.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Thickest part of the back muscle along the spine behind the head.",
        pathogenRisk: "Cavity must be eviscerated and thoroughly rinsed. Probe must not touch backbone."
      },
      {
        id: "fish-cakes-minced",
        name: "Fish Cakes & Minced Seafood Patties",
        cutType: "Minced / Formed",
        recommendedOvenTemp: "180°C (Bake / Deep Fry)",
        cookMinsPerKg: 25,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Dead center of the fish cake.",
        pathogenRisk: "Minced and formed products carry surface bacteria throughout; must reach 75°C (82°C Scotland)."
      }
    ]
  },
  turkey: {
    id: "turkey",
    name: "Turkey Pasteurisation & Lethality Standards",
    subtitle: "Salmonella 7-Log Lethality & Time-Temperature Lethality Table",
    badge: "7D Pathogen Eradication",
    badgeColor: "bg-amber-600 text-white",
    accentBg: "bg-amber-50/70",
    accentBorder: "border-amber-300",
    fsaGuidance: "Whole turkey and poultry cuts require a 7D (7-log) reduction in Salmonella. Standard UK requirement is 75°C core for 30 seconds or 70°C for 2 minutes. Scientifically validated low-temperature pasteurisation pairs apply for combi and sous-vide cooking.",
    cuts: [
      {
        id: "whole-turkey",
        name: "Whole Roasting Turkey (Bone-In)",
        cutType: "Whole Carcass",
        recommendedOvenTemp: "165°C – 175°C (Fan)",
        cookMinsPerKg: 35,
        restMins: 30,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Insert probe into thickest part of the inner thigh (deep muscle between leg and cavity) and thickest center of breast. Do not touch bone.",
        pathogenRisk: "Salmonella enterica and Campylobacter jejuni. Dense cavity creates slow heat conduction zones; minimum 30 min tented rest essential."
      },
      {
        id: "turkey-crown",
        name: "Turkey Crown & Rolled Breast Joint",
        cutType: "Breast Muscle Joint",
        recommendedOvenTemp: "170°C – 180°C (Fan)",
        cookMinsPerKg: 30,
        restMins: 20,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe geometric center from the side into the deepest part of the breast muscle.",
        pathogenRisk: "Rolled crowns with stuffing must be probed at the innermost stuffing layer, which must independently reach 75°C."
      },
      {
        id: "turkey-pasteurisation-table",
        name: "Low-Temp Pasteurisation (Sous-Vide / Combi)",
        cutType: "7-Log Thermal Lethality",
        recommendedOvenTemp: "60°C – 68°C Precision Water Bath / Combi Steam",
        cookMinsPerKg: 60,
        restMins: 10,
        targetCoreUK: 65.6,
        targetCoreScotland: 82.0,
        probeProtocol: "Continuous immersion probe logging holding time: 60.0°C (27.2 min), 63.0°C (8.4 min), 65.6°C (2.6 min), 68.3°C (49 sec), 70.0°C (16.8 sec).",
        pathogenRisk: "USDA FSIS Appendix A validated equivalent lethal thermal death time to instantaneous 74°C."
      },
      {
        id: "ground-turkey",
        name: "Ground / Minced Turkey & Stuffing",
        cutType: "Comminuted Poultry",
        recommendedOvenTemp: "180°C (Oven / Griddle)",
        cookMinsPerKg: 25,
        restMins: 5,
        targetCoreUK: 75.0,
        targetCoreScotland: 82.0,
        probeProtocol: "Probe center of patty, meatball, or stuffing loaf. Must reach 75°C throughout.",
        pathogenRisk: "High risk: bacteria blended throughout mince. No rare or pink serving permitted under UK law."
      }
    ]
  }
};

export function MeatCookingTemperatureChartTool({
  templateId,
  initialMeat
}: {
  templateId?: string;
  initialMeat?: MeatCategory;
}) {
  const [selectedMeat, setSelectedMeat] = useState<MeatCategory>(initialMeat || "chicken");
  const [businessName, setBusinessName] = useState<string>("The Crown Restaurant & Carvery");
  const [stationIdentifier, setStationIdentifier] = useState<string>("Main Kitchen Roast Line - Oven 1");
  const [chefName, setChefName] = useState<string>("Head Chef J. Morgan");
  const [weightKg, setWeightKg] = useState<number>(2.5);
  const [jurisdiction, setJurisdiction] = useState<"uk" | "scotland">("uk");

  // Synchronise if initialMeat changes or on slug mount
  useEffect(() => {
    if (initialMeat) {
      setSelectedMeat(initialMeat);
    }
  }, [initialMeat]);

  const profile = MEAT_PROFILES[selectedMeat] || MEAT_PROFILES.chicken;
  const [selectedCutId, setSelectedCutId] = useState<string>(profile.cuts[0]?.id || "");

  // Update selected cut when meat profile changes
  useEffect(() => {
    if (profile.cuts.length > 0) {
      setSelectedCutId(profile.cuts[0].id);
    }
  }, [selectedMeat]);

  const currentCut = profile.cuts.find(c => c.id === selectedCutId) || profile.cuts[0];

  const estimatedCookMins = currentCut ? Math.round(currentCut.cookMinsPerKg * weightKg) : 0;
  const cookHours = Math.floor(estimatedCookMins / 60);
  const cookRemainingMins = estimatedCookMins % 60;
  const targetTemp = currentCut ? (jurisdiction === "uk" ? currentCut.targetCoreUK : currentCut.targetCoreScotland) : 75;

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200/80 mb-2">
              <Flame className="w-3.5 h-3.5 text-rose-600" />
              <span>UK Food Standards Agency (FSA) Thermal Lethality Standard</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {profile.name} Cooking Temperature &amp; Core Probe Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Calculate commercial roasting times by joint weight, inspect cut-specific core probe locations, verify compliance with statutory temperature limits (75°C for 30s / 82°C Scotland), and print an EHO audit wall chart.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:scale-[1.01] cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print A4 Kitchen Chart</span>
            </button>
          </div>
        </div>

        {/* Meat Species Selector Tabs */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Switch Commercial Meat Category:
          </label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(MEAT_PROFILES) as MeatCategory[]).map(key => {
              const p = MEAT_PROFILES[key];
              const isActive = p.id === selectedMeat;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedMeat(p.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs scale-[1.01]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-400" : "bg-slate-400"}`} />
                  <span>{p.name.replace("Commercial ", "").replace("British ", "")}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Configuration Toolbar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Establishment Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Station / Oven ID
            </label>
            <input
              type="text"
              value={stationIdentifier}
              onChange={e => setStationIdentifier(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Head Chef / Lead Cook
            </label>
            <input
              type="text"
              value={chefName}
              onChange={e => setChefName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              UK Legal Cooking Standard
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-white p-1 rounded-lg border border-slate-300 shadow-2xs">
              <button
                type="button"
                onClick={() => setJurisdiction("uk")}
                className={`py-1 text-center font-bold rounded cursor-pointer transition-colors ${
                  jurisdiction === "uk"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                75°C (Eng/Wal/NI)
              </button>
              <button
                type="button"
                onClick={() => setJurisdiction("scotland")}
                className={`py-1 text-center font-bold rounded cursor-pointer transition-colors ${
                  jurisdiction === "scotland"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                82°C (Scotland)
              </button>
            </div>
          </div>
        </div>

        {/* Specific Cut Pills */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Specific Culinary Joint / Cut:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {profile.cuts.map(cut => {
              const isSelected = cut.id === selectedCutId;
              return (
                <button
                  key={cut.id}
                  onClick={() => setSelectedCutId(cut.id)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold tracking-wider block ${isSelected ? "text-amber-400" : "text-slate-500"}`}>
                    {cut.cutType}
                  </span>
                  <div className="text-xs font-black mt-0.5 truncate">{cut.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calculation & Probing Summary Card */}
        {currentCut && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-sm">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/30">
                <Scale className="w-3 h-3 text-rose-400" />
                Raw Joint Weight
              </span>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  step="0.1"
                  min="0.2"
                  max="30"
                  value={weightKg}
                  onChange={e => setWeightKg(parseFloat(e.target.value) || 1)}
                  className="w-28 bg-white/10 border border-white/20 rounded-xl px-3 py-2 font-mono text-2xl font-black text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <span className="text-xl font-black text-slate-300">kg</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Oven: <strong className="text-white">{currentCut.recommendedOvenTemp}</strong>
              </p>
            </div>

            <div className="space-y-2 border-l border-white/10 lg:pl-6">
              <span className="text-[11px] uppercase font-bold text-slate-400 block">
                Estimated Cooking Time
              </span>
              <div className="font-mono text-3xl font-black text-white">
                {cookHours > 0 ? `${cookHours} hr ` : ""}
                {cookRemainingMins} mins
              </div>
              <p className="text-[11px] text-slate-300">
                Plus mandatory <strong className="text-amber-400">{currentCut.restMins} min rest</strong> under foil to equalise core temperature.
              </p>
            </div>

            <div className="space-y-2 border-l border-white/10 lg:pl-6">
              <span className="text-[11px] uppercase font-bold text-slate-400 block">
                Mandatory Core Target Temp
              </span>
              <div className="font-mono text-3xl font-black text-rose-400">
                ≥ {targetTemp}°C
              </div>
              <p className="text-[11px] text-slate-300">
                Hold reading for at least <strong className="text-white">30 seconds</strong> at the thermal centre.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          A4 PRINTABLE ROASTING & PROBING POSTER
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 space-y-6 printable-doc shadow-md print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none">
        {/* Poster Header */}
        <div className="border-b-4 border-slate-900 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-slate-900 text-white font-mono font-black text-xs uppercase tracking-wider mb-2">
                FSA CRITICAL CONTROL POINT (CCP 1 - THERMAL LETHALITY)
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                {profile.name} Cooking Temperature Chart
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                {profile.subtitle} • Statutory Core Probing &amp; Carvery Holding Standards
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-3 text-right min-w-[200px]">
              <div className="text-[10px] font-bold uppercase text-slate-500">Premises / Unit</div>
              <div className="text-sm font-black text-slate-900 truncate">{businessName}</div>
              <div className="text-xs font-bold text-rose-700 truncate">{stationIdentifier}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 text-[11px]">
            <div>
              <span className="font-bold text-slate-500 uppercase block">Supervisor:</span>
              <span className="font-black text-slate-900">{chefName}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">UK Statutory Rule:</span>
              <span className="font-black text-rose-700">75°C for 30s (82°C Scot)</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Hot Holding Limit:</span>
              <span className="font-black text-amber-700">≥ 63.0°C Continuously</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">90-Minute Chill:</span>
              <span className="font-black text-sky-700">Cool to &lt; 8°C in 90m</span>
            </div>
          </div>
        </div>

        {/* Cuts Matrix Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Joint / Cut</th>
                <th className="py-2.5 px-2">Oven Temp</th>
                <th className="py-2.5 px-2">Time / kg</th>
                <th className="py-2.5 px-2">Resting</th>
                <th className="py-2.5 px-2">Min Core Temp</th>
                <th className="py-2.5 px-3">Probe Location Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-900">
              {profile.cuts.map(cut => (
                <tr key={cut.id} className={cut.id === selectedCutId ? "bg-amber-50/70 font-bold" : ""}>
                  <td className="py-2.5 px-3">
                    <div className="font-bold text-slate-900">{cut.name}</div>
                    <div className="text-[10px] text-slate-500">{cut.cutType}</div>
                  </td>
                  <td className="py-2.5 px-2 text-[11px]">{cut.recommendedOvenTemp}</td>
                  <td className="py-2.5 px-2 font-mono">{cut.cookMinsPerKg} min/kg</td>
                  <td className="py-2.5 px-2 font-mono">{cut.restMins} min</td>
                  <td className="py-2.5 px-2 font-black font-mono text-rose-700">
                    ≥ {jurisdiction === "uk" ? cut.targetCoreUK : cut.targetCoreScotland}°C
                  </td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-700">{cut.probeProtocol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Essential Cooking & Probing Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <Thermometer className="w-4 h-4 text-rose-600" />
              <span>Antibacterial Probe Hygiene</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Always sanitise the digital thermometer probe with a single-use BS EN 1276 probe wipe before and immediately after checking each joint. Never insert an unwashed probe into cooked meats.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Mandatory 30-Second Dwell Time</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Thermal lethality depends on time and temperature combinations. Hold the probe at the geometric center for at least 30 seconds to verify temperature stabilizes at or above the target limit before recording.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-600" />
              <span>Service Hot-Holding (≥ 63°C)</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Carvery decks, bain-maries, and heated passes must maintain cooked meats at ≥ 63°C continuously. If temperature drops below 63°C, the food must be consumed or discarded within 2 hours under UK law.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <Snowflake className="w-4 h-4 text-sky-600" />
              <span>FSA 90-Minute Cooling Rule</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Portion leftover cooked roasts into shallow stainless gastronorm pans (&lt; 5cm depth). Chill down to &lt; 8°C within 90 minutes before sealing and placing on top shelves of the walk-in refrigerator.
            </p>
          </div>
        </div>

        {/* Sign-off & Verification Footer */}
        <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[11px] text-slate-500">
            FSA Safer Food, Better Business (SFBB) • Regulation (EC) No 852/2004 • Food Safety Act 1990
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-700">
            <div className="border-b border-slate-400 pb-1 min-w-[120px] text-center">
              Head Chef Sign-Off
            </div>
            <div className="border-b border-slate-400 pb-1 min-w-[100px] text-center">
              Date: ___ / ___ / 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
