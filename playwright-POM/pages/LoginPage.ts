import { Page, Locator } from "@playwright/test";

export class LoginPage {

  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly loginTitle: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.loginTitle = page.locator("h5");
    this.errorMessage = page.locator(".oxd-alert-content-text");
  }

  async navigate() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      { waitUntil: "domcontentloaded" }
    );
  }

  async getLoginTitle() {
    return await this.loginTitle.textContent();
  }

  async loginDetails(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}