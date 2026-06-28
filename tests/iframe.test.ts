import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://letcode.in/frame");
});

test("Frame", async ({ page }) => {

  const total_frame = page.frames();
  console.log("No of Frames: ", total_frame.length);

  const firstFrame = page.frameLocator("iframe#firstFr");

  await firstFrame.locator("input[name='fname']").fill("Prasanna");
  await firstFrame.locator("input[name='lname']").fill("K");

  await expect(firstFrame.locator("p.text-sm.font-semibold.text-center"))
    .toContainText("Prasanna K");
});

test("Frame2 - Inner Frame", async ({ page }) => {

  const firstFrame = page.frameLocator("iframe#firstFr");

  await firstFrame.locator("input[name='fname']").fill("Prasanna");
  await firstFrame.locator("input[name='lname']").fill("K");

  await expect(firstFrame.locator("p.text-sm.font-semibold.text-center"))
    .toContainText("Prasanna K");

  
  const innerFrame = firstFrame.frameLocator("iframe[src='innerFrame']");

  await innerFrame.locator("input[name='email']").fill("prasanna@gmail.com");

});

test.afterEach(async () => {
  console.log("Test is completed");
});