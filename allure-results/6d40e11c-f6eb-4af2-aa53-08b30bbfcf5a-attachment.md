# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assessment.test.ts >> Sum of Two Number
- Location: tests\Assessment.test.ts:35:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - region "Promotional banner" [ref=e4]:
    - generic [ref=e8]:
      - link "LambdaTest is TestMu AI" [ref=e9] [cursor=pointer]:
        - /url: /lambdatest-is-now-testmuai/
      - generic [ref=e10]:
        - img "White Arrow" [ref=e11]
        - img "White Arrow" [ref=e12]
  - banner [ref=e13]:
    - navigation [ref=e14]:
      - generic [ref=e15]:
        - link "Visit TestMu AI Homepage" [ref=e18] [cursor=pointer]:
          - /url: https://www.testmuai.com/
          - img "Logo" [ref=e19]
        - generic [ref=e22]:
          - link "Platform" [ref=e24] [cursor=pointer]:
            - /url: /feature/
            - text: Platform
          - button "Solutions" [ref=e27] [cursor=pointer]: Solutions
          - button "Resources" [ref=e30] [cursor=pointer]: Resources
          - link "AI Agents" [ref=e33] [cursor=pointer]:
            - /url: https://www.testmuai.com/agents/
            - text: AI Agents
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
> 3  | test.beforeEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  4  | 
  5  |   await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/", {
  6  |     timeout: 60000,
  7  |     waitUntil: "domcontentloaded"
  8  |   });
  9  | });
  10 | 
  11 | test("To Test the input field", async ({ page }) => {
  12 |   console.log(await page.url());
  13 |   console.log(await page.title());
  14 | 
  15 |   const input_field = page.getByPlaceholder("Please enter your Message");
  16 | 
  17 |   console.log(await input_field.getAttribute("placeholder"));
  18 | 
  19 |   
  20 |   await input_field.scrollIntoViewIfNeeded();
  21 |   console.log(await input_field.boundingBox());
  22 | 
  23 |   await input_field.fill("prasanna");
  24 |   console.log(await input_field.inputValue());
  25 | 
  26 |   await page.locator("#showInput").click();
  27 | 
  28 |   const input_value = await input_field.inputValue();
  29 |   console.log("input field", input_value);
  30 | 
  31 |   
  32 |   await expect(page.locator('p#message.mt-20')).toHaveText('prasanna');
  33 | });
  34 | 
  35 | test("Sum of Two Number", async ({ page }) => {
  36 |   const a = "25";
  37 |   const b = "10";
  38 | 
  39 |   const sum1 = page.locator("#sum1");
  40 |   await sum1.scrollIntoViewIfNeeded();
  41 |   await sum1.clear();
  42 | //   await sum1.pressSequentially(a, { delay: 100 });
  43 |  await page.waitForTimeout(3000);
  44 |   await sum1.fill(a);
  45 |   await expect(sum1).toHaveValue(a);
  46 | 
  47 |   const sum2 = page.locator("#sum2");
  48 |   await sum2.scrollIntoViewIfNeeded();
  49 |   await sum2.clear();
  50 | //   await sum2.pressSequentially(b, { delay: 100 });
  51 | await page.waitForTimeout(3000);
  52 |     await sum2.fill(b)
  53 |   await expect(sum2).toHaveValue(b);
  54 | 
  55 |   await page.getByRole("button", { name: /get sum/i }).click();
  56 | 
  57 |   const display = page.locator("#addmessage");
  58 | 
  59 |   await expect(display).toHaveText("35", { timeout: 10000 });
  60 | 
  61 |   console.log("The value:", await display.textContent());
  62 | });
  63 | 
  64 | test.afterEach(async ({ page }) => {
  65 |   console.log("Test completed");
  66 | });
  67 | 
```