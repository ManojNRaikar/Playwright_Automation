// Generated from: features\ecommerce.feature
import { test } from "../../Steps/fixtures.ts";

test.describe('E-commerce Website Testing', () => {

  test('Login to store', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I login to the demo store', null, { page }); 
    await When('I enter valid credentials', null, { loginPage }); 
    await Then('I should be logged in successfully'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\ecommerce.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I login to the demo store","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]}]},
]; // bdd-data-end