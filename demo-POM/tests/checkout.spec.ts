import { test, expect } from "../fixtures/basefixtures";
import { readXML } from "../utils/xmlReader";

const billingDetails = readXML("billingData.xml");

test.describe("Checkout Payment Module", () => {

  test.beforeEach(async ({ loginPage, cartPage }) => {
    await loginPage.navigate();
    await loginPage.login("admin", "admin");

    await expect(loginPage.successLogin).toHaveText("Welcome admin");

    const message = await cartPage.addProductToCart("Samsung galaxy s6");
    expect(message).toBe("Product added.");
  });

  test("Checkout and verify payment success", async ({ checkoutPage }) => {
    await checkoutPage.checkout(billingDetails);
    await checkoutPage.verifyPaymentSuccess();
  });

  test.afterEach(async ({ cartPage }) => {
    await cartPage.logout();
  });

});