import { test } from '@playwright/test';
import { config } from '../utils/ConfigReader';

test('authenticate', async ({ page }) => {

    await page.goto(config.url!);

    await page.fill(
        'input[name="username"]',
        config.username!
    );

    await page.fill(
        'input[name="password"]',
        config.password!
    );

    await page.click(
        'button[type="submit"]'
    );

    await page.context().storageState({
        path: 'auth.json'
    });

});