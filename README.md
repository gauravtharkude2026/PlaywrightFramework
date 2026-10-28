Playwright Automation Framework
A Playwright TypeScript framework supporting UI and API automation.

Features
Page Object Model
Custom fixtures
UI automation
API CRUD automation
JSON test data
Environment configuration
Parallel execution
Retry mechanism
Playwright HTML report
Allure reporting
GitHub Actions
Jenkins pipeline
Installation
npm install npx playwright install

Run all tests
npx playwright test

Run UI tests
npx playwright test src/tests/LoginTest.spec.ts

Run API tests
npx playwright test src/tests/UserApiTest.spec.ts

Run tests by tag
npx playwright test --grep "@smoke"

Run tests in headed mode
npx playwright test --headed

Open Playwright report
npx playwright show-report

Generate Allure report
npx allure generate allure-results --clean npx allure open