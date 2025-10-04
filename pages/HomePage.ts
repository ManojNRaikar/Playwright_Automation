import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async addProductToCart(product: string) {
    await this.page.click(`text=${product}`);
    await this.page.click("text=Add to cart");
    this.page.on("dialog", dialog => dialog.accept());
    await this.page.click("a#nava"); // back to home
  }
}
