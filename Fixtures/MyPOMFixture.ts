import { test as baseTest } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage";
import { CheckOutPage, AddressPage } from "../pages/checkOutPage";
import { BillingPage, ThankYouPage } from "../pages/BillingPage";

type MyFixtures = {

    loginPage: LoginPage;
    homePage : HomePage;
    checkPage : CheckOutPage;
    addressPage : AddressPage;
    billingPage : BillingPage;
    thankYouPage : ThankYouPage;
}

export const test = baseTest.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {

        const LoginPageObj = new LoginPage(page);
        await use(LoginPageObj);
    },

    homePage : async({page}, use)=> {

        const homePageObj = new HomePage(page);
        await use(homePageObj);

    },

    checkPage : async({page}, use)=> {

        const checkOutPageObj = new CheckOutPage(page);
        await use(checkOutPageObj);

    },

    addressPage : async({page}, use)=> {

        const addrPageObj = new AddressPage(page);
        await use(addrPageObj);
    },

    billingPage : async({page}, use)=> {

        const billPageObj = new BillingPage(page);
        await use(billPageObj);

    },

    thankYouPage : async({page}, use)=> {

        const thankPageObj = new ThankYouPage(page);
        await use(thankPageObj);    

    }

});

export { expect } from "@playwright/test";