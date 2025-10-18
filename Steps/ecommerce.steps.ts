import { Given,When,Then } from './fixtures';


Given('I login to the demo store', async function() {
  await this.page.goto(process.env.Base_URL!);
  await this.page.click('text=My Account');
  await this.login.loginMethod("demo","123")
});
When('I enter valid credentials', async function () {
  // await loginPage.login("testuser_1", "Test@12345");
  
});

Then('I should be logged in successfully', async function () {
  
});

