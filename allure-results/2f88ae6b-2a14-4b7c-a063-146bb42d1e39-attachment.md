# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblaze_learning.spec.ts >> DemoBlaze - Playwright Learning Practice >> Browser commands, locators, actions, assertions, alerts and windows
- Location: tests\demoblaze_learning.spec.ts:9:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('PRODUCT STORE')
Expected: visible
Error: strict mode violation: getByText('PRODUCT STORE') resolved to 3 elements:
    1) <a id="nava" href="index.html" class="navbar-brand">…</a> aka getByRole('link', { name: 'PRODUCT STORE' })
    2) <h4>…</h4> aka getByRole('heading', { name: 'PRODUCT STORE' })
    3) <p class="m-0 text-center text-white">Copyright © Product Store</p> aka getByText('Copyright © Product Store')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('PRODUCT STORE')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
      - img [ref=e4]
      - text: PRODUCT STORE
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "First slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]:
        - generic [ref=e31]: Previous
      - button "Next" [ref=e32] [cursor=pointer]:
        - generic [ref=e34]: Next
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e42] [cursor=pointer]:
        - /url: "#"
    - list [ref=e45]:
      - listitem [ref=e46]:
        - button "Previous" [ref=e47]
      - listitem [ref=e48]:
        - button "Next" [ref=e49] [cursor=pointer]
  - generic [ref=e51]:
    - generic [ref=e54]:
      - heading "About Us" [level=4] [ref=e55]
      - paragraph [ref=e56]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e59]:
      - heading "Get in Touch" [level=4] [ref=e60]
      - paragraph [ref=e61]: "Address: 2390 El Camino Real"
      - paragraph [ref=e62]: "Phone: +440 123456"
      - paragraph [ref=e63]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e67]:
      - img [ref=e68]
      - text: PRODUCT STORE
  - contentinfo [ref=e69]:
    - paragraph [ref=e70]: Copyright © Product Store
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('DemoBlaze - Playwright Learning Practice', () => {
  4   | 
  5   |   test.beforeEach(async ({ page }) => {
  6   |     await page.goto('https://demoblaze.com/');
  7   |   });
  8   | 
  9   |   test('Browser commands, locators, actions, assertions, alerts and windows', async ({ page, context, browser }) => {
  10  | 
  11  |     // ==============================
  12  |     // Browser / Page Commands
  13  |     // ==============================
  14  | 
  15  |     await page.goto('https://demoblaze.com/');
  16  | 
  17  |     const title = await page.title();
  18  |     console.log('Page Title:', title);
  19  | 
  20  |     const currentUrl = page.url();
  21  |     console.log('Current URL:', currentUrl);
  22  | 
  23  |     const pageContent = await page.content();
  24  |     console.log('Page content length:', pageContent.length);
  25  | 
  26  |     await expect(page).toHaveURL('https://demoblaze.com/');
  27  |     await expect(page).toHaveTitle(/STORE/);
  28  | 
  29  |     await page.reload();
  30  |     await page.goBack();
  31  |     await page.goForward();
  32  | 
  33  |     // ==============================
  34  |     // Locators
  35  |     // ==============================
  36  | 
  37  |     const homeLink = page.getByRole('link', { name: 'Home' });
  38  |     const contactLink = page.getByRole('link', { name: 'Contact' });
  39  |     const loginLink = page.getByRole('link', { name: 'Log in' });
  40  |     const signUpLink = page.getByRole('link', { name: 'Sign up' });
  41  | 
  42  |     await expect(homeLink).toBeVisible();
  43  |     await expect(contactLink).toBeVisible();
  44  |     await expect(loginLink).toBeVisible();
  45  |     await expect(signUpLink).toBeVisible();
  46  | 
> 47  |     await expect(page.getByText('PRODUCT STORE')).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
  48  | 
  49  |     const firstProduct = page.locator('.hrefch').first();
  50  |     await expect(firstProduct).toBeVisible();
  51  | 
  52  |     const secondProduct = page.locator('.hrefch').nth(1);
  53  |     await expect(secondProduct).toBeVisible();
  54  | 
  55  |     const productText = await firstProduct.textContent();
  56  |     console.log('First Product:', productText);
  57  | 
  58  |     const tagName = await firstProduct.evaluate(el => el.tagName.toLowerCase());
  59  |     console.log('Tag Name:', tagName);
  60  | 
  61  |     const href = await firstProduct.getAttribute('href');
  62  |     console.log('Href:', href);
  63  | 
  64  |     const box = await firstProduct.boundingBox();
  65  |     console.log('Bounding Box:', box);
  66  | 
  67  |     const color = await firstProduct.evaluate(el => getComputedStyle(el).color);
  68  |     console.log('Text Color:', color);
  69  | 
  70  |     // ==============================
  71  |     // Login Modal - fill, clear, press
  72  |     // ==============================
  73  | 
  74  |     await loginLink.click();
  75  | 
  76  |     const loginModal = page.locator('#logInModal');
  77  |     await expect(loginModal).toBeVisible();
  78  | 
  79  |     const usernameInput = page.locator('#loginusername');
  80  |     const passwordInput = page.locator('#loginpassword');
  81  | 
  82  |     await expect(usernameInput).toBeEnabled();
  83  |     await expect(passwordInput).toBeEnabled();
  84  | 
  85  |     await usernameInput.fill('admin');
  86  |     await passwordInput.fill('admin');
  87  | 
  88  |     await usernameInput.clear();
  89  |     await usernameInput.type('admin');
  90  | 
  91  |     await passwordInput.press('Control+A');
  92  |     await passwordInput.press('Backspace');
  93  |     await passwordInput.fill('admin');
  94  | 
  95  |     await expect(usernameInput).toHaveValue('admin');
  96  |     await expect(passwordInput).toHaveValue('admin');
  97  | 
  98  |     await page.getByRole('button', { name: 'Close' }).nth(2).click();
  99  | 
  100 |     // ==============================
  101 |     // Hover, focus, screenshot
  102 |     // ==============================
  103 | 
  104 |     await firstProduct.hover();
  105 |     await firstProduct.focus();
  106 | 
  107 |     await page.screenshot({ path: 'screenshots/full-page.png', fullPage: true });
  108 |     await firstProduct.screenshot({ path: 'screenshots/product.png' });
  109 | 
  110 |     // ==============================
  111 |     // Product Page + Alert Handling
  112 |     // ==============================
  113 | 
  114 |     await firstProduct.click();
  115 |     await expect(page).toHaveURL(/prod.html/);
  116 | 
  117 |     const productName = page.locator('.name');
  118 |     await expect(productName).toBeVisible();
  119 | 
  120 |     const productNameText = await productName.textContent();
  121 |     console.log('Product Name:', productNameText);
  122 | 
  123 |     await expect(page.getByRole('link', { name: 'Add to cart' })).toBeVisible();
  124 | 
  125 |     page.once('dialog', async dialog => {
  126 |       console.log('Alert Message:', dialog.message());
  127 |       expect(dialog.message()).toContain('Product added');
  128 |       await dialog.accept();
  129 |     });
  130 | 
  131 |     await page.getByRole('link', { name: 'Add to cart' }).click();
  132 | 
  133 |     // ==============================
  134 |     // Cart Assertion
  135 |     // ==============================
  136 | 
  137 |     await page.getByRole('link', { name: 'Cart' }).click();
  138 |     await expect(page).toHaveURL(/cart.html/);
  139 | 
  140 |     await expect(page.locator('#tbodyid')).toContainText(productNameText?.trim() || '');
  141 | 
  142 |     // ==============================
  143 |     // Soft Assertions
  144 |     // ==============================
  145 | 
  146 |     await expect.soft(page.getByRole('button', { name: 'Place Order' })).toBeVisible();
  147 |     await expect.soft(page.locator('#tbodyid')).toBeAttached();
```