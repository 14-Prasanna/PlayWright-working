# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> Demo Blaze Login
- Location: tests\demo.spec.ts:8:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://demoblaze.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeEach(async ({page}) => {
> 4  |     await page.goto(process.env.UAT_BASE_URL!)
     |                ^ Error: page.goto: Test ended.
  5  | })
  6  | 
  7  | 
  8  | test('Demo Blaze Login', async ({ page }) => {
  9  | 
  10 |     await page.locator('#login2').click();
  11 | 
  12 |     await page.locator('#loginusername').fill('admin');
  13 | 
  14 |     await page.locator('#loginpassword').fill('admin');
  15 | 
  16 |     await page.getByRole('button', { name: 'Log in' }).click();
  17 | 
  18 |     await expect(
  19 |         page.locator('#nameofuser')
  20 |     ).toContainText('Welcome');
  21 | 
  22 | });
  23 | 
  24 | test.afterEach(async ({page}) => {
  25 |     console.log("Test is completed..")
  26 | })
```