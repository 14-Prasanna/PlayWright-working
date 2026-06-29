import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
  });

test("Login with Invalid Credentials", async ({ page }) => {


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

    
    await expect(page).toHaveTitle(/Automation Exercise/);

    
    await page.getByRole("link", { name: "Signup / Login" }).click();

    
    await expect(
        page.getByRole("heading", { name: "Login to your account" })
    ).toBeVisible();

    
    await page.locator('[data-qa="login-email"]')
        .fill("invaliduser@gmail.com");

    await page.locator('[data-qa="login-password"]')
        .fill("Invalid@123");

    
    await page.locator('[data-qa="login-button"]').click();

    
    await expect(
        page.getByText("Your email or password is incorrect!")
    ).toBeVisible();

    await expect(
        page.getByText("Your email or password is incorrect!")
    ).toHaveText("Your email or password is incorrect!");

    await page.waitForTimeout(3000);
});

test.afterEach(async ()=>{
    console.log("Test completed")
});