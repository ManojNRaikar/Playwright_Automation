⚙️Playwright-BDD-Specific-Commands (from playwright-bdd package)

| Purpose                          | Command                                      |
| -------------------------------- | -------------------------------------------- |
| Generate test files from feature | `npx playwright-bdd codegen`                 |
| Run BDD tests (Cucumber-style)   | `npx playwright test` (works directly)       |
| Run with UI Mode                 | `npx playwright test --ui`                   |
| Tag filter                       | `npx playwright test --grep "@smoke"`        |
| Generate steps from feature      | `npx playwright-bdd gen`                     |
| Use fixtures/world               | handled in `fixtures.ts` and `steps/**/*.ts` |
| Rebuild after feature change     | `npx playwright-bdd codegen --watch`         |

or  Generate steps from feature - npx bddgen
