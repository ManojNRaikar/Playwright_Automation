import { Page, TestInfo } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AccountsPage  } from "../pages/AccountsPage";
import { TransferPage } from "../pages/TransferPage"
import { CommanPage } from "../pages/commanPage";
// import * as Pages from "../pages/index"

export class World{
    login:LoginPage;
    accountPage:AccountsPage;
    transferPage:TransferPage;
    commanPage:CommanPage;

    constructor(public page:Page, public testInfo: TestInfo){
        this.login = new LoginPage(page);
        this.accountPage = new AccountsPage(page);
        this.transferPage = new TransferPage(page);
        this.commanPage = new CommanPage(page);
    }
}