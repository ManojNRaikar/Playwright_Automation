import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  constructor( page: Page) {
    super(page)
  }

  async verifyProductInCart(product: string) {
    await this.page.click("#cartur");
    await this.page.waitForSelector("tr.success");
    await expect(this.page.locator("tr.success")).toContainText(product);
  }

  async removeProductFromCart(product: string) {
    await this.page.click("#cartur");
    await this.page.waitForSelector("tr.success");
    const row = this.page.locator(`tr.success:has-text("${product}") >> text=Delete`);
    await row.click();
    await this.page.waitForTimeout(2000);
  }

  async verifyProductNotInCart(product: string) {
    await this.page.click("#cartur");
    await expect(this.page.locator("tr.success")).not.toContainText(product);
  }
}
