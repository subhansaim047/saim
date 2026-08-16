/**
 * Studio-D Brickell Clone - E2E Testing Engine & Harness
 * Pure Node 22 Zero-Dependency Architecture
 *
 * Provides:
 *  1. MockDOM / createDOMContext(htmlString)
 *  2. CSSParser / parseStyles(cssString)
 *  3. VMSandbox / createSandbox(htmlContent, jsCodeOrFiles)
 *  4. AssetAuditor
 *  5. PortfolioAuditor
 *  6. Test DSL & Assertion Core (describe, test, it, expect, beforeEach, etc.)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { performance } from 'node:perf_hooks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DEMO_ROOT = path.resolve(__dirname, '..');
export const WEBSITE_ROOT = path.resolve(DEMO_ROOT, '..', '..', '..');

// =============================================================================
// 1. MOCK DOM & HTML PARSER
// =============================================================================

const SELF_CLOSING_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

export class MockClassList {
  constructor(element) {
    this._element = element;
    this._classes = new Set();
    this._syncFromAttr();
  }

  _syncFromAttr() {
    const classAttr = this._element.getAttribute('class') || '';
    this._classes = new Set(classAttr.split(/\s+/).filter(Boolean));
  }

  _syncToAttr() {
    this._element.setAttribute('class', Array.from(this._classes).join(' '));
  }

  add(...classNames) {
    for (const name of classNames) {
      if (name) this._classes.add(name);
    }
    this._syncToAttr();
  }

  remove(...classNames) {
    for (const name of classNames) {
      this._classes.delete(name);
    }
    this._syncToAttr();
  }

  toggle(className, force) {
    if (force === true) {
      this.add(className);
      return true;
    } else if (force === false) {
      this.remove(className);
      return false;
    }
    if (this._classes.has(className)) {
      this.remove(className);
      return false;
    } else {
      this.add(className);
      return true;
    }
  }

  contains(className) {
    this._syncFromAttr();
    return this._classes.has(className);
  }

  values() {
    this._syncFromAttr();
    return Array.from(this._classes);
  }

  get length() {
    this._syncFromAttr();
    return this._classes.size;
  }

  toString() {
    this._syncFromAttr();
    return Array.from(this._classes).join(' ');
  }
}

export class MockStyle {
  constructor(element) {
    this._element = element;
    this._props = {};
    this._syncFromAttr();

    return new Proxy(this, {
      get: (target, prop) => {
        if (prop in target || typeof prop === 'symbol') {
          return target[prop];
        }
        const kebab = String(prop).replace(/([A-Z])/g, '-$1').toLowerCase();
        return target.getPropertyValue(kebab) || '';
      },
      set: (target, prop, val) => {
        if (prop in target) {
          target[prop] = val;
          return true;
        }
        const kebab = String(prop).replace(/([A-Z])/g, '-$1').toLowerCase();
        target.setProperty(kebab, String(val));
        return true;
      }
    });
  }

  _syncFromAttr() {
    const styleAttr = this._element.getAttribute('style') || '';
    this._props = {};
    const rules = styleAttr.split(';').filter(Boolean);
    for (const rule of rules) {
      const idx = rule.indexOf(':');
      if (idx !== -1) {
        const key = rule.slice(0, idx).trim().toLowerCase();
        const val = rule.slice(idx + 1).trim();
        this._props[key] = val;
      }
    }
  }

  _syncToAttr() {
    const entries = Object.entries(this._props).map(([k, v]) => `${k}: ${v}`);
    if (entries.length > 0) {
      this._element.setAttribute('style', entries.join('; '));
    } else {
      this._element.removeAttribute('style');
    }
  }

  getPropertyValue(propName) {
    this._syncFromAttr();
    return this._props[propName.toLowerCase()] || '';
  }

  setProperty(propName, value) {
    this._syncFromAttr();
    this._props[propName.toLowerCase()] = String(value);
    this._syncToAttr();
  }

  removeProperty(propName) {
    this._syncFromAttr();
    delete this._props[propName.toLowerCase()];
    this._syncToAttr();
  }
}

export class MockNode {
  constructor(nodeType, nodeName, nodeValue = null) {
    this.nodeType = nodeType; // 1: Element, 3: Text, 8: Comment, 9: Document
    this.nodeName = (nodeName || '').toUpperCase();
    this.nodeValue = nodeValue;
    this.childNodes = [];
    this.parentNode = null;
  }

  get parentElement() {
    return this.parentNode && this.parentNode.nodeType === 1 ? this.parentNode : null;
  }

  get textContent() {
    if (this.nodeType === 3) return this.nodeValue || '';
    if (this.nodeType === 8) return '';
    return this.childNodes.map(c => c.textContent).join('');
  }

  set textContent(val) {
    this.childNodes = [];
    if (this.nodeType === 1 || this.nodeType === 9) {
      const txt = new MockNode(3, '#text', String(val));
      txt.parentNode = this;
      this.childNodes.push(txt);
    } else {
      this.nodeValue = String(val);
    }
  }

  appendChild(child) {
    if (child.parentNode) {
      child.parentNode.removeChild(child);
    }
    child.parentNode = this;
    this.childNodes.push(child);
    return child;
  }

  removeChild(child) {
    const idx = this.childNodes.indexOf(child);
    if (idx !== -1) {
      this.childNodes.splice(idx, 1);
      child.parentNode = null;
      return child;
    }
    return null;
  }

  insertBefore(newNode, referenceNode) {
    if (!referenceNode) {
      return this.appendChild(newNode);
    }
    const idx = this.childNodes.indexOf(referenceNode);
    if (idx !== -1) {
      if (newNode.parentNode) {
        newNode.parentNode.removeChild(newNode);
      }
      newNode.parentNode = this;
      this.childNodes.splice(idx, 0, newNode);
      return newNode;
    }
    return this.appendChild(newNode);
  }
}

export class MockElement extends MockNode {
  constructor(tagName) {
    super(1, tagName);
    this.tagName = (tagName || '').toUpperCase();
    this.attributes = {};
    this.classList = new MockClassList(this);
    this.style = new MockStyle(this);
    this._listeners = {};
    this._value = '';
    this._checked = false;
  }

  getAttribute(name) {
    if (!name) return null;
    const lower = name.toLowerCase();
    return Object.prototype.hasOwnProperty.call(this.attributes, lower) ? this.attributes[lower] : null;
  }

  setAttribute(name, value) {
    if (!name) return;
    const lower = name.toLowerCase();
    this.attributes[lower] = String(value);
    if (lower === 'class') {
      this.classList._syncFromAttr();
    } else if (lower === 'style') {
      this.style._syncFromAttr();
    }
  }

  hasAttribute(name) {
    if (!name) return false;
    return Object.prototype.hasOwnProperty.call(this.attributes, name.toLowerCase());
  }

  removeAttribute(name) {
    if (!name) return;
    const lower = name.toLowerCase();
    delete this.attributes[lower];
    if (lower === 'class') {
      this.classList._syncFromAttr();
    } else if (lower === 'style') {
      this.style._syncFromAttr();
    }
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

  get name() {
    return this.getAttribute('name') || '';
  }

  set name(val) {
    this.setAttribute('name', val);
  }

  get type() {
    return this.getAttribute('type') || 'text';
  }

  set type(val) {
    this.setAttribute('type', val);
  }

  get src() {
    return this.getAttribute('src') || '';
  }

  set src(val) {
    this.setAttribute('src', val);
  }

  get href() {
    return this.getAttribute('href') || '';
  }

  set href(val) {
    this.setAttribute('href', val);
  }

  get target() {
    return this.getAttribute('target') || '';
  }

  set target(val) {
    this.setAttribute('target', val);
  }

  get alt() {
    return this.getAttribute('alt') || '';
  }

  set alt(val) {
    this.setAttribute('alt', val);
  }

  get title() {
    return this.getAttribute('title') || '';
  }

  set title(val) {
    this.setAttribute('title', val);
  }

  get placeholder() {
    return this.getAttribute('placeholder') || '';
  }

  set placeholder(val) {
    this.setAttribute('placeholder', val);
  }

  get required() {
    return this.hasAttribute('required');
  }

  set required(val) {
    if (val) this.setAttribute('required', '');
    else this.removeAttribute('required');
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    if (val) this.setAttribute('disabled', '');
    else this.removeAttribute('disabled');
  }

  get checked() {
    return this._checked || this.hasAttribute('checked');
  }

  set checked(val) {
    this._checked = Boolean(val);
    if (this._checked) this.setAttribute('checked', '');
    else this.removeAttribute('checked');
  }

  get value() {
    if (this.tagName === 'INPUT' || this.tagName === 'TEXTAREA' || this.tagName === 'SELECT') {
      return this._value || this.getAttribute('value') || '';
    }
    return this.getAttribute('value') || '';
  }

  set value(val) {
    this._value = String(val);
    this.setAttribute('value', String(val));
  }

  get children() {
    return this.childNodes.filter(c => c.nodeType === 1);
  }

  get firstElementChild() {
    const ch = this.children;
    return ch.length > 0 ? ch[0] : null;
  }

  get lastElementChild() {
    const ch = this.children;
    return ch.length > 0 ? ch[ch.length - 1] : null;
  }

  get nextElementSibling() {
    if (!this.parentNode) return null;
    const siblings = this.parentNode.children;
    const idx = siblings.indexOf(this);
    return idx !== -1 && idx + 1 < siblings.length ? siblings[idx + 1] : null;
  }

  get previousElementSibling() {
    if (!this.parentNode) return null;
    const siblings = this.parentNode.children;
    const idx = siblings.indexOf(this);
    return idx > 0 ? siblings[idx - 1] : null;
  }

  get dataset() {
    const data = {};
    for (const [key, val] of Object.entries(this.attributes)) {
      if (key.startsWith('data-')) {
        const camel = key.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        data[camel] = val;
      }
    }
    return data;
  }

  get innerHTML() {
    return this.childNodes.map(c => serializeNode(c)).join('');
  }

  set innerHTML(htmlStr) {
    this.childNodes = [];
    const parsed = parseHTML(String(htmlStr));
    for (const child of parsed.childNodes) {
      this.appendChild(child);
    }
  }

  get outerHTML() {
    return serializeNode(this);
  }

  addEventListener(type, listener) {
    const t = String(type).toLowerCase();
    if (!this._listeners[t]) this._listeners[t] = [];
    this._listeners[t].push(listener);
  }

  removeEventListener(type, listener) {
    const t = String(type).toLowerCase();
    if (!this._listeners[t]) return;
    this._listeners[t] = this._listeners[t].filter(l => l !== listener);
  }

  dispatchEvent(event) {
    const t = String(event.type || '').toLowerCase();
    event.target = this;
    event.currentTarget = this;
    if (this._listeners[t]) {
      for (const listener of this._listeners[t]) {
        try {
          listener.call(this, event);
        } catch (e) {
          console.error(`Error in event listener for ${t}:`, e);
        }
      }
    }
    return !event.defaultPrevented;
  }

  click() {
    const event = {
      type: 'click',
      target: this,
      currentTarget: this,
      bubbles: true,
      cancelable: true,
      defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; },
      stopPropagation() {}
    };
    this.dispatchEvent(event);
  }

  focus() {
    this.dispatchEvent({ type: 'focus', target: this, defaultPrevented: false, preventDefault() {} });
  }

  blur() {
    this.dispatchEvent({ type: 'blur', target: this, defaultPrevented: false, preventDefault() {} });
  }

  submit() {
    const event = {
      type: 'submit',
      target: this,
      currentTarget: this,
      bubbles: true,
      cancelable: true,
      defaultPrevented: false,
      preventDefault() { this.defaultPrevented = true; },
      stopPropagation() {}
    };
    this.dispatchEvent(event);
  }

  querySelector(selector) {
    return querySelector(this, selector);
  }

  querySelectorAll(selector) {
    return querySelectorAll(this, selector);
  }

  getElementById(id) {
    return querySelector(this, `#${id}`);
  }

  getElementsByClassName(className) {
    return querySelectorAll(this, `.${className}`);
  }

  getElementsByTagName(tagName) {
    return querySelectorAll(this, tagName);
  }
}

function serializeNode(node) {
  if (node.nodeType === 3) {
    return escapeHTML(node.nodeValue || '');
  }
  if (node.nodeType === 8) {
    return `<!--${node.nodeValue}-->`;
  }
  if (node.nodeType === 1) {
    const tag = node.tagName.toLowerCase();
    const attrs = Object.entries(node.attributes)
      .map(([k, v]) => ` ${k}="${escapeHTML(v)}"`)
      .join('');
    if (SELF_CLOSING_TAGS.has(tag) && node.childNodes.length === 0) {
      return `<${tag}${attrs} />`;
    }
    const children = node.childNodes.map(c => serializeNode(c)).join('');
    return `<${tag}${attrs}>${children}</${tag}>`;
  }
  if (node.nodeType === 9) {
    return node.childNodes.map(c => serializeNode(c)).join('');
  }
  return '';
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// -----------------------------------------------------------------------------
// HTML Parser Implementation
// -----------------------------------------------------------------------------

export function parseHTML(htmlString) {
  const root = new MockNode(9, '#document');
  let currentParent = root;
  const tagStack = [root];

  const tagRegex = /<!--([\s\S]*?)-->|<script\b([^>]*)>([\s\S]*?)<\/script>|<style\b([^>]*)>([\s\S]*?)<\/style>|<(\/?)([a-zA-Z0-9:-]+)((?:\s+[^=>\s]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>|([^<]+)/gi;

  let match;
  while ((match = tagRegex.exec(htmlString)) !== null) {
    const [fullMatch, commentText, scriptAttrs, scriptBody, styleAttrs, styleBody, isClosing, tagName, attrString, isSelfClosing, textContent] = match;

    if (commentText !== undefined) {
      const commentNode = new MockNode(8, '#comment', commentText);
      currentParent.appendChild(commentNode);
    } else if (scriptAttrs !== undefined) {
      const scriptElem = new MockElement('script');
      parseAttributes(scriptAttrs, scriptElem);
      if (scriptBody) {
        const textNode = new MockNode(3, '#text', scriptBody);
        scriptElem.appendChild(textNode);
      }
      currentParent.appendChild(scriptElem);
    } else if (styleAttrs !== undefined) {
      const styleElem = new MockElement('style');
      parseAttributes(styleAttrs, styleElem);
      if (styleBody) {
        const textNode = new MockNode(3, '#text', styleBody);
        styleElem.appendChild(textNode);
      }
      currentParent.appendChild(styleElem);
    } else if (textContent !== undefined) {
      if (textContent.length > 0) {
        const textNode = new MockNode(3, '#text', textContent);
        currentParent.appendChild(textNode);
      }
    } else if (tagName) {
      const lowerTag = tagName.toLowerCase();
      if (isClosing) {
        for (let i = tagStack.length - 1; i > 0; i--) {
          if (tagStack[i].nodeType === 1 && tagStack[i].tagName.toLowerCase() === lowerTag) {
            tagStack.splice(i);
            currentParent = tagStack[tagStack.length - 1];
            break;
          }
        }
      } else {
        const elem = new MockElement(lowerTag);
        if (attrString) {
          parseAttributes(attrString, elem);
        }
        currentParent.appendChild(elem);

        const selfClosing = isSelfClosing === '/' || SELF_CLOSING_TAGS.has(lowerTag);
        if (!selfClosing) {
          tagStack.push(elem);
          currentParent = elem;
        }
      }
    }
  }

  return root;
}

function parseAttributes(attrString, elem) {
  const attrRegex = /([a-zA-Z0-9_:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let m;
  while ((m = attrRegex.exec(attrString)) !== null) {
    const attrName = m[1];
    const attrVal = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : m[4] !== undefined ? m[4] : '';
    elem.setAttribute(attrName, attrVal);
  }
}

// -----------------------------------------------------------------------------
// CSS Selector Matching Engine
// -----------------------------------------------------------------------------

function matchSimpleSelector(elem, selector) {
  if (elem.nodeType !== 1) return false;
  selector = selector.trim();
  if (!selector || selector === '*') return true;

  // Split selector into parts (tag, id, classes, attributes, pseudo)
  const partRegex = /([#.]?[a-zA-Z0-9_-]+|\[[^\]]+\]|:[a-zA-Z0-9_-]+(?:\([^)]+\))?)/g;
  const parts = selector.match(partRegex) || [selector];

  for (const part of parts) {
    if (part.startsWith('#')) {
      if (elem.id !== part.slice(1)) return false;
    } else if (part.startsWith('.')) {
      if (!elem.classList.contains(part.slice(1))) return false;
    } else if (part.startsWith('[')) {
      const attrMatch = part.match(/^\[([a-zA-Z0-9_:-]+)(?:([*^$!]?=)(?:"([^"]*)"|'([^']*)'|([^\]]+)))?\]$/);
      if (!attrMatch) return false;
      const attrName = attrMatch[1];
      const op = attrMatch[2] || '';
      const targetVal = attrMatch[3] !== undefined ? attrMatch[3] : attrMatch[4] !== undefined ? attrMatch[4] : attrMatch[5] !== undefined ? attrMatch[5] : null;

      if (!elem.hasAttribute(attrName)) return false;
      if (targetVal === null) continue; // attribute presence check

      const actualVal = elem.getAttribute(attrName) || '';
      if (op === '=' && actualVal !== targetVal) return false;
      if (op === '*=' && !actualVal.includes(targetVal)) return false;
      if (op === '^=' && !actualVal.startsWith(targetVal)) return false;
      if (op === '$=' && !actualVal.endsWith(targetVal)) return false;
      if (op === '!=' && actualVal === targetVal) return false;
    } else if (part.startsWith(':')) {
      if (part === ':first-child') {
        if (!elem.parentNode || elem.parentNode.children[0] !== elem) return false;
      } else if (part === ':last-child') {
        if (!elem.parentNode) return false;
        const ch = elem.parentNode.children;
        if (ch[ch.length - 1] !== elem) return false;
      }
    } else {
      // Tag name
      if (elem.tagName.toLowerCase() !== part.toLowerCase()) return false;
    }
  }

  return true;
}

function matchesComplexSelector(elem, selector) {
  const parts = selector.split(/\s*,\s*/);
  if (parts.length > 1) {
    return parts.some(p => matchesComplexSelector(elem, p));
  }

  const segments = selector.trim().split(/\s+/);
  if (segments.length === 1) {
    return matchSimpleSelector(elem, segments[0]);
  }

  let currentElem = elem;
  for (let i = segments.length - 1; i >= 0; i--) {
    const seg = segments[i];
    if (seg === '>') {
      const parentSeg = segments[i - 1];
      if (!currentElem.parentElement || !matchSimpleSelector(currentElem.parentElement, parentSeg)) {
        return false;
      }
      currentElem = currentElem.parentElement;
      i--; // consume parentSeg
    } else if (i === segments.length - 1) {
      if (!matchSimpleSelector(currentElem, seg)) return false;
    } else {
      // Descendant search upwards
      let found = false;
      let p = currentElem.parentElement;
      while (p) {
        if (matchSimpleSelector(p, seg)) {
          found = true;
          currentElem = p;
          break;
        }
        p = p.parentElement;
      }
      if (!found) return false;
    }
  }

  return true;
}

