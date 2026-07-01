import { test, expect } from "../fixtures/baseFixture";
import logindata from "../test-data/loginData.json";

test.describe("Logout Module @Smoke", () => {
    console.log("Logout successfully");

    test.beforeEach(async({loginPage}) =>{

        await loginPage.navigate();

        console.log("Navigated to the home page");
        
        await loginPage.loginDetails(
            logindata.validUser.username,
            logindata.validUser.password
        );

        console.log("Login successfully");

    });

    test("Logout test - ", async({dashboardPage, loginPage}) =>{
        dashboardPage.logout();

        expect(await loginPage.getLoginTitle()).toBe("Login");
    })

    test.afterEach(() =>{
        console.log("Test completed");
    });
});