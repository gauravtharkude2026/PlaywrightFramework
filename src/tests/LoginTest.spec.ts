import { test, expect } from '../fixtures/TestFixture';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../utils/ConfigReader';

test('Login Test', async ({ page }) => {

    await page.goto(config.url!);

    const loginPage = new LoginPage(page);

    await loginPage.login(
        config.username!,
        config.password!
    );

    await expect(page).toHaveURL(/dashboard/);
});