export function querySelectorAll(rootNode, selector) {
  const results = [];
  const groups = selector.split(/\s*,\s*/);

  function walk(node) {
    if (node.nodeType === 1) {
      for (const group of groups) {
        if (matchesComplexSelector(node, group)) {
          results.push(node);
          break;
        }
      }
    }
    for (const child of node.childNodes) {
      walk(child);
    }
  }

  for (const child of rootNode.childNodes) {
    walk(child);
  }

  return results;
}

export function querySelector(rootNode, selector) {
  const all = querySelectorAll(rootNode, selector);
  return all.length > 0 ? all[0] : null;
}

export function createDOMContext(htmlString) {
  const documentNode = parseHTML(htmlString);
  const head = querySelector(documentNode, 'head') || documentNode;
  const body = querySelector(documentNode, 'body') || documentNode;
  const html = querySelector(documentNode, 'html') || documentNode;

  const mockDoc = {
    nodeType: 9,
    nodeName: '#document',
    documentElement: html,
    head,
    body,
    childNodes: documentNode.childNodes,
    querySelector: (sel) => querySelector(documentNode, sel),
    querySelectorAll: (sel) => querySelectorAll(documentNode, sel),
    getElementById: (id) => querySelector(documentNode, `#${id}`),
    getElementsByClassName: (cls) => querySelectorAll(documentNode, `.${cls}`),
    getElementsByTagName: (tag) => querySelectorAll(documentNode, tag),
    createElement: (tag) => new MockElement(tag),
    createTextNode: (txt) => new MockNode(3, '#text', String(txt)),
    get title() {
      const t = querySelector(documentNode, 'title');
      return t ? t.textContent : '';
    },
    set title(val) {
      let t = querySelector(documentNode, 'title');
      if (!t) {
        t = new MockElement('title');
        head.appendChild(t);
      }
      t.textContent = val;
    }
  };

  const mockWindow = {
    document: mockDoc,
    innerWidth: 1280,
    innerHeight: 800,
    location: {
      href: 'https://www.studio-dbrickell.com/',
      origin: 'https://www.studio-dbrickell.com',
      pathname: '/',
      hash: '',
      search: '',
      assign() {},
      reload() {},
      replace() {}
    },
    navigator: {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) StudioD-TestRunner/1.0'
    },
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() { return true; },
    getComputedStyle(elem) {
      return elem.style;
    }
  };

  return { document: mockDoc, window: mockWindow, root: documentNode };
}

