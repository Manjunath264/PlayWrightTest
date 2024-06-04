import { expect, test } from "@playwright/test";

test("TestID1", async ({ page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground");
    await page.click("//a[contains(text(),'Simple Form Demo')]");

    const currentURL = page.url();
    console.log(currentURL);
    
    expect(currentURL).toBe('https://www.lambdatest.com/selenium-playground/simple-form-demo');

    const messageInput = page.locator("(//input[@id='user-message'])[1]");

    const welcomeMessage: string = 'Welcome to LambdaTest';

    await messageInput.fill(welcomeMessage);

    await page.click("(//button[contains(@class,'mt-20 mb-10')])[1]");

    const element = page.locator("//p[text()='Welcome to LambdaTest']");
    console.log(await element.textContent());
    let expectedResult = welcomeMessage;
    expect (element).toHaveText(expectedResult);


})


