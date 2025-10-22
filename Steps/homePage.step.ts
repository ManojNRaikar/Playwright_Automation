import { Given,When,Then } from './fixtures';

Given('I login to the parabank application', async function () {
   await this.login.navigate();
});

When('I enter valid credentials', async function () {
  await this.login.loginMethod();
});

When('click on login button', async function () {
  await this.login.clickBtn();
});

Then('I should be logged in successfully', async function () {
await this.accountPage.verifyLoginSuccess()
});



