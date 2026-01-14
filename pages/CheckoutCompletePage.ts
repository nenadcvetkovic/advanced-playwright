import { Page } from "@playwright/test"
import { HeaderComponent } from "../components/HeaderComponent";

export class CheckoutCompletePage {
    public header: HeaderComponent

    constructor(private readonly page: Page) {
        this.header = new HeaderComponent(this.page.locator('header.container'));
    }

    async getMessage(): Promise<string> {
        return await this.page.locator('[data-testid="page.checkout.complete"] p').textContent() as string;
    }
}