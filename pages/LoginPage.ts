import { Page, expect,Locator } from '@playwright/test';
import {BasePage} from "../pages/BasePage"
import {loginData} from '../copyText-TestData/loginData.ts'
import loginjson from '../copyText-TestData/login.json'

export class LoginPage extends BasePage {
  
  // Constructors
  constructor(page: Page) {
    super(page)
  }

  // Locators
  private username:Locator = this.page.locator('input[name="username"]');
  private password:Locator = this.page.locator('input[name="password"]');
  private loginBtn:Locator = this.page.locator('input[value="Log In"]');

  // Action Methods

  public async navigate() {
    await this.page.goto(process.env.BANK_URL!);
  }

  public async loginMethod() {
    await this.username.fill(loginData.validUser.username);
    await this.password.fill(loginData.validUser.password);
  }

  public async clickBtn(){
    
    await this.loginBtn.click();
  }
}
