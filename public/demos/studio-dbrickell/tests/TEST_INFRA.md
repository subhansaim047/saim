# Studio-D Brickell 4-Tier E2E Automated Test Infrastructure

## 1. Executive Summary & Mission
This automated test suite provides pure zero-dependency, high-speed, opaque-box E2E verification for the Studio-D Brickell Luxury Beauty Salon website clone. It validates complete visual fidelity, responsive layout mechanics, JavaScript event interactions, asset bundling integrity, and portfolio integration within the `saim-website` ecosystem.

## 2. Architecture & Design Principles
- **Zero External Dependencies**: Implemented strictly using Node.js 22 built-in modules (`node:fs`, `node:path`, `node:url`, `node:vm`, `node:perf_hooks`). Zero npm packages required.
- **Sub-Second Execution**: Complete 130-test suite executes in < 500ms.
- **100% Offline & Standalone**: Asserts local disk asset existence, magic byte headers, and relative URL bindings without live network calls.
- **Multi-Domain Deep Inspection**:
  - `MockDOM`: Complete HTML5 parser, querySelector engine, classList, style proxy, and synthetic DOM event dispatcher.
  - `CSSParser`: Rule extractor, `@media` query parser, `@font-face` descriptor inspector, and `@keyframes` animation validator.
  - `VMSandbox`: Isolated `node:vm` context executing browser-like script interactions.
  - `AssetAuditor`: File system scanner verifying image magic bytes, non-empty file sizes, and 0 missing assets.
  - `PortfolioAuditor`: TypeScript component parser validating `DemoItem` schema registration in `src/components/DemosPage.tsx`.

## 3. Test Suite Layout
```
public/demos/studio-dbrickell/tests/
├── harness.js                         # Core test engine (MockDOM, CSSParser, VMSandbox, AssetAuditor, PortfolioAuditor, DSL)
├── run-e2e.js                         # Master CLI orchestrator with ANSI formatting and filtering flags
├── tier1-feature-coverage.test.js     # Tier 1: 85 test cases covering Features F1 through F17 (>= 5 tests/feature)
├── tier2-boundary-corner.test.js      # Tier 2: 30 test cases covering Boundary Domains B1 through B6
├── tier3-cross-feature.test.js        # Tier 3: 10 test cases covering Pairwise Cross-Feature Interactions
├── tier4-workloads.test.js            # Tier 4: 5 real-world end-user customer journey scenarios
├── verify_assets.js                   # Standalone asset binary & magic byte verifier
└── TEST_INFRA.md                      # Complete test infrastructure documentation
```

## 4. Test Matrix & Coverage Summary (130 Test Cases)

| Tier | Category | Tests | Scope & Description |
|---|---|---|---|
| **Tier 1** | Feature Coverage (F1–F17) | **85** | 5 tests per feature covering DOM elements, colors, fonts, links, copy, and layout. |
| **Tier 2** | Boundary & Corner Cases (B1–B6) | **30** | Extreme viewports (320px/800px/1024px/2560px), empty/malformed forms, long text, XSS safety, no-JS fallback, rapid clicks. |
| **Tier 3** | Cross-Feature Interactions | **10** | Pairwise combinations (nav + hero, booking submit + reset, mobile bar + menu, carousel + timer, portfolio modal switcher). |
| **Tier 4** | Real-World Workloads | **5** | Full customer journeys: Salon Discovery, Kérastase Inquiry, Mobile Directions, Stylist Reviews, Recruiter Portfolio Modal. |
| **TOTAL** | **All Tiers** | **130** | Exhaustive opaque-box verification suite. |

## 5. Execution Guide & CLI Reference

### Run Full Suite:
```bash
node public/demos/studio-dbrickell/tests/run-e2e.js
```

### Run Specific Tier(s):
```bash
node public/demos/studio-dbrickell/tests/run-e2e.js --tier=1
node public/demos/studio-dbrickell/tests/run-e2e.js --tier=1,2
node public/demos/studio-dbrickell/tests/run-e2e.js --tier=4
```

### Filter by Specific Feature:
```bash
node public/demos/studio-dbrickell/tests/run-e2e.js --feature=F1
node public/demos/studio-dbrickell/tests/run-e2e.js --feature=F10
```

### Output JSON for Machine / CI Parsing:
```bash
node public/demos/studio-dbrickell/tests/run-e2e.js --json
```

### Verbose Mode with Error Stacks:
```bash
node public/demos/studio-dbrickell/tests/run-e2e.js --verbose
```

### Bail on First Failure:
```bash
node public/demos/studio-dbrickell/tests/run-e2e.js --bail
```
