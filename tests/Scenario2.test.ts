import { expect, test } from "@playwright/test";

test('testID2', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/');
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
    const value = page.locator('#slider3');
    await value.getByRole('slider').fill('95');
    
    console.log(await value.textContent());
    
  });