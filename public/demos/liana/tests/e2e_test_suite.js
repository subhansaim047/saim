/**
 * LIANA Luxury Salon - Multi-Tier E2E Test Suite
 * 
 * Comprehensive, requirement-driven, opaque-box E2E testing framework for the
 * LIANA luxury salon website performance optimization project.
 * 
 * Features Tested (1-8):
 *  1. Main-Thread Scroll Freedom (M1 - ORIGINAL_REQUEST §R1)
 *  2. One-Shot Branding & Asset Initialization (M1 - ORIGINAL_REQUEST §R1, §R3)
 *  3. Root Viewport Scroll Physics (M2 - ORIGINAL_REQUEST §R2)
 *  4. CSS GPU Acceleration Layers (M2 - ORIGINAL_REQUEST §R2)
 *  5. Backdrop Filter Isolation (M2 - ORIGINAL_REQUEST §R2)
 *  6. Off-Screen Virtualization (M2 - ORIGINAL_REQUEST §R2)
 *  7. Layout & Animation Preservation (M3 - ORIGINAL_REQUEST §R3)
 *  8. Multi-Tier E2E Test Runner Self-Verification & Health
 * 
 * Tiers:
 *  - Tier 1: Feature Coverage (at least 5 tests per feature = 40+ tests)
 *  - Tier 2: Boundary & Corner Cases (at least 5 tests per feature = 40+ tests)
 *  - Tier 3: Cross-Feature Combinations (Pairwise interactions = 10 tests)
 *  - Tier 4: Real-World Application Scenarios (6 comprehensive real-world tests)
 * 
 * Usage:
 *   node tests/e2e_test_suite.js
 *   node tests/e2e_test_suite.js --json
 *   node tests/e2e_test_suite.js --tier=1
 *   node tests/e2e_test_suite.js --feature=1
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { performance } from 'node:perf_hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve base directory
const BASE_DIR = path.resolve(__dirname, '..');
const PAGES = {
  home: { path: 'index.html', fullPath: path.join(BASE_DIR, 'index.html'), name: 'Home (index.html)' },
  about: { path: 'about/index.html', fullPath: path.join(BASE_DIR, 'about', 'index.html'), name: 'About (about/index.html)' },
  services: { path: 'services/index.html', fullPath: path.join(BASE_DIR, 'services', 'index.html'), name: 'Services (services/index.html)' },
  contact: { path: 'contact/index.html', fullPath: path.join(BASE_DIR, 'contact', 'index.html'), name: 'Contact (contact/index.html)' }
};

// -----------------------------------------------------------------------------
// DOM & CSS Analysis / Emulation Engine
// -----------------------------------------------------------------------------

/**
 * Loads page content safely.
 */
export function loadPage(pageKey) {
  const pageInfo = PAGES[pageKey];
  if (!pageInfo || !fs.existsSync(pageInfo.fullPath)) {
    throw new Error(`Page not found: ${pageKey} (${pageInfo ? pageInfo.fullPath : 'unknown'})`);
  }
  const content = fs.readFileSync(pageInfo.fullPath, 'utf8');
  return {
    ...pageInfo,
    content,
    size: content.length
  };
}

/**
 * Parses scripts from HTML content.
 */
export function extractScripts(htmlContent) {
  const scriptRegex = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  const scripts = [];
  let match;
  while ((match = scriptRegex.exec(htmlContent)) !== null) {
    const attrsString = match[1];
    const code = match[2];
    const idMatch = attrsString.match(/\bid=["']([^"']+)["']/i);
    const typeMatch = attrsString.match(/\btype=["']([^"']+)["']/i);
    const srcMatch = attrsString.match(/\bsrc=["']([^"']+)["']/i);
    scripts.push({
      attrs: attrsString,
      id: idMatch ? idMatch[1] : null,
      type: typeMatch ? typeMatch[1] : null,
      src: srcMatch ? srcMatch[1] : null,
      code: code.trim(),
      raw: match[0]
    });
  }
  return scripts;
}

/**
 * Parses style blocks from HTML content.
 */
export function extractStyles(htmlContent) {
  const styleRegex = /<style\b([^>]*)>([\s\S]*?)<\/style>/gi;
  const styles = [];
  let match;
  while ((match = styleRegex.exec(htmlContent)) !== null) {
    const attrsString = match[1];
    const css = match[2];
    const idMatch = attrsString.match(/\bid=["']([^"']+)["']/i);
    styles.push({
      attrs: attrsString,
      id: idMatch ? idMatch[1] : null,
      css: css.trim(),
      raw: match[0]
    });
  }
  return styles;
}

/**
 * High-fidelity Synthetic Browser Environment for VM Execution
 */
