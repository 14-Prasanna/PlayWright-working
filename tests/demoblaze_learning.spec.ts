import { test, expect } from '@playwright/test';
import fs from 'fs';

test.describe('DemoBlaze - Playwright Learning Practice', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoblaze.com/');
  });

  test('Browser commands, locators, actions, assertions, alerts and windows', async ({ page, context }) => {

    if (!fs.existsSync('screenshots')) {
      fs.mkdirSync('screenshots');
    }

    // Browser commands
    console.log('Page Title:', await page.title());
    console.log('Current URL:', page.url());
    console.log('Page content length:', (await page.content()).length);

    await expect(page).toHaveURL('https://demoblaze.com/');
    await expect(page).toHaveTitle(/STORE/);

    await page.reload();

    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    await expect(page).toHaveURL(/prod.html/);

    await page.goBack();
    await expect(page).toHaveURL('https://demoblaze.com/');

    await page.goForward();
    await expect(page).toHaveURL(/prod.html/);

    await page.goto('https://demoblaze.com/');

    // Locators
    const productStoreLogo = page.locator('#nava');
    const homeLink = page.getByRole('link', { name: 'Home' });
    const contactLink = page.locator('a[data-target="#exampleModal"]');
    const loginLink = page.locator('#login2');
    const signUpLink = page.locator('#signin2');

    await expect(productStoreLogo).toBeVisible();
    await expect(homeLink).toBeVisible();
    await expect(contactLink).toBeVisible();
    await expect(loginLink).toBeVisible();
    await expect(signUpLink).toBeVisible();

    const firstProduct = page.locator('.hrefch').first();
    const secondProduct = page.locator('.hrefch').nth(1);

    await expect(firstProduct).toBeVisible();
    await expect(secondProduct).toBeVisible();

    console.log('First Product:', await firstProduct.textContent());
    console.log('Tag Name:', await firstProduct.evaluate(el => el.tagName.toLowerCase()));
    console.log('Href:', await firstProduct.getAttribute('href'));
    console.log('Bounding Box:', await firstProduct.boundingBox());
    console.log('Text Color:', await firstProduct.evaluate(el => getComputedStyle(el).color));

    // Login modal
    await loginLink.click();

    const loginModal = page.locator('#logInModal');
    await expect(loginModal).toBeVisible();

    const usernameInput = page.locator('#loginusername');
    const passwordInput = page.locator('#loginpassword');

    await expect(usernameInput).toBeEnabled();
    await expect(passwordInput).toBeEnabled();

    await usernameInput.fill('admin');
    await passwordInput.fill('admin');

    await usernameInput.clear();
    await usernameInput.type('admin');

    await passwordInput.press('Control+A');
    await passwordInput.press('Backspace');
    await passwordInput.fill('admin');

    await expect(usernameInput).toHaveValue('admin');
    await expect(passwordInput).toHaveValue('admin');

    await loginModal.locator('.btn-secondary').click();
    await expect(loginModal).toBeHidden();

    // Hover, focus, screenshot
    const productAfterModal = page.locator('.hrefch').first();

    await productAfterModal.hover();
    await productAfterModal.focus();

    await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });
    await productAfterModal.screenshot({ path: 'screenshots/product.png' });

    // Product page + alert
    await productAfterModal.click();
    await expect(page).toHaveURL(/prod.html/);

    const productName = page.locator('.name');
    await expect(productName).toBeVisible();

    const productNameText = (await productName.textContent())?.trim() || '';
    console.log('Product Name:', productNameText);

    const addToCart = page.locator('.btn-success');
    await expect(addToCart).toBeVisible();

    const [cartDialog] = await Promise.all([
      page.waitForEvent('dialog'),
      addToCart.click()
    ]);

    console.log('Cart Alert:', cartDialog.message());
    expect(cartDialog.message()).toContain('Product added');
    await cartDialog.accept();

    // Cart assertion
    const cartLink = page.locator('#cartur');
    await cartLink.click();

    await expect(page).toHaveURL(/cart.html/);
    await expect(page.locator('#tbodyid')).toContainText(productNameText);

    // Soft assertions
    await expect.soft(page.getByRole('button', { name: 'Place Order' })).toBeVisible();
    await expect.soft(page.locator('#tbodyid')).toBeAttached();

    // Contact modal + alert
    await page.goto('https://demoblaze.com/');

    await page.locator('a[data-target="#exampleModal"]').click();

    const contactModal = page.locator('#exampleModal');
    await expect(contactModal).toBeVisible();

    await page.locator('#recipient-email').fill('test@gmail.com');
    await page.locator('#recipient-name').fill('Prasanna');
    await page.locator('#message-text').fill('Testing contact form using Playwright');

    await page.locator('#recipient-email').dispatchEvent('input');

    const [contactDialog] = await Promise.all([
      page.waitForEvent('dialog'),
      contactModal.getByRole('button', { name: 'Send message' }).click()
    ]);

    console.log('Contact Alert:', contactDialog.message());
    expect(contactDialog.message()).toContain('Thanks for the message');
    await contactDialog.accept();

    // Window / new page handling
    await page.goto('https://demoqa.com/browser-windows');

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator('#windowButton').click()
    ]);

    await newPage.waitForLoadState('domcontentloaded');

    await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page');

    console.log('New Window URL:', newPage.url());

    await newPage.close();

    await expect(page).toHaveURL('https://demoqa.com/browser-windows');
  });

});