import {test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com/");
  });

  

test('Contact Form Test', async ({page}) => {


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

test.afterEach(async ()=>{
    console.log("Test completed")
});