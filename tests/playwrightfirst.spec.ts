import { test } from "../Fixtures/MyPOMFixture";

test ("standardUser", async({loginPage, homePage, checkPage, addressPage, billingPage, thankYouPage})=> {

    await loginPage.OpenApp();
    await loginPage.Login("standard_user", "secret_sauce");

    await homePage.BoltTshirt();

    await checkPage.checkOut();

    await addressPage.Address("AKM", "MD", 505050);

    await billingPage.Billing();

    await thankYouPage.Invoice();

})


test("ProblemUser", async({loginPage})=> {

    await loginPage.OpenApp();
    await loginPage.Login("problem_user", "secret_sauce");

})

test ("lockedOut_user", async({loginPage})=> {

    await loginPage.OpenApp();
    await loginPage.Login("locked_out_user", "secret_sauce");

})