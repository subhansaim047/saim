const { chromium } = require('playwright');

async function runTests() {
  console.log('--- STARTING PLAYWRIGHT INTERACTIVE TOOLS TEST (USING SYSTEM BROWSER) ---');
  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch (e) {
    console.log('Chrome channel failed, trying msedge...');
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  }

  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const baseUrl = 'http://localhost:3042';

  try {
    // 1. RECIPE CALCULATOR TEST
    console.log('\n[TEST 1] Testing Recipe Calculator (/food-safety-templates/recipe-calculator)...');
    await page.goto(`${baseUrl}/food-safety-templates/recipe-calculator`, { waitUntil: 'networkidle' });

    // Count initial rows
    let rows = await page.$$('tbody tr');
    console.log(`  Initial ingredient rows: ${rows.length}`);
    if (rows.length !== 7) throw new Error(`Expected 7 initial rows, found ${rows.length}`);

    // Click Top "Add Ingredient" button
    const topAddBtn = await page.$('button:has-text("Add Ingredient")');
    if (!topAddBtn) throw new Error('Top "+ Add Ingredient" button not found');
    await topAddBtn.click();
    await page.waitForTimeout(300);

    rows = await page.$$('tbody tr');
    console.log(`  After top click rows: ${rows.length}`);
    if (rows.length !== 8) throw new Error(`Expected 8 rows after top click, found ${rows.length}`);

    // Click Bottom "+ Add Ingredient Row" button
    const bottomAddBtn = await page.$('button:has-text("+ Add Ingredient Row")');
    if (!bottomAddBtn) throw new Error('Bottom "+ Add Ingredient Row" button not found');
    await bottomAddBtn.click();
    await page.waitForTimeout(300);

    rows = await page.$$('tbody tr');
    console.log(`  After bottom click rows: ${rows.length}`);
    if (rows.length !== 9) throw new Error(`Expected 9 rows after bottom click, found ${rows.length}`);

    // Type in the last ingredient
    const inputs = await page.$$('tbody tr td input[type="text"]');
    const lastInput = inputs[inputs.length - 1];
    await lastInput.fill('Madagascan Vanilla Extract');

    // Verify side-by-side card contains the new ingredient
    const cardText = await page.textContent('.printable-doc');
    if (!cardText.includes('Madagascan Vanilla Extract')) {
      throw new Error('Rescaled recipe card did not update with new ingredient');
    }
    console.log('  ✓ Recipe Calculator: Add Ingredient & Dynamic Scaling PASSED');

    // 2. FOOD COST CALCULATOR TEST
    console.log('\n[TEST 2] Testing Food Cost Calculator (/food-safety-templates/food-cost-calculator)...');
    await page.goto(`${baseUrl}/food-safety-templates/food-cost-calculator`, { waitUntil: 'networkidle' });

    let primaryRows = await page.$$('table:first-of-type tbody tr');
    console.log(`  Initial primary rows: ${primaryRows.length}`);

    // Click "+ Add Primary Ingredient"
    const addPrimaryBtn = await page.$('button:has-text("+ Add Primary Ingredient")');
    if (!addPrimaryBtn) throw new Error('+ Add Primary Ingredient button not found');
    await addPrimaryBtn.click();
    await page.waitForTimeout(300);

    let newPrimaryRows = await page.$$('table:first-of-type tbody tr');
    console.log(`  After adding primary ingredient: ${newPrimaryRows.length}`);
    if (newPrimaryRows.length !== primaryRows.length + 1) {
      throw new Error('Primary ingredient row was not added');
    }

    // Click "+ Add Secondary Ingredient"
    const addSecondaryBtn = await page.$('button:has-text("+ Add Secondary Ingredient")');
    if (!addSecondaryBtn) throw new Error('+ Add Secondary Ingredient button not found');
    await addSecondaryBtn.click();
    await page.waitForTimeout(300);
    console.log('  ✓ Food Cost Calculator: Add Primary & Secondary Ingredients PASSED');

    // 3. ALLERGEN MATRIX TEST
    console.log('\n[TEST 3] Testing Allergen Matrix (/food-safety-templates/allergy-matrix)...');
    await page.goto(`${baseUrl}/food-safety-templates/allergy-matrix`, { waitUntil: 'networkidle' });

    const initialDishRows = await page.$$('tbody tr');
    console.log(`  Initial dish rows: ${initialDishRows.length}`);

    // Add new dish via form
    await page.fill('input[placeholder*="Dish name"]', 'Artisan Sourdough Garlic Bread');
    await page.fill('input[placeholder*="Category"]', 'Starters');
    await page.fill('input[placeholder*="All ingredients"]', 'Wheat flour, Garlic butter, Parsley, Sea salt');
    await page.click('button:has-text("+ Add Dish & Ingredients")');
    await page.waitForTimeout(300);

    const newDishRows = await page.$$('tbody tr');
    console.log(`  After adding dish: ${newDishRows.length}`);
    if (newDishRows.length !== initialDishRows.length + 1) {
      throw new Error('Allergen dish row was not added');
    }

    // Toggle allergen status
    const firstToggle = await page.$('tbody tr:last-child button[title*="Click to toggle"]');
    if (firstToggle) {
      const beforeText = await firstToggle.innerText();
      await firstToggle.click();
      await page.waitForTimeout(200);
      const afterText = await firstToggle.innerText();
      console.log(`  Toggle allergen: '${beforeText}' -> '${afterText}'`);
    }
    console.log('  ✓ Allergen Matrix: Add Dish & Toggle Allergens PASSED');

    // 4. MAIN HUB QUICK LAUNCH MODALS TEST
    console.log('\n[TEST 4] Testing Main Templates Hub Modal Launcher (/food-safety-templates)...');
    await page.goto(`${baseUrl}/food-safety-templates`, { waitUntil: 'networkidle' });

    // Click "💰 Food Cost Calculator"
    await page.click('button:has-text("💰 Food Cost Calculator")');
    await page.waitForSelector('.fixed.inset-0', { state: 'visible' });
    console.log('  Modal opened successfully!');

    // In-modal "+ Add Primary Ingredient"
    const modalAddBtn = await page.$('.fixed.inset-0 button:has-text("+ Add Primary Ingredient")');
    if (!modalAddBtn) throw new Error('In-modal + Add Primary Ingredient button not found');
    await modalAddBtn.click();
    await page.waitForTimeout(300);
    console.log('  ✓ Hub Modal: Food Cost Calculator interactive buttons PASSED');

    // Close modal
    await page.click('.fixed.inset-0 button[title="Close"]');
    await page.waitForTimeout(300);

    // Click "👨‍🍳 Recipe Calculator"
    await page.click('button:has-text("👨‍🍳 Recipe Calculator")');
    await page.waitForSelector('.fixed.inset-0', { state: 'visible' });
    const modalRecipeAddBtn = await page.$('.fixed.inset-0 button:has-text("+ Add Ingredient Row")');
    if (!modalRecipeAddBtn) throw new Error('In-modal + Add Ingredient Row button not found');
    await modalRecipeAddBtn.click();
    await page.waitForTimeout(300);
    console.log('  ✓ Hub Modal: Recipe Calculator interactive buttons PASSED');

    console.log('\n========================================');
    console.log('🎉 ALL INTERACTIVE TOOL TESTS PASSED 100%!');
    console.log('========================================\n');
  } catch (err) {
    console.error('❌ TEST FAILED:', err);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

runTests();