// =============================================================================
// 2. CSS PARSER & STYLE INSPECTOR
// =============================================================================

export class CSSParser {
  constructor(cssString) {
    this.rawCSS = cssString || '';
    this.rules = [];
    this.mediaQueries = [];
    this.fontFaces = [];
    this.keyframes = [];
    this.parse();
  }

  parse() {
    let clean = this.rawCSS.replace(/\/\*[\s\S]*?\*\//g, ''); // strip comments

    // Extract @font-face
    const fontFaceRegex = /@font-face\s*\{([^}]+)\}/gi;
    let match;
    while ((match = fontFaceRegex.exec(clean)) !== null) {
      const declarations = this._parseDeclarations(match[1]);
      this.fontFaces.push(declarations);
    }
    clean = clean.replace(fontFaceRegex, '');

    // Extract @keyframes
    const keyframesRegex = /@(?:-webkit-)?keyframes\s+([a-zA-Z0-9_-]+)\s*\{([\s\S]*?\n\s*\})/gi;
    while ((match = keyframesRegex.exec(clean)) !== null) {
      this.keyframes.push({
        name: match[1],
        content: match[2].trim()
      });
    }

    // Extract @media
    const mediaRegex = /@media\s+([^{]+)\{([\s\S]*?\}\s*)\}/gi;
    while ((match = mediaRegex.exec(clean)) !== null) {
      const query = match[1].trim();
      const innerContent = match[2].trim();
      const innerRules = this._parseRuleBlocks(innerContent);
      this.mediaQueries.push({
        query,
        rules: innerRules
      });
    }
    clean = clean.replace(mediaRegex, '');

    // Parse top-level rules
    this.rules = this._parseRuleBlocks(clean);
  }

