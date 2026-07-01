import { test, expect } from "../fixtures/baseFixture";
import logindata from "../test-data/loginData.json";

test.describe("Dashboard Module - @Smoke", () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();

    await loginPage.loginDetails(
      logindata.validUser.username,
      logindata.validUser.password
    );

    console.log("Login Successfully")
  });

  test("Dashboard Test", async ({ dashboardPage }) => {

    expect(await dashboardPage.checkdashboardTitle()).toBe("Dashboard");
    expect(await dashboardPage.checkThePage()).toBe("Time at Work");

  });

  test.afterEach(async ({dashboardPage}) => {
    console.log("Test completed");

    console.log("Going to logout");

    await dashboardPage.logout();

    console.log("Logout successfully")

  });

});