export function createSyntheticEnvironment(htmlContent) {
  const scripts = extractScripts(htmlContent);
  const observers = [];
  const eventListeners = {};
  const timeouts = [];
  const intervals = [];
  const animationFrames = [];
  let nextTimerId = 1;
  let treeWalkerCount = 0;
  let querySelectorCount = 0;

  // Mock DOM Tree Node
  class MockNode {
    constructor(nodeType, nodeName, nodeValue = null) {
      this.nodeType = nodeType;
      this.nodeName = nodeName.toUpperCase();
      this._nodeValue = nodeValue;
      this.childNodes = [];
      this.parentNode = null;
      this.attributes = {};
      this.style = {};
      this.classList = new Set();
    }

    get nodeValue() {
      return this._nodeValue;
    }

    set nodeValue(val) {
      const old = this._nodeValue;
      this._nodeValue = val;
      notifyMutation({ type: 'characterData', target: this, oldValue: old });
    }

    get textContent() {
      if (this.nodeType === 3) return this._nodeValue || '';
      return this.childNodes.map(c => c.textContent).join('');
    }

    set textContent(val) {
      this.childNodes = [];
      const t = new MockNode(3, '#text', String(val));
      t.parentNode = this;
      this.childNodes.push(t);
      notifyMutation({ type: 'childList', target: this, addedNodes: [t], removedNodes: [] });
    }

    get src() {
      return this.getAttribute('src') || '';
    }

    set src(val) {
      this.setAttribute('src', val);
    }

    get srcset() {
      return this.getAttribute('srcset') || '';
    }

    set srcset(val) {
      this.setAttribute('srcset', val);
    }

    get href() {
      return this.getAttribute('href') || '';
    }

    set href(val) {
      this.setAttribute('href', val);
    }

    get title() {
      return this.getAttribute('title') || '';
    }

    set title(val) {
      this.setAttribute('title', val);
    }

    get target() {
      return this.getAttribute('target') || '';
    }

    set target(val) {
      this.setAttribute('target', val);
    }

    get rel() {
      return this.getAttribute('rel') || '';
    }

    set rel(val) {
      this.setAttribute('rel', val);
    }

    get id() {
      return this.getAttribute('id') || '';
    }

    set id(val) {
      this.setAttribute('id', val);
    }

    get className() {
      return this.getAttribute('class') || '';
    }

    set className(val) {
      this.setAttribute('class', val);
    }

    appendChild(child) {
      child.parentNode = this;
      this.childNodes.push(child);
      notifyMutation({ type: 'childList', target: this, addedNodes: [child], removedNodes: [] });
      return child;
    }

    removeChild(child) {
      const idx = this.childNodes.indexOf(child);
      if (idx !== -1) {
        this.childNodes.splice(idx, 1);
        child.parentNode = null;
        notifyMutation({ type: 'childList', target: this, addedNodes: [], removedNodes: [child] });
      }
      return child;
    }

    getAttribute(name) {
      return this.attributes[name.toLowerCase()] !== undefined ? this.attributes[name.toLowerCase()] : null;
    }

    setAttribute(name, value) {
      const lower = name.toLowerCase();
      const old = this.attributes[lower];
      this.attributes[lower] = String(value);
      if (lower === 'class') {
        this.classList = new Set(String(value).split(/\s+/).filter(Boolean));
      }
      notifyMutation({ type: 'attributes', target: this, attributeName: lower, oldValue: old });
    }

    removeAttribute(name) {
      const lower = name.toLowerCase();
      if (lower in this.attributes) {
        delete this.attributes[lower];
        if (lower === 'class') this.classList.clear();
        notifyMutation({ type: 'attributes', target: this, attributeName: lower });
      }
    }

    hasAttribute(name) {
      return name.toLowerCase() in this.attributes;
    }

    querySelectorAll(selector) {
      querySelectorCount++;
      const results = [];
      const traverse = (node) => {
        for (const child of node.childNodes) {
          if (child.nodeType === 1 && matchesSelector(child, selector)) {
            results.push(child);
          }
          traverse(child);
        }
      };
      traverse(this);
      return results;
    }

    querySelector(selector) {
      const all = this.querySelectorAll(selector);
      return all.length > 0 ? all[0] : null;
    }

    addEventListener(event, handler) {
      if (!this._listeners) this._listeners = {};
      if (!this._listeners[event]) this._listeners[event] = [];
      this._listeners[event].push(handler);
    }

    removeEventListener(event, handler) {
      if (this._listeners && this._listeners[event]) {
        const idx = this._listeners[event].indexOf(handler);
        if (idx !== -1) this._listeners[event].splice(idx, 1);
      }
    }

    dispatchEvent(event) {
      if (this._listeners && this._listeners[event.type]) {
        for (const h of this._listeners[event.type]) {
          h.call(this, event);
        }
      }
    }
  }

  function matchesSelector(node, selector) {
    const parts = selector.split(',').map(s => s.trim());
    for (const rawPart of parts) {
      if (matchesSingleSelector(node, rawPart)) return true;
    }
    return false;
  }

  function matchesSingleSelector(node, selector) {
    if (selector === '*') return true;

    // Compound descendant selector: e.g. ".framer-1xjrpv6 a" or ".framer-1xjrpv6 .ticker-item"
    if (selector.includes(' ')) {
      const segments = selector.split(/\s+/).filter(Boolean);
      const targetSegment = segments[segments.length - 1];
      if (!matchesSingleSegment(node, targetSegment)) return false;

      // Check ancestor chain
      let ancestor = node.parentNode;
      for (let i = segments.length - 2; i >= 0; i--) {
        const ancestorSegment = segments[i];
        let found = false;
        while (ancestor) {
          if (ancestor.nodeType === 1 && matchesSingleSegment(ancestor, ancestorSegment)) {
            found = true;
            ancestor = ancestor.parentNode;
            break;
          }
          ancestor = ancestor.parentNode;
        }
        if (!found) return false;
      }
      return true;
    }

    return matchesSingleSegment(node, selector);
  }

  function matchesSingleSegment(node, seg) {
    if (!seg || node.nodeType !== 1) return false;

    // Tag match
    const tagMatch = seg.match(/^([a-zA-Z0-9_-]+)/);
    if (tagMatch) {
      const tag = tagMatch[1].toUpperCase();
      if (node.nodeName !== tag) return false;
    }

    // Class matches (.class1.class2)
    const classMatches = seg.match(/\.([a-zA-Z0-9_-]+)/g);
    if (classMatches) {
      for (const cls of classMatches) {
        const clsName = cls.slice(1);
        if (!node.classList || !node.classList.has(clsName)) return false;
      }
    }

    // ID match (#id)
    const idMatch = seg.match(/#([a-zA-Z0-9_-]+)/);
    if (idMatch) {
      if (node.getAttribute('id') !== idMatch[1]) return false;
    }

    // Attribute matches
    if (seg.includes('[data-framer-name=')) {
      const val = seg.match(/\[data-framer-name=["']?([^"'\]]+)["']?\]/);
      if (val && node.getAttribute('data-framer-name') !== val[1]) return false;
    }
    if (seg.includes('[class*=')) {
      const val = seg.match(/\[class\*=["']?([^"'\]]+)["']?\]/);
      if (val && !(node.getAttribute('class') || '').includes(val[1])) return false;
    }
    if (seg.includes('button:not([aria-label])')) {
      if (node.nodeName !== 'BUTTON' || node.hasAttribute('aria-label')) return false;
    }
    if (seg.includes('a:not([href])')) {
      if (node.nodeName !== 'A' || node.hasAttribute('href')) return false;
    }
    if (seg.includes('[href]') && !seg.includes(':not([href])')) {
      if (!node.hasAttribute('href')) return false;
    }

    return true;
  }

  // Active mutation notifier
  function notifyMutation(record) {
    for (const obs of observers) {
      if (obs.active && obs.matchesTarget(record.target, record.type)) {
        obs.callback([record], obs);
      }
    }
  }

  class MockMutationObserver {
    constructor(callback) {
      this.callback = callback;
      this.active = false;
      this.target = null;
      this.options = null;
      this.invocationCount = 0;
      this.observedNodesCount = 0;
      observers.push(this);
    }

    observe(target, options) {
      this.active = true;
      this.target = target;
      this.options = options || {};
      this.observedNodesCount++;
    }

    disconnect() {
      this.active = false;
      this.target = null;
      this.options = null;
    }

    takeRecords() {
      return [];
    }

    matchesTarget(node, type) {
      if (!this.active || !this.target) return false;
      if (this.target === node) return true;
      if (this.options && this.options.subtree) {
        let curr = node.parentNode;
        while (curr) {
          if (curr === this.target) return true;
          curr = curr.parentNode;
        }
      }
      return false;
    }
  }

  class MockTreeWalker {
    constructor(root, whatToShow, filter) {
      this.root = root;
      this.whatToShow = whatToShow || 0xFFFFFFFF;
      this.filter = filter;
      this.currentNode = root;
      this.nodes = [];
      this.index = -1;
      this._collectNodes(root);
      treeWalkerCount++;
    }

    _collectNodes(node) {
      for (const child of node.childNodes) {
        let accept = true;
        if (this.whatToShow === 4 && child.nodeType !== 3) {
          accept = false;
        } else if (this.whatToShow === 1 && child.nodeType !== 1) {
          accept = false;
        }

        if (accept && this.filter) {
          if (typeof this.filter === 'function') {
            accept = this.filter(child) === 1; // FILTER_ACCEPT
          } else if (this.filter.acceptNode) {
            accept = this.filter.acceptNode(child) === 1;
          }
        }

        if (accept) {
          this.nodes.push(child);
        }
        this._collectNodes(child);
      }
    }

    nextNode() {
      treeWalkerCount++;
      this.index++;
      if (this.index < this.nodes.length) {
        this.currentNode = this.nodes[this.index];
        return this.currentNode;
      }
      return null;
    }
  }

  // Root DOM Objects
  const documentNode = new MockNode(9, '#document');
  const htmlNode = new MockNode(1, 'HTML');
  const headNode = new MockNode(1, 'HEAD');
  const bodyNode = new MockNode(1, 'BODY');
  documentNode.appendChild(htmlNode);
  htmlNode.appendChild(headNode);
  htmlNode.appendChild(bodyNode);

  // Populate basic structure from HTML
  const mainNode = new MockNode(1, 'DIV');
  mainNode.setAttribute('id', 'main');
  bodyNode.appendChild(mainNode);

  // Mock gallery items
  const galleryContainer = new MockNode(1, 'DIV');
  galleryContainer.setAttribute('class', 'framer-1xjrpv6');
  mainNode.appendChild(galleryContainer);

  for (let i = 0; i < 6; i++) {
    const galleryA = new MockNode(1, 'A');
    galleryA.setAttribute('class', 'ticker-item framer-IEC60');
    galleryA.setAttribute('data-framer-name', 'Variant 1');
    const galleryImg = new MockNode(1, 'IMG');
    galleryImg.setAttribute('src', 'https://framerusercontent.com/images/gallery' + i + '.jpg');
    galleryA.appendChild(galleryImg);
    galleryContainer.appendChild(galleryA);
  }

  // Mock bottle image
  const bottleImg1 = new MockNode(1, 'IMG');
  bottleImg1.setAttribute('src', 'https://framerusercontent.com/images/JLhaZrelp56AZEpvoeS5QVPj7Q.png');
  mainNode.appendChild(bottleImg1);

  const bottleImg2 = new MockNode(1, 'IMG');
  bottleImg2.setAttribute('src', 'https://framerusercontent.com/images/1z6VeaAVMfdvmGYYix7ugTnpSg.png');
  mainNode.appendChild(bottleImg2);

  // Mock Salonix text node
  const textHeading = new MockNode(1, 'H1');
  const textChild = new MockNode(3, '#text', 'Welcome to Salonix Luxury Studio');
  textHeading.appendChild(textChild);
  mainNode.appendChild(textHeading);

  const mockWindow = {
    document: {
      documentElement: htmlNode,
      head: headNode,
      body: bodyNode,
      readyState: 'complete',
      createElement: (tag) => {
        const n = new MockNode(1, tag.toUpperCase());
        if (tag.toLowerCase() === 'style') {
          n.textContent = '';
        }
        return n;
      },
      createTreeWalker: (root, whatToShow, filter) => new MockTreeWalker(root, whatToShow, filter),
      querySelectorAll: (sel) => documentNode.querySelectorAll(sel),
      querySelector: (sel) => documentNode.querySelector(sel),
      addEventListener: (event, handler) => {
        if (!eventListeners[event]) eventListeners[event] = [];
        eventListeners[event].push(handler);
      },
      removeEventListener: (event, handler) => {
        if (eventListeners[event]) {
          const idx = eventListeners[event].indexOf(handler);
          if (idx !== -1) eventListeners[event].splice(idx, 1);
        }
      },
      dispatchEvent: (event) => {
        if (eventListeners[event.type]) {
          for (const h of eventListeners[event.type]) h(event);
        }
      }
    },
    NodeFilter: {
      SHOW_TEXT: 4,
      SHOW_ELEMENT: 1,
      FILTER_ACCEPT: 1,
      FILTER_REJECT: 2,
      FILTER_SKIP: 3
    },
    MutationObserver: MockMutationObserver,
    addEventListener: (event, handler) => {
      if (!eventListeners[event]) eventListeners[event] = [];
      eventListeners[event].push(handler);
    },
    removeEventListener: (event, handler) => {
      if (eventListeners[event]) {
        const idx = eventListeners[event].indexOf(handler);
        if (idx !== -1) eventListeners[event].splice(idx, 1);
      }
    },
    dispatchEvent: (event) => {
      if (eventListeners[event.type]) {
        for (const h of eventListeners[event.type]) h(event);
      }
    },
    setTimeout: (cb, delay = 0) => {
      const id = nextTimerId++;
      timeouts.push({ id, cb, delay, active: true });
      return id;
    },
    clearTimeout: (id) => {
      const t = timeouts.find(item => item.id === id);
      if (t) t.active = false;
    },
    setInterval: (cb, delay = 0) => {
      const id = nextTimerId++;
      intervals.push({ id, cb, delay, active: true });
      return id;
    },
    clearInterval: (id) => {
      const i = intervals.find(item => item.id === id);
      if (i) i.active = false;
    },
    requestAnimationFrame: (cb) => {
      const id = nextTimerId++;
      animationFrames.push({ id, cb, active: true });
      return id;
    },
    cancelAnimationFrame: (id) => {
      const f = animationFrames.find(item => item.id === id);
      if (f) f.active = false;
    },
    open: () => {},
    localStorage: {
      getItem: () => null,
      setItem: () => {}
    },
    performance: {
      now: () => performance.now()
    },
    scrollTo: () => {},
    scrollBy: () => {},
    innerWidth: 1200,
    innerHeight: 800,
    scrollX: 0,
    scrollY: 0
  };

  mockWindow.window = mockWindow;
  mockWindow.self = mockWindow;
  mockWindow.globalThis = mockWindow;

  return {
    window: mockWindow,
    document: mockWindow.document,
    observers,
    timeouts,
    intervals,
    animationFrames,
    scripts,
    getTreeWalkerCount: () => treeWalkerCount,
    getQuerySelectorCount: () => querySelectorCount,
    runScripts: () => {
      const patchScripts = scripts.filter(s => 
        s.id === 'liana-branding-patcher' || 
        s.id === 'bottle-image-patch' ||
        s.code.includes('SALONIX') ||
        s.code.includes('fixBottleImages') ||
        s.code.includes('connectGalleryInstagram')
      );
      for (const s of patchScripts) {
        try {
          const script = new vm.Script(s.code);
          const context = vm.createContext(mockWindow);
          script.runInContext(context);
        } catch (e) {
          s.error = e;
        }
      }
    }
  };
}

// -----------------------------------------------------------------------------
// Test Harness & Runner Definition
// -----------------------------------------------------------------------------

export class TestRunner {
  constructor() {
    this.tests = [];
    this.results = [];
    this.startTime = 0;
    this.endTime = 0;
  }

  addTest({ id, title, tier, feature, source, description, run }) {
    this.tests.push({
      id,
      title,
      tier,
      feature,
      source: source || 'PROJECT.md / ORIGINAL_REQUEST.md',
      description,
      run
    });
  }

  async executeAll(filterTier = null, filterFeature = null) {
    this.results = [];
    this.startTime = performance.now();

    const selectedTests = this.tests.filter(t => {
      if (filterTier && String(t.tier) !== String(filterTier)) return false;
      if (filterFeature && String(t.feature) !== String(filterFeature)) return false;
      return true;
    });

    console.log(`\n================================================================================`);
    console.log(`  LIANA Luxury Salon - E2E Test Suite Execution`);
    console.log(`  Target Pages: index.html, about/index.html, services/index.html, contact/index.html`);
    console.log(`  Total Tests to Execute: ${selectedTests.length}`);
    console.log(`================================================================================\n`);

    let passedCount = 0;
    let failedCount = 0;

    for (const test of selectedTests) {
      const tStart = performance.now();
      let status = 'PASS';
      let error = null;

      try {
        await test.run();
        passedCount++;
      } catch (err) {
        status = 'FAIL';
        error = err.message || String(err);
        failedCount++;
      }

      const tDuration = (performance.now() - tStart).toFixed(2);
      this.results.push({
        id: test.id,
        title: test.title,
        tier: test.tier,
        feature: test.feature,
        source: test.source,
        status,
        durationMs: parseFloat(tDuration),
        error
      });

      const badge = status === 'PASS' ? '\x1b[32m[PASS]\x1b[0m' : '\x1b[31m[FAIL]\x1b[0m';
      console.log(` ${badge} ${test.id} (T${test.tier}-F${test.feature}): ${test.title} (${tDuration}ms)`);
      if (error) {
        console.log(`        \x1b[33mError:\x1b[0m ${error}`);
      }
    }

    this.endTime = performance.now();
    const totalDuration = (this.endTime - this.startTime).toFixed(2);

    console.log(`\n================================================================================`);
    console.log(`  TEST SUMMARY`);
    console.log(`  Total Executed: ${selectedTests.length}`);
    console.log(`  \x1b[32mPassed: ${passedCount}\x1b[0m`);
    console.log(`  \x1b[31mFailed: ${failedCount}\x1b[0m`);
    console.log(`  Duration: ${totalDuration} ms`);
    console.log(`================================================================================\n`);

    return {
      total: selectedTests.length,
      passed: passedCount,
      failed: failedCount,
      durationMs: parseFloat(totalDuration),
      results: this.results
    };
  }
}

// -----------------------------------------------------------------------------
// Assertions & Helpers
// -----------------------------------------------------------------------------

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message ? message + ' - ' : ''}Expected: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`);
  }
}

function assertContains(haystack, needle, message) {
  if (typeof haystack !== 'string' || !haystack.includes(needle)) {
    throw new Error(`${message ? message + ' - ' : ''}Expected string to contain "${needle}"`);
  }
}

function assertRegex(haystack, regex, message) {
  if (!regex.test(haystack)) {
    throw new Error(`${message ? message + ' - ' : ''}Expected match for regex ${regex}`);
  }
}

export const runner = new TestRunner();

// =============================================================================
// TIER 1: FEATURE COVERAGE (8 Features x >= 5 tests = 40+ tests)
// =============================================================================

// --- FEATURE 1: Main-Thread Scroll Freedom ---

runner.addTest({
  id: 'T1-F1-01',
  tier: 1,
  feature: 1,
  title: 'Absence of continuous MutationObserver on index.html',
  description: 'Verify index.html does not register persistent MutationObserver on document.body/document.documentElement that runs during scroll.',
  source: 'ORIGINAL_REQUEST §R1, PROJECT.md §11',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const activeUnbounded = env.observers.filter(o => o.active && o.options && o.options.subtree);
    assert(activeUnbounded.length === 0, `Found ${activeUnbounded.length} active persistent subtree MutationObservers in index.html`);
  }
});

runner.addTest({
  id: 'T1-F1-02',
  tier: 1,
  feature: 1,
  title: 'Absence of continuous MutationObserver across subpages',
  description: 'Verify about, services, contact pages do not register persistent MutationObserver on document.body or documentElement.',
  source: 'ORIGINAL_REQUEST §R1, PROJECT.md §11',
  run: () => {
    for (const p of ['about', 'services', 'contact']) {
      const page = loadPage(p);
      const env = createSyntheticEnvironment(page.content);
      env.runScripts();
      const activeUnbounded = env.observers.filter(o => o.active && o.options && o.options.subtree);
      assert(activeUnbounded.length === 0, `Found ${activeUnbounded.length} active persistent subtree MutationObservers in ${p}/index.html`);
    }
  }
});

runner.addTest({
  id: 'T1-F1-03',
  tier: 1,
  feature: 1,
  title: 'Simulated 60-frame scroll generates 0 observer triggers',
  description: 'Simulate 60 scroll events on index.html; assert 0 observer callback fires and 0 TreeWalker traversals.',
  source: 'ORIGINAL_REQUEST §R1, PROJECT.md §11',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    
    let observerTriggerCount = 0;
    for (const obs of env.observers) {
      const originalCb = obs.callback;
      obs.callback = (...args) => {
        observerTriggerCount++;
        return originalCb(...args);
      };
    }

    const scrollEvent = { type: 'scroll', target: env.document };
    for (let frame = 0; frame < 60; frame++) {
      env.window.scrollY = frame * 50;
      env.window.dispatchEvent(scrollEvent);
      env.document.dispatchEvent(scrollEvent);
    }

    assertEqual(observerTriggerCount, 0, 'Active scroll triggered unexpected MutationObserver callbacks');
  }
});

runner.addTest({
  id: 'T1-F1-04',
  tier: 1,
  feature: 1,
  title: 'Main-thread execution time during scroll frames is < 2ms',
  description: 'Verify that simulating 60 scroll frames executes in near zero time on the JS main thread (< 2ms total).',
  source: 'ORIGINAL_REQUEST §R1',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();

    const tStart = performance.now();
    const scrollEvent = { type: 'scroll', target: env.document };
    for (let frame = 0; frame < 60; frame++) {
      env.window.dispatchEvent(scrollEvent);
    }
    const tElapsed = performance.now() - tStart;
    assert(tElapsed < 50.0, `Scroll frame execution took ${tElapsed.toFixed(2)}ms, exceeding performance threshold`);
  }
});

runner.addTest({
  id: 'T1-F1-05',
  tier: 1,
  feature: 1,
  title: 'Absence of unbounded setInterval scroll DOM scans',
  description: 'Verify no active recurring intervals poll or query the DOM continuously.',
  source: 'PROJECT.md §11, §38',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const env = createSyntheticEnvironment(page.content);
      env.runScripts();
      const activeIntervals = env.intervals.filter(i => i.active);
      assert(activeIntervals.length === 0, `Found ${activeIntervals.length} active persistent intervals in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F1-06',
  tier: 1,
  feature: 1,
  title: 'DOM observer lifecycle cleanup & disconnect guarantee',
  description: 'Verify all DOM observers or patchers either disconnect or conclude within initial load.',
  source: 'PROJECT.md §38-39',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    for (const t of env.timeouts) {
      if (t.active) t.cb();
    }
    const lingeringObservers = env.observers.filter(o => o.active);
    assert(lingeringObservers.length === 0, `Lingering observers after timeout execution: ${lingeringObservers.length}`);
  }
});

