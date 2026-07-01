import { Page, Locator } from "@playwright/test";

export class DashboardPage {

  readonly page: Page;
  readonly dashboardTitle: Locator;
  readonly timeAtWork: Locator;
  readonly menuBtn: Locator;
  readonly logoutBtn : Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardTitle = page.locator("h6");
    this.timeAtWork = page.getByText("Time at Work");
    this.menuBtn = page.locator("//span[@class =  'oxd-userdropdown-tab']");
    this.logoutBtn = page.locator("//a[normalize-space()='Logout']")
  }

  async checkdashboardTitle() {
    return await this.dashboardTitle.textContent();
  }

  async checkThePage() {
    return await this.timeAtWork.textContent();
  }

  async logout(){
    await this.menuBtn.click();
    await this.logoutBtn.click();
  }


}