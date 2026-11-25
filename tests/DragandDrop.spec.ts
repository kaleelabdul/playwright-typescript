import { test, expect } from '@playwright/test';

test("Drag and Drop", async ({ page }) => {

    await page.goto("https://seleniumbase.io/other/drag_and_drop");

    await page.locator("#div2").dragTo(page.locator("#div1"));

    await page.locator("#div1").dragTo(page.locator("#div2"));

})

test("Drag and Drop 2", async ({ page }) => {

    await page.goto("https://seleniumbase.io/other/drag_and_drop");

    await page.locator("#div2").hover();
    await page.mouse.down();


    await page.locator("#div1").hover();
    await page.mouse.up();

})