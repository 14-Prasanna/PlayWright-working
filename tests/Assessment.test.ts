import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://www.testmuai.com/selenium-playground/simple-form-demo/",
    {
      waitUntil:"networkidle"
    }
  );
});

test("To Test the input field", async ({ page }) => {
  console.log("URL:", page.url());
  console.log("Title:", await page.title());

  const inputField = page.getByPlaceholder("Please enter your Message");

  await expect(inputField).toBeVisible();

  await inputField.scrollIntoViewIfNeeded();
  await inputField.fill("prasanna");

  await expect(inputField).toHaveValue("prasanna");

  await page.locator("#showInput").click();

  const output = page.locator("#message");

  await expect(output).toHaveText("prasanna");

  console.log("Displayed:", await output.textContent());
});

test("Sum of Two Number", async ({ page }) => {
  const sum1 = page.locator("#sum1");
  const sum2 = page.locator("#sum2");
  const button = page.getByRole("button", { name: "Get Sum" });
  const result = page.locator("#addmessage");

  await expect(sum1).toBeVisible();
  await expect(sum2).toBeVisible();

  await sum1.fill("25");
  await expect(sum1).toHaveValue("25");

  await sum2.fill("10");
  await expect(sum2).toHaveValue("10");

  await button.click();

  
  await expect(result).toHaveText("35", {
    timeout: 10000,
  });

  console.log("Result:", await result.textContent());
});


test("Alters to be handle", async({page}) => {
    await page.getByRole('button', {name: 'Click Me'}).nth(0).click()

    page.once('dialog', alert => {
        console.log("The message: ", alert.message());
        alert.accept().catch(() => {});
    })
})

test.afterEach(async () => {
  console.log("Test completed");
});