  _parseRuleBlocks(cssText) {
    const blocks = [];
    const ruleRegex = /([^{]+)\{([^}]+)\}/g;
    let m;
    while ((m = ruleRegex.exec(cssText)) !== null) {
      const selectors = m[1].split(',').map(s => s.trim()).filter(Boolean);
      const decls = this._parseDeclarations(m[2]);
      for (const selector of selectors) {
        blocks.push({
          selector,
          properties: decls
        });
      }
    }
    return blocks;
  }

  _parseDeclarations(declText) {
    const props = {};
    const items = declText.split(';').map(i => i.trim()).filter(Boolean);
    for (const item of items) {
      const idx = item.indexOf(':');
      if (idx !== -1) {
        const key = item.slice(0, idx).trim().toLowerCase();
        const val = item.slice(idx + 1).trim();
        props[key] = val;
      }
    }
    return props;
  }

  getRule(selector) {
    const matching = this.rules.filter(r => r.selector.toLowerCase() === selector.toLowerCase());
    if (matching.length === 0) return null;
    const merged = {};
    for (const r of matching) {
      Object.assign(merged, r.properties);
    }
    return merged;
  }

  getRulesMatching(pattern) {
    const regex = typeof pattern === 'string' ? new RegExp(pattern, 'i') : pattern;
    return this.rules.filter(r => regex.test(r.selector));
  }

