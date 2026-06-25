# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo-end.test.ts >> test
- Location: tests\demo-end.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('row', { name: 'MacBook air 700 Delete' })
Expected: visible
Error: strict mode violation: getByRole('row', { name: 'MacBook air 700 Delete' }) resolved to 6 elements:
    1) <tr class="success">…</tr> aka getByRole('row', { name: 'MacBook air 700 Delete' }).first()
    2) <tr class="success">…</tr> aka getByRole('row', { name: 'MacBook air 700 Delete' }).nth(1)
    3) <tr class="success">…</tr> aka getByRole('row', { name: 'MacBook air 700 Delete' }).nth(2)
    4) <tr class="success">…</tr> aka getByRole('row', { name: 'MacBook air 700 Delete' }).nth(3)
    5) <tr class="success">…</tr> aka getByRole('row', { name: 'MacBook air 700 Delete' }).nth(4)
    6) <tr class="success">…</tr> aka getByRole('row', { name: 'MacBook air 700 Delete' }).nth(5)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('row', { name: 'MacBook air 700 Delete' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome admin" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup [ref=e33]:
          - row "MacBook air 700 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "MacBook air" [ref=e37]
            - cell "700" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
          - row "MacBook air 700 Delete" [ref=e41]:
            - cell [ref=e42]:
              - img [ref=e43]
            - cell "MacBook air" [ref=e44]
            - cell "700" [ref=e45]
            - cell "Delete" [ref=e46]:
              - link "Delete" [active] [ref=e47] [cursor=pointer]:
                - /url: "#"
          - row "MacBook air 700 Delete" [ref=e48]:
            - cell [ref=e49]:
              - img [ref=e50]
            - cell "MacBook air" [ref=e51]
            - cell "700" [ref=e52]
            - cell "Delete" [ref=e53]:
              - link "Delete" [ref=e54] [cursor=pointer]:
                - /url: "#"
          - row "MacBook air 700 Delete" [ref=e55]:
            - cell [ref=e56]:
              - img [ref=e57]
            - cell "MacBook air" [ref=e58]
            - cell "700" [ref=e59]
            - cell "Delete" [ref=e60]:
              - link "Delete" [ref=e61] [cursor=pointer]:
                - /url: "#"
          - row "MacBook air 700 Delete" [ref=e62]:
            - cell [ref=e63]:
              - img [ref=e64]
            - cell "MacBook air" [ref=e65]
            - cell "700" [ref=e66]
            - cell "Delete" [ref=e67]:
              - link "Delete" [ref=e68] [cursor=pointer]:
                - /url: "#"
          - row "MacBook air 700 Delete" [ref=e69]:
            - cell [ref=e70]:
              - img [ref=e71]
            - cell "MacBook air" [ref=e72]
            - cell "700" [ref=e73]
            - cell "Delete" [ref=e74]:
              - link "Delete" [ref=e75] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e76]:
      - heading "Total" [level=2] [ref=e77]
      - heading "4200" [level=3] [ref=e80]
      - button "Place Order" [ref=e81]
  - generic [ref=e83]:
    - generic [ref=e86]:
      - heading "About Us" [level=4] [ref=e87]
      - paragraph [ref=e88]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e91]:
      - heading "Get in Touch" [level=4] [ref=e92]
      - paragraph [ref=e93]: "Address: 2390 El Camino Real"
      - paragraph [ref=e94]: "Phone: +440 123456"
      - paragraph [ref=e95]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e99]:
      - img [ref=e100]
      - text: PRODUCT STORE
  - contentinfo [ref=e101]:
    - paragraph [ref=e102]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://demoblaze.com/');
  5  |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  6  | 
  7  |   await page.getByRole('link', { name: 'Log in' }).click();
  8  |   await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  9  | 
  10 |   await page.locator('#loginusername').click();
  11 |   await page.locator('#loginusername').fill('admin');
  12 |   await page.locator('#loginusername').press('Tab');
  13 |   await page.locator('#loginpassword').fill('admin');
  14 |   await page.getByRole('button', { name: 'Log in' }).click();
  15 |   await expect(page.locator('#nameofuser')).toContainText('Welcome admin');
  16 |   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  17 |   await expect(page.getByRole('img', { name: 'Second slide' })).toBeVisible();
  18 | 
  19 |   await page.getByRole('link', { name: 'Laptops' }).click();
  20 |   await expect(page.getByRole('img', { name: 'Third slide' })).toBeVisible();
  21 | 
  22 |   await page.locator('div').filter({ hasText: 'MacBook air$7001.6GHz dual-' }).nth(4).click();
  23 |   await expect(page.locator('h2')).toContainText('MacBook air');
  24 |   page.once('dialog', dialog => {
  25 |     console.log(`Dialog message: ${dialog.message()}`);
  26 |     dialog.dismiss().catch(() => {});
  27 |   });
  28 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  29 |   page.once('dialog', dialog => {
  30 |     console.log(`Dialog message: ${dialog.message()}`);
  31 |     dialog.dismiss().catch(() => {});
  32 |   });
  33 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  34 |   page.once('dialog', dialog => {
  35 |     console.log(`Dialog message: ${dialog.message()}`);
  36 |     dialog.dismiss().catch(() => {});
  37 |   });
  38 |   await page.getByRole('link', { name: 'Add to cart' }).click();
  39 |   await page.getByRole('link', { name: 'Cart', exact: true }).click();
  40 |   await expect(page.getByRole('row', { name: 'MacBook air 700 Delete' }).first()).toBeVisible();
  41 | 
  42 |   await page.getByRole('link', { name: 'Delete' }).nth(3).click();
  43 |   await expect(page.getByRole('row', { name: 'MacBook air 700 Delete' }).first()).toBeVisible();
  44 | 
  45 |   await page.getByRole('link', { name: 'Delete' }).nth(1).click();
  46 |   await expect(page.getByRole('row', { name: 'MacBook air 700 Delete' }).first()).toBeVisible();
  47 | 
  48 |   await page.getByRole('link', { name: 'Delete' }).nth(1).click();
