import { test, expect } from "../fixtures/basefixtures";
import LoginData from "../test-data/loginData.json";

test.describe("Login Module", () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test("Valid Login", async ({ loginPage }) => {
    await loginPage.login(LoginData.valid.username, LoginData.valid.password);

    await expect(loginPage.successLogin)
      .toHaveText(LoginData.valid.expectedResult);
  });

  test("Invalid Username", async ({ loginPage }) => {
    const dialogPromise = loginPage.InvalidLoginMessage();

    await loginPage.login(
      LoginData["Invalid-username"].username,
      LoginData["Invalid-username"].password
    );

    const message = await dialogPromise;

    expect(message).toBe(LoginData["Invalid-username"].expectedResult);
  });

  test("Invalid Password", async ({ loginPage }) => {
    const dialogPromise = loginPage.InvalidLoginMessage();

    await loginPage.login(
      LoginData["Invalid-password"].username,
      LoginData["Invalid-password"].password
    );

    const message = await dialogPromise;

    expect(message).toBe(LoginData["Invalid-password"].expectedResult);
  });

});