  getMediaQueryRules(queryPattern) {
    const regex = typeof queryPattern === 'string' ? new RegExp(queryPattern, 'i') : queryPattern;
    const matching = this.mediaQueries.filter(mq => regex.test(mq.query));
    return matching.flatMap(mq => mq.rules);
  }

  hasProperty(selector, property, valuePattern) {
    const rule = this.getRule(selector);
    if (!rule) return false;
    const val = rule[property.toLowerCase()];
    if (val === undefined) return false;
    if (valuePattern === undefined) return true;
    if (typeof valuePattern === 'string') {
      return val.toLowerCase().includes(valuePattern.toLowerCase());
    }
    if (valuePattern instanceof RegExp) {
      return valuePattern.test(val);
    }
    return false;
  }

  getProperty(selector, property) {
    const rule = this.getRule(selector);
    return rule ? rule[property.toLowerCase()] || '' : '';
  }

  getFontFaces() {
    return this.fontFaces;
  }

  getKeyframes(name) {
    return this.keyframes.find(k => k.name.toLowerCase() === name.toLowerCase()) || null;
  }
}

export function parseStyles(cssString) {
  return new CSSParser(cssString);
}

// =============================================================================
// 3. VM SANDBOX FOR SCRIPT EXECUTION
// =============================================================================

export class VMSandbox {
  constructor(htmlContent, options = {}) {
    this.htmlContent = htmlContent || '';
    this.domContext = createDOMContext(this.htmlContent);
    this.options = options;
    this.timers = [];
    this.intervals = [];
    this.logs = [];

    this._setupContext();
  }

