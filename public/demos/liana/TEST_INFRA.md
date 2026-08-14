# LIANA Luxury Salon - E2E Test Infrastructure Documentation

## Overview
This document describes the architecture, design principles, test tiers, execution commands, and verification criteria for the LIANA Luxury Salon Website Performance & Scrolling Optimization test suite.

The test harness is implemented in `tests/e2e_test_suite.js` as an opaque-box, requirement-driven, zero-dependency Node.js testing framework. It evaluates DOM contracts, CSS compositing layers, viewport scroll physics, script execution models, and responsive layout integrity across all 4 production HTML pages.

---

## Target Surfaces & Scope
The suite targets all four primary HTML pages of the LIANA salon website:
1. `index.html`: Home page (Hero carousel, craft narrative, 6 core services, client journey, testimonials, Instagram ticker, FAQ accordion, booking form, footer).
2. `about/index.html`: About & Atelier (Hero, brand marquee, stylist team carousel, studio product showcase, FAQ accordion, Instagram gallery, booking form, footer).
3. `services/index.html`: Services catalog (Hero, 6 detailed service cards with pricing, FAQ accordion, Instagram gallery, booking form, footer).
4. `contact/index.html`: Contact & Studio Details (Hero, full contact & booking form, location card, FAQ accordion, Instagram gallery, footer).

---

## Test Architecture & Execution Engine

```
                                  +---------------------------------------+
                                  |         tests/e2e_test_suite.js       |
                                  +---------------------------------------+
                                                     |
                    +--------------------------------+-------------------------------+
                    |                                                                |
         [Static DOM & CSS Parser]                                        [Synthetic VM Execution]
         - HTML AST & Tag Parsing                                         - Node.js vm.createContext Sandbox
         - Inline & <style> Extraction                                    - Mock Browser DOM (Window, Document)
         - Framer Components & Animations                                 - Mock MutationObserver & TreeWalker
         - Media Query Breakpoint Analysis                                - Simulated 60-FPS Scroll Loops
                    |                                                                |
                    +--------------------------------+-------------------------------+
                                                     |
                                   +------------------------------------+
                                   |           4 Test Tiers             |
                                   | - Tier 1: Feature Coverage (42)    |
                                   | - Tier 2: Boundaries/Corners (40)  |
                                   | - Tier 3: Cross-Feature (10)       |
                                   | - Tier 4: Real-World E2E (6)       |
                                   +------------------------------------+
                                                     |
                                   +------------------------------------+
                                   |     CLI & JSON Diagnostics Output  |
                                   |     (Exit 0: Pass / Exit 1: Fail)  |
                                   +------------------------------------+
```

### Key Technical Capabilities:
1. **Isolated VM Sandbox**: Evaluates browser-side initialization scripts inside a custom Node.js `vm.createContext` sandbox, isolating execution without polluting the Node global environment.
2. **Deterministic High-Speed Execution**: Runs all 98 test cases in < 4.0 seconds with zero external NPM package dependencies.
3. **Synthetic Event Dispatcher**: Simulates continuous 60-frame scrolling gestures, high-frequency multi-touch gestures, viewport resizing, element focus, and tab visibility toggles.
4. **Observer & Memory Monitoring**: Tracks active `MutationObserver` subscriptions, `TreeWalker` iterations, `setTimeout` / `setInterval` lifecycles, and microtask overhead to verify zero main-thread blocking during active scroll.

---

## Test Tiers Breakdown

### Tier 1: Feature Coverage (42 Tests)
Validates primary requirements and DOM/CSS invariants across all 8 features:
- **Feature 1 (Main-Thread Scroll Freedom)**: Tests absence of persistent `MutationObserver` on `document.body` or `document.documentElement` during scroll; tests 60-frame scroll generates 0 observer invocations; verifies main-thread scroll overhead < 2ms; confirms absence of continuous `setInterval` DOM polling.
- **Feature 2 (One-Shot Branding & Asset Initialization)**: Tests LIANA branding replacement across text nodes; Instagram gallery link href, title, `target="_blank"`, and `rel="noopener noreferrer"`; bottle image asset URLs (`?v=liana_final`); DOMContentLoaded one-shot initialization model.
- **Feature 3 (Root Viewport Scroll Physics)**: Tests `touch-action: pan-y`, `-webkit-overflow-scrolling: touch`, `overflow-x: clip`, `scroll-behavior: smooth`, and viewport meta tag configurations across all 4 pages.
- **Feature 4 (CSS GPU Acceleration Layers)**: Tests `transform: translateZ(0)` / `translate3d`, `will-change: transform`, and `backface-visibility: hidden` on tickers, sliders, and sticky header; enforces interface contract that ancestors of fixed elements (`html`, `body`, `#main`) do not receive transform rules.
- **Feature 5 (Backdrop Filter Isolation)**: Tests `contain: paint` and `isolation: isolate` on backdrop-filter blur layers to eliminate GPU raster spikes.
- **Feature 6 (Off-Screen Virtualization)**: Tests `content-visibility: auto` and `contain-intrinsic-size` on below-the-fold sections; verifies above-the-fold hero is never hidden.
- **Feature 7 (Layout & Animation Preservation)**: Tests 100% integrity of Framer appear animation metadata (`__framer__appearAnimationsContent`), mobile hero `100svh` framing, page titles, OpenGraph tags, and responsive breakpoints.
- **Feature 8 (Runner Self-Verification)**: Tests VM sandbox isolation, assertion harness reporting fidelity, execution clock precision, autonomous file access, and deterministic exit codes.

