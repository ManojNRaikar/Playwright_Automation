import { Given, When, Then } from "./fixtures";

Given("I login to the parabank application", async function () {
  await this.login.navigate();
});

When("I enter valid credentials", async function () {
  await this.login.loginMethod();
});

When("click on login button", async function () {
  await this.login.clickBtn();
});

Then("I should be logged in successfully", async function () {
  await this.accountPage.verifyLoginSuccess();
});

//scenario 2

When(
  "I enter invalid {string} and {string}",
  async function (username: string, password: string) {
    await this.login.multipleUserlogin(username, password);
  }
);

Then(
  "I should see error message {string}",
  async function (errorMessage: string) {
    await this.login.verifyErrorMessage(errorMessage);
  }
);

Then("also should see {string}", async function (errorMessage2: string) {
  await this.login.verifySecondErrorMeesage(errorMessage2)
});