  _setupContext() {
    const { window, document } = this.domContext;

    const mockLocalStorage = {
      _store: {},
      getItem(key) { return Object.prototype.hasOwnProperty.call(this._store, key) ? this._store[key] : null; },
      setItem(key, val) { this._store[key] = String(val); },
      removeItem(key) { delete this._store[key]; },
      clear() { this._store = {}; }
    };

    const sandboxGlobals = {
      window,
      document,
      navigator: window.navigator,
      location: window.location,
      localStorage: mockLocalStorage,
      sessionStorage: mockLocalStorage,
      console: {
        log: (...args) => this.logs.push({ type: 'log', args }),
        warn: (...args) => this.logs.push({ type: 'warn', args }),
        error: (...args) => this.logs.push({ type: 'error', args }),
        info: (...args) => this.logs.push({ type: 'info', args })
      },
      setTimeout: (fn, ms) => {
        const id = setTimeout(fn, Math.min(ms || 0, 100));
        this.timers.push(id);
        return id;
      },
      clearTimeout: (id) => clearTimeout(id),
      setInterval: (fn, ms) => {
        const id = setInterval(fn, Math.min(ms || 0, 100));
        this.intervals.push(id);
        return id;
      },
      clearInterval: (id) => clearInterval(id),
      requestAnimationFrame: (fn) => setTimeout(fn, 16),
      cancelAnimationFrame: (id) => clearTimeout(id),
      IntersectionObserver: class {
        constructor(callback) { this.callback = callback; }
        observe() {}
        unobserve() {}
        disconnect() {}
      },
      MutationObserver: class {
        constructor(callback) { this.callback = callback; }
        observe() {}
        disconnect() {}
      },
      Event: function(type, opts = {}) {
        return {
          type,
          bubbles: opts.bubbles || false,
          cancelable: opts.cancelable || false,
          defaultPrevented: false,
          preventDefault() { this.defaultPrevented = true; }
        };
      },
      CustomEvent: function(type, opts = {}) {
        return {
          type,
          detail: opts.detail || null,
          bubbles: opts.bubbles || false,
          cancelable: opts.cancelable || false,
          defaultPrevented: false,
          preventDefault() { this.defaultPrevented = true; }
        };
      },
      fetch: async () => ({
        ok: true,
        status: 200,
        json: async () => ({ success: true }),
        text: async () => 'OK'
      })
    };

    sandboxGlobals.window.window = sandboxGlobals.window;
    sandboxGlobals.window.self = sandboxGlobals.window;
    sandboxGlobals.window.top = sandboxGlobals.window;

    this.vmContext = vm.createContext(sandboxGlobals);
  }

  execute(codeString, filename = 'inline-script.js') {
    try {
      const script = new vm.Script(codeString, { filename });
      return script.runInContext(this.vmContext);
    } catch (err) {
      throw new Error(`VM Execution Error in ${filename}: ${err.message}\n${err.stack}`);
    }
  }

