import { test, expect } from "../fixtures/basefixtures";
import { readCSV, Product } from "../utils/csvReader";

const products = readCSV<Product>("cartData.csv");

test.describe("Add To Cart Module", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();

    await loginPage.login("admin", "admin");

    await expect(loginPage.successLogin).toHaveText("Welcome admin");
  });

  for (const product of products) {
    test(`Add Product - ${product.productName}`, async ({ cartPage }) => {
      const message = await cartPage.addProductToCart(product.productName);

      expect(message).toBe("Product added.");

      await cartPage.verifyProductInCart(product.productName);
    });
  }

  test.afterEach(async ({ cartPage }) => {
    await cartPage.logout();
  });
});