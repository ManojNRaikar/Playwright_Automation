import { Page } from "@playwright/test";
export class BasePage{

    // Declaration
    protected readonly page:Page

    // Constructor
    constructor(page:Page){
        
        // Initialization
        this.page=page
    }
}
