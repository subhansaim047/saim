const fs = require('fs');
const path = require('path');

// Let's verify playwright availability
try {
  const playwright = require('playwright');
  console.log('Playwright is available!');
} catch (e) {
  console.log('Playwright not in local node_modules, checking globally or puppeteer...');
  try {
    const puppeteer = require('puppeteer');
    console.log('Puppeteer is available!');
  } catch (err) {
    console.log('Neither playwright nor puppeteer is directly in local root.');
  }
}
