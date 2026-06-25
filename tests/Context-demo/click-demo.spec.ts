import { test, expect } from "@playwright/test";
import HomePage from "./launch-demo";

class Search extends HomePage {

  async searchLaptop() {

    const page1 = await this.context.newPage();

    await page1.goto("https://www.demoblaze.com/");

    await page1.getByRole("link", { name: "Laptops" }).click();

    await page1.locator("//h4//a[text()='MacBook air']").click();

    await expect(page1.locator("h2"))
      .toContainText("MacBook air");

    page1.once("dialog", async dialog => {
      await dialog.accept();
    });

    await page1.getByRole("link", { name: "Add to cart" }).click();
  }

}

test("Demo", async () => {

  const search = new Search();

  await search.login();         

  await search.searchLaptop();   

  await search.browser.close();

});