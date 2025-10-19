// Generated from: features\parabankLogin.feature
import { test } from "../../Steps/fixtures.ts";

test.describe('parabank Applocation Login', () => {

  test('Login to parabank application', { tag: ['@Regression'] }, async ({ Given, When, Then, And }) => { 
    await Given('I login to the parabank application'); 
    await When('I enter valid credentials'); 
    await And('click on login button'); 
    await Then('I should be logged in successfully'); 
    await And('I should see the Welcome message with username "Welcome Test1 demo1"'); 
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
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@Regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I login to the parabank application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I enter valid credentials","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And click on login button","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I should see the Welcome message with username \"Welcome Test1 demo1\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Welcome Test1 demo1\"","children":[{"start":48,"value":"Welcome Test1 demo1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end