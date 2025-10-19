import { Given,When,Then } from './fixtures';

Given('I login to the parabank application', async function () {
  await this.page.goto(process.env.Base_URL!)
});

When('I enter valid credentials', async function () {
  // Step: When I enter valid credentials
  // From: features\parabankHome.feature:5:5
});

When('click on login button', async function () {
  // Step: And click on login button
  // From: features\parabankHome.feature:6:5
});

Then('I should be logged in successfully', async function () {
  // Step: Then I should be logged in successfully
  // From: features\parabankHome.feature:7:5
});

Then('I should see the Welcome message with username {string}', async function (arg: string) {
  // Step: And I should see the Welcome message with username "Welcome testaccount"
  // From: features\parabankHome.feature:8:5
});