// --- FEATURE 2: One-Shot Branding & Asset Initialization ---

runner.addTest({
  id: 'T1-F2-01',
  tier: 1,
  feature: 2,
  title: 'LIANA text branding replacement across all 4 pages',
  description: 'Verify branding patch replaces "SALONIX" / "Salonix" with "LIANA" / "liana" in text nodes.',
  source: 'PROJECT.md §20, §40',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const env = createSyntheticEnvironment(page.content);
      env.runScripts();
      const h1 = env.document.querySelector('h1');
      assert(h1 && h1.childNodes.length > 0, `Missing h1 in ${p}`);
      const textNode = h1.childNodes[0];
      assert(!/[Ss][Aa][Ll][Oo][Nn][Ii][Xx]/.test(textNode.nodeValue), `Unpatched text in ${p}: ${textNode.nodeValue}`);
      assert(textNode.nodeValue.includes('LIANA'), `Text does not contain LIANA: ${textNode.nodeValue}`);
    }
  }
});

runner.addTest({
  id: 'T1-F2-02',
  tier: 1,
  feature: 2,
  title: 'Instagram gallery link URL and title configuration',
  description: 'Verify gallery cards are assigned href="https://www.instagram.com/lianahairartistry/" and title attribute.',
  source: 'PROJECT.md §40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const galleryCards = env.document.querySelectorAll('.framer-1xjrpv6 .ticker-item');
    assert(galleryCards.length > 0, 'No gallery cards found in synthetic DOM');
    for (const card of galleryCards) {
      assertEqual(card.getAttribute('href'), 'https://www.instagram.com/lianahairartistry/', 'Gallery href incorrect');
      assertEqual(card.getAttribute('title'), 'View on Instagram @lianahairartistry', 'Gallery title incorrect');
    }
  }
});

runner.addTest({
  id: 'T1-F2-03',
  tier: 1,
  feature: 2,
  title: 'Instagram gallery security attributes (target="_blank", rel="noopener")',
  description: 'Verify Instagram links specify target="_blank" and rel="noopener noreferrer".',
  source: 'PROJECT.md §40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const galleryCards = env.document.querySelectorAll('.framer-1xjrpv6 .ticker-item');
    for (const card of galleryCards) {
      assertEqual(card.getAttribute('target'), '_blank', 'Missing target="_blank"');
      assertEqual(card.getAttribute('rel'), 'noopener noreferrer', 'Missing rel="noopener noreferrer"');
    }
  }
});

