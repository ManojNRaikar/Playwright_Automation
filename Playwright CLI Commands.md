🧩 Playwright CLI Commands
Purpose	Command
Initialize Playwright project	- **npx playwright init**
Run all tests	- **npx playwright test**
Run tests headed (with UI)	- npx playwright test --headed
Run specific file	- npx playwright test tests/example.spec.ts
Run specific test title	npx playwright test -g "test name"
Run in specific browser	npx playwright test --project=chromium
Run in all browsers	npx playwright test --browser=all
Retry failed tests	npx playwright test --retries=2
Run with UI mode	npx playwright test --ui
Generate code (recorder)	npx playwright codegen https://example.com
Show report	npx playwright show-report
Open trace viewer	npx playwright show-trace trace.zip
Install browsers	npx playwright install
Update browsers	npx playwright install --with-deps
Clean test output	npx playwright test --reporter=dot
Run with parallel workers	npx playwright test --workers=4
Debug mode	npx playwright test --debug
Save video/screenshots	handled via playwright.config.ts options
Run test with env file	npx playwright test --config=playwright.config.ts
