import {test, expect } from '@playwright/test';

test.beforeEach(async({page}) =>{
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/")
})

test('DropDown Select', async({page}) => {
    
    await page.selectOption("#select-demo", {
        //value:"Thursday"
        //index:4
        label:"Sunday"
    })

    await page.waitForTimeout(3000);

    // const value = page.locator("//p[@class = 'selected-value text-size-14']")

    await page.waitForTimeout(3000);

})

test("Multi-Select", async({page}) =>{

    await page.selectOption("#multi-select", [
        {label: "Texas"},
        {index:2},
        {value: "Washington"},
    ])


})

test.afterEach(async({page}) =>{
    console.log("Test Completed");
})