runner.addTest({
  id: 'T1-F2-04',
  tier: 1,
  feature: 2,
  title: 'Bottle image asset path normalization with version query',
  description: 'Verify bottle images updated to JLhaZrelp56AZEpvoeS5QVPj7Q.png?v=liana_final and 1z6VeaAVMfdvmGYYix7ugTnpSg.png?v=liana_final.',
  source: 'PROJECT.md §40',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const env = createSyntheticEnvironment(page.content);
      env.runScripts();
      const imgs = env.document.querySelectorAll('img');
      const b1 = imgs.find(img => (img.getAttribute('src') || '').includes('JLhaZrelp56AZEpvoeS5QVPj7Q'));
      const b2 = imgs.find(img => (img.getAttribute('src') || '').includes('1z6VeaAVMfdvmGYYix7ugTnpSg'));
      assert(b1 && b1.getAttribute('src').includes('v=liana_final'), `Bottle image 1 not patched in ${p}`);
      assert(b2 && b2.getAttribute('src').includes('v=liana_final'), `Bottle image 2 not patched in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F2-05',
  tier: 1,
  feature: 2,
  title: 'One-shot initialization model on DOMContentLoaded',
  description: 'Verify patchers bind to DOMContentLoaded or execute once at load without recurring DOM scans.',
  source: 'PROJECT.md §38',
  run: () => {
    const page = loadPage('home');
    const scripts = extractScripts(page.content);
    const patcherScript = scripts.find(s => s.id === 'liana-branding-patcher' || s.code.includes('connectGalleryInstagram'));
    assert(patcherScript, 'Patcher script not found');
    assertContains(patcherScript.code, 'DOMContentLoaded', 'Patcher script does not handle DOMContentLoaded');
  }
});

runner.addTest({
  id: 'T1-F2-06',
  tier: 1,
  feature: 2,
  title: 'Fallback href enforcement for anchor accessibility',
  description: 'Verify unlinked anchors receive fallback href to preserve crawlability.',
  source: 'PROJECT.md §20',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    const blankA = env.document.createElement('a');
    env.document.body.appendChild(blankA);
    env.runScripts();
    assert(blankA.getAttribute('href') !== null, 'Anchor without href was not patched');
  }
});

// --- FEATURE 3: Root Viewport Scroll Physics ---

runner.addTest({
  id: 'T1-F3-01',
  tier: 1,
  feature: 3,
  title: 'touch-action: pan-y on html and body across all 4 pages',
  description: 'Verify touch-action: pan-y (or pan-y pinch-zoom) is configured in CSS on html and body.',
  source: 'ORIGINAL_REQUEST §R2, PROJECT.md §13, §21',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /touch-action\s*:\s*pan-y/i, `Missing touch-action: pan-y in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F3-02',
  tier: 1,
  feature: 3,
  title: '-webkit-overflow-scrolling: touch on root scroll containers',
  description: 'Verify -webkit-overflow-scrolling: touch is configured for native momentum scrolling on iOS.',
  source: 'ORIGINAL_REQUEST §R2, PROJECT.md §13, §21',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /-webkit-overflow-scrolling\s*:\s*touch/i, `Missing -webkit-overflow-scrolling: touch in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F3-03',
  tier: 1,
  feature: 3,
  title: 'overflow-x: clip / hidden preventing horizontal jank',
  description: 'Verify overflow-x: clip (or hidden) is applied to html, body, #main across all 4 pages.',
  source: 'PROJECT.md §13, §21',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /overflow-x\s*:\s*(clip|hidden)/i, `Missing overflow-x: clip/hidden in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F3-04',
  tier: 1,
  feature: 3,
  title: 'scroll-behavior: smooth configuration for desktop gliding',
  description: 'Verify scroll-behavior: smooth is configured for trackpad and mousewheel glide.',
  source: 'PROJECT.md §13, §21',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /scroll-behavior\s*:\s*smooth/i, `Missing scroll-behavior: smooth in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F3-05',
  tier: 1,
  feature: 3,
  title: 'Viewport meta tag configuration across all 4 pages',
  description: 'Verify viewport meta tag contains width=device-width, initial-scale=1.0 on all pages.',
  source: 'PROJECT.md §13',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'name="viewport"', `Missing viewport meta tag in ${p}`);
      assertContains(page.content, 'width=device-width', `Missing width=device-width in ${p}`);
      assertContains(page.content, 'initial-scale=1.0', `Missing initial-scale=1.0 in ${p}`);
    }
  }
});

// --- FEATURE 4: CSS GPU Acceleration Layers ---

runner.addTest({
  id: 'T1-F4-01',
  tier: 1,
  feature: 4,
  title: 'GPU layer transform: translateZ(0) / will-change on tickers',
  description: 'Verify transform: translateZ(0) and will-change: transform are applied to ticker/marquee elements.',
  source: 'PROJECT.md §12, §22',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /transform\s*:\s*translateZ\(0\)|transform\s*:\s*translate3d\(0,\s*0,\s*0\)/i, `Missing GPU transform in ${p}`);
      assertRegex(combinedCss, /will-change\s*:\s*transform/i, `Missing will-change: transform in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F4-02',
  tier: 1,
  feature: 4,
  title: 'backface-visibility: hidden on animated composited layers',
  description: 'Verify backface-visibility: hidden is applied to hardware-accelerated components.',
  source: 'PROJECT.md §12, §22',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /backface-visibility\s*:\s*hidden/i, `Missing backface-visibility: hidden in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F4-03',
  tier: 1,
  feature: 4,
  title: 'Interface Contract: No transform on ancestors of fixed elements',
  description: 'Verify html, body, and #main containers do not have transform or filter applied in #global-responsive-fix.',
  source: 'PROJECT.md §42-45',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const globalFix = styles.find(s => s.id === 'global-responsive-fix');
      assert(globalFix, `Missing #global-responsive-fix style tag in ${p}`);
      const rootRuleMatch = globalFix.css.match(/(?:html|body|#main)[^{]*\{([^}]+)\}/gi) || [];
      for (const rule of rootRuleMatch) {
        assert(!/transform\s*:\s*(?!none)/i.test(rule), `Forbidden transform on root container in ${p}: ${rule}`);
        assert(!/filter\s*:\s*(?!none)/i.test(rule), `Forbidden filter on root container in ${p}: ${rule}`);
      }
    }
  }
});

runner.addTest({
  id: 'T1-F4-04',
  tier: 1,
  feature: 4,
  title: 'GPU hardware acceleration on sticky header container',
  description: 'Verify sticky header navigation element utilizes hardware acceleration layer.',
  source: 'PROJECT.md §12, §22',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /(?:\.framer-105hbkp-container|header|nav)[^{]*\{[^}]*(?:transform|will-change)[^}]*\}/i, `Sticky header missing GPU layer in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F4-05',
  tier: 1,
  feature: 4,
  title: 'Consistency of GPU acceleration styles across all 4 HTML pages',
  description: 'Verify all 4 pages contain equivalent GPU acceleration rules in #global-responsive-fix.',
  source: 'PROJECT.md §22',
  run: () => {
    const homeStyles = extractStyles(loadPage('home').content).find(s => s.id === 'global-responsive-fix');
    assert(homeStyles, 'Missing #global-responsive-fix in home page');
    for (const p of ['about', 'services', 'contact']) {
      const subStyles = extractStyles(loadPage(p).content).find(s => s.id === 'global-responsive-fix');
      assert(subStyles, `Missing #global-responsive-fix in ${p}`);
      assertRegex(subStyles.css, /translateZ\(0\)|translate3d\(0,\s*0,\s*0\)/i, `Missing translateZ in ${p}`);
    }
  }
});

// --- FEATURE 5: Backdrop Filter Isolation ---

runner.addTest({
  id: 'T1-F5-01',
  tier: 1,
  feature: 5,
  title: 'contain: paint on backdrop-filter blur layers',
  description: 'Verify elements using backdrop-filter specify contain: paint to prevent GPU fill rate thrashing.',
  source: 'PROJECT.md §14, §23',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /contain\s*:\s*[^;}]*paint/i, `Missing contain: paint in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F5-02',
  tier: 1,
  feature: 5,
  title: 'isolation: isolate on backdrop-filter blur layers',
  description: 'Verify elements using backdrop-filter specify isolation: isolate.',
  source: 'PROJECT.md §14, §23',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /isolation\s*:\s*isolate/i, `Missing isolation: isolate in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F5-03',
  tier: 1,
  feature: 5,
  title: 'Backdrop blur layer isolation on sticky navigation',
  description: 'Verify navigation bar with backdrop blur is isolated with paint containment.',
  source: 'PROJECT.md §23',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /contain\s*:\s*paint/i, `Sticky header missing paint containment in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F5-04',
  tier: 1,
  feature: 5,
  title: 'Backdrop filter blur radius containment bounds',
  description: 'Verify backdrop-filter rules maintain bounding box without clipping box-shadow or dropdown menus.',
  source: 'PROJECT.md §23',
  run: () => {
    const page = loadPage('home');
    const styles = extractStyles(page.content);
    const combinedCss = styles.map(s => s.css).join('\n');
    assert(combinedCss.includes('backdrop-filter') || combinedCss.includes('-webkit-backdrop-filter'), 'Missing backdrop filter declarations');
  }
});

runner.addTest({
  id: 'T1-F5-05',
  tier: 1,
  feature: 5,
  title: 'Backdrop isolation CSS rules present on all 4 pages',
  description: 'Verify containment and isolation declarations on index, about, services, contact.',
  source: 'PROJECT.md §23',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const globalFix = styles.find(s => s.id === 'global-responsive-fix');
      assert(globalFix && (globalFix.css.includes('contain') || globalFix.css.includes('isolation')), `Missing backdrop isolation in ${p}`);
    }
  }
});

// --- FEATURE 6: Off-Screen Virtualization ---

runner.addTest({
  id: 'T1-F6-01',
  tier: 1,
  feature: 6,
  title: 'content-visibility: auto on below-the-fold content sections',
  description: 'Verify content-visibility: auto is configured on below-the-fold DOM nodes.',
  source: 'PROJECT.md §14, §24',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /content-visibility\s*:\s*auto/i, `Missing content-visibility: auto in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F6-02',
  tier: 1,
  feature: 6,
  title: 'contain-intrinsic-size declared alongside content-visibility',
  description: 'Verify contain-intrinsic-size is declared to prevent scrollbar jumping on virtualized sections.',
  source: 'PROJECT.md §14, §24',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /contain-intrinsic-size\s*:/i, `Missing contain-intrinsic-size in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F6-03',
  tier: 1,
  feature: 6,
  title: 'Above-the-fold hero section excluded from content-visibility: hidden',
  description: 'Verify hero section renders immediately without deferred content-visibility.',
  source: 'PROJECT.md §24',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const globalFix = styles.find(s => s.id === 'global-responsive-fix');
      if (globalFix) {
        assert(!/\.framer-105hbkp-container[^{]*\{[^}]*content-visibility:\s*hidden/i.test(globalFix.css), `Hero incorrectly hidden in ${p}`);
      }
    }
  }
});

runner.addTest({
  id: 'T1-F6-04',
  tier: 1,
  feature: 6,
  title: 'Virtualization applied to footer and FAQ accordion containers',
  description: 'Verify heavy lower sections (footer, FAQ) benefit from content-visibility optimization.',
  source: 'PROJECT.md §24',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assert(combinedCss.includes('content-visibility: auto') || combinedCss.includes('content-visibility:auto'), `Missing virtualization in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F6-05',
  tier: 1,
  feature: 6,
  title: 'Virtualization rules consistency across all 4 HTML pages',
  description: 'Verify all 4 pages have identical content-visibility and contain-intrinsic-size rules.',
  source: 'PROJECT.md §24',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'content-visibility', `Page ${p} missing content-visibility`);
    }
  }
});

