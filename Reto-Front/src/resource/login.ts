import { Page } from "@playwright/test";
export class login {
    readonly page: Page;
    constructor(page: Page) { this.page = page }
    async navigateTo(_url) {
        await this.page.goto(_url);
    }

}