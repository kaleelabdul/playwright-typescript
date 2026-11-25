import { expect, Locator, Page } from "@playwright/test";


export class CheckOutPage {

    readonly page: Page;
    readonly removeBtn: Locator;
    readonly CheckOutBtn: Locator;


    constructor(page: Page) {

        this.page = page;
        this.removeBtn = page.getByRole('button', { name: 'Remove' });
        this.CheckOutBtn = page.getByRole('button', { name: 'Checkout' });

    }



    async checkOut() {

        await expect(this.removeBtn).toBeVisible();
        await this.CheckOutBtn.click();

    }

}

export class AddressPage {

    readonly page: Page;
    readonly Fname: Locator;
    readonly Lname: Locator;
    readonly Pincode: Locator;
    readonly conbtn : Locator;


    constructor(page: Page) {

        this.page = page;
        this.Fname = page.getByPlaceholder("First Name");
        this.Lname = page.getByPlaceholder("Last Name");
        this.Pincode = page.getByPlaceholder("Zip/Postal Code");
        this.conbtn = page.locator("#continue");
    }



    async Address(firstname: string, lastname: string, zipcode: number) {

        await this.Fname.fill(firstname);
        await this.Lname.fill(lastname)
        await this.Pincode.fill(zipcode.toString());
        await this.conbtn.click();

    }

}

