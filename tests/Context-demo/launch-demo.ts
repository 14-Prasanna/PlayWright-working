import { chromium,Browser,BrowserContext,Page,expect } from "@playwright/test";

export default class HomePage {

  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async login() {

    this.browser = await chromium.launch({
      headless: false
      
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

    await this.page.goto("https://www.demoblaze.com/");

    await this.page.locator("#login2").click();
    await this.page.locator("#loginusername").fill("admin");
    await this.page.locator("#loginpassword").fill("admin");
    await this.page.getByRole("button", { name: "Log in" }).click();

    await expect(this.page.locator("#nameofuser"))
      .toContainText("Welcome admin");
  }
}