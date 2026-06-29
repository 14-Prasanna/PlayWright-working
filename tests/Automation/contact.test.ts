import {test, expect } from '@playwright/test';

test('Contact Form Test', async ({page}) => {
    await page.goto("http://automationexercise.com");
    await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
    await page.getByRole('link',{name: ' Contact us'}).click();
    await page.locator("//h2[text()='Get In Touch']").isVisible();
    await page.getByPlaceholder("Name").fill("Prasanna");
    await page.locator("//input[@name='email']").fill("prasanna@gmail.com");
    await page.getByPlaceholder("Subject").fill("Products Inquiry");
    await page.getByPlaceholder("Your Message Here").fill("Improve the product quality");
    await page.locator("//input[@type='submit']").click();
    page.once('dialog', async (dialog) => { await dialog.accept(); });
    await page.getByText(".status alert alert-success").isVisible();
    await page.getByRole('link', {name: ' Home'}).click();
    await expect(page).toHaveURL('https://automationexercise.com');
});