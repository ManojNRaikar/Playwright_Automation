import { Page, TestInfo } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

export class World{
    login:LoginPage;

    constructor(public page:Page, public testInfo: TestInfo){
        this.login = new LoginPage(page);
    }
}