import { test, expect } from '@playwright/test';


test.afterEach(async({page}) => {
    await page.goto(process.env.PRODUCTION_BASE_URL!)
})


test('Valid Login Test', async ({ page }) => {

    await page.locator('#input-email') .fill('2k22cse115@kiot.ac.in');

    await page.locator('#input-password').fill('1234567890');

    await page.locator('input[value="Login"]').click();

    await expect(page.locator('h2', { hasText: 'My Account' })).toBeVisible();

});

test.afterEach(async ({page}) => {
    console.log("Test is completed..")
})