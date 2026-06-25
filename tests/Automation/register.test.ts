import { test, expect, chromium, Browser } from "@playwright/test";

let browser: Browser;

test.beforeAll(async () => {
  browser = await chromium.launch({
    headless: false
  });
});

test.describe("Automation Exercise Registration", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
  });

  test("Registration with valid details", async ({ page }) => {

    await expect(page).toHaveTitle(/Automation Exercise/);

    await page.getByRole("link", { name: "Signup / Login" }).click();

    await expect(page.getByText("New User Signup!")).toBeVisible();

    await page.locator('[data-qa="signup-name"]').fill("Prasanna");

    const email = `prasanna${Date.now()}@gmail.com`;
    await page.locator('[data-qa="signup-email"]').fill(email);

    await page.getByRole("button", { name: "Signup" }).click();

    await expect(page.getByText("Enter Account Information")).toBeVisible();

    await page.locator("#id_gender1").check();

    await page.locator('[data-qa="password"]').fill("Test@12345");

    await page.locator('[data-qa="days"]').selectOption("14");
    await page.locator('[data-qa="months"]').selectOption("December");
    await page.locator('[data-qa="years"]').selectOption("2004");

    await page.locator("#newsletter").check();
    await page.locator("#optin").check();

    await page.locator('[data-qa="first_name"]').fill("Prasanna");
    await page.locator('[data-qa="last_name"]').fill("Venkatesh");
    await page.locator('[data-qa="company"]').fill("Expleo");
    await page.locator('[data-qa="address"]').fill("Chennai");
    await page.locator('[data-qa="address2"]').fill("Tamil Nadu");

    await page.locator('[data-qa="country"]').selectOption("India");

    await page.locator('[data-qa="state"]').fill("Tamil Nadu");
    await page.locator('[data-qa="city"]').fill("Chennai");
    await page.locator('[data-qa="zipcode"]').fill("600001");
    await page.locator('[data-qa="mobile_number"]').fill("9876543210");

    await page.getByRole("button", { name: "Create Account" }).click();

    await expect(page.getByText("Account Created!")).toBeVisible();

    await page.getByRole("link", { name: "Continue" }).click();

    await expect(page.getByText("Logged in as Prasanna")).toBeVisible();

    await page.getByRole("link", { name: "Delete Account" }).click();
    
    await expect(page.getByText("Account Deleted!") ).toBeVisible();

    await page.getByRole("link", { name: "Continue" }).click();

  });
});

test.afterAll(async () => {
  await browser.close();
});