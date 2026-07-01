import { test, expect } from "../fixtures/baseFixture";
import loginData from "../test-data/loginData.json";


test.describe("End to End Testing Login-Dashboard-Logout @Smoke @Regression @E2E", ()=>{
    console.log("E2E Testing");

    test.beforeEach(async({loginPage}) =>{
        loginPage.navigate();

        console.log("Landed in the Home page");
    });

    test("End to End testing", async({loginPage, dashboardPage}) =>{

            await loginPage.loginDetails(
                loginData.validUser.username,
                loginData.validUser.password
            );

            console.log("Login Successfully");

            expect(await dashboardPage.checkdashboardTitle()).toBe("Dashboard");

            expect(await dashboardPage.checkdashboardTitle()).toBe("Dashboard");
            expect(await dashboardPage.checkThePage()).toBe("Time at Work");

            console.log("Dashboard page");

            dashboardPage.logout();

            expect(await loginPage.getLoginTitle()).toBe("Login");

            console.log("logout Successfully");
    });


    test.afterEach(() =>{
        console.log("End to End completed");
    })


})
