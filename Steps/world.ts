import { Page, TestInfo } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage"
// import * as Pages from "../pages/index"

export class World{
    login:LoginPage;
    homepage:HomePage;

    constructor(public page:Page, public testInfo: TestInfo){
        this.login = new LoginPage(page);
        this.homepage = new HomePage(page)
    }
}