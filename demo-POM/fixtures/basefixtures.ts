import { test as Base, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";

type Fixtures = {
  loginPage: LoginPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

export const test = Base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
});

export { expect };