  executeFile(filePath) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Script file not found: ${filePath}`);
    }
    const code = fs.readFileSync(filePath, 'utf8');
    return this.execute(code, path.basename(filePath));
  }

  cleanup() {
    for (const t of this.timers) clearTimeout(t);
    for (const i of this.intervals) clearInterval(i);
  }
}

export function createSandbox(htmlContent, jsFiles = []) {
  const sandbox = new VMSandbox(htmlContent);
  for (const jsFile of jsFiles) {
    const fullPath = path.isAbsolute(jsFile) ? jsFile : path.join(DEMO_ROOT, jsFile);
    if (fs.existsSync(fullPath)) {
      sandbox.executeFile(fullPath);
    }
  }
  return sandbox;
}

// =============================================================================
// 4. ASSET AUDITOR
// =============================================================================

export class AssetAuditor {
  constructor(baseDir = DEMO_ROOT) {
    this.baseDir = baseDir;
    this.assetsDir = path.join(baseDir, 'assets');
  }

  verifyAssetExists(relativePath) {
    const fullPath = path.resolve(this.baseDir, relativePath);
    return fs.existsSync(fullPath);
  }

  verifyAssetNonEmpty(relativePath, minBytes = 1) {
    const fullPath = path.resolve(this.baseDir, relativePath);
    if (!fs.existsSync(fullPath)) return false;
    const stat = fs.statSync(fullPath);
    return stat.size >= minBytes;
  }

  getAssetSize(relativePath) {
    const fullPath = path.resolve(this.baseDir, relativePath);
    if (!fs.existsSync(fullPath)) return 0;
    return fs.statSync(fullPath).size;
  }

  checkMagicBytes(relativePath, expectedType) {
    const fullPath = path.resolve(this.baseDir, relativePath);
    if (!fs.existsSync(fullPath)) return false;
    const buffer = fs.readFileSync(fullPath);
    if (buffer.length < 4) return false;

    switch (expectedType.toLowerCase()) {
      case 'png':
        return buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47;
      case 'jpeg':
      case 'jpg':
        return buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
      case 'webp':
        return buffer.toString('utf8', 0, 4) === 'RIFF' && buffer.toString('utf8', 8, 12) === 'WEBP';
      case 'ttf':
        return (buffer[0] === 0x00 && buffer[1] === 0x01 && buffer[2] === 0x00 && buffer[3] === 0x00) ||
               (buffer.toString('utf8', 0, 4) === 'true') ||
               (buffer.toString('utf8', 0, 4) === 'OTTO');
      case 'woff2':
        return buffer.toString('utf8', 0, 4) === 'wOF2';
      case 'svg': {
        const text = buffer.toString('utf8', 0, Math.min(buffer.length, 500));
        return text.includes('<svg') || text.includes('<?xml');
      }
      default:
        return true;
    }
  }

  auditHtmlAssets(htmlContent) {
    const issues = [];
    const dom = parseHTML(htmlContent);

    // Images
    const images = querySelectorAll(dom, 'img');
    for (const img of images) {
      const src = img.getAttribute('src');
      if (src && !src.startsWith('data:') && !src.startsWith('http')) {
        const cleanSrc = src.split('?')[0].split('#')[0];
        if (!this.verifyAssetExists(cleanSrc)) {
          issues.push({ type: 'missing_image', target: src, element: 'img' });
        } else if (!this.verifyAssetNonEmpty(cleanSrc, 10)) {
          issues.push({ type: 'empty_image', target: src, element: 'img' });
        }
      }
    }

    // Stylesheets
    const links = querySelectorAll(dom, 'link[rel="stylesheet"]');
    for (const link of links) {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('http')) {
        const cleanHref = href.split('?')[0].split('#')[0];
        if (!this.verifyAssetExists(cleanHref)) {
          issues.push({ type: 'missing_stylesheet', target: href, element: 'link' });
        }
      }
    }

    // Scripts
    const scripts = querySelectorAll(dom, 'script[src]');
    for (const script of scripts) {
      const src = script.getAttribute('src');
      if (src && !src.startsWith('http')) {
        const cleanSrc = src.split('?')[0].split('#')[0];
        if (!this.verifyAssetExists(cleanSrc)) {
          issues.push({ type: 'missing_script', target: src, element: 'script' });
        }
      }
    }

    return issues;
  }

  auditCssAssets(cssContent) {
    const issues = [];
    const urlRegex = /url\(\s*['"]?([^'")]+)['"]?\s*\)/gi;
    let m;
    while ((m = urlRegex.exec(cssContent)) !== null) {
      const targetUrl = m[1].trim();
      if (!targetUrl.startsWith('data:') && !targetUrl.startsWith('http')) {
        const clean = targetUrl.split('?')[0].split('#')[0];
        const resolvedPath = clean.startsWith('../')
          ? path.join('assets/css', clean)
          : path.join('assets', clean);

        if (!this.verifyAssetExists(resolvedPath)) {
          issues.push({ type: 'missing_css_asset', url: targetUrl, resolved: resolvedPath });
        }
      }
    }
    return issues;
  }
}

// =============================================================================
// 5. PORTFOLIO AUDITOR
// =============================================================================

export class PortfolioAuditor {
  constructor(demosPagePath = path.join(WEBSITE_ROOT, 'src', 'components', 'DemosPage.tsx')) {
    this.demosPagePath = demosPagePath;
  }

  readContent() {
    if (!fs.existsSync(this.demosPagePath)) {
      throw new Error(`DemosPage.tsx not found at: ${this.demosPagePath}`);
    }
    return fs.readFileSync(this.demosPagePath, 'utf8');
  }

  findDemoItem(demoId = 'studio-dbrickell') {
    const content = this.readContent();
    const idRegex = new RegExp(`id:\\s*["']${demoId}["']`, 'i');
    if (!idRegex.test(content)) return null;

    // Extract item block around the id
    const idx = content.indexOf(`id: "${demoId}"`) !== -1
      ? content.indexOf(`id: "${demoId}"`)
      : content.indexOf(`id: '${demoId}'`);

    if (idx === -1) return null;

    // Search backwards for opening brace
    const start = content.lastIndexOf('{', idx);
    // Search forwards for closing brace matching depth
    let depth = 0;
    let end = start;
    for (let i = start; i < content.length; i++) {
      if (content[i] === '{') depth++;
      else if (content[i] === '}') {
        depth--;
        if (depth === 0) {
          end = i + 1;
          break;
        }
      }
    }

    const block = content.slice(start, end);
    const getField = (fieldName) => {
      const match = block.match(new RegExp(`${fieldName}:\\s*["']([^"']+)["']`));
      return match ? match[1] : null;
    };

    const getArrayField = (fieldName) => {
      const match = block.match(new RegExp(`${fieldName}:\\s*\\[([^\\]]+)\\]`));
      if (!match) return [];
      return match[1]
        .split(',')
        .map(s => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    };

    return {
      raw: block,
      id: getField('id'),
      title: getField('title'),
      category: getField('category'),
      description: getField('description'),
      demoUrl: getField('demoUrl'),
      previewImage: getField('previewImage'),
      badge: getField('badge'),
      tags: getArrayField('tags'),
      features: getArrayField('features')
    };
  }
}

// =============================================================================
// 6. TEST DSL & ASSERTION CORE
// =============================================================================

export class TestRegistry {
  constructor() {
    this.suites = [];
    this.currentSuite = null;
  }

  addSuite(name, fn) {
    const suite = {
      name,
      tests: [],
      beforeEach: [],
      afterEach: [],
      beforeAll: [],
      afterAll: []
    };
    const prevSuite = this.currentSuite;
    this.currentSuite = suite;
    this.suites.push(suite);

    try {
      fn();
    } finally {
      this.currentSuite = prevSuite;
    }
  }

  addTest(id, name, fn, metadata = {}) {
    const testCase = {
      id,
      name,
      fn,
      tier: metadata.tier || 1,
      feature: metadata.feature || null,
      suiteName: this.currentSuite ? this.currentSuite.name : 'Global'
    };

    if (this.currentSuite) {
      this.currentSuite.tests.push(testCase);
    } else {
      this.addSuite('Global', () => {
        this.currentSuite.tests.push(testCase);
      });
    }
  }

