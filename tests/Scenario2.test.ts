import { expect, test } from "@playwright/test";
const { chromium } = require('playwright');

test('testID2', async ({ page }) => {

  const capabilities = {
    'browserName': 'Chrome', 
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Sample Build',
      'name': 'Playwright Sample Test',
      'user': 'kumarmanjunath264',
      'accessKey': 'Qdyc7JnkkJ7teddCryzEgutimX1BKuGklI3rgQDV7KIDvM65SA',
      'network': true,
      'video': true,
      'console': true
    }
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
  })

    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
    const value = page.locator('#slider3');
    await value.getByRole('slider').fill('95');
    
    console.log(await value.textContent());
    
  });