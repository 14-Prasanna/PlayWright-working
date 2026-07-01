import { Page, Locator } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../env/qa.env")
});

export class LoginPage {

  readonly page: Page;
  readonly loginLink: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly successLogin: Locator;

  constructor(page: Page) {

    this.page = page;

    this.loginLink = page.locator("#login2");

    this.username = page.locator("#loginusername");

    this.password = page.locator("#loginpassword");

    this.loginBtn = page.getByRole(
      'button',
      { name: 'Log in' }
    );

    this.successLogin =
      page.locator("#nameofuser");

  }

  async navigate() {

    await this.page.goto(
      process.env.BASE_URL!
    );

  }

  async login(
    username: string,
    password: string
  ) {

    await this.loginLink.click();

    await this.username.fill(
      username
    );

    await this.password.fill(
      password
    );

    await this.loginBtn.click();

  }

  async InvalidLoginMessage() {

    const dialog =
      await this.page.waitForEvent(
        'dialog'
      );

    const message =
      dialog.message();

    await dialog.accept();

    return message;

  }

}