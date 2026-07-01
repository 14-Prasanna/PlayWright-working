import { test, expect, Locator } from '@playwright/test';

const searchData = [
  { keyword: 'SRH vs CSK', expectedText: 'Result for SRH vs CSK' },
  { keyword: 'MI vs RCB', expectedText: 'Result for MI vs RCB' },
  { keyword: 'DC vs KKR', expectedText: 'Result for DC vs KKR' },
];

test.describe('Google DNS Parameterization', () => {
  let searchBar: Locator;

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(testInfo.title)

    console.log(testInfo.expectedStatus)
    await page.goto('https://dns.google/');
    searchBar = page.locator('input[type="text"]');
  });

  for (const data of searchData) {
    test(`Search ${data.keyword} in Google DNS`, async ({ page }) => {
      await searchBar.fill(data.keyword);
      await page.keyboard.press('Enter');

      await expect(
        page.locator(`h2:has-text("Result for ${data.keyword}")`)
      ).toBeVisible();
    });
  }

  test.afterEach(async ()=>{
    console.log("Test is completed");
  })
});