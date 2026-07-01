import { test, expect } from "../fixtures/baseFixture";
import {readLoginData, LoginUser} from "../utils/csvReader";



const user: LoginUser[] = readLoginData();

console.log("CSV DATA: ", user);


const validUser = user.find(user => user.type === 'valid')
const invalidUser = user.find(user => user.type === 'invalid')

test.describe("login Module - ", () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();

    console.log("landed on the home page")
  });

  test("Invalid Login Test @Regression ", async ({ loginPage }) => {


    if(!invalidUser){
        throw new Error("Invalid user is not found in the LoginData.csv");
    }

    await loginPage.loginDetails(
        invalidUser.username,
        invalidUser.password
    )

    await expect(loginPage.errorMessage).toHaveText("Invalid credentials");
  });

  test("Valid Login Test @Smoke", async ({ loginPage, dashboardPage }) => {


    if(!validUser){
        throw new Error("valid user is not found in the LoginData.csv");
    }


    await loginPage.loginDetails(
      validUser.username,
      validUser.password
    );

    expect(await dashboardPage.checkdashboardTitle()).toBe("Dashboard");
  });

});