import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Login Module', () => {

    test.beforeEach(async ({page}) => {
        await page.goto(process.env.QA_BASE_URL!)
    })

    test('Valid Login Test', async ({ page }) => {

        await page.fill('#username', process.env.vUSERNAME!);
        await page.fill('#password', process.env.vPASSWORD!);
        await page.click('button[type="submit"]');

        await expect(page.locator('#flash'))
            .toContainText('You logged into a secure area!');

        await expect(page)
            .toHaveURL('https://the-internet.herokuapp.com/secure');
    });

    test('Invalid Login Test', async ({ page }) => {

        await page.fill('#username', process.env.iUSERNAME!);
        await page.fill('#password', process.env.vPASSWORD!);
        await page.click('button[type="submit"]');

        await expect(page.locator('#flash'))
            .toContainText('Your username is invalid!');
    });


    test.afterEach(async ({page}) => {
        console.log("Test is Completed")
    })

});