# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: iframe.test.ts >> Frame
- Location: tests\iframe.test.ts:7:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('iframe[name = \'firstFr\']').contentFrame().locator('p.text-sm.font-semibold.text-center')
Expected substring: "Prasanna K"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('iframe[name = \'firstFr\']').contentFrame().locator('p.text-sm.font-semibold.text-center')

```

```yaml
- heading "Enter Details" [level=1]
- text: First Name
- textbox "Enter name"
- text: Last Name
- textbox "Enter email"
- iframe
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Web Browsers"
  - link "Open Source"
  - link "Learning Resources Library"
```

# Test source

```ts
  1  | import {test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeEach(async({page}) =>{
  4  |     page.goto("https://letcode.in/frame")
  5  | })
  6  | 
  7  | test("Frame", async({page}) =>{
  8  |     
  9  |     const total_frame = page.frames();
  10 |     console.log("No of Frames: ", total_frame.length);
  11 | 
  12 |     const myFrame = page.frame("#firstFr");
  13 | 
  14 |     await myFrame?.fill("input[name = 'fname']", "Prasanna")
  15 |     await myFrame?.fill("input[name = 'lname']", "K");
  16 | 
  17 |     await page.waitForTimeout(3000);
  18 | 
  19 |     const frame = page.frameLocator("iframe[name = 'firstFr']");
  20 | 
> 21 |     await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("Prasanna K")
     |                                                                        ^ Error: expect(locator).toContainText(expected) failed
  22 | 
  23 | })
  24 | 
  25 | test.afterEach(async({page}) =>{
  26 |     console.log( "Test is completed" )
  27 | })
```