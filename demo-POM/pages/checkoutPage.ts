import { Page, Locator, expect } from "@playwright/test";
import { BillingDetails } from "../utils/xmlReader";

export class CheckoutPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly placeOrderBtn: Locator;
  readonly name: Locator;
  readonly country: Locator;
  readonly city: Locator;
  readonly card: Locator;
  readonly month: Locator;
  readonly year: Locator;
  readonly purchaseBtn: Locator;
  readonly successMsg: Locator;
  readonly okBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator("#cartur");
    this.placeOrderBtn = page.getByRole("button", { name: "Place Order" });
    this.name = page.locator("#name");
    this.country = page.locator("#country");
    this.city = page.locator("#city");
    this.card = page.locator("#card");
    this.month = page.locator("#month");
    this.year = page.locator("#year");
    this.purchaseBtn = page.getByRole("button", { name: "Purchase" });
    this.successMsg = page.locator(".sweet-alert h2");
    this.okBtn = page.getByRole("button", { name: "OK" });
  }

  async checkout(details: BillingDetails) {
    await this.cartLink.click();

    await expect(this.placeOrderBtn).toBeVisible();
    await this.placeOrderBtn.click();

    await this.name.fill(details.name);
    await this.country.fill(details.country);
    await this.city.fill(details.city);
    await this.card.fill(details.card);
    await this.month.fill(details.month);
    await this.year.fill(details.year);

    await this.purchaseBtn.click();
  }

  async verifyPaymentSuccess() {
    await expect(this.successMsg).toHaveText("Thank you for your purchase!");
    await this.okBtn.click();
  }
}