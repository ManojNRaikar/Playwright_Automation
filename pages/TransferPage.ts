import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransferPage extends BasePage {
  
  // Constructor
  constructor( page: Page) {
    super(page)
}


// Locator
  private transferLink:Locator = this.page.locator('a[href*="transfer.htm"]');
  private amount:Locator = this.page.locator('#amount');
  private fromAccount:Locator = this.page.locator('#fromAccountId');
  private toAccount:Locator = this.page.locator('#toAccountId');
  private transferBtn:Locator = this.page.locator('input[value="Transfer"]');
  private confirmation:Locator = this.page.locator('#rightPanel > div > div > h1');


  // Action Method
  async transferFunds(amount: string, from: string, to: string) {
    await this.transferLink.click();
    await this.amount.fill(amount);
    await this.fromAccount.selectOption(from);
    await this.toAccount.selectOption(to);
    await this.transferBtn.click();
  }

  async verifyTransferSuccess() {
    await expect(this.confirmation).toHaveText('Transfer Complete!');
  }

  public async verifyRecentActivity(){
    await expect(this.page.locator('h1.title')).toHaveText('Transaction Results');
  }
}
