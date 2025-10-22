# Install allure report pakage
1. npm i -D @playwright/test allure-playwright  or npm install  --save -dev @playwright/test allure-playwright
2. npm i -D allure-commandline or npm install allure-commandline --save -dev

# Run Allure reports
1. npx allure generate allure-results --clean or     npx allure generate allure-results --clean && npx allure open
2. npx allure open./allure-report