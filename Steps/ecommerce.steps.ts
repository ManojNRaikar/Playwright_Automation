import { Given,When,Then } from './fixtures';


Given('I login to the demo store', async ({page}) => {
  await page.goto(process.env.Base_URL!);
});
When('I enter valid credentials', async ({loginPage}) => {
  await loginPage.login("testuser_1", "Test@12345");
});

Then('I should be logged in successfully', async ({}) => {
  
});

