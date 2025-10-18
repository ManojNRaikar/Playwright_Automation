import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class OrderPage  extends BasePage{
  constructor( page: Page) {
    super(page)
  }

  async placeOrder(name: string, creditCard: string) {
    await this.page.click("#cartur");
    await this.page.click("button:has-text('Place Order')");
    await this.page.fill("#name", name);
    await this.page.fill("#creditCard", creditCard);
    await this.page.click("button:has-text('Purchase')");
  }

  async verifyOrderConfirmation() {
    await expect(this.page.locator(".sweet-alert")).toBeVisible();
    await expect(this.page.locator(".sweet-alert")).toContainText("Thank you for your purchase!");
    await this.page.click("button:has-text('OK')");
  }
}
