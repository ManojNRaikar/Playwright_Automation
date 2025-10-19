// Generated from: features\paraBank.feature
import { test } from "../../Steps/fixtures.ts";

test.describe('ParaBank Online Banking - Fund Transfer', () => {

  test('Verify user can login, transfer funds and see transaction', { tag: ['@smoke', '@Regression'] }, async ({ Given, When, Then, And }) => { 
    await Given('User navigates to ParaBank login page'); 
    await When('User logs in with username "john" and password "demo"'); 
    await Then('User should see the account overview page'); 
    await When('User transfers 100 from account 12345 to account 67890'); 
    await Then('Transfer confirmation message should appear'); 
    await And('User verifies transaction in recent activity'); 
    await Then('User logs out successfully'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('before', {  }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\paraBank.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  $world: [({ world }, use) => use(world), { scope: 'test', box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@smoke","@Regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User navigates to ParaBank login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User logs in with username \"john\" and password \"demo\"","stepMatchArguments":[{"group":{"start":27,"value":"\"john\"","children":[{"start":28,"value":"john","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"demo\"","children":[{"start":48,"value":"demo","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see the account overview page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User transfers 100 from account 12345 to account 67890","stepMatchArguments":[{"group":{"start":15,"value":"100","children":[]},"parameterTypeName":"int"},{"group":{"start":32,"value":"12345","children":[]},"parameterTypeName":"int"},{"group":{"start":49,"value":"67890","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Transfer confirmation message should appear","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And User verifies transaction in recent activity","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User logs out successfully","stepMatchArguments":[]}]},
]; // bdd-data-end