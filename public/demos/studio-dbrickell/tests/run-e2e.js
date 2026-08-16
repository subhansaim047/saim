#!/usr/bin/env node
/**
 * Master E2E Automated Test Runner for Studio-D Brickell
 * Zero-dependency pure Node 22 CLI orchestrator
 *
 * Usage:
 *   node tests/run-e2e.js
 *   node tests/run-e2e.js --tier=1,2,3,4
 *   node tests/run-e2e.js --feature=F1
 *   node tests/run-e2e.js --json
 *   node tests/run-e2e.js --verbose
 *   node tests/run-e2e.js --bail
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { performance } from 'node:perf_hooks';
import { registry } from './harness.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ANSI Color Helpers
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgBlue: '\x1b[44m'
};

// Parse CLI Arguments
const args = process.argv.slice(2);
const options = {
  tiers: null, // e.g. [1, 2, 3, 4]
  features: null, // e.g. ['F1', 'F2']
  json: false,
  verbose: false,
  bail: false,
  filter: null
};

for (const arg of args) {
  if (arg.startsWith('--tier=')) {
    const val = arg.slice(7).trim();
    if (val.toLowerCase() !== 'all') {
      options.tiers = val.split(',').map(t => parseInt(t.trim(), 10)).filter(n => !isNaN(n));
    }
  } else if (arg.startsWith('--feature=')) {
    const val = arg.slice(10).trim();
    options.features = val.split(',').map(f => {
      let clean = f.trim().toUpperCase();
      if (/^\d+$/.test(clean)) clean = `F${clean.padStart(2, '0')}`;
      if (/^F\d$/.test(clean)) clean = `F0${clean.slice(1)}`;
      return clean;
    });
  } else if (arg === '--json') {
    options.json = true;
  } else if (arg === '--verbose' || arg === '-v') {
    options.verbose = true;
  } else if (arg === '--bail' || arg === '-b') {
    options.bail = true;
  } else if (arg.startsWith('--filter=')) {
    options.filter = new RegExp(arg.slice(9).trim(), 'i');
  }
}

async function loadTestFiles() {
  const tierFiles = [
    { tier: 1, file: './tier1-feature-coverage.test.js' },
    { tier: 2, file: './tier2-boundary-corner.test.js' },
    { tier: 3, file: './tier3-cross-feature.test.js' },
    { tier: 4, file: './tier4-workloads.test.js' }
  ];

  for (const item of tierFiles) {
    if (!options.tiers || options.tiers.includes(item.tier)) {
      try {
        const fullPath = path.resolve(__dirname, item.file);
        await import(`file://${fullPath}`);
      } catch (err) {
        console.error(`${c.red}Failed to load test file ${item.file}:${c.reset}`, err);
        throw err;
      }
    }
  }
}

async function runSuite() {
  const startTime = performance.now();
  await loadTestFiles();

  const results = {
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    durationMs: 0,
    timestamp: new Date().toISOString(),
    tiers: {
      1: { total: 0, passed: 0, failed: 0 },
      2: { total: 0, passed: 0, failed: 0 },
      3: { total: 0, passed: 0, failed: 0 },
      4: { total: 0, passed: 0, failed: 0 }
    },
    suites: []
  };

  if (!options.json) {
    console.log(`\n${c.bold}${c.bgBlue}${c.white} STUDIO-D BRICKELL — 4-TIER E2E AUTOMATED TEST RUNNER ${c.reset}`);
    console.log(`${c.dim}Environment: Node ${process.version} | Pure Zero-Dependency Built-in Harness${c.reset}`);
    if (options.tiers) console.log(`${c.cyan}Active Tiers Filter: [${options.tiers.join(', ')}]${c.reset}`);
    if (options.features) console.log(`${c.cyan}Active Features Filter: [${options.features.join(', ')}]${c.reset}`);
    console.log(`${c.dim}${'─'.repeat(75)}${c.reset}\n`);
  }

  for (const suite of registry.suites) {
    const suiteResult = {
      name: suite.name,
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      tests: []
    };

    // Run beforeAll hooks
    for (const hook of suite.beforeAll) {
      await hook();
    }

    let suiteHeaderPrinted = false;

    for (const testCase of suite.tests) {
      // Determine Tier & Feature
      let tier = testCase.tier || 1;
      let feature = testCase.feature;

      // Infer tier/feature from test id if available
      const idMatch = String(testCase.id).match(/^T([1-4])-F?(\d+)/i);
      if (idMatch) {
        tier = parseInt(idMatch[1], 10);
        const featNum = parseInt(idMatch[2], 10);
        feature = `F${String(featNum).padStart(2, '0')}`;
      } else {
        const tMatch = String(testCase.id).match(/^T([1-4])/i);
        if (tMatch) tier = parseInt(tMatch[1], 10);
      }

      // Apply Filters
      if (options.tiers && !options.tiers.includes(tier)) {
        continue;
      }
      if (options.features && feature && !options.features.includes(feature) && !options.features.includes(`F${parseInt(feature.slice(1), 10)}`)) {
        continue;
      }
      if (options.filter && !options.filter.test(testCase.name) && !options.filter.test(testCase.id)) {
        continue;
      }

      results.total++;
      suiteResult.total++;
      if (results.tiers[tier]) results.tiers[tier].total++;

      if (!options.json && !suiteHeaderPrinted) {
        console.log(`${c.bold}${c.magenta}▶ ${suite.name}${c.reset}`);
        suiteHeaderPrinted = true;
      }

      // Run beforeEach hooks
      for (const hook of suite.beforeEach) {
        await hook();
      }

      const tStart = performance.now();
      let testPassed = false;
      let testError = null;

      try {
        await testCase.fn();
        testPassed = true;
        results.passed++;
        suiteResult.passed++;
        if (results.tiers[tier]) results.tiers[tier].passed++;
      } catch (err) {
        testPassed = false;
        testError = {
          message: err.message || String(err),
          stack: err.stack
        };
        results.failed++;
        suiteResult.failed++;
        if (results.tiers[tier]) results.tiers[tier].failed++;
      } finally {
        // Run afterEach hooks
        for (const hook of suite.afterEach) {
          try { await hook(); } catch (e) { console.error('Error in afterEach hook:', e); }
        }
      }

      const tDuration = (performance.now() - tStart).toFixed(1);

      suiteResult.tests.push({
        id: testCase.id,
        name: testCase.name,
        tier,
        feature,
        passed: testPassed,
        durationMs: parseFloat(tDuration),
        error: testError
      });

      if (!options.json) {
        if (testPassed) {
          console.log(`  ${c.green}✔${c.reset} ${c.dim}[T${tier}]${c.reset} ${c.white}${testCase.name}${c.reset} ${c.dim}(${tDuration}ms)${c.reset}`);
        } else {
          console.log(`  ${c.red}✖ [T${tier}] ${testCase.name} (${tDuration}ms)${c.reset}`);
          console.log(`    ${c.red}Error: ${testError.message}${c.reset}`);
          if (options.verbose && testError.stack) {
            console.log(`    ${c.dim}${testError.stack.split('\n').slice(1, 4).join('\n    ')}${c.reset}`);
          }
        }
      }

      if (!testPassed && options.bail) {
        if (!options.json) console.log(`\n${c.red}${c.bold}Bailing after first test failure.${c.reset}`);
        break;
      }
    }

    // Run afterAll hooks
    for (const hook of suite.afterAll) {
      try { await hook(); } catch (e) { console.error('Error in afterAll hook:', e); }
    }

    if (suiteResult.total > 0) {
      results.suites.push(suiteResult);
      if (!options.json && suiteHeaderPrinted) console.log('');
    }

    if (results.failed > 0 && options.bail) {
      break;
    }
  }

  const endTime = performance.now();
  results.durationMs = parseFloat((endTime - startTime).toFixed(2));

  if (options.json) {
    console.log(JSON.stringify(results, null, 2));
  } else {
    printSummaryTable(results);
  }

  process.exit(results.failed > 0 ? 1 : 0);
}

function printSummaryTable(results) {
  console.log(`${c.dim}${'─'.repeat(75)}${c.reset}`);
  console.log(`${c.bold}E2E TEST EXECUTION SUMMARY${c.reset}\n`);

  console.log(`  ${c.bold}Tier Breakdown:${c.reset}`);
  for (let t = 1; t <= 4; t++) {
    const tierData = results.tiers[t];
    if (tierData.total > 0) {
      const statusColor = tierData.failed === 0 ? c.green : c.red;
      const statusIcon = tierData.failed === 0 ? '✔' : '✖';
      console.log(`   Tier ${t}: ${statusColor}${statusIcon} ${tierData.passed}/${tierData.total} passed${c.reset} ${tierData.failed > 0 ? `(${tierData.failed} failed)` : ''}`);
    }
  }

  console.log('');
  const overallColor = results.failed === 0 ? c.bgGreen : c.bgRed;
  const statusWord = results.failed === 0 ? ' ALL TESTS PASSED ' : ' TESTS FAILED ';

  console.log(`${overallColor}${c.white}${c.bold} ${statusWord} ${c.reset}  Total: ${c.bold}${results.total}${c.reset} | Passed: ${c.green}${results.passed}${c.reset} | Failed: ${results.failed > 0 ? c.red : c.dim}${results.failed}${c.reset} | Duration: ${c.cyan}${results.durationMs}ms${c.reset}\n`);
}

runSuite().catch(err => {
  console.error(`${c.red}Fatal Runner Error:${c.reset}`, err);
  process.exit(1);
});
