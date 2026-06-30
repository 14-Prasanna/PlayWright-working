import { test, expect } from '@playwright/test';

test.describe("Dummy @Smoke", () => {

  test("Summa", async ({ page }) => {
    console.log("This is dummy describe");
  });

});

test.describe('Login Module @Login', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
  });

  test.describe("valid", { tag: ["@Smoke", "@Regression"] }, () => {

    test('Valid Login Test', async ({ page }, testInfo) => {

      console.log(`Test Title: ${testInfo.title}`);

      await page.fill('#username', "tomsmith");
      await page.fill('#password', "SuperSecretPassword!");
      await page.click('button[type="submit"]');

      await expect(page.locator('#flash'))
        .toContainText('You logged into a secure area!');

      await expect(page)
        .toHaveURL('https://the-internet.herokuapp.com/secure');
    });

  });

  test.describe("Invalid @Regression", () => {

    test('Invalid Login Test', async ({ page }) => {

      await page.fill('#username', "Admin");
      await page.fill('#password', "admin123");
      await page.click('button[type="submit"]');

      await expect(page.locator('#flash'))
        .toContainText('Your username is invalid!');
    });

  });

  test.afterEach(async ({ page }) => {
    console.log("Test is Completed");
  });

});