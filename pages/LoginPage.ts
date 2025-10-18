import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
 
  constructor(page:Page) {
   super(page)
  }

  async loginMethod(username: string, password: string) {
    await this.page.click("#login2");
    await this.page.fill("#loginusername", username);
    await this.page.fill("#loginpassword", password);
    await this.page.click("button:has-text('Log in')");
    await this.page.waitForTimeout(2000);
  }

  async verifyLogin() {
    await expect(this.page.locator("#nameofuser")).toBeVisible();
  }
}
