import { Location,expect,Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CommanPage extends BasePage {
    
    // Constructor
    constructor(page:Page){
        super(page);
    }

    // Comman Page Locators
    private logout:Locator = this.page.locator('a[href*="logout.htm"]');

    // Comman Action Method
    public async clickLogout(){
        await this.logout.click();
    }
}