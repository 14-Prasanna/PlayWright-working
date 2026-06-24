import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto(process.env.UAT_BASE_URL!)
})


test('Demo Blaze Login', async ({ page }) => {

    await page.locator('#login2').click();

    await page.locator('#loginusername').fill('admin');

    await page.locator('#loginpassword').fill('admin');

    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(
        page.locator('#nameofuser')
    ).toContainText('Welcome');

});

test.afterEach(async ({page}) => {
    console.log("Test is completed..")
})