  clear() {
    this.suites = [];
    this.currentSuite = null;
  }
}

export const registry = new TestRegistry();

export function describe(name, fn) {
  registry.addSuite(name, fn);
}

export function test(nameOrId, nameOrFn, maybeFn) {
  let id, name, fn;
  if (typeof nameOrFn === 'function') {
    id = nameOrId;
    name = nameOrId;
    fn = nameOrFn;
  } else {
    id = nameOrId;
    name = nameOrFn;
    fn = maybeFn;
  }
  registry.addTest(id, name, fn);
}

export const it = test;

export function beforeEach(fn) {
  if (registry.currentSuite) {
    registry.currentSuite.beforeEach.push(fn);
  }
}

export function afterEach(fn) {
  if (registry.currentSuite) {
    registry.currentSuite.afterEach.push(fn);
  }
}

export function beforeAll(fn) {
  if (registry.currentSuite) {
    registry.currentSuite.beforeAll.push(fn);
  }
}

export function afterAll(fn) {
  if (registry.currentSuite) {
    registry.currentSuite.afterAll.push(fn);
  }
}

export class MatcherError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MatcherError';
  }
}

export function expect(actual) {
  const createMatchers = (notFlag) => ({
    toBe(expected) {
      const pass = Object.is(actual, expected);
      if (notFlag ? pass : !pass) {
        throw new MatcherError(
          `Expected ${JSON.stringify(actual)} ${notFlag ? 'NOT to be' : 'to be'} ${JSON.stringify(expected)}`
        );
      }
    },
    toEqual(expected) {
      const actualJson = JSON.stringify(actual);
      const expectedJson = JSON.stringify(expected);
      const pass = actualJson === expectedJson;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(
          `Expected ${actualJson} ${notFlag ? 'NOT to equal' : 'to equal'} ${expectedJson}`
        );
      }
    },
    toContain(itemOrSubstring) {
      let pass = false;
      if (typeof actual === 'string') {
        pass = actual.includes(String(itemOrSubstring));
      } else if (Array.isArray(actual)) {
        pass = actual.includes(itemOrSubstring);
      } else if (actual && typeof actual === 'object') {
        pass = Object.prototype.hasOwnProperty.call(actual, itemOrSubstring);
      }
      if (notFlag ? pass : !pass) {
        throw new MatcherError(
          `Expected ${JSON.stringify(actual)} ${notFlag ? 'NOT to contain' : 'to contain'} ${JSON.stringify(itemOrSubstring)}`
        );
      }
    },
    toMatch(regexOrString) {
      const regex = typeof regexOrString === 'string' ? new RegExp(regexOrString) : regexOrString;
      const pass = regex.test(String(actual));
      if (notFlag ? pass : !pass) {
        throw new MatcherError(
          `Expected "${String(actual)}" ${notFlag ? 'NOT to match' : 'to match'} ${regex}`
        );
      }
    },
    toBeGreaterThan(val) {
      const pass = actual > val;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be >' : 'to be >'} ${val}`);
      }
    },
    toBeGreaterThanOrEqual(val) {
      const pass = actual >= val;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be >=' : 'to be >='} ${val}`);
      }
    },
    toBeLessThan(val) {
      const pass = actual < val;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be <' : 'to be <'} ${val}`);
      }
    },
    toBeLessThanOrEqual(val) {
      const pass = actual <= val;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be <=' : 'to be <='} ${val}`);
      }
    },
    toBeTruthy() {
      const pass = Boolean(actual);
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be truthy' : 'to be truthy'}`);
      }
    },
    toBeFalsy() {
      const pass = !Boolean(actual);
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be falsy' : 'to be falsy'}`);
      }
    },
    toBeDefined() {
      const pass = actual !== undefined;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected value ${notFlag ? 'NOT to be defined' : 'to be defined'}`);
      }
    },
    toBeUndefined() {
      const pass = actual === undefined;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be undefined' : 'to be undefined'}`);
      }
    },
    toBeNull() {
      const pass = actual === null;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected ${actual} ${notFlag ? 'NOT to be null' : 'to be null'}`);
      }
    },
    toHaveLength(len) {
      const actualLen = actual ? actual.length : undefined;
      const pass = actualLen === len;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected length ${actualLen} ${notFlag ? 'NOT to be' : 'to be'} ${len}`);
      }
    },
    toHaveProperty(prop, val) {
      const hasProp = actual && Object.prototype.hasOwnProperty.call(actual, prop);
      const pass = hasProp && (val === undefined || actual[prop] === val);
      if (notFlag ? pass : !pass) {
        throw new MatcherError(`Expected property "${prop}" ${notFlag ? 'NOT to exist' : 'to exist'}`);
      }
    },
    toThrow(expectedError) {
      if (typeof actual !== 'function') {
        throw new MatcherError('expect().toThrow requires a function');
      }
      let thrown = null;
      try {
        actual();
      } catch (e) {
        thrown = e;
      }
      const pass = thrown !== null;
      if (notFlag ? pass : !pass) {
        throw new MatcherError(
          `Expected function ${notFlag ? 'NOT to throw' : 'to throw'}, but ${thrown ? `threw "${thrown.message}"` : 'did not throw'}`
        );
      }
      if (pass && expectedError) {
        const msg = thrown.message;
        if (typeof expectedError === 'string' && !msg.includes(expectedError)) {
          throw new MatcherError(`Expected error message to include "${expectedError}", but got "${msg}"`);
        }
        if (expectedError instanceof RegExp && !expectedError.test(msg)) {
          throw new MatcherError(`Expected error message to match ${expectedError}, but got "${msg}"`);
        }
      }
    }
  });

  const matchers = createMatchers(false);
  matchers.not = createMatchers(true);
  return matchers;
}

export default {
  createDOMContext,
  parseHTML,
  parseStyles,
  CSSParser,
  VMSandbox,
  createSandbox,
  AssetAuditor,
  PortfolioAuditor,
  describe,
  test,
  it,
  expect,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
  registry,
  DEMO_ROOT,
  WEBSITE_ROOT
};
