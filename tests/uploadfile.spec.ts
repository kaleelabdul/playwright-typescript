import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {

    await page.goto("https://www.azurespeed.com/Azure/UploadLargeFile?region=indiasouthcentral");

})


test("Upload file", async ({ page }) => { 

    
    await page.locator("#regionSelect").selectOption(" India South Central - Hyderabad ");

    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.locator('div').filter({ hasText: 'Choose or drop a test file 1' }).nth(4).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("C:\\Users\\khale\\Downloads\\swag-labs-order-2026-11-25_05-42-44.pdf");

})

test ("Upload file with input", async ({ page }) => {

    await page.locator("#regionSelect").selectOption("japaneast");

    await page.locator("#fileInput").setInputFiles("C:/Users/khale/Downloads/swag-input file - Copy.pdf");


})