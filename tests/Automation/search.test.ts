import { test, expect } from "@playwright/test";

test("Search Product", async ({ page }) => {

    
    await page.goto("https://automationexercise.com/");

    
    await expect(page).toHaveTitle(/Automation Exercise/);

    
    await page.getByRole("link", { name: "Products" }).click();

    
    await expect(page).toHaveURL(/products/);

    await expect(
        page.getByRole("heading", { name: "All Products" })
    ).toBeVisible();

    
    const productName = "Blue Top";

    await page.locator("#search_product").fill(productName);

    await page.locator("#submit_search").click();

    
    await expect(
        page.getByRole("heading", { name: "Searched Products" })
    ).toBeVisible();

    
    const products = page.locator(".productinfo.text-center p");

    const count = await products.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {

        const text = await products.nth(i).textContent();

        console.log(`Product ${i + 1}: ${text}`);

        expect(text?.toLowerCase()).toContain(productName.toLowerCase());
    }

    await page.waitForTimeout(3000);
});