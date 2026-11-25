import { parse } from "csv-parse/sync";
import fs from "fs";
import { test, expect } from "@playwright/test";

const records = parse(fs.readFileSync("TestData/dataFile.csv"), {
    columns: true,
    skip_empty_lines: true,
});

records.forEach((record : any) => {

    test(`Login Test ${record.id}`, async ({ page }) => {

        await page.goto("https://www.saucedemo.com/");
        await page.getByPlaceholder("Username").fill(record.username);
        await page.getByPlaceholder("Password").fill(record.password);

        await page.getByRole("button", { name: "Login" }).click();

    })

});