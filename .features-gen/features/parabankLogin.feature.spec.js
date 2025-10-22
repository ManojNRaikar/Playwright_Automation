// Generated from: features\parabankLogin.feature
import { test } from "../../Steps/fixtures.ts";

test.describe('parabank Applocation Login', () => {

  test('Login to parabank application', { tag: ['@Regression', '@smoke'] }, async ({ Given, When, Then, And }) => { 
    await Given('I login to the parabank application'); 
    await When('I enter valid credentials'); 
    await And('click on login button'); 
    await Then('I should be logged in successfully'); 
  });

  test.describe('Login to Parabank with invalid username "<username>" and password "<password>"', () => {

    test('Login to Parabank with invalid username "Test123" and password "test@344"', { tag: ['@Regression'] }, async ({ Given, When, Then, And }) => { 
      await Given('I login to the parabank application'); 
      await When('I enter invalid "Test123" and "test@344"'); 
      await And('click on login button'); 
      await Then('I should see error message "Error!"'); 
    });

    test('Login to Parabank with invalid username "Testhifi" and password "test4555#"', { tag: ['@Regression'] }, async ({ Given, When, Then, And }) => { 
      await Given('I login to the parabank application'); 
      await When('I enter invalid "Testhifi" and "test4555#"'); 
      await And('click on login button'); 
      await Then('I should see error message "Error!"'); 
    });

    test('Login to Parabank with invalid username "tEST" and password "demo"', { tag: ['@Regression'] }, async ({ Given, When, Then, And }) => { 
      await Given('I login to the parabank application'); 
      await When('I enter invalid "tEST" and "demo"'); 
      await And('click on login button'); 
      await Then('I should see error message "Error!"'); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('before', {  }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\parabankLogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  $world: [({ world }, use) => use(world), { scope: 'test', box: true }],
  page: async ({ page, $prompt }, use) => {
    $prompt.setPage(page);
    await use(page);
  },
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@Regression","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I login to the parabank application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":19,"tags":["@Regression"],"steps":[{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I login to the parabank application","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I enter invalid \"Test123\" and \"test@344\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Test123\"","children":[{"start":17,"value":"Test123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"test@344\"","children":[{"start":31,"value":"test@344","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see error message \"Error!\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Error!\"","children":[{"start":28,"value":"Error!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":20,"tags":["@Regression"],"steps":[{"pwStepLine":23,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I login to the parabank application","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I enter invalid \"Testhifi\" and \"test4555#\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Testhifi\"","children":[{"start":17,"value":"Testhifi","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"test4555#\"","children":[{"start":32,"value":"test4555#","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see error message \"Error!\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Error!\"","children":[{"start":28,"value":"Error!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":21,"tags":["@Regression"],"steps":[{"pwStepLine":30,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I login to the parabank application","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I enter invalid \"tEST\" and \"demo\"","stepMatchArguments":[{"group":{"start":16,"value":"\"tEST\"","children":[{"start":17,"value":"tEST","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":27,"value":"\"demo\"","children":[{"start":28,"value":"demo","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see error message \"Error!\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Error!\"","children":[{"start":28,"value":"Error!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end