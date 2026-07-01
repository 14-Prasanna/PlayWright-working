import { test, expect } from '@playwright/test';

test.only('Demo Blaze Login', async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    await page.locator('#login2').click();

    await page.locator('#loginusername').fill('admin');

    await page.locator('#loginpassword').fill('admin');

    await page.getByRole('button', { name: 'Log in' }).click();

    
    await expect(page.locator('#nameofuser')) .toContainText('Welcome');

    
    await expect.soft(page.getByRole('link', { name: 'Log out' })).toHaveText('Log outss');

    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

});


test.skip('Demo Blaze Login-2', async ({ page }) => {

    test.skip(true, "Due to technical issue no run");

    await page.goto("https://demoblaze.com/");

    await page.locator('#login2').click();

    await page.locator('#loginusername').fill('admin');

    await page.locator('#loginpassword').fill('admin');

    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(
        page.locator('#nameofuser')
    ).toContainText('Welcome');

});


test('Demo Blaze Login 3', async ({ page }) => {

    await page.goto("https://demoblaze.com/");

    await page.locator('#login2').click();

    await page.locator('#loginusername').fill('admin');

    await page.locator('#loginpassword').fill('admin');

    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('#nameofuser'))
        .toContainText('Welcome');

    
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    
    await expect(page.getByRole('link', { name: 'Log out' })).toHaveText('Log out');

    await expect.soft(page.getByRole('link', { name: 'Log out' })).toHaveAttribute('id', 'logout2');

});