> 49 |   await expect(page.getByRole('row', { name: 'MacBook air 700 Delete' })).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  50 | 
  51 |   await page.getByRole('button', { name: 'Place Order' }).click();
  52 |   await expect(page.getByRole('dialog', { name: 'Place order' })).toBeVisible();
  53 | 
  54 |   await page.getByRole('textbox', { name: 'Total: 700 Name:' }).click();
  55 |   await page.getByRole('textbox', { name: 'Total: 700 Name:' }).fill('ghnkm');
  56 |   await page.getByRole('textbox', { name: 'Total: 700 Name:' }).press('Tab');
  57 |   await page.getByRole('textbox', { name: 'Country:' }).fill('dfg');
  58 |   await page.getByRole('textbox', { name: 'Country:' }).press('Tab');
  59 |   await page.getByRole('textbox', { name: 'City:' }).fill('xdfgbh');
  60 |   await page.getByRole('textbox', { name: 'City:' }).press('Tab');
  61 |   await page.getByRole('textbox', { name: 'Credit card:' }).fill('12345678900987');
  62 |   await page.getByRole('textbox', { name: 'Credit card:' }).press('Tab');
  63 |   await page.getByRole('textbox', { name: 'Month:' }).fill('23457');
  64 |   await page.getByRole('textbox', { name: 'Month:' }).press('Tab');
  65 |   await page.getByRole('textbox', { name: 'Year:' }).fill('1234');
  66 |   await page.getByRole('button', { name: 'Purchase' }).click();
  67 |   await expect(page.locator('body')).toContainText('Thank you for your purchase!');
  68 |   await expect(page.getByText('Id: 5807714Amount: 700')).toBeVisible();
  69 |   await page.getByRole('button', { name: 'OK' }).click();
  70 | });
```