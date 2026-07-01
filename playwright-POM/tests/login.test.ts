import { test, expect } from "../fixtures/baseFixture";
import loginData from "../test-data/loginData.json";

test.describe("login Module - ", () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();

    console.log("landed on the home page")
  });

  test("Invalid Login Test @Regression ", async ({ loginPage }) => {

    await loginPage.loginDetails(
      loginData.invalidUser.username,
      loginData.invalidUser.password
    );

    await expect(loginPage.errorMessage).toHaveText("Invalid credentials");
  });

  test("Valid Login Test @Smoke", async ({ loginPage, dashboardPage }) => {

    await loginPage.loginDetails(
      loginData.validUser.username,
      loginData.validUser.password
    );

    expect(await dashboardPage.checkdashboardTitle()).toBe("Dashboard");
  });

});