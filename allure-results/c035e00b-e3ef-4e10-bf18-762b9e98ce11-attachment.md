# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assessment.test.ts >> Sum of Two Number
- Location: tests\Assessment.test.ts:34:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/simple-form-demo/", waiting until "networkidle"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeEach(async ({ page }) => {
> 4  |   await page.goto(
     |              ^ Error: page.goto: Test ended.
  5  |     "https://www.testmuai.com/selenium-playground/simple-form-demo/",
  6  |     {
  7  |       waitUntil:"networkidle"
  8  |     }
  9  |   );
  10 | });
  11 | 
  12 | test("To Test the input field", async ({ page }) => {
  13 |   console.log("URL:", page.url());
  14 |   console.log("Title:", await page.title());
  15 | 
  16 |   const inputField = page.getByPlaceholder("Please enter your Message");
  17 | 
  18 |   await expect(inputField).toBeVisible();
  19 | 
  20 |   await inputField.scrollIntoViewIfNeeded();
  21 |   await inputField.fill("prasanna");
  22 | 
  23 |   await expect(inputField).toHaveValue("prasanna");
  24 | 
  25 |   await page.locator("#showInput").click();
  26 | 
  27 |   const output = page.locator("#message");
  28 | 
  29 |   await expect(output).toHaveText("prasanna");
  30 | 
  31 |   console.log("Displayed:", await output.textContent());
  32 | });
  33 | 
  34 | test("Sum of Two Number", async ({ page }) => {
  35 |   const sum1 = page.locator("#sum1");
  36 |   const sum2 = page.locator("#sum2");
  37 |   const button = page.getByRole("button", { name: "Get Sum" });
  38 |   const result = page.locator("#addmessage");
  39 | 
  40 |   await expect(sum1).toBeVisible();
  41 |   await expect(sum2).toBeVisible();
  42 | 
  43 |   await sum1.fill("25");
  44 |   await expect(sum1).toHaveValue("25");
  45 | 
  46 |   await sum2.fill("10");
  47 |   await expect(sum2).toHaveValue("10");
  48 | 
  49 |   await button.click();
  50 | 
  51 |   
  52 |   await expect(result).toHaveText("35", {
  53 |     timeout: 10000,
  54 |   });
  55 | 
  56 |   console.log("Result:", await result.textContent());
  57 | });
  58 | 
  59 | 
  60 | test("Alters to be handle", async({page}) => {
  61 |     await page.getByRole('button', {name: 'Click Me'}).nth(0).click()
  62 | 
  63 |     page.once('dialog', alert => {
  64 |         console.log("The message: ", alert.message());
  65 |         alert.accept().catch(() => {});
  66 |     })
  67 | })
  68 | 
  69 | test.afterEach(async () => {
  70 |   console.log("Test completed");
  71 | });
```