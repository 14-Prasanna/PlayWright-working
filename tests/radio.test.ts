import { test, expect } from "@playwright/test";

test.describe("Radio button", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.leafground.com/radio.xhtml");
    });

    test("Radio click", async ({ page }) => {

        const radio = page.locator(
            "//table[@id='j_idt87:console1']//td//div[@class='ui-radiobutton ui-widget']"
        ).nth(1);

        await radio.click();
    });


    test("Find the default selected radio button", async ({ page }) => {

        const selectedRadio = page.locator(
            "//div[contains(@class,'ui-state-active')]"
        );

        const count = await selectedRadio.count();

        console.log("Selected radio count :", count);

        const classes = await selectedRadio.first().getAttribute("class");

        console.log("Selected Radio Class :", classes);

    });

});