import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/",
    {
      waitUntil:"networkidle"
    }
  );
});


test("Alerts to be handled", async ({ page }) => {

  page.once("dialog", async dialog => {
    console.log("The message:", dialog.message());
    await dialog.accept();
  });

  

  await page.getByRole("button", { name: "Click Me" }).nth(0).click();
});


test("Confirmation Alter", async ({ page }) => {
    
  page.once("dialog", async dialog => {
    console.log("The message:", dialog.message());
    await dialog.accept();
  });

  await page.getByRole("button", { name: "Click Me" }).nth(1).click();
});

test("Prompt to be handled", async ({ page }) => {

  page.once("dialog", async dialog => {
    console.log("Dialog type:", dialog.type());   
    console.log("The message:", dialog.message());

    await dialog.accept("Prasanna"); 
  });

  await page.getByRole("button", { name: "Click Me" }).nth(2).click();
  const display = await page.locator("#prompt-demo").textContent();

  expect (display).toBe(page.locator("#prompt-demo").textContent())
});


test.afterEach(async({page}) =>{
    console.log("Test Completed")
})