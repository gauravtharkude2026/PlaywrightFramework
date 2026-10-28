import { BasePage } from './BasePage';
"CI/CD Demo Trigger"
export class LoginPage extends BasePage {

    async login(username:string,password:string) {

        await this.fill(
            'input[name="username"]',
            username
        );

        await this.fill(
            'input[name="password"]',
            password
        );

        await this.click(
            'button[type="submit"]'
        );
    }
}