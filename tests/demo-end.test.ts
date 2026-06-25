import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();

  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('admin');
//   await expect(page.getByRole('img', { name: 'Third slide' })).toBeVisible();

  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome admin');
//   await expect(page.getByRole('img', { name: 'Third slide' })).toBeVisible();

  await page.getByRole('link', { name: 'Laptops' }).click();
  await expect(page.getByRole('heading', { name: 'MacBook air' })).toBeVisible();

  await page.locator('div').filter({ hasText: 'MacBook air$7001.6GHz dual-' }).nth(4).click();
  await expect(page.locator('h2')).toContainText('MacBook air');
  
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await expect(page.getByRole('row', { name: 'MacBook air 700 Delete' })).toBeVisible();

  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.locator('#orderModalLabel')).toContainText('Place order');
  await page.locator('div').filter({ hasText: 'Total: 700 Name: Country:' }).nth(3).click();
  await expect(page.locator('div').filter({ hasText: 'Total: 700 Name: Country:' }).nth(3)).toBeVisible();
  await page.getByRole('textbox', { name: 'Total: 700 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 700 Name:' }).fill('zdxfcgv');
  await page.getByRole('textbox', { name: 'Total: 700 Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Country:' }).fill('asdf');
  await page.getByRole('textbox', { name: 'Country:' }).press('Tab');
  await page.getByRole('textbox', { name: 'City:' }).fill('awsdf');
  await page.getByRole('textbox', { name: 'City:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Credit card:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('1');
  await page.getByRole('textbox', { name: 'Month:' }).fill('234567890987');
  await page.getByRole('textbox', { name: 'Month:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Year:' }).fill('12344');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('body')).toContainText('Thank you for your purchase!');
  await expect(page.getByText('Id: 8723535Amount: 700')).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
});