import { test, expect } from "@playwright/test";

test("Login with Invalid Credentials", async ({ page }) => {

    
    await page.goto("https://automationexercise.com/");

    
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