import { expect, test } from "@playwright/test";
const { chromium } = require('playwright');

test("TestID1", async ({ page })=>{


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

    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.click("//a[contains(text(),'Simple Form Demo')]");

    const currentURL = page.url();
    console.log(currentURL);
    
    expect(currentURL).toBe('https://www.lambdatest.com/selenium-playground/simple-form-demo');

    const messageInput = page.locator("(//input[@id='user-message'])[1]");

    const welcomeMessage: string = 'Welcome to LambdaTest';

    await messageInput.fill(welcomeMessage);

    await page.click("(//button[@type='button'])[1]");

    const element = page.locator("//p[text()='Welcome to LambdaTest']");
    console.log(await element.textContent());
    let expectedResult = welcomeMessage;
    expect (element).toHaveText(expectedResult);


})


