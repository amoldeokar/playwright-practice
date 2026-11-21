// @ts-check
const { test, expect } = require('@playwright/test');
test.describe('Login functionality', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // 1. Go to test page (using Playwright site as demo)
    await page.goto('https://playwright.dev/');
    
    // 2. Verify page loaded
    await expect(page).toHaveTitle(/Playwright/);
    
    // 3. Verify navigation works
    await page.getByRole('link', { name: 'Get started' }).click();
    
    // 4. Assert installation page loaded
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});