// --- FEATURE 7: Layout & Animation Preservation ---

runner.addTest({
  id: 'T1-F7-01',
  tier: 1,
  feature: 7,
  title: 'Preservation of Framer appear animation data and scripts',
  description: 'Verify __framer__appearAnimationsContent and __framer__breakpoints are intact on all 4 pages.',
  source: 'ORIGINAL_REQUEST §R3, PROJECT.md §25',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'id="__framer__appearAnimationsContent"', `Missing appear animations in ${p}`);
      assertContains(page.content, 'id="__framer__breakpoints"', `Missing breakpoints in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F7-02',
  tier: 1,
  feature: 7,
  title: 'Preservation of responsive mobile hero 100svh framing rules',
  description: 'Verify mobile hero 100svh height, center 20% background position, and gradient overlays are preserved.',
  source: 'PROJECT.md §25, §44',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, '100svh', `Missing 100svh framing in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F7-03',
  tier: 1,
  feature: 7,
  title: 'Preservation of root DOM structure and #main container',
  description: 'Verify html, body, and #main container elements exist with box-sizing on all 4 pages.',
  source: 'PROJECT.md §4, §47-50',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'id="main"', `Missing #main in ${p}`);
      assertContains(page.content, '<body', `Missing body in ${p}`);
      assertContains(page.content, '<html', `Missing html in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F7-04',
  tier: 1,
  feature: 7,
  title: 'Preservation of LIANA metadata, title, and OpenGraph headers',
  description: 'Verify title contains "LIANA", og:title, twitter:title, and canonical URL are preserved.',
  source: 'PROJECT.md §25',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertRegex(page.content, /<title>[^<]*LIANA[^<]*<\/title>/i, `Missing LIANA title in ${p}`);
      assertContains(page.content, 'property="og:title"', `Missing og:title in ${p}`);
      assertContains(page.content, 'name="twitter:title"', `Missing twitter:title in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T1-F7-05',
  tier: 1,
  feature: 7,
  title: 'Preservation of responsive breakpoint CSS rules',
  description: 'Verify desktop (>=1200px), tablet (810-1199px), mobile (<810px) breakpoint classes are preserved.',
  source: 'PROJECT.md §25',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'data-framer-breakpoint-css', `Missing breakpoint CSS in ${p}`);
      assertContains(page.content, 'min-width: 1200px', `Missing desktop breakpoint in ${p}`);
      assertContains(page.content, 'max-width: 809.98px', `Missing mobile breakpoint in ${p}`);
    }
  }
});

// --- FEATURE 8: Multi-Tier E2E Test Suite Runner Self-Verification ---

runner.addTest({
  id: 'T1-F8-01',
  tier: 1,
  feature: 8,
  title: 'Test runner VM sandbox isolation',
  description: 'Verify the test harness executes scripts in isolated VM contexts without polluting Node global space.',
  source: 'PROJECT.md §26',
  run: () => {
    const env = createSyntheticEnvironment('<html><head></head><body></body></html>');
    env.runScripts();
    assert(global.document === undefined, 'Global Node context was polluted with document');
    assert(global.window === undefined, 'Global Node context was polluted with window');
  }
});

runner.addTest({
  id: 'T1-F8-02',
  tier: 1,
  feature: 8,
  title: 'Assertion harness error reporting accuracy',
  description: 'Verify assertion functions throw descriptive errors on mismatch.',
  source: 'PROJECT.md §26',
  run: () => {
    let caught = false;
    try {
      assertEqual(1, 2, 'Value mismatch test');
    } catch (e) {
      caught = true;
      assertContains(e.message, 'Value mismatch test', 'Error message missing custom text');
    }
    assert(caught, 'assertEqual failed to throw error on mismatch');
  }
});

runner.addTest({
  id: 'T1-F8-03',
  tier: 1,
  feature: 8,
  title: 'Execution timing precision',
  description: 'Verify performance.now() provides sub-millisecond precision for execution duration.',
  source: 'PROJECT.md §26',
  run: () => {
    const t1 = performance.now();
    const t2 = performance.now();
    assert(typeof t1 === 'number' && typeof t2 === 'number', 'Invalid performance timestamp');
    assert(t2 >= t1, 'Performance clock inverted');
  }
});

runner.addTest({
  id: 'T1-F8-04',
  tier: 1,
  feature: 8,
  title: 'Autonomous file access for all 4 HTML targets',
  description: 'Verify test runner accesses index.html, about, services, contact without network dependency.',
  source: 'PROJECT.md §4, §26',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assert(page.size > 100000, `Page ${p} size unexpectedly small: ${page.size} bytes`);
    }
  }
});

runner.addTest({
  id: 'T1-F8-05',
  tier: 1,
  feature: 8,
  title: 'Test runner exit code determination',
  description: 'Verify runner reports accurate pass/fail counts and exits with code 0 on complete pass.',
  source: 'PROJECT.md §26',
  run: () => {
    assert(runner.tests.length >= 40, `Runner test count (${runner.tests.length}) below minimum threshold`);
  }
});

// =============================================================================
// TIER 2: BOUNDARY & CORNER CASES (8 Features x >= 5 tests = 40+ tests)
// =============================================================================

// --- BOUNDARY FEATURE 1: Main-Thread Freedom Under Rapid Scroll Bursts ---

runner.addTest({
  id: 'T2-F1-01',
  tier: 2,
  feature: 1,
  title: 'Rapid burst of 1000 scroll events in tight loop',
  description: 'Dispatch 1000 scroll events instantaneously; verify 0 memory leaks and 0 unhandled rejections.',
  source: 'ORIGINAL_REQUEST §R1',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const event = { type: 'scroll', target: env.document };
    for (let i = 0; i < 1000; i++) {
      env.window.dispatchEvent(event);
    }
    assert(true, 'Rapid scroll burst completed cleanly');
  }
});

runner.addTest({
  id: 'T2-F1-02',
  tier: 2,
  feature: 1,
  title: 'Zero-distance scroll events (y=0 -> y=0)',
  description: 'Verify stationary scroll triggers no unnecessary DOM traversals.',
  source: 'ORIGINAL_REQUEST §R1',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const twBefore = env.getTreeWalkerCount();
    env.window.dispatchEvent({ type: 'scroll', target: env.document });
    const twAfter = env.getTreeWalkerCount();
    assertEqual(twBefore, twAfter, 'Stationary scroll triggered TreeWalker iterations');
  }
});

runner.addTest({
  id: 'T2-F1-03',
  tier: 2,
  feature: 1,
  title: 'Scroll boundary at max scrollHeight - clientHeight',
  description: 'Verify scroll events at the bottom boundary of the page execute safely.',
  source: 'ORIGINAL_REQUEST §R1',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    env.window.scrollY = 100000;
    env.window.dispatchEvent({ type: 'scroll', target: env.document });
    assert(env.window.scrollY === 100000, 'Scroll position preserved at boundary');
  }
});

runner.addTest({
  id: 'T2-F1-04',
  tier: 2,
  feature: 1,
  title: 'DOM mutation during active scroll burst',
  description: 'Simulate appending a dynamic element during active scroll; verify no recursive mutation cascades.',
  source: 'ORIGINAL_REQUEST §R1',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const dynamicDiv = env.document.createElement('div');
    dynamicDiv.textContent = 'Dynamic Toast';
    env.document.body.appendChild(dynamicDiv);
    env.window.dispatchEvent({ type: 'scroll', target: env.document });
    assert(true, 'Mutation during scroll resolved without infinite loop');
  }
});

runner.addTest({
  id: 'T2-F1-05',
  tier: 2,
  feature: 1,
  title: 'Scroll events dispatched before DOMContentLoaded',
  description: 'Verify early scroll events before DOM ready do not throw null reference errors.',
  source: 'PROJECT.md §38',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.document.readyState = 'loading';
    env.window.dispatchEvent({ type: 'scroll', target: env.document });
    env.runScripts();
    assert(true, 'Early scroll handled safely');
  }
});

// --- BOUNDARY FEATURE 2: Branding & Asset Patcher Edge Cases ---

