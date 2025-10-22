import {Given, When, Then} from "../Steps/fixtures"

Given('User navigates to ParaBank login page', async function () {
  await this.page.goto(process.env.BANK_URL!)
});

When('User logs in with username and password', async function () {
  await this.login.loginMethod();
  await this.login.clickBtn();
});

Then('User should see the account overview page', async function () {
await this.accountPage.verifyLoginSuccess();
});

When('User transfers {int} from account {int} to account {int}', async function (amount: Number, from: Number, to: Number) {
  await this.transferPage.transferFunds(amount.toString(),from.toString(),to.toString());
});

Then('Transfer confirmation message should appear', async function () {
  await this.transferPage.verifyTransferSuccess()
});

Then('User logs out successfully', async function () {
await this.commanPage.clickLogout()
});

