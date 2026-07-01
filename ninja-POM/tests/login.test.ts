import {test, expect} from "../fixtures/baseFixtures";
import LoginData from "../test-data/loginDeatils.json";


test.describe("Login Module", () =>{
    console.log("Login Module");



    test.beforeEach(async({loginPage}) =>{
        loginPage.navigation();

        console.log("Website launched successfully");
    });

    test("Valid Test Cases", async({loginPage}) =>{

        await loginPage.Login(
            LoginData.valid.username,
            LoginData.valid.password
        );

        expect (await loginPage.LoginSuccess()).toBe(LoginData.valid.expectedResult);
    });

    test("Invalid Test Cases", async({loginPage}) =>{

        await loginPage.Login(
            LoginData.invalid.username,
            LoginData.invalid.password
        );

        expect(await loginPage.loginFailed()).toBe(LoginData.invalid.expectedResult);
    });


    test.afterEach(() =>{
        console.log("Test completed Successfully");
    })
})




