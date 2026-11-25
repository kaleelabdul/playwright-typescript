import { Locator, Page } from "@playwright/test";


export class LoginPage {

    readonly page : Page;
    readonly uname : Locator;
    readonly pwd : Locator;
    readonly lgnbtn : Locator;

    constructor( page : Page) {

        this.page = page;
        this.uname = page.getByPlaceholder('Username');
        this.pwd = page.locator("#password");
        this.lgnbtn = page.getByRole("button", { name : 'Login'});
    }

    async OpenApp() {

        await this.page.goto("https://saucedemo.com");
    }

    async Login(usernameVal : string, passwordVal : string) {

        await this.uname.fill(usernameVal);
        await this.pwd.fill(passwordVal);
        await this.lgnbtn.click();


    }







}

