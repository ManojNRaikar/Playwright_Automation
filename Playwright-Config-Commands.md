full list of Playwright + Cucumber (TypeScript) config-related CLI commands 🧩

| Purpose                                       | Command                                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Specify config file                           | `npx playwright test --config=playwright.config.ts`                                                |
| Use JSON config                               | `npx playwright test --config=playwright.config.json`                                              |
| Override config option temporarily            | `npx playwright test --config=playwright.config.ts --project=chromium`                             |
| Run tests from specific folder (using config) | `npx playwright test tests/ --config=playwright.config.ts`                                         |
| Show which config is being used               | `npx playwright test --list`                                                                       |
| Run in debug mode with config                 | `npx playwright test --debug --config=playwright.config.ts`                                        |
| Use env variable with config                  | `ENV=qa npx playwright test --config=playwright.config.ts`                                         |
| Run with headless off from config             | `npx playwright test --headed --config=playwright.config.ts`                                       |
| Disable video/screenshot overrides            | `npx playwright test --config=playwright.config.ts --project=chromium --no-video` *(if supported)* |
| Custom reporter from config                   | `npx playwright test --reporter=allure-playwright --config=playwright.config.ts`                   |
| Run single project from config                | `npx playwright test --project=firefox --config=playwright.config.ts`                              |
| Override retries from CLI                     | `npx playwright test --config=playwright.config.ts --retries=2`                                    |
