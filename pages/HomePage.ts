import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  constructor(public page: Page) {
    super(page)
  }

  async addProductToCart(product: string) {
    await this.page.click(`text=${product}`);
    await this.page.click("text=Add to cart");
    this.page.on("dialog", dialog => dialog.accept());
    await this.page.click("a#nava"); // back to home
  }
}
