import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/ConfigReader';

type MyFixtures = {
    loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {

        await page.goto(config.url!);

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },
});

export { expect } from '@playwright/test';