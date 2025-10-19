🥒 Cucumber CLI Commands (BDD Integration)

If using CucumberJS (@cucumber/cucumber) or playwright-bdd:

| Purpose                             | Command                                                      |
| ----------------------------------- | ------------------------------------------------------------ |
| Run all feature files               | `npx cucumber-js`                                            |
| Run specific feature                | `npx cucumber-js features/login.feature`                     |
| Run by tag                          | `npx cucumber-js --tags "@smoke"`                            |
| Run with specific profile           | `npx cucumber-js --profile default`                          |
| Generate JSON report                | `npx cucumber-js --format json:reports/cucumber-report.json` |
| Generate HTML report (using plugin) | `npx cucumber-js --format html:reports/report.html`          |
| Fail fast on first error            | `npx cucumber-js --fail-fast`                                |
| Retry failed scenarios              | `npx cucumber-js --retry 2`                                  |
| Parallel execution                  | `npx cucumber-js --parallel 4`                               |
| Require step definitions            | `npx cucumber-js --require steps/**/*.ts`                    |
| Require hooks                       | `npx cucumber-js --require src/hooks/hooks.ts`               |
| Specify world or fixture            | `npx cucumber-js --world-parameters '{"env":"qa"}'`          |
| Filter by line number               | `npx cucumber-js features/login.feature:10`                  |
| Dry run (check steps mapping only)  | `npx cucumber-js --dry-run`                                  |
| Run with TypeScript (ts-node)       | `npx cucumber-js --require-module ts-node/register`          |
| Run with env var                    | `ENV=qa npx cucumber-js`                                     |
