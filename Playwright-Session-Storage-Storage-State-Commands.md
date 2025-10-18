⚙️ Playwright Session Storage / Storage State Commands

| Purpose                                              | Command / Code                                                                           |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| ✅ **Save login session to a file**                   | `npx playwright codegen --save-storage=storageState.json https://example.com`            |
| ✅ **Use saved session in tests (from config)**       | `storageState: 'storageState.json'` (inside `playwright.config.ts` or project settings)  |
| ✅ **Save session via script (programmatically)**     | `await page.context().storageState({ path: 'storageState.json' });`                      |
| ✅ **Load saved session into new context**            | `const context = await browser.newContext({ storageState: 'storageState.json' });`       |
| ✅ **Use session file from CLI config**               | `npx playwright test --config=playwright.config.ts` (when config defines `storageState`) |
| ✅ **Different session per project (multi-login)**    | ```ts                                                                                    |
| projects: [                                          |                                                                                          |
| { name: 'Admin', storageState: 'state/admin.json' }, |                                                                                          |
| { name: 'User', storageState: 'state/user.json' }    |                                                                                          |
| ]                                                    |                                                                                          |


🧪 Quick One-Liners

| Action                   | Command                                                                 |
| ------------------------ | ----------------------------------------------------------------------- |
| Save session             | `npx playwright codegen --save-storage=auth.json https://app.com/login` |
| Use saved session (CLI)  | `npx playwright test --config=playwright.config.ts`                     |
| Check cookies in session | `cat storageState.json`                                                 |
| Reset session            | Delete `storageState.json` file                                         |
