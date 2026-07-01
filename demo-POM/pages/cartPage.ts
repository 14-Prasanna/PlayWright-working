import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly addToCartBtn: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator("#cartur");
    this.addToCartBtn = page.getByRole("link", { name: "Add to cart" });
    this.logoutBtn = page.locator("#logout2");
  }

  async addProductToCart(productName: string) {
    await this.page.getByRole("link", { name: productName }).click();

    const dialogPromise = this.page.waitForEvent("dialog");

    await this.addToCartBtn.click();

    const dialog = await dialogPromise;
    const message = dialog.message();

    await dialog.accept();

    await expect(this.cartLink).toBeVisible();

    return message;
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async verifyProductInCart(productName: string) {
    await this.goToCart();
    await expect(this.page.locator("tbody")).toContainText(productName);
  }

  async logout() {
    await this.logoutBtn.click();
  }
}