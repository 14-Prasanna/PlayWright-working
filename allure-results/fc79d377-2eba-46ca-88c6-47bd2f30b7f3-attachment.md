# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo-end.test.ts >> Demoblaze laptop purchase flow
- Location: tests\demo-end.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('row', { name: /MacBook air 700 Delete/ })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('row', { name: /MacBook air 700 Delete/ })

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem
    - listitem:
      - link "Log out":
        - /url: "#"
    - listitem:
      - link "Welcome admin":
        - /url: "#"
    - listitem
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - columnheader "Pic"
      - columnheader "Title"
      - columnheader "Price"
      - columnheader "x"
  - rowgroup
- heading "Total" [level=2]
- heading [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Demoblaze laptop purchase flow', async ({ page }) => {
  4  |   await page.goto('https://demoblaze.com/');
  5  | 
  6  |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  7  | 
  8  |   await page.getByRole('link', { name: 'Log in' }).click();
  9  |   await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  10 | 
  11 |   await page.locator('#loginusername').fill('admin');
  12 |   await page.locator('#loginpassword').fill('admin');
  13 |   await page.getByRole('button', { name: 'Log in' }).click();
  14 | 
  15 |   await expect(page.locator('#nameofuser')).toContainText('Welcome admin');
  16 |   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  17 | 
  18 |   await page.getByRole('link', { name: 'Laptops' }).click();
  19 |   await page.getByRole('link', { name: 'MacBook air' }).click();
  20 | 
  21 |   await expect(page.locator('h2')).toContainText('MacBook air');
  22 | 
  23 |   page.once('dialog', async dialog => {
  24 |     console.log(dialog.message());
  25 |     await dialog.accept();
  26 |   });
  27 | 
  28 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  29 | 
  30 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  31 | 
  32 |   const productRow = page.getByRole('row', { name: /MacBook air 700 Delete/ });
> 33 |   await expect(productRow).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
  34 | 
  35 |   await page.getByRole('button', { name: 'Place Order' }).click();
  36 | 
  37 |   await page.locator('#name').fill('Prasanna');
  38 |   await page.locator('#country').fill('India');
  39 |   await page.locator('#city').fill('Chennai');
  40 |   await page.locator('#card').fill('12345678900987');
  41 |   await page.locator('#month').fill('12');
  42 |   await page.locator('#year').fill('2026');
  43 | 
  44 |   await page.getByRole('button', { name: 'Purchase' }).click();
  45 | 
  46 |   await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
  47 |   await expect(page.getByText(/Amount: 700/)).toBeVisible();
  48 | 
  49 |   await page.getByRole('button', { name: 'OK' }).click();
  50 | });
```