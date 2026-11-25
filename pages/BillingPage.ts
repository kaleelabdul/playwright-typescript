import { expect, Locator, Page } from "@playwright/test";


export class BillingPage {

    readonly page: Page;
    readonly PriceDetails: Locator;
    readonly FinishBtn: Locator;


    constructor(page: Page) {

        this.page = page;
        this.PriceDetails = page.locator(".summary_info");
        this.FinishBtn = page.getByRole('button', { name: 'Finish' });

    }



    async Billing() {

        const priceText = await this.page.locator(".summary_info").innerText();

        const formattedText = priceText
            .replace(/Cancel/g, "")
            .replace(/Finish/g, "")
            .trim();

        console.log("Price Details:\n", formattedText);

        await this.FinishBtn.click();

        console.log("------------------------------------");



    }

}


export class ThankYouPage {

    readonly page: Page;
    readonly successmsg: Locator;
    readonly DownloadBtn: Locator;


    constructor(page: Page) {

        this.page = page;
        this.successmsg = page.locator(".complete-text");
        this.DownloadBtn = page.locator("#generate-pdf-order");

    }



    async Invoice() {

        const successMessage = await this.successmsg.innerText();
        console.log("Success Message:", successMessage);

        const downloadPromise = this.page.waitForEvent('download');
        await this.DownloadBtn.click();
        const download = await downloadPromise;
        console.log("File Name:", download.suggestedFilename());
        // console.log("File Path:", await download.path());
        await download.saveAs("./Downloads/" + download.suggestedFilename());


    }
}