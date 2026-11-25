import { Locator, Page } from "@playwright/test";


export class HomePage {

    readonly page : Page;
    readonly atc : Locator;
    readonly cart : Locator;


    constructor( page : Page) {

        this.page = page;
        this.atc = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.cart = page.locator('[data-test="shopping-cart-link"]');
    
    }



    async BoltTshirt() {

        await this.atc.click();
        await this.cart.click();

    }

}

