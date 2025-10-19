import { Given,When,Then } from './fixtures';

Given('I login to the parabank application', async function () {
   await this.login.navigate();
});

When('I enter valid credentials', async function () {
  await this.login.loginMethod();
});

When('click on login button', async function () {
  
});

Then('I should be logged in successfully', async function () {

});

Then('I should see the Welcome message with username {string}', async function (arg: string) {
  
});


