import {test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
  });

test('Login Test', async ({page}) => {


    await page.route('**/*', route => {
        const url = route.request().url();

        if (
            url.includes('googleads') ||
            url.includes('doubleclick') ||
            url.includes('googlesyndication') ||
            url.includes('adservice')
        ) {
            route.abort();
        } else {
            route.continue();
        }
    });
    
    await page.reload();
    await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
    await page.getByText(" Signup / Login").click();
    await page.locator("//input[@data-qa='login-email']").fill("testlogin@gmail.com");
    await page.getByPlaceholder("Password").fill("1234567890");
    await page.getByRole('button',{name: 'Login'}).click();
    await expect(page.getByText('Logged in as Test cases')).toBeVisible();
    await page.getByRole('link', {name: ' Logout'}).click();
    await expect(page).toHaveURL('https://automationexercise.com/login'); 
});

test.afterEach(async ()=>{
    console.log("Test completed")
});