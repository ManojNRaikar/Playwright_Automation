| Purpose                             | Command                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| Generate Allure report              | `npx allure generate reports/allure-results --clean -o reports/allure-report` |
| Open Allure report                  | `npx allure open reports/allure-report`                                       |
| Generate JUnit report               | configured via `--reporter=junit`                                             |
| Merge multiple reports              | `npx allure merge reports/allure-results/*`                                   |
| HTML Reporter (Playwright built-in) | `npx playwright show-report`                                                  |
