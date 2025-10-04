import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {this.page=page;}

  async login(username: string, password: string) {
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
