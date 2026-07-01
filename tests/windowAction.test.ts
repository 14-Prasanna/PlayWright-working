import { test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/browser-windows");
});


test("Iterate Windows", async({page, context}) =>{
    const [tab] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await tab.waitForLoadState();

    const[window] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);

    await window.waitForLoadState();

    const pages = context.pages();

    console.log("Number of Pages: ", pages.length);

    for(const p of pages){
        console.log(" ------------- ");
        console.log("URL: ", p.url)
        console.log("Title: ", await p.title());
    }


})


test("Iterate Window Attribute", async({page, context}) =>{

    const [newTabe] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

    await newTabe.waitForLoadState("domcontentloaded")

    const pages = context.pages();

    console.log(`Total Pages Opened: ${pages.length}`);

    for(const p of pages){
        console.log("URL: ", p.url());

        if(p.url().includes("simple")){
            const text = await p.locator("simpleHeading").textContent();

            console.log("Simple Page heading: ", text)
        }
    }
})


test.afterEach(async({page}) => {
    console.log("Test is completed")
})