import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountsPage extends BasePage {
  constructor( page: Page) {
    super(page)
  }

  private overviewTitle:Locator = this.page.getByRole('heading', { name: 'Accounts Overview' });

  async verifyLoginSuccess() {
    await expect(this.overviewTitle).toContainText(' Accounts Overview ');
  }
}