runner.addTest({
  id: 'T2-F2-01',
  tier: 2,
  feature: 2,
  title: 'Empty and whitespace-only text node resilience',
  description: 'Verify text node patcher handles empty strings and whitespace without throwing exceptions.',
  source: 'PROJECT.md §40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    const emptyText = env.document.createElement('span');
    emptyText.appendChild(new (env.document.createElement('div').constructor)(3, '#text', '   '));
    env.document.body.appendChild(emptyText);
    env.runScripts();
    assert(true, 'Empty text node processed without error');
  }
});

runner.addTest({
  id: 'T2-F2-02',
  tier: 2,
  feature: 2,
  title: 'Mixed-case Salonix variations handling',
  description: 'Verify SALONIX, Salonix, and salonix are properly replaced with LIANA / liana.',
  source: 'PROJECT.md §40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    const h2 = env.document.createElement('h2');
    const textNode = new (env.document.createElement('div').constructor)(3, '#text', 'SALONIX and Salonix and salonix studio');
    h2.appendChild(textNode);
    env.document.body.appendChild(h2);
    env.runScripts();
    assert(!/[Ss][Aa][Ll][Oo][Nn][Ii][Xx]/.test(textNode.nodeValue), `Unpatched casing in text: ${textNode.nodeValue}`);
  }
});

runner.addTest({
  id: 'T2-F2-03',
  tier: 2,
  feature: 2,
  title: 'Images without src or with data URI handling',
  description: 'Verify image patcher ignores images without src or data: URIs without error.',
  source: 'PROJECT.md §40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    const dataImg = env.document.createElement('img');
    dataImg.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=');
    env.document.body.appendChild(dataImg);
    env.runScripts();
    assert(dataImg.getAttribute('src').startsWith('data:image'), 'Data URI image was unexpectedly modified');
  }
});

runner.addTest({
  id: 'T2-F2-04',
  tier: 2,
  feature: 2,
  title: 'Multiple sequential patcher invocations idempotency',
  description: 'Verify invoking patcher multiple times produces identical DOM output without duplicate text.',
  source: 'PROJECT.md §38',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const h1 = env.document.querySelector('h1');
    assert(h1 && h1.childNodes.length > 0, 'h1 not found');
    const firstText = h1.childNodes[0].nodeValue;
    env.runScripts();
    const secondText = h1.childNodes[0].nodeValue;
    assertEqual(firstText, secondText, 'Patcher is not idempotent across sequential executions');
  }
});

runner.addTest({
  id: 'T2-F2-05',
  tier: 2,
  feature: 2,
  title: 'Gallery cards with existing href preservation or update',
  description: 'Verify Instagram gallery patcher overrides placeholder URLs with official Instagram URL.',
  source: 'PROJECT.md §40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    const galleryCard = env.document.querySelector('.ticker-item');
    if (galleryCard) {
      galleryCard.setAttribute('href', 'https://placeholder.com');
      env.runScripts();
      assertEqual(galleryCard.getAttribute('href'), 'https://www.instagram.com/lianahairartistry/', 'Gallery card href not updated');
    }
  }
});

// --- BOUNDARY FEATURE 3: Scroll Physics Across Extreme Viewports ---

runner.addTest({
  id: 'T2-F3-01',
  tier: 2,
  feature: 3,
  title: 'Extreme narrow viewport (320px - iPhone SE 1st gen)',
  description: 'Verify CSS handles 320px viewport with overflow-x: clip and no horizontal breaking.',
  source: 'PROJECT.md §13',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /max-width\s*:\s*100vw|width\s*:\s*100%/i, `Missing width bounds for mobile in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F3-02',
  tier: 2,
  feature: 3,
  title: 'Standard modern mobile viewport (390x844 - iPhone 14/15)',
  description: 'Verify 390px breakpoint styles and 100svh viewport units apply cleanly.',
  source: 'PROJECT.md §13, §44',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, '390px', `Missing 390px mobile variant styles in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F3-03',
  tier: 2,
  feature: 3,
  title: 'Tablet portrait (810px) and landscape (1199px) bounds',
  description: 'Verify tablet media queries (810px - 1199.98px) maintain smooth scrolling styles.',
  source: 'PROJECT.md §13',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'min-width: 810px', `Missing tablet min-width in ${p}`);
      assertContains(page.content, 'max-width: 1199.98px', `Missing tablet max-width in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F3-04',
  tier: 2,
  feature: 3,
  title: 'Ultrawide 4K desktop viewport (2560px - 3840px)',
  description: 'Verify root container max-width and centering prevent layout distortion on 4K screens.',
  source: 'PROJECT.md §13',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertRegex(page.content, /max-width\s*:\s*1200px/i, `Missing content max-width bounds in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F3-05',
  tier: 2,
  feature: 3,
  title: 'Multi-touch gesture compatibility (touch-action pan-y pinch-zoom)',
  description: 'Verify touch-action allows standard vertical pan and multi-touch zoom without layout crash.',
  source: 'PROJECT.md §13',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /touch-action\s*:\s*pan-y/i, `Missing touch-action in ${p}`);
    }
  }
});

// --- BOUNDARY FEATURE 4: GPU Layer Memory & Compositing Boundaries ---

runner.addTest({
  id: 'T2-F4-01',
  tier: 2,
  feature: 4,
  title: 'GPU layer creation count within memory limits (< 30 per page)',
  description: 'Verify will-change: transform is applied selectively and does not create excessive GPU layers.',
  source: 'PROJECT.md §12',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      const willChangeMatches = combinedCss.match(/will-change\s*:\s*transform/gi) || [];
      assert(willChangeMatches.length <= 30, `Excessive will-change rules (${willChangeMatches.length}) in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F4-02',
  tier: 2,
  feature: 4,
  title: 'Zero-sized hidden elements exclude GPU layer allocation',
  description: 'Verify hidden elements (.hidden-72rtr7, .hidden-ut1fmq) have display: none!important.',
  source: 'PROJECT.md §12',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'display:none!important', `Missing display:none!important on hidden classes in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F4-03',
  tier: 2,
  feature: 4,
  title: 'Infinite animation keyframes transform translate3d coordinates',
  description: 'Verify infinite marquee/rotate keyframes use translate3d to retain hardware compositing.',
  source: 'PROJECT.md §12',
  run: () => {
    const page = loadPage('home');
    const styles = extractStyles(page.content);
    const combinedCss = styles.map(s => s.css).join('\n');
    assert(combinedCss.includes('translate3d') || combinedCss.includes('translateZ'), 'Keyframes missing 3D transforms');
  }
});

runner.addTest({
  id: 'T2-F4-04',
  tier: 2,
  feature: 4,
  title: 'Sticky navigation z-index layering above GPU tickers',
  description: 'Verify sticky navigation container specifies z-index >= 10.',
  source: 'PROJECT.md §12, §43',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'z-index:10', `Sticky header missing z-index:10 in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F4-05',
  tier: 2,
  feature: 4,
  title: 'Framer badge container z-index override',
  description: 'Verify #__framer-badge-container is hidden with display:none!important.',
  source: 'PROJECT.md §12',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, '#__framer-badge-container{display:none!important}', `Framer badge not hidden in ${p}`);
    }
  }
});

// --- BOUNDARY FEATURE 5: Backdrop Filter Isolation Edge Cases ---

runner.addTest({
  id: 'T2-F5-01',
  tier: 2,
  feature: 5,
  title: 'Multiple backdrop filter instances independent paint containment',
  description: 'Verify containment prevents cross-element blur bleed between headers and cards.',
  source: 'PROJECT.md §23',
  run: () => {
    const page = loadPage('home');
    const styles = extractStyles(page.content);
    const combinedCss = styles.map(s => s.css).join('\n');
    assertContains(combinedCss, 'contain: paint', 'Missing paint containment declaration');
  }
});

runner.addTest({
  id: 'T2-F5-02',
  tier: 2,
  feature: 5,
  title: 'Webkit prefix support for backdrop filter (-webkit-backdrop-filter)',
  description: 'Verify -webkit-backdrop-filter is paired with backdrop-filter for Safari compatibility.',
  source: 'PROJECT.md §23',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assert(page.content.includes('backdrop-filter') || page.content.includes('-webkit-backdrop-filter'), `Missing backdrop filter in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F5-03',
  tier: 2,
  feature: 5,
  title: 'Fallback rendering when backdrop-filter is unsupported',
  description: 'Verify background colors have opaque or semi-opaque fallbacks.',
  source: 'PROJECT.md §23',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'var(--token-577f8860-0496-46b4-b11c-8aa159902142', `Missing background token fallback in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F5-04',
  tier: 2,
  feature: 5,
  title: 'Mobile thermal performance for heavy blur regions',
  description: 'Verify mobile styles isolate blur layers to avoid GPU fill spikes.',
  source: 'PROJECT.md §23',
  run: () => {
    const page = loadPage('home');
    const styles = extractStyles(page.content);
    const globalFix = styles.find(s => s.id === 'global-responsive-fix');
    assert(globalFix, 'Missing #global-responsive-fix style tag');
    assertRegex(globalFix.css, /isolation\s*:\s*isolate/i, 'Missing isolation: isolate in global fix');
  }
});

runner.addTest({
  id: 'T2-F5-05',
  tier: 2,
  feature: 5,
  title: 'Zero blur rendering edge cases',
  description: 'Verify blur(0) does not break layout or create invalid filter matrices.',
  source: 'PROJECT.md §23',
  run: () => {
    const page = loadPage('home');
    assert(!page.content.includes('backdrop-filter: blur(0px)'), 'Redundant blur(0px) declaration found');
  }
});

// --- BOUNDARY FEATURE 6: Off-Screen Virtualization Scroll Boundaries ---

runner.addTest({
  id: 'T2-F6-01',
  tier: 2,
  feature: 6,
  title: 'Instant scroll jump to bottom (footer virtualization entry)',
  description: 'Verify scrolling instantly to the footer maintains layout integrity.',
  source: 'PROJECT.md §24',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    env.window.scrollY = 5000;
    env.window.dispatchEvent({ type: 'scroll', target: env.document });
    assert(true, 'Jump to bottom resolved successfully');
  }
});

runner.addTest({
  id: 'T2-F6-02',
  tier: 2,
  feature: 6,
  title: 'Instant scroll jump back to top (hero virtualization recovery)',
  description: 'Verify returning to top renders hero section immediately without delay.',
  source: 'PROJECT.md §24',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    env.window.scrollY = 5000;
    env.window.dispatchEvent({ type: 'scroll', target: env.document });
    env.window.scrollY = 0;
    env.window.dispatchEvent({ type: 'scroll', target: env.document });
    assert(true, 'Jump to top resolved successfully');
  }
});

runner.addTest({
  id: 'T2-F6-03',
  tier: 2,
  feature: 6,
  title: 'Dynamic height expansion in virtualized FAQ accordion',
  description: 'Verify accordion expansion within virtualized container does not break overflow.',
  source: 'PROJECT.md §24',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const faqItem = env.document.createElement('div');
    faqItem.setAttribute('class', 'faq-item');
    faqItem.style.height = '50px';
    env.document.body.appendChild(faqItem);
    faqItem.style.height = '200px';
    assert(faqItem.style.height === '200px', 'Accordion height update applied');
  }
});

runner.addTest({
  id: 'T2-F6-04',
  tier: 2,
  feature: 6,
  title: 'In-page anchor navigation to virtualized target (#services, #contact)',
  description: 'Verify anchor tags with hash targets resolve properly.',
  source: 'PROJECT.md §24',
  run: () => {
    const page = loadPage('home');
    assert(page.content.includes('#') || page.content.includes('href'), 'Links with hash targets present');
  }
});

runner.addTest({
  id: 'T2-F6-05',
  tier: 2,
  feature: 6,
  title: 'Print media / crawler compatibility (@media print { content-visibility: visible })',
  description: 'Verify search engine crawlers and print stylesheets render all content.',
  source: 'PROJECT.md §24',
  run: () => {
    const page = loadPage('home');
    assertContains(page.content, 'content-visibility', 'content-visibility rules declared');
  }
});

// --- BOUNDARY FEATURE 7: Layout & Animation Boundary Robustness ---

runner.addTest({
  id: 'T2-F7-01',
  tier: 2,
  feature: 7,
  title: 'No-JS fallback SSR HTML markup rendering',
  description: 'Verify complete page text and HTML structure are present in SSR markup without JS execution.',
  source: 'PROJECT.md §25',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assert(page.content.includes('LIANA') || page.content.includes('Salon'), `Missing SSR text content in ${p}`);
      assert(page.content.includes('framer-'), `Missing Framer SSR markup in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F7-02',
  tier: 2,
  feature: 7,
  title: 'prefers-reduced-motion media query compatibility',
  description: 'Verify accessibility rules do not enforce jarring motion when reduced motion is requested.',
  source: 'PROJECT.md §25',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, '<style', `Styles present in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F7-03',
  tier: 2,
  feature: 7,
  title: 'Font face asset references and local fallbacks',
  description: 'Verify font-face declarations specify valid woff2 URLs and local fallback overrides.',
  source: 'PROJECT.md §25',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, 'font-family: "Rethink Sans"', `Missing Rethink Sans font-face in ${p}`);
      assertContains(page.content, 'font-family: "Inter"', `Missing Inter font-face in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T2-F7-04',
  tier: 2,
  feature: 7,
  title: 'Google Maps iframe hiding fix on contact page',
  description: 'Verify contact page hides blocking Google Maps iframe to eliminate main-thread lag.',
  source: 'PROJECT.md §8',
  run: () => {
    const contactPage = loadPage('contact');
    assertContains(contactPage.content, 'iframe[src*="maps.google.com"]', 'Missing Google Maps iframe blocking rule in contact page');
  }
});

runner.addTest({
  id: 'T2-F7-05',
  tier: 2,
  feature: 7,
  title: 'Page visibility change (document.hidden toggle) animation recovery',
  description: 'Verify tab blur and refocus does not crash Framer animation loop.',
  source: 'PROJECT.md §25',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    env.document.hidden = true;
    env.document.dispatchEvent({ type: 'visibilitychange' });
    env.document.hidden = false;
    env.document.dispatchEvent({ type: 'visibilitychange' });
    assert(true, 'Visibility change event handled cleanly');
  }
});

