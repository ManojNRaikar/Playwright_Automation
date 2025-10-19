import {Given, When, Then} from "../Steps/fixtures"


Given('User navigates to ParaBank login page', async function () {
  // Step: Given User navigates to ParaBank login page
  // From: features\paraBank.feature:5:5
});

When('User logs in with username {string} and password {string}', async function (arg: string, arg1: string) {
  // Step: When User logs in with username "john" and password "demo"
  // From: features\paraBank.feature:6:5
});

Then('User should see the account overview page', async function () {
  // Step: Then User should see the account overview page
  // From: features\paraBank.feature:7:5
});

When('User transfers {int} from account {int} to account {int}', async function (arg: number, arg1: number, arg2: number) {
  // Step: When User transfers 100 from account 12345 to account 67890
  // From: features\paraBank.feature:8:5
});

Then('Transfer confirmation message should appear', async function () {
  // Step: Then Transfer confirmation message should appear
  // From: features\paraBank.feature:9:5
});

Then('User verifies transaction in recent activity', async function () {
  // Step: And User verifies transaction in recent activity
  // From: features\paraBank.feature:10:5
});

Then('User logs out successfully', async function () {
  // Step: Then User logs out successfully
  // From: features\paraBank.feature:11:5
});