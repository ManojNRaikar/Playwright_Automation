import { Page, expect } from '@playwright/test';
import {BasePage} from "../pages/BasePage"
import {loginData} from '../copyText-TestData/loginData.ts'

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  private username = this.page.locator('input[name="username"]');
  private password = this.page.locator('input[name="password"]');
  private loginBtn = this.page.locator('input[value="Log In"]');

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async loginMethod() {
    await this.username.fill(loginData.validUser.username);
    await this.password.fill(loginData.validUser.password);
    await this.loginBtn.click();
  }
}
