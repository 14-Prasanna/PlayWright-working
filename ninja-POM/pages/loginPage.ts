import { Page, Locator } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../env/qa.env') });

export class LoginPage {

  readonly page: Page;
  readonly myaccount: Locator;
  readonly loginlink: Locator;
  readonly user_name: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly successMsg: Locator;
  readonly errormsg: Locator;

  constructor(page: Page) {
    this.page = page;

    this.myaccount = page.locator("//a[@title='My Account']");
    this.loginlink = page.getByRole('link', { name: 'Login' });
    this.user_name = page.locator("#input-email");
    this.password = page.locator("#input-password");
    this.loginBtn = page.locator("//input[@type='submit']");

    this.successMsg = page.locator("//h2[text()='My Account']");
    this.errormsg = page.getByText("Warning: No match for E-Mail Address and/or Password.");
  }

  async Login(username: string, password: string) {
    await this.myaccount.click();
    await this.loginlink.click();

    await this.user_name.fill(username);
    await this.password.fill(password);

    await this.loginBtn.click();
  }

  async LoginSuccess() {
    return await this.successMsg.textContent();
  }

  async loginFailed() {
    return await this.errormsg.textContent();
  }

  async navigation() {
    await this.page.goto(process.env.URL!);
  }
}