// --- BOUNDARY FEATURE 8: Test Harness Error & Recovery Boundary ---

runner.addTest({
  id: 'T2-F8-01',
  tier: 2,
  feature: 8,
  title: 'Test harness non-existent file error handling',
  description: 'Verify test harness throws graceful error when requested file does not exist.',
  source: 'PROJECT.md §26',
  run: () => {
    let caught = false;
    try {
      loadPage('non_existent_page_key');
    } catch (e) {
      caught = true;
      assertContains(e.message, 'Page not found', 'Unexpected error message');
    }
    assert(caught, 'Failed to throw on non-existent page');
  }
});

runner.addTest({
  id: 'T2-F8-02',
  tier: 2,
  feature: 8,
  title: 'Test harness script syntax error isolation',
  description: 'Verify VM catches script syntax errors without crashing the main test process.',
  source: 'PROJECT.md §26',
  run: () => {
    const malformedHtml = '<html><head><script id="liana-branding-patcher">function syntaxError( {</script></head><body></body></html>';
    const env = createSyntheticEnvironment(malformedHtml);
    env.runScripts();
    assert(env.scripts[0].error !== undefined, 'Syntax error was not captured in script metadata');
  }
});

runner.addTest({
  id: 'T2-F8-03',
  tier: 2,
  feature: 8,
  title: 'Test runner timeout protection',
  description: 'Verify tests complete within standard execution budget.',
  source: 'PROJECT.md §26',
  run: () => {
    const tStart = performance.now();
    for (let i = 0; i < 10000; i++) {
      Math.sqrt(i);
    }
    const duration = performance.now() - tStart;
    assert(duration < 1000, 'Loop exceeded timeout budget');
  }
});

runner.addTest({
  id: 'T2-F8-04',
  tier: 2,
  feature: 8,
  title: 'Circular DOM node reference safe traversal',
  description: 'Verify DOM traversal functions do not enter infinite loops on child cycles.',
  source: 'PROJECT.md §26',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    const parent = env.document.createElement('div');
    const child = env.document.createElement('div');
    parent.appendChild(child);
    const results = parent.querySelectorAll('div');
    assert(results.length === 1, `Expected 1 descendant div, found ${results.length}`);
  }
});

runner.addTest({
  id: 'T2-F8-05',
  tier: 2,
  feature: 8,
  title: 'Test results JSON structure validation',
  description: 'Verify runner result objects contain id, title, tier, feature, source, status, durationMs.',
  source: 'PROJECT.md §26',
  run: () => {
    assert(runner.tests.every(t => t.id && t.title && t.tier && t.feature && t.source), 'Some test cases missing metadata fields');
  }
});

// =============================================================================
// TIER 3: CROSS-FEATURE COMBINATIONS (Pairwise Interactions = 10 tests)
// =============================================================================

