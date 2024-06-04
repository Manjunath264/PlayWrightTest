import { test, expect } from '@playwright/test';

test('testID3', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  
  await page.click("//a[contains(text(),'Input Form Submit')]");

  await page.click("(//button[@type='submit'])[2]");

  

  const txtmsg = page.locator("(//input[contains(@class,'w-full border')])[1]");

    console.log(await txtmsg.textContent());
    


  await page.waitForTimeout(2000);


  await page.getByPlaceholder('Name', { exact: true }).click();
  await page.getByPlaceholder('Name', { exact: true }).fill('Manjunathkumar B');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('kumarmanjunath264@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Newday@123#');
  await page.getByPlaceholder('Company').click();
  await page.getByPlaceholder('Company').fill('Baygrape Technologies');
  await page.getByPlaceholder('Website').click();
  await page.getByPlaceholder('Website').fill('www.baygrape.com');
  await page.getByRole('combobox').selectOption('US');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('texas');
  await page.getByPlaceholder('Address 1').click();
  await page.getByPlaceholder('Address 1').fill('690/0 vet college street');
  await page.getByPlaceholder('Address 2').click();
  await page.getByPlaceholder('Address 2').fill('jp nagar');
  await page.getByPlaceholder('State').click();
  await page.getByPlaceholder('State').fill('texas');
  await page.getByPlaceholder('Zip code').click();
  await page.getByPlaceholder('Zip code').fill('560078');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Submit' }).click();

  const successMessage: string = 'Thanks for contacting us, we will get back to you shortly.';
  
  const messages = page.locator("//p[@class='success-msg hidden']");
  console.log(await messages.textContent());
  let expectedResults = successMessage;
  expect (messages).toHaveText(expectedResults);
 

  



  
 



  
  



})