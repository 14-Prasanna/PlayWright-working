import { test, expect } from "@playwright/test";

test("Login with Invalid Credentials", async ({ page }) => {

    // 1. Launch browser & 2. Navigate to URL
    await page.goto("https://automationexercise.com/");

    // 3. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 4. Click on 'Signup / Login' button
    await page.getByRole("link", { name: "Signup / Login" }).click();

    // 5. Verify 'Login to your account' is visible
    await expect(
        page.getByRole("heading", { name: "Login to your account" })
    ).toBeVisible();

    // 6. Enter incorrect email address and password
    await page.locator('[data-qa="login-email"]')
        .fill("invaliduser@gmail.com");

    await page.locator('[data-qa="login-password"]')
        .fill("Invalid@123");

    // 7. Click 'Login' button
    await page.locator('[data-qa="login-button"]').click();

    // 8. Verify error message is visible
    await expect(
        page.getByText("Your email or password is incorrect!")
    ).toBeVisible();

    await expect(
        page.getByText("Your email or password is incorrect!")
    ).toHaveText("Your email or password is incorrect!");

    await page.waitForTimeout(3000);
});