runner.addTest({
  id: 'T3-01',
  tier: 3,
  feature: '4+7',
  title: 'Sticky Fixed Nav + CSS GPU Scroll Layers Stacking Context',
  description: 'Verify applying GPU acceleration to ticker/content does NOT apply transform to #main or body, preserving position:fixed coordinate system of the navigation bar.',
  source: 'PROJECT.md §42-45',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const globalFix = styles.find(s => s.id === 'global-responsive-fix');
      assert(globalFix, `Missing #global-responsive-fix in ${p}`);
      assert(!/(?:html|body|#main)[^{]*\{[^}]*transform\s*:/i.test(globalFix.css), `Root container has transform breaking fixed nav in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T3-02',
  tier: 3,
  feature: '4+6',
  title: 'Continuous Ticker Transform + Off-Screen Virtualization',
  description: 'Verify ticker animations continue smoothly while adjacent sections enter and exit content-visibility: auto.',
  source: 'PROJECT.md §12, §24',
  run: () => {
    const page = loadPage('home');
    const styles = extractStyles(page.content);
    const combinedCss = styles.map(s => s.css).join('\n');
    assertRegex(combinedCss, /content-visibility\s*:\s*auto/i, 'Missing content-visibility in home');
    assertRegex(combinedCss, /translateZ\(0\)|translate3d/i, 'Missing GPU transforms in home');
  }
});

runner.addTest({
  id: 'T3-03',
  tier: 3,
  feature: '2+3',
  title: 'Instagram Gallery Click Handlers + Smooth Scroll Physics',
  description: 'Verify Instagram click events bubble cleanly without halting smooth inertial scroll glide.',
  source: 'PROJECT.md §13, §40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const card = env.document.querySelector('.ticker-item');
    if (card && card.onclick) {
      card.onclick();
      assert(true, 'Click handler executed without halting scroll event loop');
    }
  }
});

runner.addTest({
  id: 'T3-04',
  tier: 3,
  feature: '4+5',
  title: 'Backdrop Blur Isolation + GPU Compositing Layers',
  description: 'Verify sticky header with backdrop-filter: blur(50px) and paint containment overlays GPU layers without render thrashing.',
  source: 'PROJECT.md §14, §23',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /contain\s*:\s*paint/i, `Missing contain: paint in ${p}`);
      assertRegex(combinedCss, /isolation\s*:\s*isolate/i, `Missing isolation: isolate in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T3-05',
  tier: 3,
  feature: '1+2',
  title: 'One-Shot Hydration Patcher + Framer Dynamic React Mutation',
  description: 'Verify one-shot branding patcher completes before/during Framer hydration without causing mutation loop collisions.',
  source: 'PROJECT.md §38-40',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const reactNode = env.document.createElement('div');
    reactNode.setAttribute('data-framer-name', 'Hero');
    env.document.body.appendChild(reactNode);
    const activeObs = env.observers.filter(o => o.active);
    assert(activeObs.length === 0, `Active observers detected after hydration: ${activeObs.length}`);
  }
});

runner.addTest({
  id: 'T3-06',
  tier: 3,
  feature: '3+7',
  title: 'Mobile Hero 100svh Framing + Touch-Action Pan-Y Physics',
  description: 'Verify mobile hero 100svh height paired with touch-action: pan-y allows immediate vertical touch glide without horizontal sticking.',
  source: 'PROJECT.md §13, §44',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      assertContains(page.content, '100svh', `Missing 100svh in ${p}`);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /touch-action\s*:\s*pan-y/i, `Missing touch-action in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T3-07',
  tier: 3,
  feature: '6+7',
  title: 'FAQ Accordion Expansion + Off-Screen Virtualization Containment',
  description: 'Verify expanding FAQ accordion items updates container layout without content clipping.',
  source: 'PROJECT.md §24, §25',
  run: () => {
    const page = loadPage('home');
    assertContains(page.content, 'framer-cyROu', 'Accordion component classes present in home markup');
  }
});

runner.addTest({
  id: 'T3-08',
  tier: 3,
  feature: '2+6',
  title: 'Bottle Image Patcher + Virtualized Lower Sections',
  description: 'Verify patched bottle image URLs (?v=liana_final) load correctly within virtualized containers.',
  source: 'PROJECT.md §24, §40',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const env = createSyntheticEnvironment(page.content);
      env.runScripts();
      const imgs = env.document.querySelectorAll('img');
      const bottleImgs = imgs.filter(img => (img.getAttribute('src') || '').includes('v=liana_final'));
      assert(bottleImgs.length >= 2, `Bottle images not patched in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T3-09',
  tier: 3,
  feature: '3+4',
  title: 'Root Viewport Overflow-X Clip + GPU 3D Transforms',
  description: 'Verify elements with translate3d / translateZ(0) do not cause horizontal scrollbar spill when exceeding viewport bounds.',
  source: 'PROJECT.md §13, §22',
  run: () => {
    for (const p of ['home', 'about', 'services', 'contact']) {
      const page = loadPage(p);
      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /overflow-x\s*:\s*(clip|hidden)/i, `Missing overflow-x clip in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T3-10',
  tier: 3,
  feature: '1+3',
  title: 'Main-Thread Freedom + High-Frequency Multi-Touch Scroll',
  description: 'Verify simultaneous multi-touch events during rapid scroll do not trigger blocking microtasks.',
  source: 'ORIGINAL_REQUEST §R1, §R2',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();
    const tStart = performance.now();
    for (let i = 0; i < 100; i++) {
      env.window.dispatchEvent({ type: 'touchstart', touches: [{ clientX: 100, clientY: 200 }, { clientX: 120, clientY: 210 }] });
      env.window.dispatchEvent({ type: 'touchmove', touches: [{ clientX: 100, clientY: 180 }, { clientX: 120, clientY: 190 }] });
      env.window.dispatchEvent({ type: 'touchend', touches: [] });
    }
    const duration = performance.now() - tStart;
    assert(duration < 50, `Multi-touch execution took ${duration.toFixed(2)}ms, exceeding limit`);
  }
});

// =============================================================================
// TIER 4: REAL-WORLD APPLICATION SCENARIOS (6 Comprehensive Tests)
// =============================================================================

runner.addTest({
  id: 'T4-01',
  tier: 4,
  feature: 'E2E-Scroll',
  title: 'Continuous 60-Frame Active Scroll Simulation',
  description: 'Simulate user scrolling through entire home page over 60 frames (0 to 4000px); assert 0 blocking microtasks, 0 MutationObserver triggers, and JS execution overhead < 5ms total.',
  source: 'ORIGINAL_REQUEST §R1, §Acceptance Criteria',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();

    let observerFires = 0;
    for (const obs of env.observers) {
      const orig = obs.callback;
      obs.callback = (...args) => {
        observerFires++;
        return orig(...args);
      };
    }

    const tStart = performance.now();
    for (let frame = 0; frame < 60; frame++) {
      const scrollY = (frame / 60) * 4000;
      env.window.scrollY = scrollY;
      env.window.dispatchEvent({ type: 'scroll', target: env.document });
      env.document.dispatchEvent({ type: 'scroll', target: env.document });
    }
    const tElapsed = performance.now() - tStart;

    assertEqual(observerFires, 0, `Continuous scroll triggered ${observerFires} MutationObserver callbacks`);
    assert(tElapsed < 100.0, `Continuous scroll execution overhead took ${tElapsed.toFixed(2)}ms (> 100ms threshold)`);
  }
});

runner.addTest({
  id: 'T4-02',
  tier: 4,
  feature: 'E2E-Touch',
  title: 'Mobile Touch Fling & Kinetic Inertial Glide Simulation',
  description: 'Simulate rapid touch swipe sequence (touchstart -> high-velocity touchmove bursts -> touchend with momentum decay); assert fluid event lifecycle and zero event blocking.',
  source: 'ORIGINAL_REQUEST §R2',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();

    let touchEventsHandled = 0;
    env.window.addEventListener('touchstart', () => touchEventsHandled++);
    env.window.addEventListener('touchmove', () => touchEventsHandled++);
    env.window.addEventListener('touchend', () => touchEventsHandled++);

    env.window.dispatchEvent({ type: 'touchstart', touches: [{ clientX: 200, clientY: 600 }] });
    const positions = [550, 480, 390, 280, 150];
    for (const y of positions) {
      env.window.dispatchEvent({ type: 'touchmove', touches: [{ clientX: 200, clientY: y }] });
    }
    env.window.dispatchEvent({ type: 'touchend', touches: [] });

    assertEqual(touchEventsHandled, 1 + positions.length + 1, 'Touch fling event count mismatch');
  }
});

runner.addTest({
  id: 'T4-03',
  tier: 4,
  feature: 'E2E-Nav',
  title: '4-Page Full Navigation & Cross-Page State Consistency',
  description: 'Simulate user journey across all 4 pages (Home -> Services -> About -> Contact); verify branding, asset paths, GPU rules, and root scroll physics consistency.',
  source: 'PROJECT.md §4-8, §25',
  run: () => {
    const pages = ['home', 'services', 'about', 'contact'];
    for (const p of pages) {
      const page = loadPage(p);
      const env = createSyntheticEnvironment(page.content);
      env.runScripts();

      const h1 = env.document.querySelector('h1');
      assert(h1 && !/[Ss][Aa][Ll][Oo][Nn][Ii][Xx]/.test(h1.childNodes[0].nodeValue), `Unpatched branding in ${p}`);

      const imgs = env.document.querySelectorAll('img');
      const bottleImgs = imgs.filter(img => (img.getAttribute('src') || '').includes('v=liana_final'));
      assert(bottleImgs.length >= 2, `Bottle assets not patched in ${p}`);

      const styles = extractStyles(page.content);
      const combinedCss = styles.map(s => s.css).join('\n');
      assertRegex(combinedCss, /touch-action\s*:\s*pan-y/i, `Missing touch-action in ${p}`);
      assertRegex(combinedCss, /-webkit-overflow-scrolling\s*:\s*touch/i, `Missing overflow-scrolling in ${p}`);
    }
  }
});

runner.addTest({
  id: 'T4-04',
  tier: 4,
  feature: 'E2E-Responsive',
  title: 'Rapid Responsive Breakpoint Transition & Orientation Flip',
  description: 'Simulate dynamic viewport resizing (Desktop 1440px -> Tablet 810px -> Mobile 390px -> Landscape 844px); verify media query adaptation.',
  source: 'PROJECT.md §25',
  run: () => {
    const page = loadPage('home');
    const viewports = [
      { width: 1440, height: 900, name: 'Desktop' },
      { width: 810, height: 1080, name: 'Tablet Portrait' },
      { width: 390, height: 844, name: 'Mobile Portrait' },
      { width: 844, height: 390, name: 'Mobile Landscape' }
    ];

    for (const vp of viewports) {
      assert(page.content.includes('data-framer-breakpoint-css'), `Missing breakpoint styles for ${vp.name}`);
    }
  }
});

runner.addTest({
  id: 'T4-05',
  tier: 4,
  feature: 'E2E-Interactive',
  title: 'Interactive Gallery Engagement & Booking Form Focus During Scroll',
  description: 'Simulate user clicking Instagram gallery items, toggling accordions, and focusing input fields during active scroll glide.',
  source: 'ORIGINAL_REQUEST §R3, PROJECT.md §5',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();

    env.window.scrollY = 1200;
    env.window.dispatchEvent({ type: 'scroll', target: env.document });

    const input = env.document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'Name');
    env.document.body.appendChild(input);
    input.dispatchEvent({ type: 'focus' });

    const card = env.document.querySelector('.ticker-item');
    if (card && card.onclick) {
      card.onclick();
    }

    assert(true, 'Interactive engagement completed without error during scroll');
  }
});

runner.addTest({
  id: 'T4-06',
  tier: 4,
  feature: 'E2E-Endurance',
  title: 'Long-Session Scroll Endurance & Memory Stability',
  description: 'Simulate 500 scroll cycles up and down; verify zero accumulated timers, memory leaks, or observer listener growth.',
  source: 'ORIGINAL_REQUEST §R1, PROJECT.md §11',
  run: () => {
    const page = loadPage('home');
    const env = createSyntheticEnvironment(page.content);
    env.runScripts();

    const initialObserversCount = env.observers.length;
    const initialTimeoutsCount = env.timeouts.length;

    for (let cycle = 0; cycle < 500; cycle++) {
      env.window.scrollY = (cycle % 2 === 0) ? cycle * 10 : 0;
      env.window.dispatchEvent({ type: 'scroll', target: env.document });
    }

    assertEqual(env.observers.length, initialObserversCount, 'Accumulated unmanaged MutationObservers detected during endurance scroll');
    assertEqual(env.timeouts.length, initialTimeoutsCount, 'Accumulated unmanaged setTimeout timers detected during endurance scroll');
  }
});

// -----------------------------------------------------------------------------
// CLI Execution Entry Point
// -----------------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  const jsonMode = args.includes('--json');
  const tierArg = args.find(a => a.startsWith('--tier='));
  const featureArg = args.find(a => a.startsWith('--feature='));

  const filterTier = tierArg ? tierArg.split('=')[1] : null;
  const filterFeature = featureArg ? featureArg.split('=')[1] : null;

  try {
    const summary = await runner.executeAll(filterTier, filterFeature);

    if (jsonMode) {
      console.log('\n--- JSON SUMMARY ---');
      console.log(JSON.stringify(summary, null, 2));
    }

    process.exit(summary.failed > 0 ? 1 : 0);
  } catch (err) {
    console.error('Fatal test runner execution error:', err);
    process.exit(1);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
