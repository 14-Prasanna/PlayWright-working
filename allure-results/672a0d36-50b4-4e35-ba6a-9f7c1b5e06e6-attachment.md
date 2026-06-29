# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblaze_learning.spec.ts >> DemoBlaze - Playwright Learning Practice >> Browser commands, locators, actions, assertions, alerts and windows
- Location: tests\demoblaze_learning.spec.ts:9:7

# Error details

```
Error: locator.click: Error: strict mode violation: locator('#logInModal').getByRole('button', { name: 'Close' }) resolved to 2 elements:
    1) <button type="button" class="close" aria-label="Close" data-dismiss="modal">…</button> aka getByRole('dialog', { name: 'Log in' }).getByLabel('Close')
    2) <button type="button" data-dismiss="modal" class="btn btn-secondary">Close</button> aka getByLabel('Log in').getByText('Close')

Call log:
  - waiting for locator('#logInModal').getByRole('button', { name: 'Close' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Log in" [active] [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]: admin
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]: admin
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
      - img [ref=e22]
      - text: PRODUCT STORE
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - img "First slide" [ref=e46]
      - button "Previous" [ref=e47] [cursor=pointer]:
        - generic [ref=e49]: Previous
      - button "Next" [ref=e50] [cursor=pointer]:
        - generic [ref=e52]: Next
  - generic [ref=e54]:
    - generic [ref=e56]:
      - link "CATEGORIES" [ref=e57] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e58] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e59] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e60] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e64]:
          - link [ref=e65] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e66]:
            - heading "Samsung galaxy s6" [level=4] [ref=e67]:
              - link "Samsung galaxy s6" [ref=e68] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e69]
            - paragraph [ref=e70]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e72]:
          - link [ref=e73] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e74]:
            - heading "Nokia lumia 1520" [level=4] [ref=e75]:
              - link "Nokia lumia 1520" [ref=e76] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e77]
            - paragraph [ref=e78]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e80]:
          - link [ref=e81] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e82]:
            - heading "Nexus 6" [level=4] [ref=e83]:
              - link "Nexus 6" [ref=e84] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e85]
            - paragraph [ref=e86]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e88]:
          - link [ref=e89] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e90]:
            - heading "Samsung galaxy s7" [level=4] [ref=e91]:
              - link "Samsung galaxy s7" [ref=e92] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e93]
            - paragraph [ref=e94]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e96]:
          - link [ref=e97] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e98]:
            - heading "Iphone 6 32gb" [level=4] [ref=e99]:
              - link "Iphone 6 32gb" [ref=e100] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e101]
            - paragraph [ref=e102]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e104]:
          - link [ref=e105] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e106]:
            - heading "Sony xperia z5" [level=4] [ref=e107]:
              - link "Sony xperia z5" [ref=e108] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e109]
            - paragraph [ref=e110]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e112]:
          - link [ref=e113] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e114]:
            - heading "HTC One M9" [level=4] [ref=e115]:
              - link "HTC One M9" [ref=e116] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e117]
            - paragraph [ref=e118]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e120]:
          - link [ref=e121] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=e122]:
            - heading "Sony vaio i5" [level=4] [ref=e123]:
              - link "Sony vaio i5" [ref=e124] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=e125]
            - paragraph [ref=e126]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=e128]:
          - link [ref=e129] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=e130]:
            - heading "Sony vaio i7" [level=4] [ref=e131]:
              - link "Sony vaio i7" [ref=e132] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=e133]
            - paragraph [ref=e134]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=e136]:
        - listitem [ref=e137]:
          - button "Previous" [ref=e138]
        - listitem [ref=e139]:
          - button "Next" [ref=e140] [cursor=pointer]
  - generic [ref=e142]:
    - generic [ref=e145]:
      - heading "About Us" [level=4] [ref=e146]
      - paragraph [ref=e147]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e150]:
      - heading "Get in Touch" [level=4] [ref=e151]
      - paragraph [ref=e152]: "Address: 2390 El Camino Real"
      - paragraph [ref=e153]: "Phone: +440 123456"
      - paragraph [ref=e154]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e158]:
      - img [ref=e159]
      - text: PRODUCT STORE
  - contentinfo [ref=e160]:
    - paragraph [ref=e161]: Copyright © Product Store
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
  47  |     await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
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
  76  | const loginModal = page.locator('#logInModal');
  77  | await expect(loginModal).toBeVisible();
  78  | 
  79  | const usernameInput = page.locator('#loginusername');
  80  | const passwordInput = page.locator('#loginpassword');
  81  | 
  82  | await usernameInput.fill('admin');
  83  | await passwordInput.fill('admin');
  84  | 
  85  | await usernameInput.clear();
  86  | await usernameInput.type('admin');
  87  | 
  88  | await passwordInput.press('Control+A');
  89  | await passwordInput.press('Backspace');
  90  | await passwordInput.fill('admin');
  91  | 
  92  | await expect(usernameInput).toHaveValue('admin');
  93  | await expect(passwordInput).toHaveValue('admin');
  94  | 
  95  | // Correct close button inside login modal
> 96  | await loginModal.getByRole('button', { name: 'Close' }).click();
      |                                                         ^ Error: locator.click: Error: strict mode violation: locator('#logInModal').getByRole('button', { name: 'Close' }) resolved to 2 elements:
  97  | 
  98  | await expect(loginModal).toBeHidden();
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
  148 | 
  149 |     // ==============================
  150 |     // Contact Modal - dispatchEvent
  151 |     // ==============================
  152 | 
  153 |     await page.goto('https://demoblaze.com/');
  154 | 
  155 |     await contactLink.click();
  156 |     await expect(page.locator('#exampleModal')).toBeVisible();
  157 | 
  158 |     await page.locator('#recipient-email').fill('test@gmail.com');
  159 |     await page.locator('#recipient-name').fill('Prasanna');
  160 |     await page.locator('#message-text').fill('Testing contact form using Playwright');
  161 | 
  162 |     await page.locator('#recipient-email').dispatchEvent('input');
  163 | 
  164 |     page.once('dialog', async dialog => {
  165 |       console.log('Contact Alert:', dialog.message());
  166 |       await dialog.accept();
  167 |     });
  168 | 
  169 |     await page.getByRole('button', { name: 'Send message' }).click();
  170 | 
  171 |     // ==============================
  172 |     // Window / New Page Handling
  173 |     // ==============================
  174 | 
  175 |     await page.goto('https://demoqa.com/browser-windows');
  176 | 
  177 |     const [newPage] = await Promise.all([
  178 |       context.waitForEvent('page'),
  179 |       page.locator('#windowButton').click()
  180 |     ]);
  181 | 
  182 |     await newPage.waitForLoadState('domcontentloaded');
  183 | 
  184 |     await expect(newPage.locator('#sampleHeading')).toHaveText('This is a sample page');
  185 | 
  186 |     console.log('New Window URL:', newPage.url());
  187 | 
  188 |     await newPage.close();
  189 | 
  190 |     await expect(page).toHaveURL('https://demoqa.com/browser-windows');
  191 | 
  192 |     // ==============================
  193 |     // Browser close examples
  194 |     // Usually not needed inside Playwright test
  195 |     // ==============================
  196 | 
```