import { Page } from '@playwright/test';

export class DashboardPage {

    constructor(private page: Page) {}

    dashboardHeader = '//h6';

    async getDashboardText() {
        return await this.page
            .locator(this.dashboardHeader)
            .textContent();
    }
}