### Tier 2: Boundary & Corner Cases (40 Tests)
Tests extreme conditions and resilience:
- **Rapid Scroll Bursts**: 1000 consecutive scroll events in a tight loop without memory leaks.
- **Scroll Boundaries**: Exact top (y=0), bottom (y=scrollHeight), and zero-delta scrolls.
- **Malformed & Edge Inputs**: Empty/whitespace text nodes, mixed-case strings ("sAlOnIx"), data URI images, images without src.
- **Extreme Viewports**: 320px narrow mobile (iPhone SE), 390x844 modern mobile, 810px tablet, 2560px-3840px 4K ultrawide desktop.
- **Compositing & Layer Limits**: Enforces selective layer creation (< 30 GPU layers per page); tests zero-sized hidden element layer exclusion.
- **Virtualization Edge Jumps**: Rapid scroll jumps directly to footer and back to top.
- **Fault Recovery**: Non-existent page handling, script syntax error isolation, and circular DOM reference traversal protection.

### Tier 3: Cross-Feature Combinations (10 Tests)
Tests pairwise interactions between features:
- `T3-01`: Sticky Fixed Navigation + CSS GPU Scroll Layers (stacking context isolation).
- `T3-02`: Continuous Ticker Transform + Off-Screen Virtualization (smooth animation across virtual boundary).
- `T3-03`: Instagram Gallery Click Handlers + Smooth Scroll Physics (clean event bubbling).
- `T3-04`: Backdrop Blur Isolation + GPU Compositing Layers (zero blur bleed / compositing artifacts).
- `T3-05`: One-Shot Hydration Patcher + Framer Dynamic React Mutations (no observer loops).
- `T3-06`: Mobile Hero 100svh Framing + Touch-Action Pan-Y Physics (frictionless vertical swipe).
- `T3-07`: FAQ Accordion Expansion + Off-Screen Virtualization (dynamic content reflow).
- `T3-08`: Bottle Image Patcher + Virtualized Lower Sections (image asset fidelity).
- `T3-09`: Root Viewport Overflow-X Clip + GPU 3D Transforms (no horizontal scrollbar spill).
- `T3-10`: Main-Thread Freedom + High-Frequency Multi-Touch Scroll (zero blocking microtasks).

### Tier 4: Real-World Application Scenarios (6 Tests)
Simulates end-to-end user workflows:
- `T4-01`: **Continuous 60-Frame Active Scroll Simulation** (0px -> 4000px in 60 frames, measuring JS overhead and observer count).
- `T4-02`: **Mobile Touch Fling & Kinetic Inertial Glide** (realistic touchstart -> touchmove burst -> touchend velocity sequence).
- `T4-03`: **4-Page Full Navigation & Cross-Page State Consistency** (Home -> Services -> About -> Contact state and branding invariants).
- `T4-04`: **Rapid Responsive Breakpoint Transition & Orientation Flip** (Desktop 1440px -> Tablet 810px -> Mobile 390px -> Landscape 844px).
- `T4-05`: **Interactive Gallery Engagement & Booking Form Focus During Momentum Scroll**.
- `T4-06`: **Long-Session Scroll Endurance & Memory Stability** (500 scroll cycles measuring listener and timer accumulation).

---

## How to Execute the Tests

### Full Test Suite
```bash
# From the project directory:
node tests/e2e_test_suite.js
```

### Filter by Tier
```bash
# Execute only Tier 1 (Feature Coverage):
node tests/e2e_test_suite.js --tier=1

# Execute only Tier 2 (Boundary & Corner Cases):
node tests/e2e_test_suite.js --tier=2

# Execute only Tier 3 (Cross-Feature Combinations):
node tests/e2e_test_suite.js --tier=3

# Execute only Tier 4 (Real-World Scenarios):
node tests/e2e_test_suite.js --tier=4
```

### Filter by Feature
```bash
# Execute only Feature 1 tests:
node tests/e2e_test_suite.js --feature=1

# Execute only Feature 4 tests:
node tests/e2e_test_suite.js --feature=4
```

### Machine-Readable JSON Output
```bash
node tests/e2e_test_suite.js --json
```

---

## Invariant Verification Rules
| Invariant | Requirement | Verification Method |
|---|---|---|
| Main-Thread Freedom | 0 blocking microtasks during scroll | Synthetic 60-frame scroll in VM checking observer callbacks & duration |
| GPU Layer Safety | No transform on ancestors of `position: fixed` | Regex & AST inspection of `#global-responsive-fix` rules for `html`, `body`, `#main` |
| Viewport Touch Momentum | `touch-action: pan-y` & `-webkit-overflow-scrolling: touch` | Computed stylesheet inspection across all 4 HTML files |
| Asset & Link Integrity | LIANA branding, Instagram links, bottle assets | Synthetic DOM querySelector inspection after script execution |
| Animation Preservation | 100% intact Framer appear animations | Presence & JSON validation of `__framer__appearAnimationsContent` |
